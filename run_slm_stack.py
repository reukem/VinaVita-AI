import subprocess
import time
import sys
import os
import signal

sys.stdout.reconfigure(encoding='utf-8')

LLAMA_BIN = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\llama_bin\llama-server.exe"
MODEL_PATH = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\models\qwen2.5-1.5b-instruct-q4_k_m.gguf"
SERVER_SCRIPT = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai\slm\vinavita_slm_server.py"

print("==========================================================")
print("🌿 STARTING VINAVITA NEURAL SLM INFERENCE STACK 🌿")
print("==========================================================")
print(f"• Model: Qwen2.5-1.5B-Instruct (GGUF Q4_K_M, 1.04 GB)")
print(f"• Engine: Native llama.cpp C++ inference (Port 8080)")
print(f"• API Gateway: VinaVita Pharmacopoeia RAG Server (Port 8000)")

# 1. Kill any existing processes on 8080 and 8000
out = subprocess.run(['netstat', '-ano'], capture_output=True, text=True).stdout
for line in out.splitlines():
    if (':8080' in line or ':8000' in line) and 'LISTENING' in line:
        pid = line.strip().split()[-1]
        subprocess.run(['taskkill', '/F', '/PID', pid], capture_output=True)

time.sleep(1)

# 2. Launch llama-server on 8080 (utilizing 10 CPU cores)
llama_cmd = [
    LLAMA_BIN,
    "-m", MODEL_PATH,
    "--port", "8080",
    "--host", "127.0.0.1",
    "-c", "2048",
    "-t", "10",
    "--log-disable"
]
print("\n[1/2] Launching Native Llama C++ Engine (1.5B) on port 8080...")
p_llama = subprocess.Popen(llama_cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(2)

# 3. Launch Starlette RAG gateway on 8000
print("[2/2] Launching VinaVita RAG API Gateway on port 8000...")
p_server = subprocess.Popen([sys.executable, SERVER_SCRIPT])

print("\n🚀 VINAVITA NEURAL SLM 1.5B STACK IS RUNNING ONLINE!")
print("• Health check: http://127.0.0.1:8000/health")
print("• Chat API: http://127.0.0.1:8000/api/chat")

try:
    p_server.wait()
except KeyboardInterrupt:
    p_llama.terminate()
    p_server.terminate()
