# Clean previous builds
if (Test-Path "out") {
    Remove-Item -Recurse -Force out
}
if (Test-Path ".next") {
    Remove-Item -Recurse -Force .next
}

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
