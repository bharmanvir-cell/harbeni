# Harbeni - Web Dev & AI Integration

Harbeni is a high-end digital agency website built for the 2030s. It specializes in high-performance web development, deep AI integration, and custom AI bot development.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **AI Engine:** [Google Gemini 3 Flash](https://ai.google.dev/)

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd harbeni
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to [Vercel](https://vercel.com/).
2. Vercel will automatically detect the Vite build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. **Crucial:** Add your `GEMINI_API_KEY` in the Vercel project settings under **Environment Variables**.

### Netlify

1. Connect your repository to [Netlify](https://www.netlify.com/).
2. Set the build command to `npm run build` and the publish directory to `dist`.
3. Add your `GEMINI_API_KEY` in the Netlify site settings.

### Google Cloud Run

This project is optimized for containerized environments. You can deploy it using the provided `Dockerfile` (if applicable) or by using a buildpack-based deployment.

## 🤖 AI Chatbot Integration

The persistent AI assistant is powered by the Google Gemini API. To ensure it works in production, you **must** provide a valid `GEMINI_API_KEY` in your hosting provider's environment variables.

## 📁 Project Structure

- `src/components/`: Reusable UI components (Hero, Services, ChatBot, etc.)
- `src/pages/`: Main application pages (Home, Expertise, Process, Work, Contact)
- `src/index.css`: Global styles and Tailwind configuration
- `public/`: Static assets

## 📄 License

This project is licensed under the MIT License.
