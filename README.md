
# BriefBot

Created a powerful and user-friendly text summarization application using Node.js, Replit, the Hugging Face Inference API, and Postman to explore APIs and generate code. 

## Tech Stack

**Front end:** HTML,CSS, JavaScript

**Back end:** Node, Express, [Hugging Face Inference API](https://huggingface.co/docs/api-inference/index)

**API platform:** [Postman](https://www.postman.com/) 

## Screenshots

![image](https://github.com/user-attachments/assets/cd5916a1-bf87-4e66-a57b-7ffd982eee10)

## API Reference

#### Get summarized text

```
  POST https://api-inference.huggingface.co/models//facebook/bart-large-cnn
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `authorization` | `string` | **Required**. Token |


#### Body `json`
```javascript
{
   "inputs": "{{text}}",
   "parameters": {
      "max_length": 100,
      "min_length": 30
   }
}
```
#### response `json`
```javascript
{
   "summary_text": "This is the summarized version of your input text."
}
```
This AI Text Summarizer project was made possible with the help of [Postman's Project-Based Learning program](https://academy.postman.com/project-ai-text-summarizer). I earned a certificate for completing this project, which you can view [here](https://verify.skilljar.com/c/jemxejqnhodn).

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)


<img src="https://t.bkit.co/w_66c0efc8cc359.gif" />
