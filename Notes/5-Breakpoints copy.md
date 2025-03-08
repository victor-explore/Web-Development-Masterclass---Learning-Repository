# CSS Breakpoints and Media Queries

## How Media Queries Work:

1. **Base Styles**: All CSS defined in regular style tags is applied to the page by default. These are your base styles that apply to all screen sizes.

2. **Media Query Overrides**: CSS defined within `@media` queries will override the base styles for the same elements when the specified screen size condition is met.

3. **Common Breakpoints**:

   - Mobile: 320px - 480px
   - Tablet: 481px - 768px
   - Laptop: 769px - 1024px
   - Desktop: 1025px and larger

4. **Example**:

   ```css
   /* Base style - applies to all screen sizes */
   .container {
     width: 100%;
     background-color: blue;
   }

   /* Media query - only applies when screen width is 768px or less */
   @media (max-width: 768px) {
     .container {
       background-color: red; /* Overrides the blue background on smaller screens */
     }
   }
   ```
