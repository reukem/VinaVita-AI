import urllib.request
import json
import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

test_cases = [
    "what can u tell me about what youre doing?",
    "Cho tôi công thức thảo mộc thức khuya chạy deadline tỉnh táo không ép tim",
    "Tâm sen có làm tụt huyết áp không? Người huyết áp thấp uống sao?",
    "Mất ngủ và stress thi cử nên uống thảo mộc nào an toàn?"
]

for q in test_cases:
    t0 = time.time()
    req = urllib.request.Request(
        'http://127.0.0.1:8080/v1/chat/completions', # directly testing RAG gateway on 8000
    )
    req = urllib.request.Request(
        'http://127.0.0.1:8000/api/chat',
        data=json.dumps({'query': q}).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    res = urllib.request.urlopen(req)
    data = json.loads(res.read().decode('utf-8'))
    dt = time.time() - t0
    resp = data.get('response', '')
    print(f"\n=======================================================")
    print(f"QUERY: {q}  ({dt:.2f}s)")
    print(f"CLEANED GENERATED RESPONSE:\n{resp}")
    # Verify no Chinese characters
    import re
    has_chinese = bool(re.search(r'[\u4e00-\u9fff]', resp))
    print(f"Contains Chinese characters? {'YES (BAD!)' if has_chinese else 'NO (PERFECT CLEAN!)'}")
