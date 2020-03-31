if (reginald.pr.title === 'Testando Message') {
  reginald.message("This is a message");
}

if (reginald.pr.title === 'Testando Warning') {
  reginald.warning("This is a warning");
}

if (reginald.pr.title === 'Testando Error') {
  reginald.error("This is an error");
}

if (reginald.git.modifiedFiles.some(value => value.endsWith('Reginaldfile.js'))) {
  reginald.warning("Reginaldfile was modified");
}