import {getHash} from './index.js';

const main = async () => {
    const testString = 'Hello world';

    const hash = await getHash(testString);

    console.log(`The hash for '${testString}' is: ${hash}`);
};

main().catch((error) => {
  console.error('Error occurred during testing:', error);
});
