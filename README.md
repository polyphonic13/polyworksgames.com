# polyworksgames

> A Vue.js project for Polyworks Games website

## Build Setup

``` bash
# install dependencies
pnpm install

# serve with hot reload at localhost:8080
pnpm run dev

# build for production with minification
pnpm run build

# build for production and view the bundle analyzer report
pnpm run build --report
```

## Deployment to AWS

The site is hosted on AWS S3 with CloudFront CDN at polyworksgames.com.

### Steps to Deploy:

1. **Build the production files:**
   ```bash
   pnpm run build
   ```
   This creates optimized files in the `dist/` folder.

2. **Upload to S3:**
   - Go to the S3 bucket for polyworksgames.com in AWS Console
   - Replace all files with the contents of the `dist/` folder

3. **Invalidate CloudFront cache:**
   - Go to CloudFront in AWS Console
   - Find the distribution for polyworksgames.com
   - Go to the "Invalidations" tab
   - Create invalidation with path: `/*`
   - Wait 1-5 minutes for invalidation to complete

   **Or via AWS CLI:**
   ```bash
   aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
   ```

4. **Verify deployment:**
   - Visit https://polyworksgames.com
   - Hard refresh (Ctrl+Shift+R / Cmd+Shift+R) to bypass browser cache

### Notes:
- The project uses pnpm (not npm)
- CloudFront caching means you MUST invalidate after deploying
- AWS gives 1000 free invalidation paths per month

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
