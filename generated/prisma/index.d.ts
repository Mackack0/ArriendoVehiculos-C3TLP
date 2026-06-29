
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Perfil
 * 
 */
export type Perfil = $Result.DefaultSelection<Prisma.$PerfilPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model TipoVehiculo
 * 
 */
export type TipoVehiculo = $Result.DefaultSelection<Prisma.$TipoVehiculoPayload>
/**
 * Model Vehiculo
 * 
 */
export type Vehiculo = $Result.DefaultSelection<Prisma.$VehiculoPayload>
/**
 * Model Arriendo
 * 
 */
export type Arriendo = $Result.DefaultSelection<Prisma.$ArriendoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Perfils
 * const perfils = await prisma.perfil.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Perfils
   * const perfils = await prisma.perfil.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.perfil`: Exposes CRUD operations for the **Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfils
    * const perfils = await prisma.perfil.findMany()
    * ```
    */
  get perfil(): Prisma.PerfilDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoVehiculo`: Exposes CRUD operations for the **TipoVehiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoVehiculos
    * const tipoVehiculos = await prisma.tipoVehiculo.findMany()
    * ```
    */
  get tipoVehiculo(): Prisma.TipoVehiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiculo`: Exposes CRUD operations for the **Vehiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehiculos
    * const vehiculos = await prisma.vehiculo.findMany()
    * ```
    */
  get vehiculo(): Prisma.VehiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arriendo`: Exposes CRUD operations for the **Arriendo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arriendos
    * const arriendos = await prisma.arriendo.findMany()
    * ```
    */
  get arriendo(): Prisma.ArriendoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Perfil: 'Perfil',
    Usuario: 'Usuario',
    TipoVehiculo: 'TipoVehiculo',
    Vehiculo: 'Vehiculo',
    Arriendo: 'Arriendo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "perfil" | "usuario" | "tipoVehiculo" | "vehiculo" | "arriendo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Perfil: {
        payload: Prisma.$PerfilPayload<ExtArgs>
        fields: Prisma.PerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerfilFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findFirst: {
            args: Prisma.PerfilFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findMany: {
            args: Prisma.PerfilFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          create: {
            args: Prisma.PerfilCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          createMany: {
            args: Prisma.PerfilCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PerfilDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          update: {
            args: Prisma.PerfilUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          deleteMany: {
            args: Prisma.PerfilDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerfilUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PerfilUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          aggregate: {
            args: Prisma.PerfilAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerfil>
          }
          groupBy: {
            args: Prisma.PerfilGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerfilCountArgs<ExtArgs>
            result: $Utils.Optional<PerfilCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      TipoVehiculo: {
        payload: Prisma.$TipoVehiculoPayload<ExtArgs>
        fields: Prisma.TipoVehiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoVehiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVehiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoVehiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVehiculoPayload>
          }
          findFirst: {
            args: Prisma.TipoVehiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVehiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoVehiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVehiculoPayload>
          }
          findMany: {
            args: Prisma.TipoVehiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVehiculoPayload>[]
          }
          create: {
            args: Prisma.TipoVehiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVehiculoPayload>
          }
          createMany: {
            args: Prisma.TipoVehiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TipoVehiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVehiculoPayload>
          }
          update: {
            args: Prisma.TipoVehiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVehiculoPayload>
          }
          deleteMany: {
            args: Prisma.TipoVehiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoVehiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TipoVehiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoVehiculoPayload>
          }
          aggregate: {
            args: Prisma.TipoVehiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoVehiculo>
          }
          groupBy: {
            args: Prisma.TipoVehiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoVehiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoVehiculoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoVehiculoCountAggregateOutputType> | number
          }
        }
      }
      Vehiculo: {
        payload: Prisma.$VehiculoPayload<ExtArgs>
        fields: Prisma.VehiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findFirst: {
            args: Prisma.VehiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findMany: {
            args: Prisma.VehiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          create: {
            args: Prisma.VehiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          createMany: {
            args: Prisma.VehiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          update: {
            args: Prisma.VehiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          deleteMany: {
            args: Prisma.VehiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          aggregate: {
            args: Prisma.VehiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculo>
          }
          groupBy: {
            args: Prisma.VehiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculoCountAggregateOutputType> | number
          }
        }
      }
      Arriendo: {
        payload: Prisma.$ArriendoPayload<ExtArgs>
        fields: Prisma.ArriendoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArriendoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArriendoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          findFirst: {
            args: Prisma.ArriendoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArriendoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          findMany: {
            args: Prisma.ArriendoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>[]
          }
          create: {
            args: Prisma.ArriendoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          createMany: {
            args: Prisma.ArriendoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ArriendoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          update: {
            args: Prisma.ArriendoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          deleteMany: {
            args: Prisma.ArriendoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArriendoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArriendoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArriendoPayload>
          }
          aggregate: {
            args: Prisma.ArriendoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArriendo>
          }
          groupBy: {
            args: Prisma.ArriendoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArriendoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArriendoCountArgs<ExtArgs>
            result: $Utils.Optional<ArriendoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    perfil?: PerfilOmit
    usuario?: UsuarioOmit
    tipoVehiculo?: TipoVehiculoOmit
    vehiculo?: VehiculoOmit
    arriendo?: ArriendoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PerfilCountOutputType
   */

  export type PerfilCountOutputType = {
    usuarios: number
  }

  export type PerfilCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | PerfilCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerfilCountOutputType
     */
    select?: PerfilCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PerfilCountOutputType without action
   */
  export type PerfilCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    arriendos: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arriendos?: boolean | UsuarioCountOutputTypeCountArriendosArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountArriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArriendoWhereInput
  }


  /**
   * Count Type TipoVehiculoCountOutputType
   */

  export type TipoVehiculoCountOutputType = {
    vehiculos: number
  }

  export type TipoVehiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | TipoVehiculoCountOutputTypeCountVehiculosArgs
  }

  // Custom InputTypes
  /**
   * TipoVehiculoCountOutputType without action
   */
  export type TipoVehiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculoCountOutputType
     */
    select?: TipoVehiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoVehiculoCountOutputType without action
   */
  export type TipoVehiculoCountOutputTypeCountVehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
  }


  /**
   * Count Type VehiculoCountOutputType
   */

  export type VehiculoCountOutputType = {
    arriendos: number
  }

  export type VehiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    arriendos?: boolean | VehiculoCountOutputTypeCountArriendosArgs
  }

  // Custom InputTypes
  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculoCountOutputType
     */
    select?: VehiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountArriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArriendoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Perfil
   */

  export type AggregatePerfil = {
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  export type PerfilAvgAggregateOutputType = {
    id: number | null
  }

  export type PerfilSumAggregateOutputType = {
    id: number | null
  }

  export type PerfilMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PerfilMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type PerfilCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type PerfilAvgAggregateInputType = {
    id?: true
  }

  export type PerfilSumAggregateInputType = {
    id?: true
  }

  export type PerfilMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PerfilMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type PerfilCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type PerfilAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfil to aggregate.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perfils
    **/
    _count?: true | PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilMaxAggregateInputType
  }

  export type GetPerfilAggregateType<T extends PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfil[P]>
      : GetScalarType<T[P], AggregatePerfil[P]>
  }




  export type PerfilGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithAggregationInput | PerfilOrderByWithAggregationInput[]
    by: PerfilScalarFieldEnum[] | PerfilScalarFieldEnum
    having?: PerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilCountAggregateInputType | true
    _avg?: PerfilAvgAggregateInputType
    _sum?: PerfilSumAggregateInputType
    _min?: PerfilMinAggregateInputType
    _max?: PerfilMaxAggregateInputType
  }

  export type PerfilGroupByOutputType = {
    id: number
    nombre: string
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  type GetPerfilGroupByPayload<T extends PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilGroupByOutputType[P]>
        }
      >
    >


  export type PerfilSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarios?: boolean | Perfil$usuariosArgs<ExtArgs>
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>



  export type PerfilSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type PerfilOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["perfil"]>
  export type PerfilInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Perfil$usuariosArgs<ExtArgs>
    _count?: boolean | PerfilCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PerfilPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Perfil"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["perfil"]>
    composites: {}
  }

  type PerfilGetPayload<S extends boolean | null | undefined | PerfilDefaultArgs> = $Result.GetResult<Prisma.$PerfilPayload, S>

  type PerfilCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PerfilFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PerfilCountAggregateInputType | true
    }

  export interface PerfilDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perfil'], meta: { name: 'Perfil' } }
    /**
     * Find zero or one Perfil that matches the filter.
     * @param {PerfilFindUniqueArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerfilFindUniqueArgs>(args: SelectSubset<T, PerfilFindUniqueArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Perfil that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PerfilFindUniqueOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerfilFindUniqueOrThrowArgs>(args: SelectSubset<T, PerfilFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerfilFindFirstArgs>(args?: SelectSubset<T, PerfilFindFirstArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerfilFindFirstOrThrowArgs>(args?: SelectSubset<T, PerfilFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfils
     * const perfils = await prisma.perfil.findMany()
     * 
     * // Get first 10 Perfils
     * const perfils = await prisma.perfil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilWithIdOnly = await prisma.perfil.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerfilFindManyArgs>(args?: SelectSubset<T, PerfilFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Perfil.
     * @param {PerfilCreateArgs} args - Arguments to create a Perfil.
     * @example
     * // Create one Perfil
     * const Perfil = await prisma.perfil.create({
     *   data: {
     *     // ... data to create a Perfil
     *   }
     * })
     * 
     */
    create<T extends PerfilCreateArgs>(args: SelectSubset<T, PerfilCreateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Perfils.
     * @param {PerfilCreateManyArgs} args - Arguments to create many Perfils.
     * @example
     * // Create many Perfils
     * const perfil = await prisma.perfil.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerfilCreateManyArgs>(args?: SelectSubset<T, PerfilCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Perfil.
     * @param {PerfilDeleteArgs} args - Arguments to delete one Perfil.
     * @example
     * // Delete one Perfil
     * const Perfil = await prisma.perfil.delete({
     *   where: {
     *     // ... filter to delete one Perfil
     *   }
     * })
     * 
     */
    delete<T extends PerfilDeleteArgs>(args: SelectSubset<T, PerfilDeleteArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Perfil.
     * @param {PerfilUpdateArgs} args - Arguments to update one Perfil.
     * @example
     * // Update one Perfil
     * const perfil = await prisma.perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerfilUpdateArgs>(args: SelectSubset<T, PerfilUpdateArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Perfils.
     * @param {PerfilDeleteManyArgs} args - Arguments to filter Perfils to delete.
     * @example
     * // Delete a few Perfils
     * const { count } = await prisma.perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerfilDeleteManyArgs>(args?: SelectSubset<T, PerfilDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerfilUpdateManyArgs>(args: SelectSubset<T, PerfilUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Perfil.
     * @param {PerfilUpsertArgs} args - Arguments to update or create a Perfil.
     * @example
     * // Update or create a Perfil
     * const perfil = await prisma.perfil.upsert({
     *   create: {
     *     // ... data to create a Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfil we want to update
     *   }
     * })
     */
    upsert<T extends PerfilUpsertArgs>(args: SelectSubset<T, PerfilUpsertArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilCountArgs} args - Arguments to filter Perfils to count.
     * @example
     * // Count the number of Perfils
     * const count = await prisma.perfil.count({
     *   where: {
     *     // ... the filter for the Perfils we want to count
     *   }
     * })
    **/
    count<T extends PerfilCountArgs>(
      args?: Subset<T, PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerfilAggregateArgs>(args: Subset<T, PerfilAggregateArgs>): Prisma.PrismaPromise<GetPerfilAggregateType<T>>

    /**
     * Group by Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilGroupByArgs['orderBy'] }
        : { orderBy?: PerfilGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perfil model
   */
  readonly fields: PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Perfil$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Perfil model
   */
  interface PerfilFieldRefs {
    readonly id: FieldRef<"Perfil", 'Int'>
    readonly nombre: FieldRef<"Perfil", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Perfil findUnique
   */
  export type PerfilFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findUniqueOrThrow
   */
  export type PerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil findFirst
   */
  export type PerfilFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findFirstOrThrow
   */
  export type PerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil findMany
   */
  export type PerfilFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfils to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }

  /**
   * Perfil create
   */
  export type PerfilCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a Perfil.
     */
    data: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
  }

  /**
   * Perfil createMany
   */
  export type PerfilCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Perfil update
   */
  export type PerfilUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a Perfil.
     */
    data: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
    /**
     * Choose, which Perfil to update.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil updateMany
   */
  export type PerfilUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to update.
     */
    limit?: number
  }

  /**
   * Perfil upsert
   */
  export type PerfilUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the Perfil to update in case it exists.
     */
    where: PerfilWhereUniqueInput
    /**
     * In case the Perfil found by the `where` argument doesn't exist, create a new Perfil with this data.
     */
    create: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
    /**
     * In case the Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
  }

  /**
   * Perfil delete
   */
  export type PerfilDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter which Perfil to delete.
     */
    where: PerfilWhereUniqueInput
  }

  /**
   * Perfil deleteMany
   */
  export type PerfilDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfils to delete
     */
    where?: PerfilWhereInput
    /**
     * Limit how many Perfils to delete.
     */
    limit?: number
  }

  /**
   * Perfil.usuarios
   */
  export type Perfil$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Perfil without action
   */
  export type PerfilDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Perfil
     */
    omit?: PerfilOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerfilInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    perfilId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    perfilId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    rut: string | null
    email: string | null
    password: string | null
    perfilId: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    rut: string | null
    email: string | null
    password: string | null
    perfilId: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    rut: number
    email: number
    password: number
    perfilId: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    perfilId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    perfilId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    rut?: true
    email?: true
    password?: true
    perfilId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    rut?: true
    email?: true
    password?: true
    perfilId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    rut?: true
    email?: true
    password?: true
    perfilId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    rut: string
    email: string
    password: string
    perfilId: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rut?: boolean
    email?: boolean
    password?: boolean
    perfilId?: boolean
    perfil?: boolean | PerfilDefaultArgs<ExtArgs>
    arriendos?: boolean | Usuario$arriendosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    rut?: boolean
    email?: boolean
    password?: boolean
    perfilId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rut" | "email" | "password" | "perfilId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    perfil?: boolean | PerfilDefaultArgs<ExtArgs>
    arriendos?: boolean | Usuario$arriendosArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      perfil: Prisma.$PerfilPayload<ExtArgs>
      arriendos: Prisma.$ArriendoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rut: string
      email: string
      password: string
      perfilId: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    perfil<T extends PerfilDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PerfilDefaultArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    arriendos<T extends Usuario$arriendosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$arriendosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly rut: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly perfilId: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.arriendos
   */
  export type Usuario$arriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    where?: ArriendoWhereInput
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    cursor?: ArriendoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArriendoScalarFieldEnum | ArriendoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model TipoVehiculo
   */

  export type AggregateTipoVehiculo = {
    _count: TipoVehiculoCountAggregateOutputType | null
    _avg: TipoVehiculoAvgAggregateOutputType | null
    _sum: TipoVehiculoSumAggregateOutputType | null
    _min: TipoVehiculoMinAggregateOutputType | null
    _max: TipoVehiculoMaxAggregateOutputType | null
  }

  export type TipoVehiculoAvgAggregateOutputType = {
    id: number | null
    valorDiario: number | null
  }

  export type TipoVehiculoSumAggregateOutputType = {
    id: number | null
    valorDiario: number | null
  }

  export type TipoVehiculoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    valorDiario: number | null
  }

  export type TipoVehiculoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    valorDiario: number | null
  }

  export type TipoVehiculoCountAggregateOutputType = {
    id: number
    nombre: number
    valorDiario: number
    _all: number
  }


  export type TipoVehiculoAvgAggregateInputType = {
    id?: true
    valorDiario?: true
  }

  export type TipoVehiculoSumAggregateInputType = {
    id?: true
    valorDiario?: true
  }

  export type TipoVehiculoMinAggregateInputType = {
    id?: true
    nombre?: true
    valorDiario?: true
  }

  export type TipoVehiculoMaxAggregateInputType = {
    id?: true
    nombre?: true
    valorDiario?: true
  }

  export type TipoVehiculoCountAggregateInputType = {
    id?: true
    nombre?: true
    valorDiario?: true
    _all?: true
  }

  export type TipoVehiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoVehiculo to aggregate.
     */
    where?: TipoVehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVehiculos to fetch.
     */
    orderBy?: TipoVehiculoOrderByWithRelationInput | TipoVehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoVehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoVehiculos
    **/
    _count?: true | TipoVehiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoVehiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoVehiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoVehiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoVehiculoMaxAggregateInputType
  }

  export type GetTipoVehiculoAggregateType<T extends TipoVehiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoVehiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoVehiculo[P]>
      : GetScalarType<T[P], AggregateTipoVehiculo[P]>
  }




  export type TipoVehiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoVehiculoWhereInput
    orderBy?: TipoVehiculoOrderByWithAggregationInput | TipoVehiculoOrderByWithAggregationInput[]
    by: TipoVehiculoScalarFieldEnum[] | TipoVehiculoScalarFieldEnum
    having?: TipoVehiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoVehiculoCountAggregateInputType | true
    _avg?: TipoVehiculoAvgAggregateInputType
    _sum?: TipoVehiculoSumAggregateInputType
    _min?: TipoVehiculoMinAggregateInputType
    _max?: TipoVehiculoMaxAggregateInputType
  }

  export type TipoVehiculoGroupByOutputType = {
    id: number
    nombre: string
    valorDiario: number
    _count: TipoVehiculoCountAggregateOutputType | null
    _avg: TipoVehiculoAvgAggregateOutputType | null
    _sum: TipoVehiculoSumAggregateOutputType | null
    _min: TipoVehiculoMinAggregateOutputType | null
    _max: TipoVehiculoMaxAggregateOutputType | null
  }

  type GetTipoVehiculoGroupByPayload<T extends TipoVehiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoVehiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoVehiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoVehiculoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoVehiculoGroupByOutputType[P]>
        }
      >
    >


  export type TipoVehiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    valorDiario?: boolean
    vehiculos?: boolean | TipoVehiculo$vehiculosArgs<ExtArgs>
    _count?: boolean | TipoVehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoVehiculo"]>



  export type TipoVehiculoSelectScalar = {
    id?: boolean
    nombre?: boolean
    valorDiario?: boolean
  }

  export type TipoVehiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "valorDiario", ExtArgs["result"]["tipoVehiculo"]>
  export type TipoVehiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculos?: boolean | TipoVehiculo$vehiculosArgs<ExtArgs>
    _count?: boolean | TipoVehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TipoVehiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoVehiculo"
    objects: {
      vehiculos: Prisma.$VehiculoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      valorDiario: number
    }, ExtArgs["result"]["tipoVehiculo"]>
    composites: {}
  }

  type TipoVehiculoGetPayload<S extends boolean | null | undefined | TipoVehiculoDefaultArgs> = $Result.GetResult<Prisma.$TipoVehiculoPayload, S>

  type TipoVehiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoVehiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoVehiculoCountAggregateInputType | true
    }

  export interface TipoVehiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoVehiculo'], meta: { name: 'TipoVehiculo' } }
    /**
     * Find zero or one TipoVehiculo that matches the filter.
     * @param {TipoVehiculoFindUniqueArgs} args - Arguments to find a TipoVehiculo
     * @example
     * // Get one TipoVehiculo
     * const tipoVehiculo = await prisma.tipoVehiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoVehiculoFindUniqueArgs>(args: SelectSubset<T, TipoVehiculoFindUniqueArgs<ExtArgs>>): Prisma__TipoVehiculoClient<$Result.GetResult<Prisma.$TipoVehiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoVehiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoVehiculoFindUniqueOrThrowArgs} args - Arguments to find a TipoVehiculo
     * @example
     * // Get one TipoVehiculo
     * const tipoVehiculo = await prisma.tipoVehiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoVehiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoVehiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoVehiculoClient<$Result.GetResult<Prisma.$TipoVehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoVehiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVehiculoFindFirstArgs} args - Arguments to find a TipoVehiculo
     * @example
     * // Get one TipoVehiculo
     * const tipoVehiculo = await prisma.tipoVehiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoVehiculoFindFirstArgs>(args?: SelectSubset<T, TipoVehiculoFindFirstArgs<ExtArgs>>): Prisma__TipoVehiculoClient<$Result.GetResult<Prisma.$TipoVehiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoVehiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVehiculoFindFirstOrThrowArgs} args - Arguments to find a TipoVehiculo
     * @example
     * // Get one TipoVehiculo
     * const tipoVehiculo = await prisma.tipoVehiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoVehiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoVehiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoVehiculoClient<$Result.GetResult<Prisma.$TipoVehiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoVehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVehiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoVehiculos
     * const tipoVehiculos = await prisma.tipoVehiculo.findMany()
     * 
     * // Get first 10 TipoVehiculos
     * const tipoVehiculos = await prisma.tipoVehiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoVehiculoWithIdOnly = await prisma.tipoVehiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoVehiculoFindManyArgs>(args?: SelectSubset<T, TipoVehiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoVehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoVehiculo.
     * @param {TipoVehiculoCreateArgs} args - Arguments to create a TipoVehiculo.
     * @example
     * // Create one TipoVehiculo
     * const TipoVehiculo = await prisma.tipoVehiculo.create({
     *   data: {
     *     // ... data to create a TipoVehiculo
     *   }
     * })
     * 
     */
    create<T extends TipoVehiculoCreateArgs>(args: SelectSubset<T, TipoVehiculoCreateArgs<ExtArgs>>): Prisma__TipoVehiculoClient<$Result.GetResult<Prisma.$TipoVehiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoVehiculos.
     * @param {TipoVehiculoCreateManyArgs} args - Arguments to create many TipoVehiculos.
     * @example
     * // Create many TipoVehiculos
     * const tipoVehiculo = await prisma.tipoVehiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoVehiculoCreateManyArgs>(args?: SelectSubset<T, TipoVehiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TipoVehiculo.
     * @param {TipoVehiculoDeleteArgs} args - Arguments to delete one TipoVehiculo.
     * @example
     * // Delete one TipoVehiculo
     * const TipoVehiculo = await prisma.tipoVehiculo.delete({
     *   where: {
     *     // ... filter to delete one TipoVehiculo
     *   }
     * })
     * 
     */
    delete<T extends TipoVehiculoDeleteArgs>(args: SelectSubset<T, TipoVehiculoDeleteArgs<ExtArgs>>): Prisma__TipoVehiculoClient<$Result.GetResult<Prisma.$TipoVehiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoVehiculo.
     * @param {TipoVehiculoUpdateArgs} args - Arguments to update one TipoVehiculo.
     * @example
     * // Update one TipoVehiculo
     * const tipoVehiculo = await prisma.tipoVehiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoVehiculoUpdateArgs>(args: SelectSubset<T, TipoVehiculoUpdateArgs<ExtArgs>>): Prisma__TipoVehiculoClient<$Result.GetResult<Prisma.$TipoVehiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoVehiculos.
     * @param {TipoVehiculoDeleteManyArgs} args - Arguments to filter TipoVehiculos to delete.
     * @example
     * // Delete a few TipoVehiculos
     * const { count } = await prisma.tipoVehiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoVehiculoDeleteManyArgs>(args?: SelectSubset<T, TipoVehiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoVehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVehiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoVehiculos
     * const tipoVehiculo = await prisma.tipoVehiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoVehiculoUpdateManyArgs>(args: SelectSubset<T, TipoVehiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TipoVehiculo.
     * @param {TipoVehiculoUpsertArgs} args - Arguments to update or create a TipoVehiculo.
     * @example
     * // Update or create a TipoVehiculo
     * const tipoVehiculo = await prisma.tipoVehiculo.upsert({
     *   create: {
     *     // ... data to create a TipoVehiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoVehiculo we want to update
     *   }
     * })
     */
    upsert<T extends TipoVehiculoUpsertArgs>(args: SelectSubset<T, TipoVehiculoUpsertArgs<ExtArgs>>): Prisma__TipoVehiculoClient<$Result.GetResult<Prisma.$TipoVehiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoVehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVehiculoCountArgs} args - Arguments to filter TipoVehiculos to count.
     * @example
     * // Count the number of TipoVehiculos
     * const count = await prisma.tipoVehiculo.count({
     *   where: {
     *     // ... the filter for the TipoVehiculos we want to count
     *   }
     * })
    **/
    count<T extends TipoVehiculoCountArgs>(
      args?: Subset<T, TipoVehiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoVehiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoVehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVehiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TipoVehiculoAggregateArgs>(args: Subset<T, TipoVehiculoAggregateArgs>): Prisma.PrismaPromise<GetTipoVehiculoAggregateType<T>>

    /**
     * Group by TipoVehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoVehiculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TipoVehiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoVehiculoGroupByArgs['orderBy'] }
        : { orderBy?: TipoVehiculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TipoVehiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoVehiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoVehiculo model
   */
  readonly fields: TipoVehiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoVehiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoVehiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculos<T extends TipoVehiculo$vehiculosArgs<ExtArgs> = {}>(args?: Subset<T, TipoVehiculo$vehiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TipoVehiculo model
   */
  interface TipoVehiculoFieldRefs {
    readonly id: FieldRef<"TipoVehiculo", 'Int'>
    readonly nombre: FieldRef<"TipoVehiculo", 'String'>
    readonly valorDiario: FieldRef<"TipoVehiculo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TipoVehiculo findUnique
   */
  export type TipoVehiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculo
     */
    select?: TipoVehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVehiculo
     */
    omit?: TipoVehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVehiculoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVehiculo to fetch.
     */
    where: TipoVehiculoWhereUniqueInput
  }

  /**
   * TipoVehiculo findUniqueOrThrow
   */
  export type TipoVehiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculo
     */
    select?: TipoVehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVehiculo
     */
    omit?: TipoVehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVehiculoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVehiculo to fetch.
     */
    where: TipoVehiculoWhereUniqueInput
  }

  /**
   * TipoVehiculo findFirst
   */
  export type TipoVehiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculo
     */
    select?: TipoVehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVehiculo
     */
    omit?: TipoVehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVehiculoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVehiculo to fetch.
     */
    where?: TipoVehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVehiculos to fetch.
     */
    orderBy?: TipoVehiculoOrderByWithRelationInput | TipoVehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoVehiculos.
     */
    cursor?: TipoVehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoVehiculos.
     */
    distinct?: TipoVehiculoScalarFieldEnum | TipoVehiculoScalarFieldEnum[]
  }

  /**
   * TipoVehiculo findFirstOrThrow
   */
  export type TipoVehiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculo
     */
    select?: TipoVehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVehiculo
     */
    omit?: TipoVehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVehiculoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVehiculo to fetch.
     */
    where?: TipoVehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVehiculos to fetch.
     */
    orderBy?: TipoVehiculoOrderByWithRelationInput | TipoVehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoVehiculos.
     */
    cursor?: TipoVehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoVehiculos.
     */
    distinct?: TipoVehiculoScalarFieldEnum | TipoVehiculoScalarFieldEnum[]
  }

  /**
   * TipoVehiculo findMany
   */
  export type TipoVehiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculo
     */
    select?: TipoVehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVehiculo
     */
    omit?: TipoVehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVehiculoInclude<ExtArgs> | null
    /**
     * Filter, which TipoVehiculos to fetch.
     */
    where?: TipoVehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoVehiculos to fetch.
     */
    orderBy?: TipoVehiculoOrderByWithRelationInput | TipoVehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoVehiculos.
     */
    cursor?: TipoVehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoVehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoVehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoVehiculos.
     */
    distinct?: TipoVehiculoScalarFieldEnum | TipoVehiculoScalarFieldEnum[]
  }

  /**
   * TipoVehiculo create
   */
  export type TipoVehiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculo
     */
    select?: TipoVehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVehiculo
     */
    omit?: TipoVehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVehiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoVehiculo.
     */
    data: XOR<TipoVehiculoCreateInput, TipoVehiculoUncheckedCreateInput>
  }

  /**
   * TipoVehiculo createMany
   */
  export type TipoVehiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoVehiculos.
     */
    data: TipoVehiculoCreateManyInput | TipoVehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoVehiculo update
   */
  export type TipoVehiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculo
     */
    select?: TipoVehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVehiculo
     */
    omit?: TipoVehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVehiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoVehiculo.
     */
    data: XOR<TipoVehiculoUpdateInput, TipoVehiculoUncheckedUpdateInput>
    /**
     * Choose, which TipoVehiculo to update.
     */
    where: TipoVehiculoWhereUniqueInput
  }

  /**
   * TipoVehiculo updateMany
   */
  export type TipoVehiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoVehiculos.
     */
    data: XOR<TipoVehiculoUpdateManyMutationInput, TipoVehiculoUncheckedUpdateManyInput>
    /**
     * Filter which TipoVehiculos to update
     */
    where?: TipoVehiculoWhereInput
    /**
     * Limit how many TipoVehiculos to update.
     */
    limit?: number
  }

  /**
   * TipoVehiculo upsert
   */
  export type TipoVehiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculo
     */
    select?: TipoVehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVehiculo
     */
    omit?: TipoVehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVehiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoVehiculo to update in case it exists.
     */
    where: TipoVehiculoWhereUniqueInput
    /**
     * In case the TipoVehiculo found by the `where` argument doesn't exist, create a new TipoVehiculo with this data.
     */
    create: XOR<TipoVehiculoCreateInput, TipoVehiculoUncheckedCreateInput>
    /**
     * In case the TipoVehiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoVehiculoUpdateInput, TipoVehiculoUncheckedUpdateInput>
  }

  /**
   * TipoVehiculo delete
   */
  export type TipoVehiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculo
     */
    select?: TipoVehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVehiculo
     */
    omit?: TipoVehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVehiculoInclude<ExtArgs> | null
    /**
     * Filter which TipoVehiculo to delete.
     */
    where: TipoVehiculoWhereUniqueInput
  }

  /**
   * TipoVehiculo deleteMany
   */
  export type TipoVehiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoVehiculos to delete
     */
    where?: TipoVehiculoWhereInput
    /**
     * Limit how many TipoVehiculos to delete.
     */
    limit?: number
  }

  /**
   * TipoVehiculo.vehiculos
   */
  export type TipoVehiculo$vehiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    cursor?: VehiculoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * TipoVehiculo without action
   */
  export type TipoVehiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoVehiculo
     */
    select?: TipoVehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoVehiculo
     */
    omit?: TipoVehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoVehiculoInclude<ExtArgs> | null
  }


  /**
   * Model Vehiculo
   */

  export type AggregateVehiculo = {
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  export type VehiculoAvgAggregateOutputType = {
    id: number | null
    tipoId: number | null
  }

  export type VehiculoSumAggregateOutputType = {
    id: number | null
    tipoId: number | null
  }

  export type VehiculoMinAggregateOutputType = {
    id: number | null
    patente: string | null
    estado: string | null
    fotoUrl: string | null
    tipoId: number | null
  }

  export type VehiculoMaxAggregateOutputType = {
    id: number | null
    patente: string | null
    estado: string | null
    fotoUrl: string | null
    tipoId: number | null
  }

  export type VehiculoCountAggregateOutputType = {
    id: number
    patente: number
    estado: number
    fotoUrl: number
    tipoId: number
    _all: number
  }


  export type VehiculoAvgAggregateInputType = {
    id?: true
    tipoId?: true
  }

  export type VehiculoSumAggregateInputType = {
    id?: true
    tipoId?: true
  }

  export type VehiculoMinAggregateInputType = {
    id?: true
    patente?: true
    estado?: true
    fotoUrl?: true
    tipoId?: true
  }

  export type VehiculoMaxAggregateInputType = {
    id?: true
    patente?: true
    estado?: true
    fotoUrl?: true
    tipoId?: true
  }

  export type VehiculoCountAggregateInputType = {
    id?: true
    patente?: true
    estado?: true
    fotoUrl?: true
    tipoId?: true
    _all?: true
  }

  export type VehiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculo to aggregate.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehiculos
    **/
    _count?: true | VehiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculoMaxAggregateInputType
  }

  export type GetVehiculoAggregateType<T extends VehiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculo[P]>
      : GetScalarType<T[P], AggregateVehiculo[P]>
  }




  export type VehiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithAggregationInput | VehiculoOrderByWithAggregationInput[]
    by: VehiculoScalarFieldEnum[] | VehiculoScalarFieldEnum
    having?: VehiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculoCountAggregateInputType | true
    _avg?: VehiculoAvgAggregateInputType
    _sum?: VehiculoSumAggregateInputType
    _min?: VehiculoMinAggregateInputType
    _max?: VehiculoMaxAggregateInputType
  }

  export type VehiculoGroupByOutputType = {
    id: number
    patente: string
    estado: string
    fotoUrl: string
    tipoId: number
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  type GetVehiculoGroupByPayload<T extends VehiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
        }
      >
    >


  export type VehiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patente?: boolean
    estado?: boolean
    fotoUrl?: boolean
    tipoId?: boolean
    tipo?: boolean | TipoVehiculoDefaultArgs<ExtArgs>
    arriendos?: boolean | Vehiculo$arriendosArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculo"]>



  export type VehiculoSelectScalar = {
    id?: boolean
    patente?: boolean
    estado?: boolean
    fotoUrl?: boolean
    tipoId?: boolean
  }

  export type VehiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patente" | "estado" | "fotoUrl" | "tipoId", ExtArgs["result"]["vehiculo"]>
  export type VehiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoVehiculoDefaultArgs<ExtArgs>
    arriendos?: boolean | Vehiculo$arriendosArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VehiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehiculo"
    objects: {
      tipo: Prisma.$TipoVehiculoPayload<ExtArgs>
      arriendos: Prisma.$ArriendoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patente: string
      estado: string
      fotoUrl: string
      tipoId: number
    }, ExtArgs["result"]["vehiculo"]>
    composites: {}
  }

  type VehiculoGetPayload<S extends boolean | null | undefined | VehiculoDefaultArgs> = $Result.GetResult<Prisma.$VehiculoPayload, S>

  type VehiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculoCountAggregateInputType | true
    }

  export interface VehiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehiculo'], meta: { name: 'Vehiculo' } }
    /**
     * Find zero or one Vehiculo that matches the filter.
     * @param {VehiculoFindUniqueArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculoFindUniqueArgs>(args: SelectSubset<T, VehiculoFindUniqueArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculoFindUniqueOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculoFindFirstArgs>(args?: SelectSubset<T, VehiculoFindFirstArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany()
     * 
     * // Get first 10 Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehiculoFindManyArgs>(args?: SelectSubset<T, VehiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehiculo.
     * @param {VehiculoCreateArgs} args - Arguments to create a Vehiculo.
     * @example
     * // Create one Vehiculo
     * const Vehiculo = await prisma.vehiculo.create({
     *   data: {
     *     // ... data to create a Vehiculo
     *   }
     * })
     * 
     */
    create<T extends VehiculoCreateArgs>(args: SelectSubset<T, VehiculoCreateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehiculos.
     * @param {VehiculoCreateManyArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculoCreateManyArgs>(args?: SelectSubset<T, VehiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehiculo.
     * @param {VehiculoDeleteArgs} args - Arguments to delete one Vehiculo.
     * @example
     * // Delete one Vehiculo
     * const Vehiculo = await prisma.vehiculo.delete({
     *   where: {
     *     // ... filter to delete one Vehiculo
     *   }
     * })
     * 
     */
    delete<T extends VehiculoDeleteArgs>(args: SelectSubset<T, VehiculoDeleteArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehiculo.
     * @param {VehiculoUpdateArgs} args - Arguments to update one Vehiculo.
     * @example
     * // Update one Vehiculo
     * const vehiculo = await prisma.vehiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculoUpdateArgs>(args: SelectSubset<T, VehiculoUpdateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehiculos.
     * @param {VehiculoDeleteManyArgs} args - Arguments to filter Vehiculos to delete.
     * @example
     * // Delete a few Vehiculos
     * const { count } = await prisma.vehiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculoDeleteManyArgs>(args?: SelectSubset<T, VehiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculoUpdateManyArgs>(args: SelectSubset<T, VehiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehiculo.
     * @param {VehiculoUpsertArgs} args - Arguments to update or create a Vehiculo.
     * @example
     * // Update or create a Vehiculo
     * const vehiculo = await prisma.vehiculo.upsert({
     *   create: {
     *     // ... data to create a Vehiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehiculo we want to update
     *   }
     * })
     */
    upsert<T extends VehiculoUpsertArgs>(args: SelectSubset<T, VehiculoUpsertArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoCountArgs} args - Arguments to filter Vehiculos to count.
     * @example
     * // Count the number of Vehiculos
     * const count = await prisma.vehiculo.count({
     *   where: {
     *     // ... the filter for the Vehiculos we want to count
     *   }
     * })
    **/
    count<T extends VehiculoCountArgs>(
      args?: Subset<T, VehiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehiculoAggregateArgs>(args: Subset<T, VehiculoAggregateArgs>): Prisma.PrismaPromise<GetVehiculoAggregateType<T>>

    /**
     * Group by Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculoGroupByArgs['orderBy'] }
        : { orderBy?: VehiculoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehiculo model
   */
  readonly fields: VehiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends TipoVehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoVehiculoDefaultArgs<ExtArgs>>): Prisma__TipoVehiculoClient<$Result.GetResult<Prisma.$TipoVehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    arriendos<T extends Vehiculo$arriendosArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$arriendosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehiculo model
   */
  interface VehiculoFieldRefs {
    readonly id: FieldRef<"Vehiculo", 'Int'>
    readonly patente: FieldRef<"Vehiculo", 'String'>
    readonly estado: FieldRef<"Vehiculo", 'String'>
    readonly fotoUrl: FieldRef<"Vehiculo", 'String'>
    readonly tipoId: FieldRef<"Vehiculo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vehiculo findUnique
   */
  export type VehiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findUniqueOrThrow
   */
  export type VehiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findFirst
   */
  export type VehiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findFirstOrThrow
   */
  export type VehiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findMany
   */
  export type VehiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculos to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo create
   */
  export type VehiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehiculo.
     */
    data: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
  }

  /**
   * Vehiculo createMany
   */
  export type VehiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehiculo update
   */
  export type VehiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehiculo.
     */
    data: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
    /**
     * Choose, which Vehiculo to update.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo updateMany
   */
  export type VehiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
  }

  /**
   * Vehiculo upsert
   */
  export type VehiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehiculo to update in case it exists.
     */
    where: VehiculoWhereUniqueInput
    /**
     * In case the Vehiculo found by the `where` argument doesn't exist, create a new Vehiculo with this data.
     */
    create: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
    /**
     * In case the Vehiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
  }

  /**
   * Vehiculo delete
   */
  export type VehiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter which Vehiculo to delete.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo deleteMany
   */
  export type VehiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculos to delete
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to delete.
     */
    limit?: number
  }

  /**
   * Vehiculo.arriendos
   */
  export type Vehiculo$arriendosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    where?: ArriendoWhereInput
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    cursor?: ArriendoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArriendoScalarFieldEnum | ArriendoScalarFieldEnum[]
  }

  /**
   * Vehiculo without action
   */
  export type VehiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
  }


  /**
   * Model Arriendo
   */

  export type AggregateArriendo = {
    _count: ArriendoCountAggregateOutputType | null
    _avg: ArriendoAvgAggregateOutputType | null
    _sum: ArriendoSumAggregateOutputType | null
    _min: ArriendoMinAggregateOutputType | null
    _max: ArriendoMaxAggregateOutputType | null
  }

  export type ArriendoAvgAggregateOutputType = {
    id: number | null
    vehiculoId: number | null
    usuarioId: number | null
  }

  export type ArriendoSumAggregateOutputType = {
    id: number | null
    vehiculoId: number | null
    usuarioId: number | null
  }

  export type ArriendoMinAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaTermino: Date | null
    fechaEntrega: Date | null
    fechaRecepcion: Date | null
    fotosEntrega: string | null
    fotosRecepcion: string | null
    clienteRut: string | null
    clienteNombre: string | null
    vehiculoId: number | null
    usuarioId: number | null
  }

  export type ArriendoMaxAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaTermino: Date | null
    fechaEntrega: Date | null
    fechaRecepcion: Date | null
    fotosEntrega: string | null
    fotosRecepcion: string | null
    clienteRut: string | null
    clienteNombre: string | null
    vehiculoId: number | null
    usuarioId: number | null
  }

  export type ArriendoCountAggregateOutputType = {
    id: number
    fechaInicio: number
    fechaTermino: number
    fechaEntrega: number
    fechaRecepcion: number
    fotosEntrega: number
    fotosRecepcion: number
    clienteRut: number
    clienteNombre: number
    vehiculoId: number
    usuarioId: number
    _all: number
  }


  export type ArriendoAvgAggregateInputType = {
    id?: true
    vehiculoId?: true
    usuarioId?: true
  }

  export type ArriendoSumAggregateInputType = {
    id?: true
    vehiculoId?: true
    usuarioId?: true
  }

  export type ArriendoMinAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaTermino?: true
    fechaEntrega?: true
    fechaRecepcion?: true
    fotosEntrega?: true
    fotosRecepcion?: true
    clienteRut?: true
    clienteNombre?: true
    vehiculoId?: true
    usuarioId?: true
  }

  export type ArriendoMaxAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaTermino?: true
    fechaEntrega?: true
    fechaRecepcion?: true
    fotosEntrega?: true
    fotosRecepcion?: true
    clienteRut?: true
    clienteNombre?: true
    vehiculoId?: true
    usuarioId?: true
  }

  export type ArriendoCountAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaTermino?: true
    fechaEntrega?: true
    fechaRecepcion?: true
    fotosEntrega?: true
    fotosRecepcion?: true
    clienteRut?: true
    clienteNombre?: true
    vehiculoId?: true
    usuarioId?: true
    _all?: true
  }

  export type ArriendoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arriendo to aggregate.
     */
    where?: ArriendoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arriendos to fetch.
     */
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArriendoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arriendos
    **/
    _count?: true | ArriendoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArriendoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArriendoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArriendoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArriendoMaxAggregateInputType
  }

  export type GetArriendoAggregateType<T extends ArriendoAggregateArgs> = {
        [P in keyof T & keyof AggregateArriendo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArriendo[P]>
      : GetScalarType<T[P], AggregateArriendo[P]>
  }




  export type ArriendoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArriendoWhereInput
    orderBy?: ArriendoOrderByWithAggregationInput | ArriendoOrderByWithAggregationInput[]
    by: ArriendoScalarFieldEnum[] | ArriendoScalarFieldEnum
    having?: ArriendoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArriendoCountAggregateInputType | true
    _avg?: ArriendoAvgAggregateInputType
    _sum?: ArriendoSumAggregateInputType
    _min?: ArriendoMinAggregateInputType
    _max?: ArriendoMaxAggregateInputType
  }

  export type ArriendoGroupByOutputType = {
    id: number
    fechaInicio: Date
    fechaTermino: Date
    fechaEntrega: Date | null
    fechaRecepcion: Date | null
    fotosEntrega: string | null
    fotosRecepcion: string | null
    clienteRut: string
    clienteNombre: string
    vehiculoId: number
    usuarioId: number
    _count: ArriendoCountAggregateOutputType | null
    _avg: ArriendoAvgAggregateOutputType | null
    _sum: ArriendoSumAggregateOutputType | null
    _min: ArriendoMinAggregateOutputType | null
    _max: ArriendoMaxAggregateOutputType | null
  }

  type GetArriendoGroupByPayload<T extends ArriendoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArriendoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArriendoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArriendoGroupByOutputType[P]>
            : GetScalarType<T[P], ArriendoGroupByOutputType[P]>
        }
      >
    >


  export type ArriendoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaInicio?: boolean
    fechaTermino?: boolean
    fechaEntrega?: boolean
    fechaRecepcion?: boolean
    fotosEntrega?: boolean
    fotosRecepcion?: boolean
    clienteRut?: boolean
    clienteNombre?: boolean
    vehiculoId?: boolean
    usuarioId?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["arriendo"]>



  export type ArriendoSelectScalar = {
    id?: boolean
    fechaInicio?: boolean
    fechaTermino?: boolean
    fechaEntrega?: boolean
    fechaRecepcion?: boolean
    fotosEntrega?: boolean
    fotosRecepcion?: boolean
    clienteRut?: boolean
    clienteNombre?: boolean
    vehiculoId?: boolean
    usuarioId?: boolean
  }

  export type ArriendoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaInicio" | "fechaTermino" | "fechaEntrega" | "fechaRecepcion" | "fotosEntrega" | "fotosRecepcion" | "clienteRut" | "clienteNombre" | "vehiculoId" | "usuarioId", ExtArgs["result"]["arriendo"]>
  export type ArriendoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ArriendoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arriendo"
    objects: {
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaInicio: Date
      fechaTermino: Date
      fechaEntrega: Date | null
      fechaRecepcion: Date | null
      fotosEntrega: string | null
      fotosRecepcion: string | null
      clienteRut: string
      clienteNombre: string
      vehiculoId: number
      usuarioId: number
    }, ExtArgs["result"]["arriendo"]>
    composites: {}
  }

  type ArriendoGetPayload<S extends boolean | null | undefined | ArriendoDefaultArgs> = $Result.GetResult<Prisma.$ArriendoPayload, S>

  type ArriendoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArriendoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArriendoCountAggregateInputType | true
    }

  export interface ArriendoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arriendo'], meta: { name: 'Arriendo' } }
    /**
     * Find zero or one Arriendo that matches the filter.
     * @param {ArriendoFindUniqueArgs} args - Arguments to find a Arriendo
     * @example
     * // Get one Arriendo
     * const arriendo = await prisma.arriendo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArriendoFindUniqueArgs>(args: SelectSubset<T, ArriendoFindUniqueArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Arriendo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArriendoFindUniqueOrThrowArgs} args - Arguments to find a Arriendo
     * @example
     * // Get one Arriendo
     * const arriendo = await prisma.arriendo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArriendoFindUniqueOrThrowArgs>(args: SelectSubset<T, ArriendoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arriendo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoFindFirstArgs} args - Arguments to find a Arriendo
     * @example
     * // Get one Arriendo
     * const arriendo = await prisma.arriendo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArriendoFindFirstArgs>(args?: SelectSubset<T, ArriendoFindFirstArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arriendo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoFindFirstOrThrowArgs} args - Arguments to find a Arriendo
     * @example
     * // Get one Arriendo
     * const arriendo = await prisma.arriendo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArriendoFindFirstOrThrowArgs>(args?: SelectSubset<T, ArriendoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Arriendos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arriendos
     * const arriendos = await prisma.arriendo.findMany()
     * 
     * // Get first 10 Arriendos
     * const arriendos = await prisma.arriendo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arriendoWithIdOnly = await prisma.arriendo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArriendoFindManyArgs>(args?: SelectSubset<T, ArriendoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Arriendo.
     * @param {ArriendoCreateArgs} args - Arguments to create a Arriendo.
     * @example
     * // Create one Arriendo
     * const Arriendo = await prisma.arriendo.create({
     *   data: {
     *     // ... data to create a Arriendo
     *   }
     * })
     * 
     */
    create<T extends ArriendoCreateArgs>(args: SelectSubset<T, ArriendoCreateArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Arriendos.
     * @param {ArriendoCreateManyArgs} args - Arguments to create many Arriendos.
     * @example
     * // Create many Arriendos
     * const arriendo = await prisma.arriendo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArriendoCreateManyArgs>(args?: SelectSubset<T, ArriendoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Arriendo.
     * @param {ArriendoDeleteArgs} args - Arguments to delete one Arriendo.
     * @example
     * // Delete one Arriendo
     * const Arriendo = await prisma.arriendo.delete({
     *   where: {
     *     // ... filter to delete one Arriendo
     *   }
     * })
     * 
     */
    delete<T extends ArriendoDeleteArgs>(args: SelectSubset<T, ArriendoDeleteArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Arriendo.
     * @param {ArriendoUpdateArgs} args - Arguments to update one Arriendo.
     * @example
     * // Update one Arriendo
     * const arriendo = await prisma.arriendo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArriendoUpdateArgs>(args: SelectSubset<T, ArriendoUpdateArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Arriendos.
     * @param {ArriendoDeleteManyArgs} args - Arguments to filter Arriendos to delete.
     * @example
     * // Delete a few Arriendos
     * const { count } = await prisma.arriendo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArriendoDeleteManyArgs>(args?: SelectSubset<T, ArriendoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arriendos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arriendos
     * const arriendo = await prisma.arriendo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArriendoUpdateManyArgs>(args: SelectSubset<T, ArriendoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Arriendo.
     * @param {ArriendoUpsertArgs} args - Arguments to update or create a Arriendo.
     * @example
     * // Update or create a Arriendo
     * const arriendo = await prisma.arriendo.upsert({
     *   create: {
     *     // ... data to create a Arriendo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arriendo we want to update
     *   }
     * })
     */
    upsert<T extends ArriendoUpsertArgs>(args: SelectSubset<T, ArriendoUpsertArgs<ExtArgs>>): Prisma__ArriendoClient<$Result.GetResult<Prisma.$ArriendoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Arriendos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoCountArgs} args - Arguments to filter Arriendos to count.
     * @example
     * // Count the number of Arriendos
     * const count = await prisma.arriendo.count({
     *   where: {
     *     // ... the filter for the Arriendos we want to count
     *   }
     * })
    **/
    count<T extends ArriendoCountArgs>(
      args?: Subset<T, ArriendoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArriendoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arriendo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArriendoAggregateArgs>(args: Subset<T, ArriendoAggregateArgs>): Prisma.PrismaPromise<GetArriendoAggregateType<T>>

    /**
     * Group by Arriendo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArriendoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArriendoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArriendoGroupByArgs['orderBy'] }
        : { orderBy?: ArriendoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArriendoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArriendoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arriendo model
   */
  readonly fields: ArriendoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arriendo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArriendoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Arriendo model
   */
  interface ArriendoFieldRefs {
    readonly id: FieldRef<"Arriendo", 'Int'>
    readonly fechaInicio: FieldRef<"Arriendo", 'DateTime'>
    readonly fechaTermino: FieldRef<"Arriendo", 'DateTime'>
    readonly fechaEntrega: FieldRef<"Arriendo", 'DateTime'>
    readonly fechaRecepcion: FieldRef<"Arriendo", 'DateTime'>
    readonly fotosEntrega: FieldRef<"Arriendo", 'String'>
    readonly fotosRecepcion: FieldRef<"Arriendo", 'String'>
    readonly clienteRut: FieldRef<"Arriendo", 'String'>
    readonly clienteNombre: FieldRef<"Arriendo", 'String'>
    readonly vehiculoId: FieldRef<"Arriendo", 'Int'>
    readonly usuarioId: FieldRef<"Arriendo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Arriendo findUnique
   */
  export type ArriendoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter, which Arriendo to fetch.
     */
    where: ArriendoWhereUniqueInput
  }

  /**
   * Arriendo findUniqueOrThrow
   */
  export type ArriendoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter, which Arriendo to fetch.
     */
    where: ArriendoWhereUniqueInput
  }

  /**
   * Arriendo findFirst
   */
  export type ArriendoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter, which Arriendo to fetch.
     */
    where?: ArriendoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arriendos to fetch.
     */
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arriendos.
     */
    cursor?: ArriendoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arriendos.
     */
    distinct?: ArriendoScalarFieldEnum | ArriendoScalarFieldEnum[]
  }

  /**
   * Arriendo findFirstOrThrow
   */
  export type ArriendoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter, which Arriendo to fetch.
     */
    where?: ArriendoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arriendos to fetch.
     */
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arriendos.
     */
    cursor?: ArriendoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arriendos.
     */
    distinct?: ArriendoScalarFieldEnum | ArriendoScalarFieldEnum[]
  }

  /**
   * Arriendo findMany
   */
  export type ArriendoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter, which Arriendos to fetch.
     */
    where?: ArriendoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arriendos to fetch.
     */
    orderBy?: ArriendoOrderByWithRelationInput | ArriendoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arriendos.
     */
    cursor?: ArriendoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arriendos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arriendos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arriendos.
     */
    distinct?: ArriendoScalarFieldEnum | ArriendoScalarFieldEnum[]
  }

  /**
   * Arriendo create
   */
  export type ArriendoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * The data needed to create a Arriendo.
     */
    data: XOR<ArriendoCreateInput, ArriendoUncheckedCreateInput>
  }

  /**
   * Arriendo createMany
   */
  export type ArriendoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arriendos.
     */
    data: ArriendoCreateManyInput | ArriendoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arriendo update
   */
  export type ArriendoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * The data needed to update a Arriendo.
     */
    data: XOR<ArriendoUpdateInput, ArriendoUncheckedUpdateInput>
    /**
     * Choose, which Arriendo to update.
     */
    where: ArriendoWhereUniqueInput
  }

  /**
   * Arriendo updateMany
   */
  export type ArriendoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arriendos.
     */
    data: XOR<ArriendoUpdateManyMutationInput, ArriendoUncheckedUpdateManyInput>
    /**
     * Filter which Arriendos to update
     */
    where?: ArriendoWhereInput
    /**
     * Limit how many Arriendos to update.
     */
    limit?: number
  }

  /**
   * Arriendo upsert
   */
  export type ArriendoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * The filter to search for the Arriendo to update in case it exists.
     */
    where: ArriendoWhereUniqueInput
    /**
     * In case the Arriendo found by the `where` argument doesn't exist, create a new Arriendo with this data.
     */
    create: XOR<ArriendoCreateInput, ArriendoUncheckedCreateInput>
    /**
     * In case the Arriendo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArriendoUpdateInput, ArriendoUncheckedUpdateInput>
  }

  /**
   * Arriendo delete
   */
  export type ArriendoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
    /**
     * Filter which Arriendo to delete.
     */
    where: ArriendoWhereUniqueInput
  }

  /**
   * Arriendo deleteMany
   */
  export type ArriendoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arriendos to delete
     */
    where?: ArriendoWhereInput
    /**
     * Limit how many Arriendos to delete.
     */
    limit?: number
  }

  /**
   * Arriendo without action
   */
  export type ArriendoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arriendo
     */
    select?: ArriendoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arriendo
     */
    omit?: ArriendoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArriendoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PerfilScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    rut: 'rut',
    email: 'email',
    password: 'password',
    perfilId: 'perfilId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TipoVehiculoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    valorDiario: 'valorDiario'
  };

  export type TipoVehiculoScalarFieldEnum = (typeof TipoVehiculoScalarFieldEnum)[keyof typeof TipoVehiculoScalarFieldEnum]


  export const VehiculoScalarFieldEnum: {
    id: 'id',
    patente: 'patente',
    estado: 'estado',
    fotoUrl: 'fotoUrl',
    tipoId: 'tipoId'
  };

  export type VehiculoScalarFieldEnum = (typeof VehiculoScalarFieldEnum)[keyof typeof VehiculoScalarFieldEnum]


  export const ArriendoScalarFieldEnum: {
    id: 'id',
    fechaInicio: 'fechaInicio',
    fechaTermino: 'fechaTermino',
    fechaEntrega: 'fechaEntrega',
    fechaRecepcion: 'fechaRecepcion',
    fotosEntrega: 'fotosEntrega',
    fotosRecepcion: 'fotosRecepcion',
    clienteRut: 'clienteRut',
    clienteNombre: 'clienteNombre',
    vehiculoId: 'vehiculoId',
    usuarioId: 'usuarioId'
  };

  export type ArriendoScalarFieldEnum = (typeof ArriendoScalarFieldEnum)[keyof typeof ArriendoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const PerfilOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type PerfilOrderByRelevanceFieldEnum = (typeof PerfilOrderByRelevanceFieldEnum)[keyof typeof PerfilOrderByRelevanceFieldEnum]


  export const UsuarioOrderByRelevanceFieldEnum: {
    rut: 'rut',
    email: 'email',
    password: 'password'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const TipoVehiculoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type TipoVehiculoOrderByRelevanceFieldEnum = (typeof TipoVehiculoOrderByRelevanceFieldEnum)[keyof typeof TipoVehiculoOrderByRelevanceFieldEnum]


  export const VehiculoOrderByRelevanceFieldEnum: {
    patente: 'patente',
    estado: 'estado',
    fotoUrl: 'fotoUrl'
  };

  export type VehiculoOrderByRelevanceFieldEnum = (typeof VehiculoOrderByRelevanceFieldEnum)[keyof typeof VehiculoOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ArriendoOrderByRelevanceFieldEnum: {
    fotosEntrega: 'fotosEntrega',
    fotosRecepcion: 'fotosRecepcion',
    clienteRut: 'clienteRut',
    clienteNombre: 'clienteNombre'
  };

  export type ArriendoOrderByRelevanceFieldEnum = (typeof ArriendoOrderByRelevanceFieldEnum)[keyof typeof ArriendoOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type PerfilWhereInput = {
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    id?: IntFilter<"Perfil"> | number
    nombre?: StringFilter<"Perfil"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type PerfilOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    _relevance?: PerfilOrderByRelevanceInput
  }

  export type PerfilWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    nombre?: StringFilter<"Perfil"> | string
    usuarios?: UsuarioListRelationFilter
  }, "id">

  export type PerfilOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: PerfilCountOrderByAggregateInput
    _avg?: PerfilAvgOrderByAggregateInput
    _max?: PerfilMaxOrderByAggregateInput
    _min?: PerfilMinOrderByAggregateInput
    _sum?: PerfilSumOrderByAggregateInput
  }

  export type PerfilScalarWhereWithAggregatesInput = {
    AND?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    OR?: PerfilScalarWhereWithAggregatesInput[]
    NOT?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Perfil"> | number
    nombre?: StringWithAggregatesFilter<"Perfil"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    rut?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    perfilId?: IntFilter<"Usuario"> | number
    perfil?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    arriendos?: ArriendoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    rut?: SortOrder
    email?: SortOrder
    password?: SortOrder
    perfilId?: SortOrder
    perfil?: PerfilOrderByWithRelationInput
    arriendos?: ArriendoOrderByRelationAggregateInput
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rut?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    perfilId?: IntFilter<"Usuario"> | number
    perfil?: XOR<PerfilScalarRelationFilter, PerfilWhereInput>
    arriendos?: ArriendoListRelationFilter
  }, "id" | "rut" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    rut?: SortOrder
    email?: SortOrder
    password?: SortOrder
    perfilId?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    rut?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    perfilId?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type TipoVehiculoWhereInput = {
    AND?: TipoVehiculoWhereInput | TipoVehiculoWhereInput[]
    OR?: TipoVehiculoWhereInput[]
    NOT?: TipoVehiculoWhereInput | TipoVehiculoWhereInput[]
    id?: IntFilter<"TipoVehiculo"> | number
    nombre?: StringFilter<"TipoVehiculo"> | string
    valorDiario?: IntFilter<"TipoVehiculo"> | number
    vehiculos?: VehiculoListRelationFilter
  }

  export type TipoVehiculoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    valorDiario?: SortOrder
    vehiculos?: VehiculoOrderByRelationAggregateInput
    _relevance?: TipoVehiculoOrderByRelevanceInput
  }

  export type TipoVehiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoVehiculoWhereInput | TipoVehiculoWhereInput[]
    OR?: TipoVehiculoWhereInput[]
    NOT?: TipoVehiculoWhereInput | TipoVehiculoWhereInput[]
    nombre?: StringFilter<"TipoVehiculo"> | string
    valorDiario?: IntFilter<"TipoVehiculo"> | number
    vehiculos?: VehiculoListRelationFilter
  }, "id">

  export type TipoVehiculoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    valorDiario?: SortOrder
    _count?: TipoVehiculoCountOrderByAggregateInput
    _avg?: TipoVehiculoAvgOrderByAggregateInput
    _max?: TipoVehiculoMaxOrderByAggregateInput
    _min?: TipoVehiculoMinOrderByAggregateInput
    _sum?: TipoVehiculoSumOrderByAggregateInput
  }

  export type TipoVehiculoScalarWhereWithAggregatesInput = {
    AND?: TipoVehiculoScalarWhereWithAggregatesInput | TipoVehiculoScalarWhereWithAggregatesInput[]
    OR?: TipoVehiculoScalarWhereWithAggregatesInput[]
    NOT?: TipoVehiculoScalarWhereWithAggregatesInput | TipoVehiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoVehiculo"> | number
    nombre?: StringWithAggregatesFilter<"TipoVehiculo"> | string
    valorDiario?: IntWithAggregatesFilter<"TipoVehiculo"> | number
  }

  export type VehiculoWhereInput = {
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    id?: IntFilter<"Vehiculo"> | number
    patente?: StringFilter<"Vehiculo"> | string
    estado?: StringFilter<"Vehiculo"> | string
    fotoUrl?: StringFilter<"Vehiculo"> | string
    tipoId?: IntFilter<"Vehiculo"> | number
    tipo?: XOR<TipoVehiculoScalarRelationFilter, TipoVehiculoWhereInput>
    arriendos?: ArriendoListRelationFilter
  }

  export type VehiculoOrderByWithRelationInput = {
    id?: SortOrder
    patente?: SortOrder
    estado?: SortOrder
    fotoUrl?: SortOrder
    tipoId?: SortOrder
    tipo?: TipoVehiculoOrderByWithRelationInput
    arriendos?: ArriendoOrderByRelationAggregateInput
    _relevance?: VehiculoOrderByRelevanceInput
  }

  export type VehiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    patente?: string
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    estado?: StringFilter<"Vehiculo"> | string
    fotoUrl?: StringFilter<"Vehiculo"> | string
    tipoId?: IntFilter<"Vehiculo"> | number
    tipo?: XOR<TipoVehiculoScalarRelationFilter, TipoVehiculoWhereInput>
    arriendos?: ArriendoListRelationFilter
  }, "id" | "patente">

  export type VehiculoOrderByWithAggregationInput = {
    id?: SortOrder
    patente?: SortOrder
    estado?: SortOrder
    fotoUrl?: SortOrder
    tipoId?: SortOrder
    _count?: VehiculoCountOrderByAggregateInput
    _avg?: VehiculoAvgOrderByAggregateInput
    _max?: VehiculoMaxOrderByAggregateInput
    _min?: VehiculoMinOrderByAggregateInput
    _sum?: VehiculoSumOrderByAggregateInput
  }

  export type VehiculoScalarWhereWithAggregatesInput = {
    AND?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    OR?: VehiculoScalarWhereWithAggregatesInput[]
    NOT?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehiculo"> | number
    patente?: StringWithAggregatesFilter<"Vehiculo"> | string
    estado?: StringWithAggregatesFilter<"Vehiculo"> | string
    fotoUrl?: StringWithAggregatesFilter<"Vehiculo"> | string
    tipoId?: IntWithAggregatesFilter<"Vehiculo"> | number
  }

  export type ArriendoWhereInput = {
    AND?: ArriendoWhereInput | ArriendoWhereInput[]
    OR?: ArriendoWhereInput[]
    NOT?: ArriendoWhereInput | ArriendoWhereInput[]
    id?: IntFilter<"Arriendo"> | number
    fechaInicio?: DateTimeFilter<"Arriendo"> | Date | string
    fechaTermino?: DateTimeFilter<"Arriendo"> | Date | string
    fechaEntrega?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fechaRecepcion?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fotosEntrega?: StringNullableFilter<"Arriendo"> | string | null
    fotosRecepcion?: StringNullableFilter<"Arriendo"> | string | null
    clienteRut?: StringFilter<"Arriendo"> | string
    clienteNombre?: StringFilter<"Arriendo"> | string
    vehiculoId?: IntFilter<"Arriendo"> | number
    usuarioId?: IntFilter<"Arriendo"> | number
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ArriendoOrderByWithRelationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaTermino?: SortOrder
    fechaEntrega?: SortOrderInput | SortOrder
    fechaRecepcion?: SortOrderInput | SortOrder
    fotosEntrega?: SortOrderInput | SortOrder
    fotosRecepcion?: SortOrderInput | SortOrder
    clienteRut?: SortOrder
    clienteNombre?: SortOrder
    vehiculoId?: SortOrder
    usuarioId?: SortOrder
    vehiculo?: VehiculoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    _relevance?: ArriendoOrderByRelevanceInput
  }

  export type ArriendoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArriendoWhereInput | ArriendoWhereInput[]
    OR?: ArriendoWhereInput[]
    NOT?: ArriendoWhereInput | ArriendoWhereInput[]
    fechaInicio?: DateTimeFilter<"Arriendo"> | Date | string
    fechaTermino?: DateTimeFilter<"Arriendo"> | Date | string
    fechaEntrega?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fechaRecepcion?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fotosEntrega?: StringNullableFilter<"Arriendo"> | string | null
    fotosRecepcion?: StringNullableFilter<"Arriendo"> | string | null
    clienteRut?: StringFilter<"Arriendo"> | string
    clienteNombre?: StringFilter<"Arriendo"> | string
    vehiculoId?: IntFilter<"Arriendo"> | number
    usuarioId?: IntFilter<"Arriendo"> | number
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type ArriendoOrderByWithAggregationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaTermino?: SortOrder
    fechaEntrega?: SortOrderInput | SortOrder
    fechaRecepcion?: SortOrderInput | SortOrder
    fotosEntrega?: SortOrderInput | SortOrder
    fotosRecepcion?: SortOrderInput | SortOrder
    clienteRut?: SortOrder
    clienteNombre?: SortOrder
    vehiculoId?: SortOrder
    usuarioId?: SortOrder
    _count?: ArriendoCountOrderByAggregateInput
    _avg?: ArriendoAvgOrderByAggregateInput
    _max?: ArriendoMaxOrderByAggregateInput
    _min?: ArriendoMinOrderByAggregateInput
    _sum?: ArriendoSumOrderByAggregateInput
  }

  export type ArriendoScalarWhereWithAggregatesInput = {
    AND?: ArriendoScalarWhereWithAggregatesInput | ArriendoScalarWhereWithAggregatesInput[]
    OR?: ArriendoScalarWhereWithAggregatesInput[]
    NOT?: ArriendoScalarWhereWithAggregatesInput | ArriendoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Arriendo"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Arriendo"> | Date | string
    fechaTermino?: DateTimeWithAggregatesFilter<"Arriendo"> | Date | string
    fechaEntrega?: DateTimeNullableWithAggregatesFilter<"Arriendo"> | Date | string | null
    fechaRecepcion?: DateTimeNullableWithAggregatesFilter<"Arriendo"> | Date | string | null
    fotosEntrega?: StringNullableWithAggregatesFilter<"Arriendo"> | string | null
    fotosRecepcion?: StringNullableWithAggregatesFilter<"Arriendo"> | string | null
    clienteRut?: StringWithAggregatesFilter<"Arriendo"> | string
    clienteNombre?: StringWithAggregatesFilter<"Arriendo"> | string
    vehiculoId?: IntWithAggregatesFilter<"Arriendo"> | number
    usuarioId?: IntWithAggregatesFilter<"Arriendo"> | number
  }

  export type PerfilCreateInput = {
    nombre: string
    usuarios?: UsuarioCreateNestedManyWithoutPerfilInput
  }

  export type PerfilUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutPerfilInput
  }

  export type PerfilUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutPerfilNestedInput
  }

  export type PerfilUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutPerfilNestedInput
  }

  export type PerfilCreateManyInput = {
    id?: number
    nombre: string
  }

  export type PerfilUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    rut: string
    email: string
    password: string
    perfil: PerfilCreateNestedOneWithoutUsuariosInput
    arriendos?: ArriendoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    rut: string
    email: string
    password: string
    perfilId: number
    arriendos?: ArriendoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    rut?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneRequiredWithoutUsuariosNestedInput
    arriendos?: ArriendoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfilId?: IntFieldUpdateOperationsInput | number
    arriendos?: ArriendoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    rut: string
    email: string
    password: string
    perfilId: number
  }

  export type UsuarioUpdateManyMutationInput = {
    rut?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfilId?: IntFieldUpdateOperationsInput | number
  }

  export type TipoVehiculoCreateInput = {
    nombre: string
    valorDiario: number
    vehiculos?: VehiculoCreateNestedManyWithoutTipoInput
  }

  export type TipoVehiculoUncheckedCreateInput = {
    id?: number
    nombre: string
    valorDiario: number
    vehiculos?: VehiculoUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoVehiculoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    vehiculos?: VehiculoUpdateManyWithoutTipoNestedInput
  }

  export type TipoVehiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
    vehiculos?: VehiculoUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TipoVehiculoCreateManyInput = {
    id?: number
    nombre: string
    valorDiario: number
  }

  export type TipoVehiculoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
  }

  export type TipoVehiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
  }

  export type VehiculoCreateInput = {
    patente: string
    estado: string
    fotoUrl: string
    tipo: TipoVehiculoCreateNestedOneWithoutVehiculosInput
    arriendos?: ArriendoCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateInput = {
    id?: number
    patente: string
    estado: string
    fotoUrl: string
    tipoId: number
    arriendos?: ArriendoUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUpdateInput = {
    patente?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    tipo?: TipoVehiculoUpdateOneRequiredWithoutVehiculosNestedInput
    arriendos?: ArriendoUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
    arriendos?: ArriendoUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoCreateManyInput = {
    id?: number
    patente: string
    estado: string
    fotoUrl: string
    tipoId: number
  }

  export type VehiculoUpdateManyMutationInput = {
    patente?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type VehiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
  }

  export type ArriendoCreateInput = {
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaEntrega?: Date | string | null
    fechaRecepcion?: Date | string | null
    fotosEntrega?: string | null
    fotosRecepcion?: string | null
    clienteRut: string
    clienteNombre: string
    vehiculo: VehiculoCreateNestedOneWithoutArriendosInput
    usuario: UsuarioCreateNestedOneWithoutArriendosInput
  }

  export type ArriendoUncheckedCreateInput = {
    id?: number
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaEntrega?: Date | string | null
    fechaRecepcion?: Date | string | null
    fotosEntrega?: string | null
    fotosRecepcion?: string | null
    clienteRut: string
    clienteNombre: string
    vehiculoId: number
    usuarioId: number
  }

  export type ArriendoUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotosEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotosRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    clienteRut?: StringFieldUpdateOperationsInput | string
    clienteNombre?: StringFieldUpdateOperationsInput | string
    vehiculo?: VehiculoUpdateOneRequiredWithoutArriendosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutArriendosNestedInput
  }

  export type ArriendoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotosEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotosRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    clienteRut?: StringFieldUpdateOperationsInput | string
    clienteNombre?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArriendoCreateManyInput = {
    id?: number
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaEntrega?: Date | string | null
    fechaRecepcion?: Date | string | null
    fotosEntrega?: string | null
    fotosRecepcion?: string | null
    clienteRut: string
    clienteNombre: string
    vehiculoId: number
    usuarioId: number
  }

  export type ArriendoUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotosEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotosRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    clienteRut?: StringFieldUpdateOperationsInput | string
    clienteNombre?: StringFieldUpdateOperationsInput | string
  }

  export type ArriendoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotosEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotosRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    clienteRut?: StringFieldUpdateOperationsInput | string
    clienteNombre?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerfilOrderByRelevanceInput = {
    fields: PerfilOrderByRelevanceFieldEnum | PerfilOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PerfilCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PerfilAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PerfilMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PerfilMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type PerfilSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PerfilScalarRelationFilter = {
    is?: PerfilWhereInput
    isNot?: PerfilWhereInput
  }

  export type ArriendoListRelationFilter = {
    every?: ArriendoWhereInput
    some?: ArriendoWhereInput
    none?: ArriendoWhereInput
  }

  export type ArriendoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    rut?: SortOrder
    email?: SortOrder
    password?: SortOrder
    perfilId?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    perfilId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    rut?: SortOrder
    email?: SortOrder
    password?: SortOrder
    perfilId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    rut?: SortOrder
    email?: SortOrder
    password?: SortOrder
    perfilId?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    perfilId?: SortOrder
  }

  export type VehiculoListRelationFilter = {
    every?: VehiculoWhereInput
    some?: VehiculoWhereInput
    none?: VehiculoWhereInput
  }

  export type VehiculoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoVehiculoOrderByRelevanceInput = {
    fields: TipoVehiculoOrderByRelevanceFieldEnum | TipoVehiculoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TipoVehiculoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    valorDiario?: SortOrder
  }

  export type TipoVehiculoAvgOrderByAggregateInput = {
    id?: SortOrder
    valorDiario?: SortOrder
  }

  export type TipoVehiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    valorDiario?: SortOrder
  }

  export type TipoVehiculoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    valorDiario?: SortOrder
  }

  export type TipoVehiculoSumOrderByAggregateInput = {
    id?: SortOrder
    valorDiario?: SortOrder
  }

  export type TipoVehiculoScalarRelationFilter = {
    is?: TipoVehiculoWhereInput
    isNot?: TipoVehiculoWhereInput
  }

  export type VehiculoOrderByRelevanceInput = {
    fields: VehiculoOrderByRelevanceFieldEnum | VehiculoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehiculoCountOrderByAggregateInput = {
    id?: SortOrder
    patente?: SortOrder
    estado?: SortOrder
    fotoUrl?: SortOrder
    tipoId?: SortOrder
  }

  export type VehiculoAvgOrderByAggregateInput = {
    id?: SortOrder
    tipoId?: SortOrder
  }

  export type VehiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    patente?: SortOrder
    estado?: SortOrder
    fotoUrl?: SortOrder
    tipoId?: SortOrder
  }

  export type VehiculoMinOrderByAggregateInput = {
    id?: SortOrder
    patente?: SortOrder
    estado?: SortOrder
    fotoUrl?: SortOrder
    tipoId?: SortOrder
  }

  export type VehiculoSumOrderByAggregateInput = {
    id?: SortOrder
    tipoId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VehiculoScalarRelationFilter = {
    is?: VehiculoWhereInput
    isNot?: VehiculoWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArriendoOrderByRelevanceInput = {
    fields: ArriendoOrderByRelevanceFieldEnum | ArriendoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ArriendoCountOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaTermino?: SortOrder
    fechaEntrega?: SortOrder
    fechaRecepcion?: SortOrder
    fotosEntrega?: SortOrder
    fotosRecepcion?: SortOrder
    clienteRut?: SortOrder
    clienteNombre?: SortOrder
    vehiculoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ArriendoAvgOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ArriendoMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaTermino?: SortOrder
    fechaEntrega?: SortOrder
    fechaRecepcion?: SortOrder
    fotosEntrega?: SortOrder
    fotosRecepcion?: SortOrder
    clienteRut?: SortOrder
    clienteNombre?: SortOrder
    vehiculoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ArriendoMinOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaTermino?: SortOrder
    fechaEntrega?: SortOrder
    fechaRecepcion?: SortOrder
    fotosEntrega?: SortOrder
    fotosRecepcion?: SortOrder
    clienteRut?: SortOrder
    clienteNombre?: SortOrder
    vehiculoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ArriendoSumOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsuarioCreateNestedManyWithoutPerfilInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutPerfilInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsuarioUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPerfilInput | UsuarioUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPerfilInput | UsuarioUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPerfilInput | UsuarioUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutPerfilNestedInput = {
    create?: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput> | UsuarioCreateWithoutPerfilInput[] | UsuarioUncheckedCreateWithoutPerfilInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutPerfilInput | UsuarioCreateOrConnectWithoutPerfilInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutPerfilInput | UsuarioUpsertWithWhereUniqueWithoutPerfilInput[]
    createMany?: UsuarioCreateManyPerfilInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutPerfilInput | UsuarioUpdateWithWhereUniqueWithoutPerfilInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutPerfilInput | UsuarioUpdateManyWithWhereWithoutPerfilInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PerfilCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuariosInput
    connect?: PerfilWhereUniqueInput
  }

  export type ArriendoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput> | ArriendoCreateWithoutUsuarioInput[] | ArriendoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutUsuarioInput | ArriendoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ArriendoCreateManyUsuarioInputEnvelope
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
  }

  export type ArriendoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput> | ArriendoCreateWithoutUsuarioInput[] | ArriendoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutUsuarioInput | ArriendoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ArriendoCreateManyUsuarioInputEnvelope
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
  }

  export type PerfilUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUsuariosInput
    upsert?: PerfilUpsertWithoutUsuariosInput
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutUsuariosInput, PerfilUpdateWithoutUsuariosInput>, PerfilUncheckedUpdateWithoutUsuariosInput>
  }

  export type ArriendoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput> | ArriendoCreateWithoutUsuarioInput[] | ArriendoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutUsuarioInput | ArriendoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ArriendoUpsertWithWhereUniqueWithoutUsuarioInput | ArriendoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ArriendoCreateManyUsuarioInputEnvelope
    set?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    disconnect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    delete?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    update?: ArriendoUpdateWithWhereUniqueWithoutUsuarioInput | ArriendoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ArriendoUpdateManyWithWhereWithoutUsuarioInput | ArriendoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
  }

  export type ArriendoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput> | ArriendoCreateWithoutUsuarioInput[] | ArriendoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutUsuarioInput | ArriendoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ArriendoUpsertWithWhereUniqueWithoutUsuarioInput | ArriendoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ArriendoCreateManyUsuarioInputEnvelope
    set?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    disconnect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    delete?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    update?: ArriendoUpdateWithWhereUniqueWithoutUsuarioInput | ArriendoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ArriendoUpdateManyWithWhereWithoutUsuarioInput | ArriendoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
  }

  export type VehiculoCreateNestedManyWithoutTipoInput = {
    create?: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput> | VehiculoCreateWithoutTipoInput[] | VehiculoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTipoInput | VehiculoCreateOrConnectWithoutTipoInput[]
    createMany?: VehiculoCreateManyTipoInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type VehiculoUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput> | VehiculoCreateWithoutTipoInput[] | VehiculoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTipoInput | VehiculoCreateOrConnectWithoutTipoInput[]
    createMany?: VehiculoCreateManyTipoInputEnvelope
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
  }

  export type VehiculoUpdateManyWithoutTipoNestedInput = {
    create?: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput> | VehiculoCreateWithoutTipoInput[] | VehiculoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTipoInput | VehiculoCreateOrConnectWithoutTipoInput[]
    upsert?: VehiculoUpsertWithWhereUniqueWithoutTipoInput | VehiculoUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: VehiculoCreateManyTipoInputEnvelope
    set?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    disconnect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    delete?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    update?: VehiculoUpdateWithWhereUniqueWithoutTipoInput | VehiculoUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: VehiculoUpdateManyWithWhereWithoutTipoInput | VehiculoUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
  }

  export type VehiculoUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput> | VehiculoCreateWithoutTipoInput[] | VehiculoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: VehiculoCreateOrConnectWithoutTipoInput | VehiculoCreateOrConnectWithoutTipoInput[]
    upsert?: VehiculoUpsertWithWhereUniqueWithoutTipoInput | VehiculoUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: VehiculoCreateManyTipoInputEnvelope
    set?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    disconnect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    delete?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    connect?: VehiculoWhereUniqueInput | VehiculoWhereUniqueInput[]
    update?: VehiculoUpdateWithWhereUniqueWithoutTipoInput | VehiculoUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: VehiculoUpdateManyWithWhereWithoutTipoInput | VehiculoUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
  }

  export type TipoVehiculoCreateNestedOneWithoutVehiculosInput = {
    create?: XOR<TipoVehiculoCreateWithoutVehiculosInput, TipoVehiculoUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: TipoVehiculoCreateOrConnectWithoutVehiculosInput
    connect?: TipoVehiculoWhereUniqueInput
  }

  export type ArriendoCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput> | ArriendoCreateWithoutVehiculoInput[] | ArriendoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutVehiculoInput | ArriendoCreateOrConnectWithoutVehiculoInput[]
    createMany?: ArriendoCreateManyVehiculoInputEnvelope
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
  }

  export type ArriendoUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput> | ArriendoCreateWithoutVehiculoInput[] | ArriendoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutVehiculoInput | ArriendoCreateOrConnectWithoutVehiculoInput[]
    createMany?: ArriendoCreateManyVehiculoInputEnvelope
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
  }

  export type TipoVehiculoUpdateOneRequiredWithoutVehiculosNestedInput = {
    create?: XOR<TipoVehiculoCreateWithoutVehiculosInput, TipoVehiculoUncheckedCreateWithoutVehiculosInput>
    connectOrCreate?: TipoVehiculoCreateOrConnectWithoutVehiculosInput
    upsert?: TipoVehiculoUpsertWithoutVehiculosInput
    connect?: TipoVehiculoWhereUniqueInput
    update?: XOR<XOR<TipoVehiculoUpdateToOneWithWhereWithoutVehiculosInput, TipoVehiculoUpdateWithoutVehiculosInput>, TipoVehiculoUncheckedUpdateWithoutVehiculosInput>
  }

  export type ArriendoUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput> | ArriendoCreateWithoutVehiculoInput[] | ArriendoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutVehiculoInput | ArriendoCreateOrConnectWithoutVehiculoInput[]
    upsert?: ArriendoUpsertWithWhereUniqueWithoutVehiculoInput | ArriendoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ArriendoCreateManyVehiculoInputEnvelope
    set?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    disconnect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    delete?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    update?: ArriendoUpdateWithWhereUniqueWithoutVehiculoInput | ArriendoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ArriendoUpdateManyWithWhereWithoutVehiculoInput | ArriendoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
  }

  export type ArriendoUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput> | ArriendoCreateWithoutVehiculoInput[] | ArriendoUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ArriendoCreateOrConnectWithoutVehiculoInput | ArriendoCreateOrConnectWithoutVehiculoInput[]
    upsert?: ArriendoUpsertWithWhereUniqueWithoutVehiculoInput | ArriendoUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ArriendoCreateManyVehiculoInputEnvelope
    set?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    disconnect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    delete?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    connect?: ArriendoWhereUniqueInput | ArriendoWhereUniqueInput[]
    update?: ArriendoUpdateWithWhereUniqueWithoutVehiculoInput | ArriendoUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ArriendoUpdateManyWithWhereWithoutVehiculoInput | ArriendoUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
  }

  export type VehiculoCreateNestedOneWithoutArriendosInput = {
    create?: XOR<VehiculoCreateWithoutArriendosInput, VehiculoUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutArriendosInput
    connect?: VehiculoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutArriendosInput = {
    create?: XOR<UsuarioCreateWithoutArriendosInput, UsuarioUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutArriendosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VehiculoUpdateOneRequiredWithoutArriendosNestedInput = {
    create?: XOR<VehiculoCreateWithoutArriendosInput, VehiculoUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutArriendosInput
    upsert?: VehiculoUpsertWithoutArriendosInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutArriendosInput, VehiculoUpdateWithoutArriendosInput>, VehiculoUncheckedUpdateWithoutArriendosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutArriendosNestedInput = {
    create?: XOR<UsuarioCreateWithoutArriendosInput, UsuarioUncheckedCreateWithoutArriendosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutArriendosInput
    upsert?: UsuarioUpsertWithoutArriendosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutArriendosInput, UsuarioUpdateWithoutArriendosInput>, UsuarioUncheckedUpdateWithoutArriendosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutPerfilInput = {
    rut: string
    email: string
    password: string
    arriendos?: ArriendoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPerfilInput = {
    id?: number
    rut: string
    email: string
    password: string
    arriendos?: ArriendoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
  }

  export type UsuarioCreateManyPerfilInputEnvelope = {
    data: UsuarioCreateManyPerfilInput | UsuarioCreateManyPerfilInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutPerfilInput, UsuarioUncheckedUpdateWithoutPerfilInput>
    create: XOR<UsuarioCreateWithoutPerfilInput, UsuarioUncheckedCreateWithoutPerfilInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutPerfilInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutPerfilInput, UsuarioUncheckedUpdateWithoutPerfilInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutPerfilInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutPerfilInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    rut?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    perfilId?: IntFilter<"Usuario"> | number
  }

  export type PerfilCreateWithoutUsuariosInput = {
    nombre: string
  }

  export type PerfilUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
  }

  export type PerfilCreateOrConnectWithoutUsuariosInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
  }

  export type ArriendoCreateWithoutUsuarioInput = {
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaEntrega?: Date | string | null
    fechaRecepcion?: Date | string | null
    fotosEntrega?: string | null
    fotosRecepcion?: string | null
    clienteRut: string
    clienteNombre: string
    vehiculo: VehiculoCreateNestedOneWithoutArriendosInput
  }

  export type ArriendoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaEntrega?: Date | string | null
    fechaRecepcion?: Date | string | null
    fotosEntrega?: string | null
    fotosRecepcion?: string | null
    clienteRut: string
    clienteNombre: string
    vehiculoId: number
  }

  export type ArriendoCreateOrConnectWithoutUsuarioInput = {
    where: ArriendoWhereUniqueInput
    create: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput>
  }

  export type ArriendoCreateManyUsuarioInputEnvelope = {
    data: ArriendoCreateManyUsuarioInput | ArriendoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PerfilUpsertWithoutUsuariosInput = {
    update: XOR<PerfilUpdateWithoutUsuariosInput, PerfilUncheckedUpdateWithoutUsuariosInput>
    create: XOR<PerfilCreateWithoutUsuariosInput, PerfilUncheckedCreateWithoutUsuariosInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutUsuariosInput, PerfilUncheckedUpdateWithoutUsuariosInput>
  }

  export type PerfilUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ArriendoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ArriendoWhereUniqueInput
    update: XOR<ArriendoUpdateWithoutUsuarioInput, ArriendoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ArriendoCreateWithoutUsuarioInput, ArriendoUncheckedCreateWithoutUsuarioInput>
  }

  export type ArriendoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ArriendoWhereUniqueInput
    data: XOR<ArriendoUpdateWithoutUsuarioInput, ArriendoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ArriendoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ArriendoScalarWhereInput
    data: XOR<ArriendoUpdateManyMutationInput, ArriendoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ArriendoScalarWhereInput = {
    AND?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
    OR?: ArriendoScalarWhereInput[]
    NOT?: ArriendoScalarWhereInput | ArriendoScalarWhereInput[]
    id?: IntFilter<"Arriendo"> | number
    fechaInicio?: DateTimeFilter<"Arriendo"> | Date | string
    fechaTermino?: DateTimeFilter<"Arriendo"> | Date | string
    fechaEntrega?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fechaRecepcion?: DateTimeNullableFilter<"Arriendo"> | Date | string | null
    fotosEntrega?: StringNullableFilter<"Arriendo"> | string | null
    fotosRecepcion?: StringNullableFilter<"Arriendo"> | string | null
    clienteRut?: StringFilter<"Arriendo"> | string
    clienteNombre?: StringFilter<"Arriendo"> | string
    vehiculoId?: IntFilter<"Arriendo"> | number
    usuarioId?: IntFilter<"Arriendo"> | number
  }

  export type VehiculoCreateWithoutTipoInput = {
    patente: string
    estado: string
    fotoUrl: string
    arriendos?: ArriendoCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutTipoInput = {
    id?: number
    patente: string
    estado: string
    fotoUrl: string
    arriendos?: ArriendoUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutTipoInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput>
  }

  export type VehiculoCreateManyTipoInputEnvelope = {
    data: VehiculoCreateManyTipoInput | VehiculoCreateManyTipoInput[]
    skipDuplicates?: boolean
  }

  export type VehiculoUpsertWithWhereUniqueWithoutTipoInput = {
    where: VehiculoWhereUniqueInput
    update: XOR<VehiculoUpdateWithoutTipoInput, VehiculoUncheckedUpdateWithoutTipoInput>
    create: XOR<VehiculoCreateWithoutTipoInput, VehiculoUncheckedCreateWithoutTipoInput>
  }

  export type VehiculoUpdateWithWhereUniqueWithoutTipoInput = {
    where: VehiculoWhereUniqueInput
    data: XOR<VehiculoUpdateWithoutTipoInput, VehiculoUncheckedUpdateWithoutTipoInput>
  }

  export type VehiculoUpdateManyWithWhereWithoutTipoInput = {
    where: VehiculoScalarWhereInput
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyWithoutTipoInput>
  }

  export type VehiculoScalarWhereInput = {
    AND?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
    OR?: VehiculoScalarWhereInput[]
    NOT?: VehiculoScalarWhereInput | VehiculoScalarWhereInput[]
    id?: IntFilter<"Vehiculo"> | number
    patente?: StringFilter<"Vehiculo"> | string
    estado?: StringFilter<"Vehiculo"> | string
    fotoUrl?: StringFilter<"Vehiculo"> | string
    tipoId?: IntFilter<"Vehiculo"> | number
  }

  export type TipoVehiculoCreateWithoutVehiculosInput = {
    nombre: string
    valorDiario: number
  }

  export type TipoVehiculoUncheckedCreateWithoutVehiculosInput = {
    id?: number
    nombre: string
    valorDiario: number
  }

  export type TipoVehiculoCreateOrConnectWithoutVehiculosInput = {
    where: TipoVehiculoWhereUniqueInput
    create: XOR<TipoVehiculoCreateWithoutVehiculosInput, TipoVehiculoUncheckedCreateWithoutVehiculosInput>
  }

  export type ArriendoCreateWithoutVehiculoInput = {
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaEntrega?: Date | string | null
    fechaRecepcion?: Date | string | null
    fotosEntrega?: string | null
    fotosRecepcion?: string | null
    clienteRut: string
    clienteNombre: string
    usuario: UsuarioCreateNestedOneWithoutArriendosInput
  }

  export type ArriendoUncheckedCreateWithoutVehiculoInput = {
    id?: number
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaEntrega?: Date | string | null
    fechaRecepcion?: Date | string | null
    fotosEntrega?: string | null
    fotosRecepcion?: string | null
    clienteRut: string
    clienteNombre: string
    usuarioId: number
  }

  export type ArriendoCreateOrConnectWithoutVehiculoInput = {
    where: ArriendoWhereUniqueInput
    create: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput>
  }

  export type ArriendoCreateManyVehiculoInputEnvelope = {
    data: ArriendoCreateManyVehiculoInput | ArriendoCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type TipoVehiculoUpsertWithoutVehiculosInput = {
    update: XOR<TipoVehiculoUpdateWithoutVehiculosInput, TipoVehiculoUncheckedUpdateWithoutVehiculosInput>
    create: XOR<TipoVehiculoCreateWithoutVehiculosInput, TipoVehiculoUncheckedCreateWithoutVehiculosInput>
    where?: TipoVehiculoWhereInput
  }

  export type TipoVehiculoUpdateToOneWithWhereWithoutVehiculosInput = {
    where?: TipoVehiculoWhereInput
    data: XOR<TipoVehiculoUpdateWithoutVehiculosInput, TipoVehiculoUncheckedUpdateWithoutVehiculosInput>
  }

  export type TipoVehiculoUpdateWithoutVehiculosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
  }

  export type TipoVehiculoUncheckedUpdateWithoutVehiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    valorDiario?: IntFieldUpdateOperationsInput | number
  }

  export type ArriendoUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: ArriendoWhereUniqueInput
    update: XOR<ArriendoUpdateWithoutVehiculoInput, ArriendoUncheckedUpdateWithoutVehiculoInput>
    create: XOR<ArriendoCreateWithoutVehiculoInput, ArriendoUncheckedCreateWithoutVehiculoInput>
  }

  export type ArriendoUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: ArriendoWhereUniqueInput
    data: XOR<ArriendoUpdateWithoutVehiculoInput, ArriendoUncheckedUpdateWithoutVehiculoInput>
  }

  export type ArriendoUpdateManyWithWhereWithoutVehiculoInput = {
    where: ArriendoScalarWhereInput
    data: XOR<ArriendoUpdateManyMutationInput, ArriendoUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type VehiculoCreateWithoutArriendosInput = {
    patente: string
    estado: string
    fotoUrl: string
    tipo: TipoVehiculoCreateNestedOneWithoutVehiculosInput
  }

  export type VehiculoUncheckedCreateWithoutArriendosInput = {
    id?: number
    patente: string
    estado: string
    fotoUrl: string
    tipoId: number
  }

  export type VehiculoCreateOrConnectWithoutArriendosInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutArriendosInput, VehiculoUncheckedCreateWithoutArriendosInput>
  }

  export type UsuarioCreateWithoutArriendosInput = {
    rut: string
    email: string
    password: string
    perfil: PerfilCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutArriendosInput = {
    id?: number
    rut: string
    email: string
    password: string
    perfilId: number
  }

  export type UsuarioCreateOrConnectWithoutArriendosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutArriendosInput, UsuarioUncheckedCreateWithoutArriendosInput>
  }

  export type VehiculoUpsertWithoutArriendosInput = {
    update: XOR<VehiculoUpdateWithoutArriendosInput, VehiculoUncheckedUpdateWithoutArriendosInput>
    create: XOR<VehiculoCreateWithoutArriendosInput, VehiculoUncheckedCreateWithoutArriendosInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutArriendosInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutArriendosInput, VehiculoUncheckedUpdateWithoutArriendosInput>
  }

  export type VehiculoUpdateWithoutArriendosInput = {
    patente?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    tipo?: TipoVehiculoUpdateOneRequiredWithoutVehiculosNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutArriendosInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUpsertWithoutArriendosInput = {
    update: XOR<UsuarioUpdateWithoutArriendosInput, UsuarioUncheckedUpdateWithoutArriendosInput>
    create: XOR<UsuarioCreateWithoutArriendosInput, UsuarioUncheckedCreateWithoutArriendosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutArriendosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutArriendosInput, UsuarioUncheckedUpdateWithoutArriendosInput>
  }

  export type UsuarioUpdateWithoutArriendosInput = {
    rut?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutArriendosInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfilId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateManyPerfilInput = {
    id?: number
    rut: string
    email: string
    password: string
  }

  export type UsuarioUpdateWithoutPerfilInput = {
    rut?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    arriendos?: ArriendoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPerfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    arriendos?: ArriendoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutPerfilInput = {
    id?: IntFieldUpdateOperationsInput | number
    rut?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ArriendoCreateManyUsuarioInput = {
    id?: number
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaEntrega?: Date | string | null
    fechaRecepcion?: Date | string | null
    fotosEntrega?: string | null
    fotosRecepcion?: string | null
    clienteRut: string
    clienteNombre: string
    vehiculoId: number
  }

  export type ArriendoUpdateWithoutUsuarioInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotosEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotosRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    clienteRut?: StringFieldUpdateOperationsInput | string
    clienteNombre?: StringFieldUpdateOperationsInput | string
    vehiculo?: VehiculoUpdateOneRequiredWithoutArriendosNestedInput
  }

  export type ArriendoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotosEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotosRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    clienteRut?: StringFieldUpdateOperationsInput | string
    clienteNombre?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
  }

  export type ArriendoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotosEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotosRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    clienteRut?: StringFieldUpdateOperationsInput | string
    clienteNombre?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
  }

  export type VehiculoCreateManyTipoInput = {
    id?: number
    patente: string
    estado: string
    fotoUrl: string
  }

  export type VehiculoUpdateWithoutTipoInput = {
    patente?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    arriendos?: ArriendoUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
    arriendos?: ArriendoUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateManyWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    patente?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    fotoUrl?: StringFieldUpdateOperationsInput | string
  }

  export type ArriendoCreateManyVehiculoInput = {
    id?: number
    fechaInicio: Date | string
    fechaTermino: Date | string
    fechaEntrega?: Date | string | null
    fechaRecepcion?: Date | string | null
    fotosEntrega?: string | null
    fotosRecepcion?: string | null
    clienteRut: string
    clienteNombre: string
    usuarioId: number
  }

  export type ArriendoUpdateWithoutVehiculoInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotosEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotosRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    clienteRut?: StringFieldUpdateOperationsInput | string
    clienteNombre?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutArriendosNestedInput
  }

  export type ArriendoUncheckedUpdateWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotosEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotosRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    clienteRut?: StringFieldUpdateOperationsInput | string
    clienteNombre?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ArriendoUncheckedUpdateManyWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaTermino?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fechaRecepcion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fotosEntrega?: NullableStringFieldUpdateOperationsInput | string | null
    fotosRecepcion?: NullableStringFieldUpdateOperationsInput | string | null
    clienteRut?: StringFieldUpdateOperationsInput | string
    clienteNombre?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}