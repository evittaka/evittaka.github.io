---
title: "Cat vs Dog Image Classifier"
layout: single
permalink: /projects/cat-dog-classifier/
---

## MobileNetV3 Image Classification

This demo uses a MobileNetV3 model trained with PyTorch and exported to ONNX. 
Inference runs directly in your browser using ONNX Runtime Web.

Upload an image:

<input type="file" id="imageUpload" accept="image/*">

<img id="preview" style="max-width:300px; display:block; margin-top:20px;">

<h3 id="prediction"></h3>


<script src="https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.min.js"></script>
<script src="/assets/js/catdog/classifier.js"></script>