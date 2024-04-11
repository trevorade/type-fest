import {expectNotAssignable, expectType, expectAssignable} from 'tsd';
import type {ArrayIndices} from '../index';

const values = ['a', 'b', 'c'] as const;
type ValueKeys = ArrayIndices<typeof values>;

expectType<ValueKeys>(null! as 0 | 1 | 2);

expectAssignable<ValueKeys>(0);
expectAssignable<ValueKeys>(1);
expectAssignable<ValueKeys>(2);

expectNotAssignable<ValueKeys>(-1);
expectNotAssignable<ValueKeys>(3);

type TupleKeys = ArrayIndices<['a', 2]>;

expectType<TupleKeys>(null! as 0 | 1);

expectAssignable<TupleKeys>(0);
expectAssignable<TupleKeys>(1);

expectNotAssignable<TupleKeys>(-1);
expectNotAssignable<TupleKeys>(2);
