function test(desc, assertions) {
  let failures = [];
  let results = assertions.map((assertion, i) => {
    if (assertion.expected.equals && assertion.expected.equals(assertion.actual)) {
      return '.';
    } else if (assertion.expected === assertion.actual) {
      return '.';
    } else {
      failures.push(Object.assign({ index: i }, assertion));
      return 'F';
    }
  });

  let passed = results.length - failures.length;
  let messages = [];
  messages.push(`${desc} (${passed}/${results.length})`);
  messages.push(`  ${results.join('')}`);

  if (failures.length > 0) {
    messages.push('');
    messages.push('  Failures:');
    failures.forEach((failure) => {
      messages.push(`    ${failure.index})` +
        ` Expected: ${failure.expected},` +
        ` Actual: ${failure.actual}`
      );
    });
  }

  messages.push('');
  messages.forEach((a) => { console.log(a); });
}

module.exports = test;
