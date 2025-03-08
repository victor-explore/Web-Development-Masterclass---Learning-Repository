# Tailwind CSS Practice Project

This is a simple project to practice using Tailwind CSS utility classes.

## Project Structure

- `src/` - Contains source files
  - `index.html` - Main HTML file with Tailwind classes
  - `form.html` - Form example with Tailwind classes
  - `dark-mode.html` - Dark mode example with Tailwind classes
  - `input.css` - CSS file with Tailwind directives
- `dist/` - Contains compiled output
  - `output.css` - Compiled CSS file
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

## Getting Started

1. Install dependencies:

   ```
   npm install
   ```

2. Open the main page:

   ```
   npm start
   ```

3. Open the form example:

   ```
   npm run form
   ```

4. Open the dark mode example:

   ```
   npm run dark
   ```

5. For development with auto-refresh:

   ```
   npm run watch
   ```

6. Open `src/index.html` in your browser to see the result.

## Tailwind CSS Features Demonstrated

- Utility-first approach
- Responsive design with breakpoint prefixes
- Hover and transition effects
- Dark mode implementation
- Grid layout
- Flexbox alignment
- Form styling
- Focus states
- Spacing utilities
- Color utilities
- Typography utilities

## Learning Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind CSS on GitHub](https://github.com/tailwindlabs/tailwindcss)

## Note About This Project

This project was set up to practice Tailwind CSS concepts. Due to some installation issues with the Tailwind CLI, we've created a custom CSS file that mimics Tailwind's utility classes. This allows you to practice the Tailwind approach to styling without requiring the full Tailwind build process.

### How to Use This Project

1. Simply open `src/index.html` in your browser to see the result.
2. Study the HTML file to see how utility classes are used to style elements.
3. Refer to the `dist/output.css` file to see how the utility classes are implemented.

### If You Want to Use the Real Tailwind CSS

If you want to use the real Tailwind CSS in the future, you can follow these steps:

1. Install Tailwind CSS globally:

   ```
   npm install -g tailwindcss
   ```

2. Initialize Tailwind CSS:

   ```
   tailwindcss init
   ```

3. Build the CSS:
   ```
   tailwindcss -i ./src/input.css -o ./dist/output.css
   ```
