export type Primitive = string | number | boolean | bigint | symbol | undefined | null;
export type Builtin = Primitive | Function | Date | Error | RegExp;

export type IsTuple<T> = T extends [infer A]
	? T
	: T extends [infer A, infer B]
		? T
		: T extends [infer A, infer B, infer C]
			? T
			: T extends [infer A, infer B, infer C, infer D]
				? T
				: T extends [infer A, infer B, infer C, infer D, infer E]
					? T
					: never;

export type DeepRequired<T> = T extends Builtin
	? NonNullable<T>
	: T extends Map<infer K, infer V>
		? Map<DeepRequired<K>, DeepRequired<V>>
		: T extends ReadonlyMap<infer K, infer V>
			? ReadonlyMap<DeepRequired<K>, DeepRequired<V>>
			: T extends WeakMap<infer K, infer V>
				? WeakMap<DeepRequired<K>, DeepRequired<V>>
				: T extends Set<infer U>
					? Set<DeepRequired<U>>
					: T extends ReadonlySet<infer U>
						? ReadonlySet<DeepRequired<U>>
						: T extends WeakSet<infer U>
							? WeakSet<DeepRequired<U>>
							: T extends Promise<infer U>
								? Promise<DeepRequired<U>>
								: T extends {}
									? { [K in keyof T]-?: DeepRequired<T[K]> }
									: NonNullable<T>;

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends Map<infer K, infer V>
		? Map<DeepPartial<K>, DeepPartial<V>>
		: T extends ReadonlyMap<infer K, infer V>
			? ReadonlyMap<DeepPartial<K>, DeepPartial<V>>
			: T extends WeakMap<infer K, infer V>
				? WeakMap<DeepPartial<K>, DeepPartial<V>>
				: T extends Set<infer U>
					? Set<DeepPartial<U>>
					: T extends ReadonlySet<infer U>
						? ReadonlySet<DeepPartial<U>>
						: T extends WeakSet<infer U>
							? WeakSet<DeepPartial<U>>
							: T extends Array<infer U>
								? T extends IsTuple<T>
									? { [K in keyof T]?: DeepPartial<T[K]> }
									: Array<DeepPartial<U>>
								: T extends Promise<infer U>
									? Promise<DeepPartial<U>>
									: T extends {}
										? { [K in keyof T]?: DeepPartial<T[K]> }
										: Partial<T>;

export type RequiredExcept<T, K extends keyof T> = Partial<Pick<T, K>> & Required<Omit<T, K>>;

export type PartialRequired<T, K extends keyof T> = Partial<Omit<T, K>> & Required<Pick<T, K>>;
