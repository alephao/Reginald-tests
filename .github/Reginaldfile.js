reginald.message("This is a message")
reginald.message("Another message")
reginald.warning("This is a warning")
reginald.warning("One more warning for you!")
reginald.error("This is an error, and it fails the check!")

// if (!/\[[A-Z]+-[0-9]+\]\s/.test(reginald.pr.title)) {
//   reginald.error("Title should start with the ticket nuber e.g.: [JIRA-123]")
// }

// if (reginald.git.modifiedFiles.some(value => value.endsWith('Reginaldfile.js'))) {
//   reginald.warning("Reginaldfile was modified");
// }