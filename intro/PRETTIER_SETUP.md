# Prettier Setup Guide

This project now has a comprehensive Prettier setup to permanently fix formatting issues.

## What's Been Configured

### 1. Enhanced Prettier Configuration (`.prettierrc`)
- **Semi-colons**: Always required (`"semi": true`)
- **Quotes**: Single quotes (`"singleQuote": true`)
- **Line width**: 80 characters (`"printWidth": 80`)
- **Trailing commas**: Always (`"trailingComma": "all"`)
- **Tab width**: 2 spaces (`"tabWidth": 2`)
- **Line endings**: LF (`"endOfLine": "lf"`)
- **Bracket spacing**: Enabled (`"bracketSpacing": true`)
- **Arrow parens**: Avoid when possible (`"arrowParens": "avoid"`)

### 2. VS Code Integration (`.vscode/settings.json`)
- **Format on save**: Automatically formats files when you save
- **Default formatter**: Set to Prettier for TypeScript, JavaScript, and JSON
- **ESLint integration**: Fixes ESLint issues on save
- **File settings**: Ensures LF line endings and final newlines

### 3. Prettier Ignore (`.prettierignore`)
- Excludes build outputs, dependencies, and generated files
- Prevents formatting of lock files and compiled code

### 4. Enhanced NPM Scripts
- `npm run format` - Format TypeScript files in src/ and test/
- `npm run format:check` - Check if files are formatted correctly
- `npm run format:all` - Format all files in the project
- `npm run precommit` - Run formatting and linting before commits

### 5. Pre-commit Hooks (Husky + lint-staged)
- **Automatic formatting**: Formats staged files before each commit
- **ESLint fixes**: Automatically fixes linting issues
- **Prevents bad commits**: Ensures all committed code is properly formatted

## How to Use

### Manual Formatting
```bash
# Format all TypeScript files
npm run format

# Format entire project
npm run format:all

# Check formatting without changing files
npm run format:check
```

### Automatic Formatting
1. **On Save**: Files automatically format when you save in VS Code
2. **On Commit**: Pre-commit hook formats staged files automatically
3. **ESLint Integration**: Linting issues are fixed automatically

### VS Code Setup
Make sure you have the Prettier extension installed:
1. Install "Prettier - Code formatter" extension
2. The project settings will automatically configure it

## Troubleshooting

### If formatting doesn't work on save:
1. Check that Prettier extension is installed and enabled
2. Verify VS Code is using the workspace settings
3. Restart VS Code if needed

### If pre-commit hook fails:
```bash
# Run manually to see errors
npx lint-staged
```

### To bypass pre-commit hook (not recommended):
```bash
git commit --no-verify -m "your message"
```

## Benefits

✅ **Consistent formatting** across the entire codebase
✅ **Automatic fixes** for common formatting issues
✅ **Team consistency** - everyone gets the same formatting
✅ **No more formatting debates** - Prettier handles it all
✅ **Integration with ESLint** for comprehensive code quality
✅ **Pre-commit safety** - bad formatting can't be committed
