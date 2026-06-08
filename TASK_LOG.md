# Project Task Log

## Project

**Longtao Huangfu Personal Website**  
Production site: [https://ydlongtao.netlify.app](https://ydlongtao.netlify.app)  
GitHub repository: [https://github.com/ydlongtao/ydlongtao-personal-site](https://github.com/ydlongtao/ydlongtao-personal-site)

## Objective

Build and publish a bilingual Chinese-English digital business card website for Longtao Huangfu, using the provided Chinese and English CV files, research presentation materials, and professional portrait. The website needed to be suitable for academic introduction, research presentation, team introduction, and online sharing. The preferred Netlify domain was requested to begin with `ydlongtao`.

## Source Materials Reviewed

- Chinese CV: `2025个人简历---终版.docx`
- English CV: `Longtao_academic resume.pdf`
- Research presentation: `20260428-高创答辩用PPT [自动保存的]_副本.pptx`
- Professional portrait: `0Y4A4247-small-修.jpg`

The source documents and raw presentation materials were used locally for content extraction and design reference. They were not committed to the GitHub repository.

## Implementation Log

### 1. Project Inspection and Content Extraction

The workspace initially contained only the source materials and no existing website project. The Chinese CV was extracted from the Word document, and the English CV was extracted from the PDF. Presentation text and media were also extracted from the PPTX file.

Key academic content identified:

- Position: Assistant Professor / Research Associate Fellow / PhD Supervisor at Peking University Cancer Hospital.
- Research focus: gastric cancer evolution, extrachromosomal DNA, acquired drug resistance, natural and novel small-molecule anti-tumor drugs, and translational pharmacology.
- Team platform: Key Laboratory of Carcinogenesis and Translational Research, Peking University Cancer Hospital, with interdisciplinary collaboration across clinical and pharmaceutical research platforms.
- Research achievements: recent SCI publications, approved patents, funded projects, invited reports, and representative studies.

### 2. Visual Asset Preparation

Presentation images were reviewed through a contact-sheet workflow. Suitable visual materials were selected for the website:

- `ecdna-pathways.png`: research model / ecDNA path-dependent evolution diagram.
- `team-group.jpeg`: team group photo.
- `lab.jpeg`: laboratory platform photo.

The original professional portrait was transformed into a polished academic cartoon avatar. The first version used a muted blue circular background. Later, at the user's request, this background shape was replaced with a muted blue stylized stomach silhouette to better match the gastrointestinal oncology theme while preserving the color palette and the person's identity.

Final avatar asset:

- `public/assets/images/avatar-stomach.jpeg`

### 3. Website Design and Development

A lightweight static website was built with plain HTML, CSS, and JavaScript:

- `public/index.html`
- `public/styles.css`
- `public/script.js`

Design direction:

- Editorial academic style.
- Warm ivory paper background.
- Deep navy typography.
- Muted teal and rust accents.
- Subtle scientific motifs.
- Strong bilingual presentation with language switching.

Main website sections:

1. Hero introduction.
2. Research directions.
3. Research model / path-dependent evolution.
4. Team and platform.
5. Selected work.
6. Contact and CV downloads.

The language switch is handled entirely in the browser through JavaScript and local storage.

### 4. CV Download Handling

The initial website included downloadable Chinese and English CV files. The English CV was already a PDF. The Chinese CV was later converted from DOCX to PDF using LibreOffice, and the website download link was updated accordingly.

Final public CV files:

- `public/assets/files/longtao-huangfu-cv-cn.pdf`
- `public/assets/files/longtao-huangfu-cv-en.pdf`

The original Chinese DOCX was removed from the public website directory.

### 5. Responsive Layout and Typography Refinements

Multiple rounds of layout refinement were completed based on browser previews and user feedback.

Important typography changes:

- The hero title was reduced on desktop to avoid awkward Chinese line breaks.
- The hero title was reduced on mobile so the phrase `寻找治疗新路径` stays on one line.
- The final Chinese hero title no longer has a trailing period:

  ```text
  从肿瘤演化中，
  寻找治疗新路径
  ```

- The `02 / Team & Platform` heading was adjusted to avoid awkward wrapping:

  ```text
  临床问题出发，
  跨学科协作推进
  ```

- Section heading periods were removed from the 01-04 major headings for a cleaner visual style.

### 6. Netlify Deployment

Netlify CLI was used through `npx netlify-cli`. The site name `ydlongtao` was available and was created successfully.

Production URL:

[https://ydlongtao.netlify.app](https://ydlongtao.netlify.app)

Netlify configuration:

- `netlify.toml`
- Publish directory: `public`
- Security headers:
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- Long-term cache headers for `/assets/*`

The public publish directory was intentionally separated from the source-material folder so that raw CV documents, the original PPTX, the original portrait, QA screenshots, and local Netlify metadata would not be published.

### 7. GitHub Backup

A new private GitHub repository was created:

[https://github.com/ydlongtao/ydlongtao-personal-site](https://github.com/ydlongtao/ydlongtao-personal-site)

The repository was initialized with the `main` branch and pushed to GitHub.

Committed files include:

- `.gitignore`
- `README.md`
- `TASK_LOG.md`
- `netlify.toml`
- `public/index.html`
- `public/styles.css`
- `public/script.js`
- Public website images
- Public Chinese and English PDF CV files

Excluded from GitHub:

- Original portrait source file.
- Original PPTX file.
- Original Chinese DOCX CV.
- Original English CV source file.
- Local QA screenshots.
- Local Netlify metadata.
- macOS `.DS_Store` files.

## Final Repository Structure

```text
.
├── README.md
├── TASK_LOG.md
├── netlify.toml
└── public
    ├── index.html
    ├── script.js
    ├── styles.css
    └── assets
        ├── files
        │   ├── longtao-huangfu-cv-cn.pdf
        │   └── longtao-huangfu-cv-en.pdf
        └── images
            ├── avatar-stomach.jpeg
            ├── ecdna-pathways.png
            ├── lab.jpeg
            └── team-group.jpeg
```

## Final Status

The project is complete.

- The bilingual website is live on Netlify.
- The visual design and content have been reviewed and refined.
- The Chinese and English CV downloads are both PDF files.
- The source code and public website assets are backed up to GitHub.
- Sensitive source materials and local QA files remain excluded from the repository.
