# Helper to generate a valid PDF resume for Panchami Prakash Hegde
def create_resume_pdf(filename):
    # Minimal standard conforming PDF 1.4 with text and lines
    content_lines = [
        "BT",
        "/F1 22 Tf",
        "50 750 Td",
        "(PANCHAMI PRAKASH HEGDE) Tj",
        "ET",
        # Subtitle
        "BT",
        "/F1 12 Tf",
        "50 730 Td",
        "(Computer Engineering Graduate | Python Developer & AI Engineer Fresher) Tj",
        "ET",
        # Contact line
        "BT",
        "/F2 10 Tf",
        "50 712 Td",
        "(Email: panchami.hegde@example.com | LinkedIn: linkedin.com/in/panchami-hegde | GitHub: github.com/panchami-hegde) Tj",
        "ET",
        # Horizontal Rule
        "0.2 0.4 0.8 rg",
        "50 702 512 2 re f",
        # Section: Summary
        "BT",
        "/F1 13 Tf",
        "0 0 0 rg",
        "50 680 Td",
        "(PROFESSIONAL SUMMARY) Tj",
        "ET",
        "BT",
        "/F2 10 Tf",
        "50 662 Td",
        "(Motivated Computer Engineering graduate passionate about Python development, Applied AI, and Machine Learning.) Tj",
        "0 -15 Td",
        "(Skilled in designing scalable backend microservices with FastAPI/Flask, implementing deep learning pipelines,) Tj",
        "0 -15 Td",
        "(and building responsive web applications. Seeking entry-level roles as a Python Developer or AI Engineer.) Tj",
        "ET",
        # Section: Education
        "0.2 0.4 0.8 rg",
        "50 615 512 1 re f",
        "BT",
        "/F1 13 Tf",
        "0 0 0 rg",
        "50 622 Td",
        "(EDUCATION) Tj",
        "ET",
        "BT",
        "/F1 11 Tf",
        "50 598 Td",
        "(Bachelor of Engineering (B.E.) in Computer Engineering) Tj",
        "ET",
        "BT",
        "/F2 10 Tf",
        "50 583 Td",
        "(Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management (DBMS),) Tj",
        "0 -14 Td",
        "(Artificial Intelligence & Machine Learning, Computer Networks, Operating Systems, Software Engineering.) Tj",
        "ET",
        # Section: Technical Skills
        "0.2 0.4 0.8 rg",
        "50 540 512 1 re f",
        "BT",
        "/F1 13 Tf",
        "0 0 0 rg",
        "50 547 Td",
        "(TECHNICAL SKILLS) Tj",
        "ET",
        "BT",
        "/F1 10 Tf",
        "50 523 Td",
        "(Languages: ) Tj",
        "/F2 10 Tf",
        "(Python (Core, OOP, Async), C++, SQL, JavaScript (ES6+), HTML5, CSS3) Tj",
        "0 -15 Td",
        "/F1 10 Tf",
        "(AI / Machine Learning: ) Tj",
        "/F2 10 Tf",
        "(PyTorch, Scikit-learn, OpenCV, Hugging Face Transformers, Pandas, NumPy, NLP, RAG) Tj",
        "0 -15 Td",
        "/F1 10 Tf",
        "(Frameworks & Backend: ) Tj",
        "/F2 10 Tf",
        "(FastAPI, Flask, Django, RESTful APIs, SQLAlchemy, Pydantic, Streamlit) Tj",
        "0 -15 Td",
        "/F1 10 Tf",
        "(Databases & Tools: ) Tj",
        "/F2 10 Tf",
        "(PostgreSQL, MySQL, SQLite, Git, GitHub, Docker (Basics), Postman, Linux) Tj",
        "ET",
        # Section: Featured Projects
        "0.2 0.4 0.8 rg",
        "50 435 512 1 re f",
        "BT",
        "/F1 13 Tf",
        "0 0 0 rg",
        "50 442 Td",
        "(FEATURED PROJECTS) Tj",
        "ET",
        "BT",
        "/F1 11 Tf",
        "50 418 Td",
        "(1. DocuMind AI - Intelligent RAG Document Q&A System) Tj",
        "ET",
        "BT",
        "/F2 10 Tf",
        "60 403 Td",
        "(- Engineered a Retrieval-Augmented Generation (RAG) pipeline with LangChain, ChromaDB, and FastAPI.) Tj",
        "0 -14 Td",
        "(- Enabled semantic document search and context-grounded question answering with sub-second latency.) Tj",
        "ET",
        "BT",
        "/F1 11 Tf",
        "50 370 Td",
        "(2. VisionGuard - Real-time Object Detection & Spatial Analytics) Tj",
        "ET",
        "BT",
        "/F2 10 Tf",
        "60 355 Td",
        "(- Implemented YOLOv8 + PyTorch pipeline for live video feeds with 30+ FPS processing performance.) Tj",
        "0 -14 Td",
        "(- Built automated alert triggers and count metrics dashboard for spatial monitoring.) Tj",
        "ET",
        "BT",
        "/F1 11 Tf",
        "50 322 Td",
        "(3. MarketPulse - Automated Financial Sentiment & Trend Engine) Tj",
        "ET",
        "BT",
        "/F2 10 Tf",
        "60 307 Td",
        "(- Developed automated web scrapers and sentiment analysis engine using Pandas, NLTK, and Plotly.) Tj",
        "0 -14 Td",
        "(- Correlated live news sentiment scores against stock price movements with 88% directional accuracy.) Tj",
        "ET",
        "BT",
        "/F1 11 Tf",
        "50 274 Td",
        "(4. NexusAPI - High-Performance Secure Microservice) Tj",
        "ET",
        "BT",
        "/F2 10 Tf",
        "60 259 Td",
        "(- Created asynchronous REST API using FastAPI, PostgreSQL, and JWT authentication with 95%+ test coverage.) Tj",
        "ET",
        # Section: Certifications & Highlights
        "0.2 0.4 0.8 rg",
        "50 225 512 1 re f",
        "BT",
        "/F1 13 Tf",
        "0 0 0 rg",
        "50 232 Td",
        "(CERTIFICATIONS & HIGHLIGHTS) Tj",
        "ET",
        "BT",
        "/F2 10 Tf",
        "50 208 Td",
        "(- Python for Data Science and Machine Learning - Comprehensive Certification) Tj",
        "0 -15 Td",
        "(- Deep Learning and Neural Network Foundations Certification) Tj",
        "0 -15 Td",
        "(- Active Open Source Contributor & Problem Solver (LeetCode / HackerRank in Python & DSA)) Tj",
        "ET"
    ]

    stream_content = "\n".join(content_lines).encode("latin1")
    stream_len = len(stream_content)

    objects = []
    # 1: Catalog
    objects.append(b"<< /Type /Catalog /Pages 2 0 R >>")
    # 2: Pages
    objects.append(b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>")
    # 3: Page
    objects.append(b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>")
    # 4: Contents
    objects.append(b"<< /Length " + str(stream_len).encode("latin1") + b" >>\nstream\n" + stream_content + b"\nendstream")
    # 5: Font F1 (Helvetica Bold)
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>")
    # 6: Font F2 (Helvetica)
    objects.append(b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>")

    pdf_parts = [b"%PDF-1.4\n"]
    offsets = []
    current_pos = len(pdf_parts[0])

    for i, obj in enumerate(objects, 1):
        offsets.append(current_pos)
        obj_bytes = f"{i} 0 obj\n".encode("latin1") + obj + b"\nendobj\n"
        pdf_parts.append(obj_bytes)
        current_pos += len(obj_bytes)

    xref_pos = current_pos
    xref = [f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n".encode("latin1")]
    for offset in offsets:
        xref.append(f"{offset:010d} 00000 n \n".encode("latin1"))

    trailer = (
        f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\n"
        f"startxref\n{xref_pos}\n%%EOF\n"
    ).encode("latin1")

    full_pdf = b"".join(pdf_parts) + b"".join(xref) + trailer

    with open(filename, "wb") as f:
        f.write(full_pdf)
    print(f"Resume PDF written successfully to {filename}")

if __name__ == "__main__":
    import os
    target = os.path.join("assets", "documents", "Panchami_Prakash_Hegde_Resume.pdf")
    create_resume_pdf(target)
