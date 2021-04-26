using { cuid, managed } from '@sap/cds/common';

namespace my.bookshop;

entity Books : cuid, managed {
  title     : String;
  stock     : Integer;
  author : Association to Authors;
}

entity Authors : managed {
  key ID : Integer;
  name   : String(111);
  books  : Association to many Books on books.author = $self;
}