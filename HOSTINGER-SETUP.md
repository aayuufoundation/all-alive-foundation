# All Alive Foundation — Hostinger setup

This project is React + Vite. Your Hostinger Premium plan does not need the Web Apps feature if you deploy the compiled static `dist` files.

## Recommended GitHub → Hostinger flow

1. Create a GitHub repository and upload this project.
2. Push the project to the `main` branch.
3. GitHub Actions will run `npm install` and `npm run build`.
4. The workflow creates/updates a `hostinger` branch containing only the built website files.
5. In Hostinger, choose **Add website → Custom PHP/HTML website**.
6. In the website's Git deployment area, connect GitHub and select this repository and the `hostinger` branch.
7. Deploy the repository into `public_html`.
8. Make sure `index.html` is directly inside `public_html`.

## Important

Do not put PayU Merchant Salt, API secrets, passwords, or private donor data in this repository.

The current project contains frontend code. Any future PayU server-side secret handling should be done through a secure server-side endpoint/environment variable, not browser code.
