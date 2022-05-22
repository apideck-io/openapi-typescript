/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/test': {
    get: {
      parameters: {
        query: {
          isEnabled: boolean
          count: number
        }
      }
      responses: {
        200: unknown
      }
    }
  }
}

export interface components {
  schemas: {
    TestSchema: {
      /**
       * @default false
       * @example false
       */
      isEnabled?: boolean
      /**
       * @default 0
       * @example 0
       */
      count?: number
    }
  }
}

export interface operations {}

export interface external {}
