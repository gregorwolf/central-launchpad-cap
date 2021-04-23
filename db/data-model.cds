using { cuid, managed } from '@sap/cds/common';

namespace my.bookshop;

entity Books : cuid, managed {
  title     : String;
  stock     : Integer;
}
