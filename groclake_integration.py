from groclake.modellake import ModelLake

model_lake = ModelLake()

def translate_text(text, source_lang, target_lang):
    translation_request = {
        "text": [text],
        "source_lang_code": source_lang,
        "target_lang_code": target_lang,
        "model": "openai"
    }
    return model_lake.translate(translation_request)

def chat_with_ai(message):
    payload = {
        "messages": [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": message}
        ]
    }
    return model_lake.chat_complete(payload)
