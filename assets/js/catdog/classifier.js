const session = await ort.InferenceSession.create(
    "/models/cat_dog.onnx"
);