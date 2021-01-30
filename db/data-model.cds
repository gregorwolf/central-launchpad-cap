using {cuid} from '@sap/cds/common';

namespace my.bookshop;

entity Books : cuid {
  title     : String;
  stock     : Integer;
  createdBy : String @cds.on.insert : $user;
}
