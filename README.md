# Welcome to Your AI Web Dev Project!

Welcome! You are going to learn how to build a website using HTML, CSS, and JavaScript. You will not write every line yourself. You are going to learn how to be an **AI Director**.

You will use **GitHub Copilot** to write most of the code. Copilot is fast, but it is not smart. **You** have to tell it exactly what to do.

---

## Step 1: Start Your Server

Before you start coding, get your live website running.

1. At the top of your screen, open a **Terminal** (`Terminal` -> `New Terminal`).
2. Type `npm start` and press Enter.
3. A notification will pop up. Click **Open in Browser** (or click the `localhost:3000` link).
4. Keep that browser tab open. Every time you save your code, refresh the page to see your changes.

Leave the terminal running while you work. If you close it, your website will stop. You can start it again with `npm start`.

---

## How Your Files Are Organized

- **`public/`** — This is where you will work. It holds your `html` (structure), `css` (style), and `js` (interaction).
- **`private/`** — Do not touch this folder. It contains the engine (`server.js`) that keeps your website running.
- **`package.json`** — A configuration file. You can ignore this too.

Keep these two lines in your HTML so your styles and scripts keep working:

```html
<link rel="stylesheet" href="/css/style.css" />
<script src="/js/script.js"></script>
```

---

## Lesson 0: How to Train Your Copilot

Copilot will do **exactly** what you tell it to do, even if you tell it the wrong thing. If your prompt is vague, Copilot will guess, and the guess is often messy. If you ask for something huge, Copilot often gets confused and breaks your page.

### How to talk to Copilot in Codespaces

You can use Copilot in two easy ways:

**Option A: Write a comment (great for beginners)**

1. Open the file you want to change, such as `public/html/index.html`.
2. Type a comment that describes one small job, for example: `<!-- Create a nav bar with links to Home, About Us, Projects, and Contact Us. -->`
3. Wait for the grey suggestion to appear.
4. Press **Tab** to accept it.

**Option B: Copilot Chat**

1. Click the Copilot icon in the sidebar (or open Copilot Chat).
2. Tell it which file to edit and what to add.
3. Read the suggestion before you accept it.

### The 3 Rules of AI Prompting

1. **Be specific.** Do not say "make a button." Say, "Create a large red HTML button that says Click Me and give it the id color-btn."
2. **One thing at a time.** Do not ask Copilot to build a whole website at once. Ask for a navbar first, check it, then ask for the next part.
3. **Check the output.** Copilot can be wrong. If it breaks your site, press `Ctrl + Z` (Undo) and try a clearer prompt.

### Bad prompts vs good prompts

| Bad prompt (too vague or too big) | Good prompt (clear and small) |
| --- | --- |
| Make my website cool | Give the body a dark grey background and use the Arial font |
| Build a whole gaming website with pages, a shop, and login | Create a header with the title Pixel Arcade |
| Add some links | Create a nav bar with unordered list links to Home, About Us, Projects, and Contact Us |
| Make it do stuff | When the button with id color-btn is clicked, change the page background to light blue |

If Copilot does the wrong thing, that is normal. Rewrite the prompt and try again.

---

## Lesson 1: HTML5 (The Skeleton)

HTML is the skeleton of your website. It creates the layout and structure.

We are going to use semantic HTML5 elements:

- `<header>` — the top of the page (title or logo)
- `<nav>` — the navigation bar with links
- `<main>` — the main content
- `<aside>` — a sidebar
- `<footer>` — the bottom of the page
- `<a>` — a hyperlink that takes you to another page or section

**Your mission:** Open `public/html/index.html` and use Copilot to generate your page structure.

**Try these prompts** (as comments or in Copilot Chat):

- `Generate a standard HTML5 boilerplate.`
- `Inside the body tag, create a header with a title for a gaming website.`
- `Create a nav bar with unordered list links to Home, About Us, Projects, and Contact Us.`
- `Create a main section with a welcome paragraph, and an aside section for a sidebar.`
- `Create a footer with the text Made by me in Grade 8.`

After the navbar exists, make the links actually go somewhere:

- `Turn the Home, About Us, Projects, and Contact Us nav items into hyperlinks to index.html, about.html, projects.html, and contact.html.`
- `Create a new file called about.html with the same header, nav, and footer as the home page, plus a short About Us paragraph.`

Refresh `localhost:3000` after you save. You should see a real page layout, not just the starter message.

**Check yourself**

- Does your page have a header, nav, main, aside, and footer?
- Do the nav words look like links?
- If you click **Home**, do you stay on your website?

---

## Lesson 2: CSS (The Paint)

