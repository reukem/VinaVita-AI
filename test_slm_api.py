import sys
import urllib.request
import json

sys.stdout.reconfigure(encoding='utf-8')

for q in ['hi', 'adsdw', 'tôi muốn thức khuya chạy deadline', 'tâm sen có tụt huyết áp không']:
    req = urllib.request.Request(
        'http://127.0.0.1:8000/api/chat',
        data=json.dumps({'query': q}).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    res = urllib.request.urlopen(req)
    data = json.loads(res.read().decode('utf-8'))
    print(f"\n[QUERY: {q}]")
    print(f"[MODEL: {data['model']}]")
    print(f"[REPLY]: {data['response']}")
