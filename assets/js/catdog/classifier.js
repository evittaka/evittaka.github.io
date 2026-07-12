let session = null;

const labels = ["Cat", "Dog"];


// Load ONNX model when page opens
async function loadModel() {
    try {
        session = await ort.InferenceSession.create(
            "/models/cat_dog.onnx"
        );

        console.log("ONNX model loaded");

    } catch (error) {
        console.error("Failed to load model:", error);
    }
}


loadModel();


// Image upload handler
document
    .getElementById("imageUpload")
    .addEventListener("change", async (event) => {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        const image = new Image();

        image.src = URL.createObjectURL(file);


        image.onload = async () => {

            // Display image preview
            const preview = document.getElementById("preview");
            preview.src = image.src;


            const result = await predict(image);

            document.getElementById("prediction").innerHTML =
                `${result.label} (${result.confidence}%)`;
        };
    });



// Main prediction function
async function predict(image) {

    if (!session) {
        throw new Error("Model not loaded yet");
    }


    const inputTensor = preprocess(image);


    const outputs = await session.run({
        input: inputTensor
    });


    const logits = outputs.output.data;


    const probabilities = softmax(Array.from(logits));


    const index = probabilities.indexOf(
        Math.max(...probabilities)
    );


    return {
        label: labels[index],
        confidence: (probabilities[index] * 100).toFixed(2)
    };
}



// Convert image to model input
function preprocess(image) {

    const canvas = document.createElement("canvas");

    canvas.width = 224;
    canvas.height = 224;


    const ctx = canvas.getContext("2d");

    ctx.drawImage(
        image,
        0,
        0,
        224,
        224
    );


    const imageData = ctx.getImageData(
        0,
        0,
        224,
        224
    );


    const pixels = imageData.data;


    const size = 224 * 224;


    const input = new Float32Array(
        3 * size
    );


    for (let i = 0; i < size; i++) {

        const r = pixels[i * 4] / 255.0;
        const g = pixels[i * 4 + 1] / 255.0;
        const b = pixels[i * 4 + 2] / 255.0;


        // Normalize exactly like torchvision
        input[i] =
            (r - 0.485) / 0.229;


        input[i + size] =
            (g - 0.456) / 0.224;


        input[i + 2 * size] =
            (b - 0.406) / 0.225;
    }


    return new ort.Tensor(
        "float32",
        input,
        [1, 3, 224, 224]
    );
}



// Softmax for logits
function softmax(values) {

    const max = Math.max(...values);

    const exp = values.map(
        x => Math.exp(x - max)
    );


    const sum = exp.reduce(
        (a,b) => a+b,
        0
    );


    return exp.map(
        x => x / sum
    );
}