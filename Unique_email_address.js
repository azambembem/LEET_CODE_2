function numUniqueEmails(emails) {
  const seen = new Set();

  for (const email of emails) {
    const [local, domain] = email.split("@");
    const processedLocal = local.split("+")[0].replace(/\./g, "");
    seen.add(`${processedLocal}@${domain}`);
  }

  return seen.size;
}

const emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com"
];
console.log(numUniqueEmails(emails));
