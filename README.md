# SBA 320H - React Web Application Project

## Requirements

Your application must meet these requirements to pass (this it your Minimum Viable Product):

1. Built with HTML, CSS, JavaScript, REACT.
2. Hosted on Heroku or Netlify.
3. Frequent commits to GitHub.
4. A README.md file in your GitHub repository with:
- Explanations of the technologies used.
- Explanations of the approach taken.
- A link to your live site.
- Usage instructions, if relevant.
- Unsolved problems.

5. Use AJAX to make a request to an external data source like OMDBapi, and insert some of the data retrieved into the DOM.


# The universe of Rick and Morty
You can view the live site here: [The universe of Rick and Morty Link](https://rick-and-morty-universe-sba.netlify.app/) 

## Technologies Used
- React: Frontend framework for building user interfaces.
- JavaScript (ES6): Main programming language for dynamic functionality.
- CSS: Styling the components and overall layout of the app.
- HTML: Markup language for structuring the app.
- Netlify: For deploying the site.
- GitHub: Version control and repository hosting.

## Approach Taken
The application was built as a single-page app using React to manage component-based architecture. I implemented state management using React's hooks (useState, useEffect) and rendered data dynamically using component mapping.

## Key steps:

1. Component Breakdown: Split the app into reusable components:
- CharacterBattle.jsx
- CharacterList.jsx
- FavoriteCharacters.jsx
2. API Integration: Fetched data from an external API [Rick and Morty](https://rickandmortyapi.com/documentation/#rest) axios. And placed my fetched data in "servises" folder in api.jsx file.
3. State Management: Managed the app's state for features like favorites and character selection using React hooks.
4. Styling: Custom CSS Modules and transitions were applied for a modern UI feel.
5. Responsive Design: Ensured the app looks good on desktop screens.

## Usage Instractions

1. Clone the repo:
<pre> ```git clone https://github.com/AndrewVershinin/SBA-320-React-App.git``` </pre>

2. Install dependencies:
<pre> ```npm install``` </pre>

3. Run the app
<pre> ```npm run dev``` </pre>

4. Open http://localhost:"your local POST" in your browser to view the app.

## Unsolved Problems
- Some UI components could be improved for better accessibility.
- The app doesn’t yet support filtering for characters by status (alive, dead).
- Error handling for the API requests is minimal; need to improve for a more robust experience.

## Future Enhancements
- Add filtering options for characters.
- Improve mobile responsiveness.
- implement css modules to improve maintainability. it's a great way to scope my CSS locally to the component instead of having global styles.
