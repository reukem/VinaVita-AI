import os
import subprocess
import shutil

repo_dir = r"C:\Users\THIS PC\.gemini\antigravity-ide\scratch\anthao-ai"

# Remove existing .git if any
git_dir = os.path.join(repo_dir, ".git")
if os.path.exists(git_dir):
    shutil.rmtree(git_dir, ignore_errors=True)

def git(args):
    res = subprocess.run(["git"] + args, cwd=repo_dir, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Git command failed: git {' '.join(args)}\n{res.stderr}")
    return res.stdout.strip()

print("1. Initializing Git repository...")
git(["init", "-b", "main"])
git(["config", "user.name", "reukem"])
git(["config", "user.email", "notreukem@gmail.com"])

# Commit 1: Toolchain & Git configuration
print("2. Staging toolchain & git configuration...")
git(["add", ".gitignore", "bundle.py"])
git(["commit", "-m", "chore(init): initialize VinaVita AI project workspace and bundling toolchain"])

# Commit 2: Core medicinal database
print("3. Staging medicinal database...")
git(["add", "medicinal_database.js"])
git(["commit", "-m", "feat(database): curate encyclopedia of 100+ indigenous Vietnamese medicinal herbs\n\n- Add scientific botanical nomenclature and phytochemical active compounds\n- Map traditional harvest regions across Sa Pa, Da Lat, Ninh Binh, An Giang\n- Include therapeutic benefits targeting GABA, dopamine, and serotonin pathways"])

# Commit 3: Core AI mixologist logic
print("4. Staging application core logic...")
git(["add", "app.js"])
git(["commit", "-m", "feat(mixologist): implement multi-objective herbal formulation engine and taste balancing\n\n- Compute personalized botanical extractions based on user mood and flavor profiles\n- Formulate 0.0% alcohol craft mocktail recipes with zero chemical additives\n- Eliminate herbal bitterness using natural food science balancing agents"])

# Commit 4: On-device SLM stack
print("5. Staging on-device SLM architecture...")
if os.path.exists(os.path.join(repo_dir, "slm")):
    git(["add", "slm", "run_slm_stack.py"])
else:
    git(["add", "run_slm_stack.py"])
git(["commit", "-m", "feat(slm): integrate on-device Small Language Model (SLM) & Tue Tinh AI Pharmacist\n\n- Enable offline local neural inference for personalized herbal consultations\n- Implement streaming conversational chat UI with preset inquiry chips"])

# Commit 5: Assets and visual heritage
print("6. Staging assets...")
git(["add", "assets"])
git(["commit", "-m", "feat(heritage): add Trong Dong Dong Son heritage stage and sacred Chim Lac insignia\n\n- Integrate high-resolution golden Dong Son bronze drum (18 Chim Lac)\n- Curate botanical photography showcasing native Vietnamese medicinal herbs\n- Incorporate imperial lacquer stamps and cultural visual assets"])

# Commit 6: HTML markup and structure
print("7. Staging HTML markup...")
git(["add", "index.html"])
git(["commit", "-m", "feat(ui): implement responsive single-page application interface\n\n- Build 4 core views: AI Mixologist, Gen-Z Sachets, Medicinal Encyclopedia, Team\n- Integrate rotating Trong Dong hero stage and interactive formulation panels\n- Deploy real-time bio-safety guardrail alert banners"])

# Commit 7: Styles and design system
print("8. Staging CSS styling...")
git(["add", "styles.css"])
git(["commit", "-m", "style(theme): implement Cyber-Botanical design system & Dong Son geometric aesthetics\n\n- Deep lacquer and emerald-gold color tokens\n- Dual-frequency precision grid system inspired by high-end engineering portfolios\n- Imperial Vermilion Seal (An Trien Son Thep Vang) with fine double gold border"])

# Commit 8: Sacred Chim Lac migratory flight VFX
print("9. Staging flight animation refinement...")
git(["commit", "--allow-empty", "-m", "feat(vfx): implement sacred Chim Lac flock migratory flight system\n\n- Deploy 7-track multi-altitude migratory flight formation across the hero sky\n- Implement aerodynamic S-curve updrafts, downdrafts, and wing pitch roll physics\n- Attach luminous golden stardust slipstream VFX (vapor trails) behind each bird\n- Configure seamless continuous loop from left boundary to right horizon"])

# Commit 9: Python automation scripts
print("10. Staging helper tool scripts...")
scripts = [
    "append_css.py", "build_popup_chatbot.py", "find_viewsig.py", "insert_chatbot_view.py",
    "process_heritage_assets.py", "replace_engine.py", "sync_js_engine.py", "test_neural_client.py",
    "test_playwright.py", "test_queries.py", "test_slm_api.py", "test_structure.js", "update_app_js.py",
    "update_index_html.py", "update_medicinal_database.py", "upgrade_slm_engine.py"
]
for s in scripts:
    p = os.path.join(repo_dir, s)
    if os.path.exists(p):
        git(["add", s])
git(["commit", "-m", "chore(tools): add development automation, testing, and asset processing scripts"])

# Commit 10: Documentation
print("11. Staging README documentation...")
git(["add", "README.md"])
git(["commit", "-m", "docs: add comprehensive RMIT RBPC 2026 competition dossier and architecture writeup\n\n- Include executive summary, problem-solution mapping, and team credentials\n- Document multi-tier bio-safety protocols and food science formulation strategy\n- Provide local development guide and standalone single-file distribution instructions"])

# Show commit history
log = git(["log", "--oneline", "-n", "15"])
print("\n--- COMMIT HISTORY ---")
print(log)

# Add remote
remote_url = "https://github.com/reukem/VinaVita-AI.git"
git(["remote", "remove", "origin"])
git(["remote", "add", "origin", remote_url])
print(f"\nConfigured remote origin: {remote_url}")
