**도서**
Book
  I book_id: PK, Auto Increment
  S id
  S title
  S url: Nullable
  S author: Nullable
  S publisher: Nullable
  L purchased_date : Nullable
  L registered_date
  I registered_user_id: FK(User.user_id), but It can be null

**사용자**
User
  I user_id: PK, Auto Increment
  S email
  S name
  S password
  L created_date

**대여**
Rental
  I rental_id: PK, Auto Increment
  I user_id : FK(User.user_id)
  I book_id : FK(Book.book_id)
  B is_returned
  L picked_up_date
  L due_date

**대여 관리 속성**
BookRentalPreferences
  I book_id: FK(Book.book_id)
  L due_date
  B is_use
  L created_date
  L modified_date
