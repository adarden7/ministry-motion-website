# SMTP_PASS is a live secret (Resend API key) and must NEVER be hardcoded here.
# Set it in your shell before running this script, e.g.:
#   $env:RESEND_API_KEY = "re_xxx..."
# then run: .\push-envs.ps1
if (-not $env:RESEND_API_KEY) {
  Write-Error "RESEND_API_KEY environment variable is not set. Set it before running this script: `$env:RESEND_API_KEY = 're_...'"
  exit 1
}

$envs = @(
  @{ Name = "SMTP_HOST"; Value = "smtp.resend.com" },
  @{ Name = "SMTP_PORT"; Value = "465" },
  @{ Name = "SMTP_USER"; Value = "resend" },
  @{ Name = "SMTP_PASS"; Value = $env:RESEND_API_KEY },
  @{ Name = "LEAD_NOTIFICATION_EMAIL"; Value = "leads@ministrymotion.com" }
)

foreach ($e in $envs) {
  Write-Output $e.Value | npx vercel env rm $($e.Name) production -y 2>$null
  Write-Output $e.Value | npx vercel env rm $($e.Name) preview -y 2>$null
  Write-Output $e.Value | npx vercel env rm $($e.Name) development -y 2>$null
  
  Write-Output $e.Value | npx vercel env add $($e.Name) production
  Write-Output $e.Value | npx vercel env add $($e.Name) preview
  Write-Output $e.Value | npx vercel env add $($e.Name) development
}
