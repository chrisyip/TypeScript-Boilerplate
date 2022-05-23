import test from 'ava';

import { greeting } from '../src/';

test('Greeting', (t) => {
  t.is(greeting('Joe'), 'Good day, Joe.');
});
