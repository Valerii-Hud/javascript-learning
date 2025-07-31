const str =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore ea assumenda maiores quam quasi expedita deleniti ipsum, ut iste doloribus! Neque consequatur iusto voluptate unde esse pariatur sit quaerats hic.';

function output(input) {
  console.log(input);
}

output(str.length);
output(str.substring(1, 5));
output(str.slice(1, 5));
output(str.slice(-3));
output(str.split(', '));
output(str.indexOf('L', 0));
output(str.indexOf('Lorem'));
output(str.indexOf('dolor'));
output(str.lastIndexOf('elit'));
output(str.startsWith('amet'));
output(str.endsWith('hic.'));
output(str.includes('sit amet'));
output(str.replace('Lorem', 'Borem'));
output(str.normalize());
output(str.charAt(0));
output(str.charAt(str.length - 1));
output(str.padStart(4, '*'));
output(str.padEnd(400, '-'));
output(str.trim());
output(str.concat('String here'));
output('<React.Fragment></React.Fragment>'.repeat(10));
