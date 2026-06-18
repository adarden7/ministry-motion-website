$envs = @(
  @{ Name = "SMTP_HOST"; Value = "smtp.resend.com" },
  @{ Name = "SMTP_PORT"; Value = "465" },
  @{ Name = "SMTP_USER"; Value = "resend" },
  @{ Name = "SMTP_PASS"; Value = "re_8j41PNPD_M59nwF9Vc5ujJJ1YFpXW9ULK" },
  @{ Name = "LEAD_NOTIFICATION_EMAIL"; Value = "ahkeem@dardenbehavioralcounseling.com" }
)

foreach ($e in $envs) {
  Write-Output $e.Value | npx vercel env rm $($e.Name) production -y 2>$null
  Write-Output $e.Value | npx vercel env rm $($e.Name) preview -y 2>$null
  Write-Output $e.Value | npx vercel env rm $($e.Name) development -y 2>$null
  
  Write-Output $e.Value | npx vercel env add $($e.Name) production
  Write-Output $e.Value | npx vercel env add $($e.Name) preview
  Write-Output $e.Value | npx vercel env add $($e.Name) development
}
