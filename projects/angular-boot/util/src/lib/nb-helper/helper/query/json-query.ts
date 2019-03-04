/**
 * Created by Jafar Amini in May 2018.
 */
import {DefaultJsonQueryType, QueryOperator} from './common-types';

export class JsonQuery {
  /**
   Name of the variable to include in a query.
   Can be empty in case equals is used in some queries to query for resources
   that have any variable name with the given value.
   */
  name?: string; // در صورتی که operator برابر با equals باشد، این فیلد اختیاری است.

  /**
   Value of the variable included in the query,
   should include a correct format for the given type
   */
  value: any;

  /**
   Operator to use in query
   */
  operator: QueryOperator;

  /**
   Type of variable to use. When omitted,
   the type will be deducted from the "value" parameter.
   Any JSON text-values will be considered of type "string",
   JSON booleans of type boolean, JSON numbers of type "long" or "integer"
   depending on the size of the number.
   It’s recommended to include an explicit type when in doubt.
   Types supported out of the box are listed below.
   */
  type?: DefaultJsonQueryType;
}

