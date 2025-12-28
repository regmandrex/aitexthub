# Codex Process Error Troubleshooting

## Error Description
```
Codex process errored: Codex process is not available
thread 'tokio-runtime-worker' panicked at core\src\util.rs:21:9:
Custom tool call output is missing for call id: call_YZrkAPn8JaxdaVktW9LE8yGS
```

## What This Means
This error occurs when Cursor's internal Codex process crashes because it's missing the output from a tool call. This is an internal Cursor/Codex issue, not a problem with your codebase.

## Solutions

### 1. Restart Cursor
- Close Cursor completely
- Reopen the project
- This often resolves transient process issues

### 2. Clear Cursor Cache
- Close Cursor
- Delete the `.cursor` folder in your project (if it exists)
- Restart Cursor

### 3. Check System Resources
- Ensure you have sufficient RAM and disk space
- Close other resource-intensive applications
- Codex requires adequate system resources to function

### 4. Update Cursor
- Check for Cursor updates
- Install the latest version if available
- This may include bug fixes for Codex process issues

### 5. Check Project Size
- Very large projects can sometimes cause Codex to crash
- Consider excluding large directories in `.cursorignore` or `.gitignore`

### 6. Disable Codex Temporarily
- If the issue persists, you can disable Codex features temporarily
- Use standard Cursor features while troubleshooting

## Prevention
- Keep Cursor updated to the latest version
- Avoid making too many rapid tool calls in succession
- Monitor system resources during heavy development sessions

## Reporting
If this error persists:
1. Note the exact error message and call ID
2. Check Cursor's error logs
3. Report the issue to Cursor support with:
   - Your Cursor version
   - Operating system version
   - Project type and size
   - Steps to reproduce (if any)