CSS makes your website look good. It controls colours, fonts, spacing, and layout. Right now your HTML site probably looks plain. Let's fix that.

**Your mission:** Open `public/css/style.css` and use Copilot to style the skeleton you just built.

**Try these prompts:**

- `Style the body to have a dark grey background, white text, and the Arial font.`
- `Style the nav bar so the links sit side-by-side horizontally, remove the bullet points, and give it a dark blue background with white text.`
- `Add space between the nav links and make them look like clickable buttons.`
- `Make the footer stick to the bottom of the page and center the text.`
- `When I hover my mouse over the nav links, make them turn bright green.`
- `Give the aside a lighter background and some padding so it looks like a sidebar.`

Save the CSS file, then refresh your browser.

**Check yourself**

- Did the background colour change?
- Are the nav links in a row, not a vertical list?
- Does a link change colour when you hover over it?

If nothing changes, check that `index.html` still has `<link rel="stylesheet" href="/css/style.css" />` in the `<head>`.

---

## Lesson 3: JavaScript (The Muscles)

JavaScript makes your website *do* things. It handles clicks, pop-ups, and other interactive features.

**Your mission:** Add a button in HTML, then open `public/js/script.js` and make that button work.

First, ask Copilot in `index.html`:

- `Add a button inside main that says Change Colour and give it the id color-btn.`
- `Add another button that says Welcome and give it the id welcome-btn.`

Then, in `script.js`, try these prompts:

- `When the page loads, do not show an alert. Wait for the user to click the button with id welcome-btn, then show an alert that says Welcome to my app!`
- `When the button with id color-btn is clicked, change the background colour of the page to light blue.`
- `Find the button with the id dark-mode-btn and toggle a dark-mode class on the body when it is clicked.`

If you use the dark mode prompt, you also need:

- a button with `id="dark-mode-btn"` in your HTML
- a `.dark-mode` style in your CSS

**Check yourself**

- Click **Welcome**. Do you get a pop-up?
- Click **Change Colour**. Does the background change?
- Is `<script src="/js/script.js"></script>` still just before `</body>`?

---

## Extra Challenges

If you finish early, pick one challenge and ask Copilot to help **one step at a time**:

- Create real `projects.html` and `contact.html` pages, then make a contact form with name, email, and message boxes.
- Add a Projects page with 3 cards. Each card has a project name and a short description.
- Make a "Back to top" hyperlink at the bottom of each page.
- Add a hover effect that makes images or cards grow slightly.
- Add a button that shows or hides the sidebar.

Remember: if Copilot makes a mess, undo with `Ctrl + Z` and ask for a smaller change.

---

## If Something Goes Wrong

- **The page looks the same:** Save the file (`Ctrl + S`), then refresh the browser.
- **The browser tab is blank or says it cannot connect:** Go back to the terminal and run `npm start` again.
- **Copilot wrote code in the wrong file:** Undo, then tell Copilot the file name, such as "Edit public/css/style.css only."
- **Styles or buttons do nothing:** Check that your HTML still links to `/css/style.css` and `/js/script.js`.
- **Copilot ignored what you wanted:** Your prompt was probably too big or too vague. Ask for one specific thing.

You are the director. Copilot is the intern. Give clear instructions, check the work, and keep going.

---

## Save a Checkpoint (Commit)

Copilot can break your website. A **commit** is a checkpoint. If something goes wrong later, you can go back to a version that worked.

Do this after each lesson, or any time your site looks the way you want.

### Make a checkpoint

1. Save all your files first (`Ctrl + S`).
2. Click the **Source Control** icon in the left sidebar. It looks like a Y-shaped branch, and it may show a number.
3. In the message box at the top, type a short note, such as `Finished HTML layout` or `Added nav bar`.
4. Click **Commit**.
5. If it asks you to stage your changes, click **Yes** or **Stage All**.

Give each checkpoint a clear name. `Finished Lesson 1` is much more useful later than `update` or `stuff`.

### Go back to your last checkpoint

Use this if Copilot just made a mess and you have **not** committed the broken version yet.

1. Click the **Source Control** icon.
2. Right-click a changed file (or open the `...` menu).
3. Click **Discard Changes**.
4. Confirm. Your file goes back to the last checkpoint.

Only discard if you are sure you want to throw away the new work.

### Look at older checkpoints

1. Click **Source Control**.
2. Open the `...` menu and choose **View History** (or **Show Git Output** / timeline, depending on what you see).
3. If you need to restore an older checkpoint and feel stuck, ask your teacher before changing history.

### Extra: save it to GitHub

In Source Control, click **Sync Changes** or **Publish Branch** if you see it. That copies your checkpoints to GitHub so they are not stuck inside this Codespace.
