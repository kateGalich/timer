const args = process.argv;

for (let i = 2; i < args.length; i++) {
  if (args[i] < 0) {
    continue;
  }
  if (Number(args[i]) === NaN) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, args[i] * 1000);

}