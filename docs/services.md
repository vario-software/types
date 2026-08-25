# Services

## AccountListingScriptingService
### Description
Service zur Verarbeitung von Account-Listings in Skripten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [AccountListing](types.md#accountlisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[AccountListing](types.md#accountlisting)|toCreate|Das zu persistierende DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [AccountListing](types.md#accountlisting)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[AccountListing](types.md#accountlisting)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [AccountListing](types.md#accountlisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [AccountListing](types.md#accountlisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[AccountListing](types.md#accountlisting)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [AccountListing](types.md#accountlisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[AccountListing](types.md#accountlisting)|toUpdate|Die zu aktualisierende Entity|Yes|



## AccountScriptingService
### Description
Service zur Verarbeitung von Accounts

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [Account](types.md#account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [Account](types.md#account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Account](types.md#account)|toCreate|Das zu persistierende DTO|Yes|


_**createAddress**_

Erstellt eine Adresse

_Return type:_ [AccountAddress](types.md#accountaddress)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountAddress](types.md#accountaddress)|address|Die zu erstellende Adresse|Yes|


_**createBankdetail**_

Erstellt ein Bankdetail

_Return type:_ [AccountBankdetail](types.md#accountbankdetail)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|
|[AccountBankdetail](types.md#accountbankdetail)|bankdetail|anzulegendes Bankdetails|Yes|


_**createPerson**_

Erstellt einen Ansprechpartner

_Return type:_ [AccountPerson](types.md#accountperson)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountPerson](types.md#accountperson)|person|Der zu erstellende Ansprechpartner|Yes|


_**createRelation**_

Erstellt eine Adressbeziehung

_Return type:_ [AccountRelation](types.md#accountrelation)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountRelation](types.md#accountrelation)|relation|Die zu erstellende Adressbeziehung|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [Account](types.md#account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteAddress**_

Löscht eine Adresse

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|_number_|addressId|ID einer Adresse|Yes|


_**deleteBankdetail**_

Löscht ein Bankdetail

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|
|_number_|bankdetailId|ID des Bankdetails|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**deletePerson**_

Löscht einen Ansprechpartner

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|_number_|personId|ID eines Ansprechpartners|Yes|


_**deleteRelation**_

Löscht eine Adressbeziehung

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|_number_|relationId|ID einer Adressbeziehung|Yes|


_**getAddress**_

Liest eine Adresse

_Return type:_ [AccountAddress](types.md#accountaddress)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|_number_|addressId|ID einer Adresse|Yes|


_**getAddresses**_

Liefert die Adressen eines Accounts (sortiert)

_Return type:_ Array<[AccountAddress](types.md#accountaddress)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|


_**getBankdetail**_

Liest ein Bankdetail

_Return type:_ [AccountBankdetail](types.md#accountbankdetail)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|
|_number_|bankdetailId|ID eines Bankdetails|Yes|


_**getBankdetails**_

Liefert die Bankdetails eines Accounts

_Return type:_ Array<[AccountBankdetail](types.md#accountbankdetail)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [Account](types.md#account)

_**getPerson**_

Liest einen Ansprechpartner

_Return type:_ [AccountPerson](types.md#accountperson)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|_number_|personId|ID eines Ansprechpartners|Yes|


_**getPersons**_

Liefert die Ansprechpartner eines Accounts (sortiert)

_Return type:_ Array<[AccountPerson](types.md#accountperson)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|


_**getRelation**_

Liest eine Adressbeziehung

_Return type:_ [AccountRelation](types.md#accountrelation)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|_number_|relationId|ID einer Adressbeziehung|Yes|


_**getRelations**_

Liefert die Adressbeziehungen eines Accounts

_Return type:_ Array<[AccountRelation](types.md#accountrelation)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[Account](types.md#account)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [Account](types.md#account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**sendNotification**_

Schreibt eine Benachrichtigung auf Basis des Accounts

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId||No|
|[ScriptOutputRequest](types.md#scriptoutputrequest)|outputRequest||No|


_**store**_

Persistiert eine DTO

_Return type:_ [Account](types.md#account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Account](types.md#account)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [Account](types.md#account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Account](types.md#account)|toUpdate|Die zu aktualisierende Entity|Yes|


_**updateAddress**_

Aktualisiert eine Adresse

_Return type:_ [AccountAddress](types.md#accountaddress)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountAddress](types.md#accountaddress)|address|Die zu aktualisierende Adresse|Yes|


_**updateBankdetail**_

Aktualisiert ein Bankdetail

_Return type:_ [AccountBankdetail](types.md#accountbankdetail)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountBankdetail](types.md#accountbankdetail)|bankdetail|zu aktualisierendes Bankdetail|Yes|


_**updatePerson**_

Aktualisiert einen Ansprechpartner

_Return type:_ [AccountPerson](types.md#accountperson)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountPerson](types.md#accountperson)|person|Der zu aktualisierende Ansprechpartner|Yes|


_**updateRelation**_

Aktualisiert eine Adressbeziehung

_Return type:_ [AccountRelation](types.md#accountrelation)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountRelation](types.md#accountrelation)|relation|Die zu aktualisierende Adressbeziehung|Yes|



## ArticleCustomerScriptingService
### Description
Service zur Verarbeitung von Artikel-Kundenbeziehungen im Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [ArticleCustomer](types.md#articlecustomer)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [ArticleCustomer](types.md#articlecustomer)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleCustomer](types.md#articlecustomer)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [ArticleCustomer](types.md#articlecustomer)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [ArticleCustomer](types.md#articlecustomer)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ArticleCustomer](types.md#articlecustomer)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ArticleCustomer](types.md#articlecustomer)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [ArticleCustomer](types.md#articlecustomer)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleCustomer](types.md#articlecustomer)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ArticleCustomer](types.md#articlecustomer)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleCustomer](types.md#articlecustomer)|toUpdate|Die zu aktualisierende Entity|Yes|



## ArticleListingScriptingService
### Description
Service zur Verarbeitung von Artikel-Listings im Skripten

### Methods

_**create**_

Erstellt ein Listing

_Return type:_ [ArticleListing](types.md#articlelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|[ArticleListing](types.md#articlelisting)|articleListing|Zu erstellendes Listing|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue ArticleListing-Instanz

_Return type:_ [ArticleListing](types.md#articlelisting)

_**readAllByArticleId**_

Liest alle Listings zu einem Artikel mit Texten zur Sprache languageCode

_Return type:_ Array<[ArticleListing](types.md#articlelisting)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|


_**readAllByArticleId**_

Liest alle Listings zu einem Artikel

_Return type:_ Array<[ArticleListing](types.md#articlelisting)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ArticleListing](types.md#articlelisting)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ArticleListing](types.md#articlelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**readById**_

Liest ein Artikel-Listing mit Texten zur Sprache languageCode

_Return type:_ [ArticleListing](types.md#articlelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|listingId|ID des zu lesenden Listings|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|


_**update**_

Akutalisiert ein Listing

_Return type:_ [ArticleListing](types.md#articlelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|listingId|ID des Listings|Yes|
|[ArticleListing](types.md#articlelisting)|articleListing|Zu aktualisierendes Listing|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|



## ArticleScriptingService
### Description
Service zur Verarbeitung von Artikeln im Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**addLabelToPrintBatch**_

Fügt Informationen zum Druck Etiketten zu einem Artikel zu einem Etikettendrucklauf hinzu

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|batchIdentifier|ID des Etikettendrucklaufs|Yes|
|_number_|articleId|ID des zu druckenden Artikels|Yes|


_**addLabelToPrintBatch**_

Fügt Informationen zum Druck Etiketten zu einem Artikel zu einem Etikettendrucklauf hinzu

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|batchIdentifier|ID des Etikettendrucklaufs|Yes|
|_number_|articleId|ID des zu druckenden Artikels|Yes|
|_number_|labelCount|Anzahl der zu druckenden Etiketten|Yes|


_**addLabelToPrintBatch**_

Fügt Informationen zum Druck Etiketten zu einem Artikel zu einem Etikettendrucklauf hinzu

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|batchIdentifier|ID des Etikettendrucklaufs|Yes|
|_number_|articleId|ID des zu druckenden Artikels|Yes|
|_number_|articleSerialNumberId|ID der zu druckenden Seriennummer|No|
|_number_|labelCount|Anzahl der zu druckenden Etiketten|Yes|


_**create**_

Persistiert einen Haupt-Artikel und die dazugehörigen Gebinde-Artikel.
Die Texte werden zur Sprache der eigenen Adresse gespeichert.


_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#article)|toCreate|Der zu persistierende Artikel|Yes|
|_number_|bundleSchemaId|ID des Gebindeschemas, das als Vorlage verwendet werden soll|Yes|
|_boolean_|useSameNumberForAllArticles|Gleiche Artikelnummer für alle Gebindeartikel verwenden?|No|


_**create**_

Persistiert einen Artikel. Die Texte werden zur Sprache der eigenen Adresse gespeichert

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#article)|toCreate|Der zu persistierende Artikel|Yes|


_**create**_

Persistiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#article)|toCreate|Der zu persistierende Artikel|Yes|
|_string_|languageCode||Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht einen Artikel

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des zu löschenden Artikels|Yes|


_**deleteListingById**_

Löscht ein Listing zu einem Artikel

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels, zu dem ein Listing gelöscht werden soll|Yes|
|_number_|listingId|ID des Listings, welches gelöscht werden soll|Yes|


_**executeLabelPrintBatch**_

Führt einen Etikettendrucklauf aus

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|batchIdentifier|ID des Etikettendrucklaufs|Yes|
|_string_|reportGroupIdentifier|Name einer Etiketten-Report-Gruppe|No|


_**executeLabelPrintBatch**_

Führt einen Etikettendrucklauf aus

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|batchIdentifier|ID des Etikettendrucklaufs|Yes|


_**getArticlePurchaseDiscounts**_

Liefert die Einkaufsrabatte zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID eines Artikels|Yes|


_**getArticlePurchasePrices**_

Liefert die Einkaufspreise zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID eines Artikels|Yes|


_**getArticleSalesDiscounts**_

Liefert die Verkaufsrabatte zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID eines Artikels|Yes|


_**getArticleSalesPrices**_

Liefert die Verkaufspreise zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID eines Artikels|Yes|


_**getNewDto**_

Erstellt eine neue Article-Instanz

_Return type:_ [Article](types.md#article)

_**newLabelPrintBatchIdentifier**_

Generiert die ID für einen neuen Etikettendrucklauf

_Return type:_ _string_

_**readById**_

Liest einen Artikel mit Texten zur Sprache der eigenen Adresse

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden Artikel|Yes|


_**readById**_

Liest einen Artikel mit Texten zur Sprache languageCode

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden Artikel|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|


_**readByNumber**_

Liest einen Artikel über die Artikelnummer mit Texten zur Sprache {@code languageCode}

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|articleNumber|Eine Artikelnummer|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|


_**readByNumber**_

Liest einen Artikel über die Artikelnummer mit Texten zur Sprache der eigenen Adresse

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|articleNumber|Eine Artikelnummer|Yes|


_**store**_

Persistiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#article)|toStore|Der zu persistierende Artikel|Yes|
|_string_|languageCode||Yes|


_**store**_

Persistiert einen Artikel. Die Texte werden zur Sprache der eigenen Adresse gespeichert

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#article)|toStore|Der zu persistierende Artikel|Yes|


_**update**_

Aktualisiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#article)|toUpdate|Der zu persistierende Artikel|Yes|
|_string_|languageCode||Yes|


_**update**_

Persistiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert

_Return type:_ [Article](types.md#article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#article)|toUpdate|Der zu persistierende Artikel|Yes|



## ArticleStorageScriptingService
### Description
Service zur Verarbeitung von Artikel-Lager-Beziehungen im Skripten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [ArticleStorage](types.md#articlestorage)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleStorage](types.md#articlestorage)|toCreate|Das zu persistierende DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [ArticleStorage](types.md#articlestorage)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ArticleStorage](types.md#articlestorage)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ArticleStorage](types.md#articlestorage)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [ArticleStorage](types.md#articlestorage)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleStorage](types.md#articlestorage)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ArticleStorage](types.md#articlestorage)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleStorage](types.md#articlestorage)|toUpdate|Die zu aktualisierende Entity|Yes|



## ArticleSupplierScriptingService
### Description
Service zur Verarbeitung von Artikel-Lieferantenbeziehungen im Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [ArticleSupplier](types.md#articlesupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [ArticleSupplier](types.md#articlesupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleSupplier](types.md#articlesupplier)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [ArticleSupplier](types.md#articlesupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [ArticleSupplier](types.md#articlesupplier)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ArticleSupplier](types.md#articlesupplier)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ArticleSupplier](types.md#articlesupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [ArticleSupplier](types.md#articlesupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleSupplier](types.md#articlesupplier)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ArticleSupplier](types.md#articlesupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleSupplier](types.md#articlesupplier)|toUpdate|Die zu aktualisierende Entity|Yes|



## AssetScriptingService
### Description
Service zur Verarbeitung von Assets in Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [Asset](types.md#asset)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [Asset](types.md#asset)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Asset](types.md#asset)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [Asset](types.md#asset)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [Asset](types.md#asset)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[Asset](types.md#asset)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [Asset](types.md#asset)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [Asset](types.md#asset)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Asset](types.md#asset)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [Asset](types.md#asset)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Asset](types.md#asset)|toUpdate|Die zu aktualisierende Entity|Yes|



## AssetTypeScriptingService
### Description
Service zur Verarbeitung von AssetsTypen in Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [AssetType](types.md#assettype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [AssetType](types.md#assettype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[AssetType](types.md#assettype)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [AssetType](types.md#assettype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [AssetType](types.md#assettype)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[AssetType](types.md#assettype)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [AssetType](types.md#assettype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [AssetType](types.md#assettype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[AssetType](types.md#assettype)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [AssetType](types.md#assettype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[AssetType](types.md#assettype)|toUpdate|Die zu aktualisierende Entity|Yes|



## BundleSchemaScriptingService
### Description
Service zur Verarbeitung von Artikeln-Gebinde-Relationen in Skripten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [BundleSchema](types.md#bundleschema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BundleSchema](types.md#bundleschema)|toCreate|Das zu persistierende DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getArticleBundleConversionInfo**_

Liefert die Informationen zur Auflösung und Zusammenführung eines Artikels in seine direkten Nachbargebinde

_Return type:_ [ArticleBundleConversionInfo](types.md#articlebundleconversioninfo)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|Eine Artikel-ID|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [BundleSchema](types.md#bundleschema)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[BundleSchema](types.md#bundleschema)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [BundleSchema](types.md#bundleschema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [BundleSchema](types.md#bundleschema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BundleSchema](types.md#bundleschema)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [BundleSchema](types.md#bundleschema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BundleSchema](types.md#bundleschema)|toUpdate|Die zu aktualisierende Entity|Yes|



## CrmActivityScriptingService
### Description
Service zur Verarbeitung von CRM-Aktivitäten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [CrmActivity](types.md#crmactivity)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmActivity](types.md#crmactivity)|toCreate|Das zu persistierende DTO|Yes|


_**createCrmObjectRef**_

Erstellte eine neue Instanz von CrmObjectRef

_Return type:_ [CrmObjectRef](types.md#crmobjectref)

_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**findTypeById**_

Findet eine Aktivitätsart über ihre ID

_Return type:_ [CrmActivityType](types.md#crmactivitytype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID einer Aktivitätsart|Yes|


_**findTypeByLabel**_

Findet eine Aktivitätsart über ihr Label

_Return type:_ [CrmActivityType](types.md#crmactivitytype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|typeLabel|Label einer Aktivitätsart|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [CrmActivity](types.md#crmactivity)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[CrmActivity](types.md#crmactivity)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [CrmActivity](types.md#crmactivity)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [CrmActivity](types.md#crmactivity)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmActivity](types.md#crmactivity)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [CrmActivity](types.md#crmactivity)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmActivity](types.md#crmactivity)|toUpdate|Die zu aktualisierende Entity|Yes|



## CrmDealScriptingService
### Description
Service zur Verarbeitung von Deals

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [CrmDeal](types.md#crmdeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmDeal](types.md#crmdeal)|toCreate|Das zu persistierende DTO|Yes|


_**createCrmObjectRef**_

Erstellte eine neue Instanz von CrmObjectRef

_Return type:_ [CrmObjectRef](types.md#crmobjectref)

_**createNewDtoByTemplate**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmDeal](types.md#crmdeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|templateName|Name einer Vorlage|Yes|


_**createNewDtoByTemplateId**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmDeal](types.md#crmdeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|templateId|ID einer Vorlage|Yes|


_**dealWon**_

Gewinnt einen Deal ab. Der Deal wird positiv abgeschlossen

_Return type:_ [CrmDeal](types.md#crmdeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|dealId|ID eines Deals|Yes|
|_number_|positiveClosingReasonId|ID eines positiven Deal-Abschlussgrunds|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**findFinalState**_

Findet den End-Status

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findPriorityById**_

Findet eine CRM-Priorität über die ID

_Return type:_ [CrmPriority](types.md#crmpriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priorityId|ID der gesuchten Priorität|Yes|


_**findPriorityByLabel**_

Findet eine CRM-Priorität über ihr Label

_Return type:_ [CrmPriority](types.md#crmpriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|priorityLabel|Label der gesuchten Priorität|Yes|


_**findPriorityByType**_

Findet eine CRM-Priorität über den Priorität-Typ

_Return type:_ [CrmPriority](types.md#crmpriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ECrmPriorityType](types.md#ecrmprioritytype)|priorityType|Typ der gesuchten Priorität|Yes|


_**findStartState**_

Findet den Start-Status

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findStateById**_

Findet einen CRM-Status über die ID

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|stateId|ID vom gesuchten Status|Yes|


_**findStateByLabel**_

Findet einen CRM-Status über sein Label

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|stateLabel|Label vom gesuchten Status|Yes|
|_number_|typeId|ID des CRM-Sub-Typs|Yes|


_**findTopicById**_

Findet ein Deal-Thema über seine ID

_Return type:_ [CrmDealTopic](types.md#crmdealtopic)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|topicId|ID des gesuchten Deal-Themas|Yes|


_**findTopicByLabel**_

Findet ein Deal-Thema über sein Label

_Return type:_ [CrmDealTopic](types.md#crmdealtopic)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label des gesuchten Deal-Themas|Yes|


_**findTypeById**_

Findet einen CRM-Typ über die ID

_Return type:_ [CrmSubType](types.md#crmsubtype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID vom gesuchten Typ|Yes|


_**findTypeByLabel**_

Findet einen CRM-Typ über sein Label

_Return type:_ [CrmSubType](types.md#crmsubtype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|typeLabel|Label vom gesuchten Typ|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [CrmDeal](types.md#crmdeal)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[CrmDeal](types.md#crmdeal)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [CrmDeal](types.md#crmdeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**sendNotification**_

erzeugt eine Ausgabe mit dem Benachrichtgungs-Modul für Deals

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|dealId|ID eines Deals|Yes|
|[ScriptOutputRequest](types.md#scriptoutputrequest)|outputRequest|der Output Request|Yes|
|[DealNotificationEventConfig](types.md#dealnotificationeventconfig)|eventConfig|Reason für die Notification|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [CrmDeal](types.md#crmdeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmDeal](types.md#crmdeal)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [CrmDeal](types.md#crmdeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmDeal](types.md#crmdeal)|toUpdate|Die zu aktualisierende Entity|Yes|



## CrmDocumentRefScriptingService
### Description
Verwaltung von CRM-Belegreferenzen

### Methods

_**addDocumentRef**_

Erstellt eine CRM-Belegreferenz mit Referenztyp gleich NONE

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|crmId|ID eines CRM-Objekts|Yes|
|[ECrmType](types.md#ecrmtype)|crmType|Typ eines CRM-Objekts|Yes|
|_number_|documentId|ID eines Belegs|Yes|


_**addDocumentRef**_

Erstellt eine CRM-Belegreferenz

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|crmId|ID eines CRM-Objekts|Yes|
|[ECrmType](types.md#ecrmtype)|crmType|Typ eines CRM-Objekts|Yes|
|_number_|documentId|ID eines Belegs|Yes|
|[ECrmSpecialDocumentRefType](types.md#ecrmspecialdocumentreftype)|specialRefType|Referenztyp|Yes|


_**readAllByDocumentId**_

Liefert CRM-Belegreferenzen zu einem Beleg

_Return type:_ [CrmTypedDocumentRefList](types.md#crmtypeddocumentreflist)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID eines Belegs|Yes|



## CrmProjectScriptingService
### Description
Service zur Verarbeitung von Projekten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [CrmProject](types.md#crmproject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmProject](types.md#crmproject)|toCreate|Das zu persistierende DTO|Yes|


_**createCrmObjectRef**_

Erstellte eine neue Instanz von CrmObjectRef

_Return type:_ [CrmObjectRef](types.md#crmobjectref)

_**createNewDtoByTemplate**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmProject](types.md#crmproject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|templateName|Name einer Vorlage|Yes|


_**createNewDtoByTemplateId**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmProject](types.md#crmproject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|templateId|ID einer Vorlage|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**findFinalState**_

Findet den End-Status

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findPriorityById**_

Findet eine CRM-Priorität über die ID

_Return type:_ [CrmPriority](types.md#crmpriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priorityId|ID der gesuchten Priorität|Yes|


_**findPriorityByLabel**_

Findet eine CRM-Priorität über ihr Label

_Return type:_ [CrmPriority](types.md#crmpriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|priorityLabel|Label der gesuchten Priorität|Yes|


_**findPriorityByType**_

Findet eine CRM-Priorität über den Priorität-Typ

_Return type:_ [CrmPriority](types.md#crmpriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ECrmPriorityType](types.md#ecrmprioritytype)|priorityType|Typ der gesuchten Priorität|Yes|


_**findStartState**_

Findet den Start-Status

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findStateById**_

Findet einen CRM-Status über die ID

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|stateId|ID vom gesuchten Status|Yes|


_**findStateByLabel**_

Findet einen CRM-Status über sein Label

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|stateLabel|Label vom gesuchten Status|Yes|
|_number_|typeId|ID des CRM-Sub-Typs|Yes|


_**findTypeById**_

Findet einen CRM-Typ über die ID

_Return type:_ [CrmSubType](types.md#crmsubtype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID vom gesuchten Typ|Yes|


_**findTypeByLabel**_

Findet einen CRM-Typ über sein Label

_Return type:_ [CrmSubType](types.md#crmsubtype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|typeLabel|Label vom gesuchten Typ|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [CrmProject](types.md#crmproject)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[CrmProject](types.md#crmproject)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [CrmProject](types.md#crmproject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [CrmProject](types.md#crmproject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmProject](types.md#crmproject)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [CrmProject](types.md#crmproject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmProject](types.md#crmproject)|toUpdate|Die zu aktualisierende Entity|Yes|



## CrmTaskScriptingService
### Description
Service zur Verarbeitung von CRM-Aufgaben

### Methods

_**calculateServiceTime**_

Berechnet die gesamte Dienstleistungsdauer in Sekunden in den gegebenen Belegen

_Return type:_ _number_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|Array<[CrmTypedDocumentRef](types.md#crmtypeddocumentref)>|documentRefs|Zu beachtende Referenzen|Yes|
|[ECrmSpecialDocumentRefType](types.md#ecrmspecialdocumentreftype)|documentRefType|Der zu beachtende Referenztyp|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [CrmTask](types.md#crmtask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmTask](types.md#crmtask)|toCreate|Das zu persistierende DTO|Yes|


_**createCrmObjectRef**_

Erstellte eine neue Instanz von CrmObjectRef

_Return type:_ [CrmObjectRef](types.md#crmobjectref)

_**createNewDtoByTemplate**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmTask](types.md#crmtask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|templateName|Name einer Vorlage|Yes|


_**createNewDtoByTemplateId**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmTask](types.md#crmtask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|templateId|ID einer Vorlage|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**findFinalState**_

Findet den End-Status

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findPriorityById**_

Findet eine CRM-Priorität über die ID

_Return type:_ [CrmPriority](types.md#crmpriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priorityId|ID der gesuchten Priorität|Yes|


_**findPriorityByLabel**_

Findet eine CRM-Priorität über ihr Label

_Return type:_ [CrmPriority](types.md#crmpriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|priorityLabel|Label der gesuchten Priorität|Yes|


_**findPriorityByType**_

Findet eine CRM-Priorität über den Priorität-Typ

_Return type:_ [CrmPriority](types.md#crmpriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ECrmPriorityType](types.md#ecrmprioritytype)|priorityType|Typ der gesuchten Priorität|Yes|


_**findReadyToBillState**_

Sucht den "Bereit zur Abrechnung"-Status

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Task-Typs|Yes|


_**findStartState**_

Findet den Start-Status

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findStateById**_

Findet einen CRM-Status über die ID

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|stateId|ID vom gesuchten Status|Yes|


_**findStateByLabel**_

Findet einen CRM-Status über sein Label

_Return type:_ [CrmState](types.md#crmstate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|stateLabel|Label vom gesuchten Status|Yes|
|_number_|typeId|ID des CRM-Sub-Typs|Yes|


_**findTypeById**_

Findet einen CRM-Typ über die ID

_Return type:_ [CrmSubType](types.md#crmsubtype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID vom gesuchten Typ|Yes|


_**findTypeByLabel**_

Findet einen CRM-Typ über sein Label

_Return type:_ [CrmSubType](types.md#crmsubtype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|typeLabel|Label vom gesuchten Typ|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [CrmTask](types.md#crmtask)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[CrmTask](types.md#crmtask)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [CrmTask](types.md#crmtask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [CrmTask](types.md#crmtask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmTask](types.md#crmtask)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [CrmTask](types.md#crmtask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmTask](types.md#crmtask)|toUpdate|Die zu aktualisierende Entity|Yes|



## DeliveryMethodScriptingService
### Description
Verwaltung von Versandarten

### Methods

_**findByLabel**_

Findet eine Versandart über ein Label

_Return type:_ [DeliveryMethod](types.md#deliverymethod)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Versandart|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[DeliveryMethod](types.md#deliverymethod)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [DeliveryMethod](types.md#deliverymethod)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|



## DeliveryTermScriptingService
### Description
Verwaltung von Lieferbedingungen

### Methods

_**findByLabel**_

Findet eine Lieferbedingung über ein Label

_Return type:_ [DeliveryTerm](types.md#deliveryterm)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Lieferbedingung|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[DeliveryTerm](types.md#deliveryterm)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [DeliveryTerm](types.md#deliveryterm)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|



## DocumentScriptingService
### Description
Service zur Verarbeitung von Belegen

### Methods

_**addDocumentProtocol**_

Erstellt einen manuellen Eintrag im Belegprotokoll

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des Belegs, zu dem der Eintrag angelegt werden soll|Yes|
|_string_|protocolMessage|Text für den Eintrag|Yes|


_**cancel**_

Bricht die Bearbeitung eines Belegs ab (Transition EDIT -> SAVED)

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des Belegs|Yes|


_**cancel**_

Bricht die Bearbeitung eines Belegs ab (Transition EDIT -> SAVED)

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des Belegs|Yes|
|Array<[AdditionalParameter](types.md#additionalparameter)>|additionalParameters|Zusätzliche Parameter|Yes|


_**copy**_

Kopiert einen Beleg in die vorgegebene Ziel-Belegart

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu kopierenden Belegs|Yes|
|_string_|targetDocumentTypeLabel|Ziel-Belegart der Kopie|Yes|


_**copy**_

Kopiert einen Beleg in die vorgegebene Ziel-Belegart

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu kopierenden Belegs|Yes|
|_string_|targetDocumentType|Ziel-Belegart der Kopie|Yes|
|Array<[AdditionalParameter](types.md#additionalparameter)>|additionalParameters|Zusätzliche Parameter|Yes|


_**create**_

Erstellt einen neuen Beleg

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CreateNewDocumentRequest](types.md#createnewdocumentrequest)|request|Details zum neuen Beleg|Yes|


_**dissolve**_

Löst einen Beleg auf

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des aufzulösenden Belegs|Yes|


_**dissolve**_

Löst einen Beleg auf

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des aufzulösenden Belegs|Yes|
|Array<[AdditionalParameter](types.md#additionalparameter)>|additionalParameters|Zusätzliche Parameter|Yes|


_**edit**_

Startet die Bearbeitung eines Belegs (Transition SAVED -> EDIT)

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des Belegs|Yes|
|Array<[AdditionalParameter](types.md#additionalparameter)>|additionalParameters|Zusätzliche Parameter|Yes|


_**edit**_

Startet die Bearbeitung eines Belegs (Transition SAVED -> EDIT)

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des Belegs|Yes|


_**getAdditionalParameter**_

Erstellt ein AdditionalParameter-Objekt

_Return type:_ [AdditionalParameter](types.md#additionalparameter)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|key|Schlüssel des Parameters|Yes|
|_object_|value|Wert des Parameters|No|


_**getAdditionalParameterList**_

Erstellt eine Liste zur Sammlung von AdditionalParameter-Objekten

_Return type:_ Array<[AdditionalParameter](types.md#additionalparameter)>

_**getDocumentTransferToStateRequest**_

Erstellt ein Request-Objekt, um einen Beleg in einen anderen Status zu verschieben

_Return type:_ [DocumentTransferToStateRequest](types.md#documenttransfertostaterequest)

_**getDocumentTransferToTypeRequest**_

Erstellt ein Request-Objekt, um einen Beleg in einen anderen Beleg zu übernehmen (oder zu kopieren)

_Return type:_ [DocumentTransferToTypeRequest](types.md#documenttransfertotyperequest)

_**getNewDocumentLine**_

Erstellt ein neues Belegposition-Objekt, um dieses in einen Beleg einzufügen

_Return type:_ [DocumentLine](types.md#documentline)

_**getNewDocumentLineBooking**_

Erstellt ein neues Belegbuchung-Objekt, um dieses in einen Beleg einzufügen

_Return type:_ [DocumentLineBooking](types.md#documentlinebooking)

_**getNewDocumentPriceModifier**_

Erstellt ein neues Beleg-Rabatt/-Zuschlags-Objekt, um dieses in einen Beleg oder eine Position einzufügen

_Return type:_ [DocumentPriceModifier](types.md#documentpricemodifier)

_**getNewDocumentRequest**_

Erstellt ein Request-Objekt, um einen neuen Beleg zu erstellen

_Return type:_ [CreateNewDocumentRequest](types.md#createnewdocumentrequest)

_**getUpdateDocumentRequest**_

Erstellt ein Request-Objekt, um einen Beleg zu aktualisieren

_Return type:_ [UpdateDocumentRequest](types.md#updatedocumentrequest)

_**importExternalDocument**_

Importiert einen extern erstellten Beleg (Positionen und Steuern werden übernommen, END_EDITING und Festschreibung inklusive)

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ExternalDocumentWithTaxesRequest](types.md#externaldocumentwithtaxesrequest)|request|Details zum extern erstellten Beleg|Yes|


_**print**_

Druckt einen Beleg

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu druckenden Belegs|Yes|


_**readById**_

Liest einen Beleg über seine ID

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID eines Belegs|Yes|


_**save**_

Speichert einen Beleg (Transition EDIT -> SAVED)

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu speichernden Belegs|Yes|


_**save**_

Speichert einen Beleg (Transition EDIT -> SAVED)

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu speichernden Belegs|Yes|
|Array<[AdditionalParameter](types.md#additionalparameter)>|additionalParameters|Zusätzliche Parameter|Yes|


_**sendViaMail**_

Versendet einen Beleg per Mail

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu versendenden Belegs|Yes|


_**sendViaMail**_

Versendet einen Beleg per Mail

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu versendenden Belegs|Yes|
|_string_|reportGroupIdentifier||No|


_**transferToState**_

Überführt einen Beleg in einen anderen Status

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[DocumentTransferToStateRequest](types.md#documenttransfertostaterequest)|request|Request zur Transition zum gewünschten Ziel-Status|Yes|


_**transferToType**_

Übernimmt (oder kopiert) einen Beleg in einen anderen Beleg

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[DocumentTransferToTypeRequest](types.md#documenttransfertotyperequest)|request|Request zur Übernahme eines Belegs|Yes|


_**update**_

Aktualisiert einen Beleg

_Return type:_ [Document](types.md#document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[UpdateDocumentRequest](types.md#updatedocumentrequest)|request|Details zum zu aktualisierenden Beleg|Yes|



## DunningScriptingService
### Description
Service zur Verarbeitung von Mahnungen

### Methods

_**print**_

Druckt eine Mahnung

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|dunningId|ID der zu druckenden Mahnung|Yes|


_**sendViaMail**_

Versendet eine Mahnung per Mail

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|dunningId|ID der zu versendenden Mahnung|Yes|



## FreeSequencerScriptingService
### Description
Anfragen von neuen Zählerkreis-Nummern

### Methods

_**getNextNumber**_

Fordert die nächste Nummer des Zählerkreises an und Zählt hoch

_Return type:_ _string_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|freeSequencerKey|ID eines Freien Zählerkreises|Yes|



## HttpClientScriptingService
### Description
HTTP-Client im Scripting

### Methods

_**createHttpClient**_

Erstellt eine neue Instanz vom HTTP-Client ohne Authentifizierung

_Return type:_ [SecureHttpClient](types.md#securehttpclient)

_**createHttpClientWithBasicAuth**_

Erstellt eine neue Instanz vom HTTP-Client mit Basic Auth

_Return type:_ [SecureHttpClient](types.md#securehttpclient)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|username|Benutzername|Yes|
|_string_|password|Passwort|Yes|


_**createHttpClientWithBearerAuth**_

Erstellt eine neue Instanz vom HTTP-Client mit einem Bearer Token

_Return type:_ [SecureHttpClient](types.md#securehttpclient)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|bearerToken|Bearer Token|Yes|



## LoggingScriptingService
### Description
Logging im Scripting

### Methods

_**debug**_

Protokolliert im Level DEBUG

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_object_|toLog|Zu protokollierende Nachricht|No|


_**error**_

Protokolliert im Level ERROR

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_object_|toLog|Zu protokollierende Nachricht|No|


_**info**_

Protokolliert im Level INFO

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_object_|toLog|Zu protokollierende Nachricht/Daten|Yes|


_**trace**_

Protokolliert im Level TRACE

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_object_|toLog|Zu protokollierende Nachricht/Daten|Yes|


_**warn**_

Protokolliert im Level WARN

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_object_|toLog|Zu protokollierende Nachricht|No|



## OpenItemScriptingService
### Description
Service zur Verarbeitung von Offenen Posten

### Methods

_**applyPaymentDataFromAccount**_

Übernimmt Zahlungsbedingung und Zahlart aus dem Kunden- bzw. Lieferantenstamm des Accounts in den Offenen Posten und berechnet die Fälligkeiten neu

_Return type:_ [OpenItem](types.md#openitem)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|openItemId|ID eines Offenen Postens|Yes|



## PaymentMethodScriptingService
### Description
Verwaltung von Zahlungsarten

### Methods

_**findByLabel**_

Findet eine Zahlungsart über ein Label

_Return type:_ [PaymentMethod](types.md#paymentmethod)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Zahlungsart|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[PaymentMethod](types.md#paymentmethod)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [PaymentMethod](types.md#paymentmethod)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|



## PaymentTermScriptingService
### Description
Verwaltung von Zahlungsbedingungen

### Methods

_**createPaymentTermRef**_

Lädt ein PaymentTerm über seine ID und liefer ein PaymentTermRef zurück

_Return type:_ [PaymentTermRef](types.md#paymenttermref)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID eines PaymentTerm|Yes|


_**createPaymentTermRef**_

Liefert ein PaymentTermRef zu einem PaymentTerm

_Return type:_ [PaymentTermRef](types.md#paymenttermref)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[PaymentTerm](types.md#paymentterm)|paymentTerm|Ein PaymentTerm|Yes|


_**findByLabel**_

Findet eine Zahlungsbedingung über ein Label

_Return type:_ [PaymentTerm](types.md#paymentterm)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Zahlungsbedingung|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[PaymentTerm](types.md#paymentterm)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [PaymentTerm](types.md#paymentterm)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|



## ProductGroupScriptingService
### Description
Service zur Verarbeitung von Warengruppen im Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [ProductGroup](types.md#productgroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [ProductGroup](types.md#productgroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductGroup](types.md#productgroup)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [ProductGroup](types.md#productgroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [ProductGroup](types.md#productgroup)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ProductGroup](types.md#productgroup)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ProductGroup](types.md#productgroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**readByLabel**_

Liest eine Warengruppe über ihr Label

_Return type:_ [ProductGroup](types.md#productgroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Warengruppe|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [ProductGroup](types.md#productgroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductGroup](types.md#productgroup)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ProductGroup](types.md#productgroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductGroup](types.md#productgroup)|toUpdate|Die zu aktualisierende Entity|Yes|



## ProductMainGroupScriptingService
### Description
Service zur Verarbeitung von Hauptwarengruppen im Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [ProductMainGroup](types.md#productmaingroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [ProductMainGroup](types.md#productmaingroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductMainGroup](types.md#productmaingroup)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [ProductMainGroup](types.md#productmaingroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [ProductMainGroup](types.md#productmaingroup)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ProductMainGroup](types.md#productmaingroup)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ProductMainGroup](types.md#productmaingroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**readByLabel**_

Liest eine Hauptwarengruppe über ihr Label

_Return type:_ [ProductMainGroup](types.md#productmaingroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Hauptwarengruppe|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [ProductMainGroup](types.md#productmaingroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductMainGroup](types.md#productmaingroup)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ProductMainGroup](types.md#productmaingroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductMainGroup](types.md#productmaingroup)|toUpdate|Die zu aktualisierende Entity|Yes|



## ProductPriceScriptingService
### Description
Service zur Verarbeitung von Produktpreisen in Skripten

### Methods

_**createPurchaseDiscount**_

Legt eine neue Einkaufspreisregel an

_Return type:_ [ProductDiscount](types.md#productdiscount)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductDiscount](types.md#productdiscount)|productDiscount|Die anzulegende Einkaufspreisregel|Yes|


_**createPurchasePrice**_

Legt einen neuen Einkaufspreis an

_Return type:_ [ProductPrice](types.md#productprice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductPrice](types.md#productprice)|productPrice|Der anzulegende Einkaufspreis|Yes|


_**createSalesDiscount**_

Legt eine neue Verkaufspreisregel

_Return type:_ [ProductDiscount](types.md#productdiscount)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductDiscount](types.md#productdiscount)|productDiscount|Die anzulegende Verkaufspreisregel|Yes|


_**createSalesPrice**_

Legt einen neuen Verkaufspreis an

_Return type:_ [ProductPrice](types.md#productprice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductPrice](types.md#productprice)|productPrice|Der anzulegende Verkaufspreis|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**deletePriceOrDiscountById**_

Löscht einen Preis oder eine Preisregel

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priceOrDiscountId|ID eines Preises oder einer Preisregel|Yes|


_**getNewDiscountDto**_

Erstellt eine neue Preisregel-DTO-Instanz

_Return type:_ [ProductDiscount](types.md#productdiscount)

_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [ProductPrice](types.md#productprice)

_**getNewPriceDto**_

Erstellt eine neue Preis-DTO-Instanz

_Return type:_ [ProductPrice](types.md#productprice)

_**getPurchaseDiscounts**_

Liefert alle Einkaufspreisregeln zu einem Artikel und Account

_Return type:_ Array<[ProductDiscount](types.md#productdiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|


_**getPurchaseDiscountsForCurrency**_

Liefert alle Einkaufspreisregeln zu einem Artikel und Account und Währung

_Return type:_ Array<[ProductDiscount](types.md#productdiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getPurchaseDiscountsToAccount**_

Liefert alle Einkaufspreisregeln zu einem Account

_Return type:_ Array<[ProductDiscount](types.md#productdiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|


_**getPurchaseDiscountsToArticle**_

Liefert alle Einkaufspreisregeln zu einem Artikel

_Return type:_ Array<[ProductDiscount](types.md#productdiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|


_**getPurchasePrices**_

Liefert alle Einkaufspreise zu einem Artikel und Account

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|


_**getPurchasePricesForCurrency**_

Liefert alle Einkaufspreise zu einem Artikel und Account und Währung

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getPurchasePricesToAccount**_

Liefert alle Einkaufspreise zu einem Account

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|


_**getPurchasePricesToArticle**_

Liefert alle Einkaufspreise zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|


_**getSalesDiscounts**_

Liefert alle Verkaufspreisregeln zu einem Artikel und Account

_Return type:_ Array<[ProductDiscount](types.md#productdiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|No|
|_number_|accountId|ID des Accounts|No|


_**getSalesDiscountsForCurrency**_

Liefert alle Verkaufspreisregeln zu einem Artikel und Account und Währung

_Return type:_ Array<[ProductDiscount](types.md#productdiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getSalesDiscountsToAccount**_

Liefert alle Verkaufspreisregeln zu einem Account

_Return type:_ Array<[ProductDiscount](types.md#productdiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|


_**getSalesDiscountsToAccountForCurrency**_

Liefert alle Verkaufspreisregeln zu einem Account und Währung

_Return type:_ Array<[ProductDiscount](types.md#productdiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getSalesDiscountsToArticle**_

Liefert alle Account-unabhängigen Verkaufspreisregeln zu einem Artikel

_Return type:_ Array<[ProductDiscount](types.md#productdiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|


_**getSalesDiscountsToArticleForCurrency**_

Liefert alle Account-unabhängigen Verkaufspreisregeln zu einem Artikel und Währung

_Return type:_ Array<[ProductDiscount](types.md#productdiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getSalesPrices**_

Liefert alle Verkaufspreise zu einem Artikel und Account

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|No|
|_number_|accountId|ID des Accounts|No|


_**getSalesPricesForCurrency**_

Liefert alle Verkaufspreise zu einem Artikel und Account und Währung

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getSalesPricesToAccount**_

Liefert alle Verkaufspreise zu einem Account

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|


_**getSalesPricesToAccountForCurrency**_

Liefert alle Verkaufspreise zu einem Account und Währung

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getSalesPricesToArticle**_

Liefert alle Account-unabhängigen Verkaufspreise zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|


_**getSalesPricesToArticleForCurrency**_

Liefert alle Account-unabhängigen Verkaufspreise zu einem Artikel und Währung

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ProductPrice](types.md#productprice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ProductPrice](types.md#productprice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden Preis|Yes|


_**readDiscountById**_

Liest eine Preisregel

_Return type:_ [ProductDiscount](types.md#productdiscount)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priceId|ID einer Preisregel|Yes|


_**readPriceById**_

Liest einen Preis

_Return type:_ [ProductPrice](types.md#productprice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priceId|ID eines Preises|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ProductPrice](types.md#productprice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductPrice](types.md#productprice)|toUpdate|Die zu aktualisierende Entity|Yes|


_**updatePurchaseDiscount**_

Aktualisiert eine Einkaufspreisregel

_Return type:_ [ProductDiscount](types.md#productdiscount)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductDiscount](types.md#productdiscount)|productDiscount|Die zu aktualisierende Einkaufspreisregel|Yes|


_**updatePurchasePrice**_

Aktualisiert einen Einkaufspreis

_Return type:_ [ProductPrice](types.md#productprice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductPrice](types.md#productprice)|productPrice|Der zu aktualisierende Einkaufspreis|Yes|


_**updateSalesDiscount**_

Aktualisiert eine Verkaufspreisregel

_Return type:_ [ProductDiscount](types.md#productdiscount)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductDiscount](types.md#productdiscount)|productDiscount|Die zu aktualisierende Verkaufspreisregel|Yes|


_**updateSalesPrice**_

Aktualisiert einen Verkaufspreis

_Return type:_ [ProductPrice](types.md#productprice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductPrice](types.md#productprice)|productPrice|Der zu aktualisierende Verkaufspreis|Yes|



## ProductScriptingService
### Description
Service zur Verarbeitung von Produkten in Skripten

### Methods

_**readByArticleId**_

Liest ein Produkt anhand einer Artikel-ID

_Return type:_ [Product](types.md#product)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID eines zum Produkt gehörenden Artikels|Yes|


_**readById**_

Liest ein Produkt anhand seiner ID

_Return type:_ [Product](types.md#product)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID des zu lesenden Produkts|Yes|


_**update**_

Aktualisiert ein Produkt

_Return type:_ [Product](types.md#product)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Product](types.md#product)|toUpdate|Das zu aktualisierende Produkt|Yes|



## ScenarioScriptingService
### Description
Service zur Verarbeitung von ScenarioActualValue

### Methods

_**createScenarioActualValue**_

Erstellt ein ScenarioActualValue

_Return type:_ [ScenarioActualValue](types.md#scenarioactualvalue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScenarioActualValue](types.md#scenarioactualvalue)|toCreate|Das zu erstellende Actual-Value|Yes|


_**findScenarioActualValueById**_

Findet ein ScenarioActualValue über die ID

_Return type:_ [ScenarioActualValue](types.md#scenarioactualvalue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|actualValueId|ID von einem Actual-Value|Yes|


_**findScenarioActualValuesBySelection**_

Liest eine Liste von ScenarioActualValue gemäß der Selektion

_Return type:_ Array<[ScenarioActualValue](types.md#scenarioactualvalue)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|referenceId|Eine Referenz-ID|Yes|
|_string_|scenarioDimKey|Optional: Schlüssel einer Scenario-Dimension|No|
|_string_|scenarioIdentifier|Optional: Identifier eines Scenarios|No|


_**findScenarioById**_

Findet ein Scenario über die ID

_Return type:_ [Scenario](types.md#scenario)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|scenarioId|ID eines Scenarios|Yes|


_**findScenarioByIdentifer**_

Findet ein Scenario über den Identifier

_Return type:_ [Scenario](types.md#scenario)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|scenarioIdentifier|Identifier eines Scenarios|Yes|


_**findScenarioByLabel**_

Findet ein Scenario über das Label

_Return type:_ [Scenario](types.md#scenario)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|scenarioLabel|Label eines Scenarios|Yes|


_**findScenarioDimensionById**_

Findet eine Scenario-Dimension über die ID

_Return type:_ [ScenarioDimension](types.md#scenariodimension)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Scenario](types.md#scenario)|scenario|Ein Scenario, in dem gesucht werden soll|Yes|
|_number_|scenarioDimensionId|ID einer Scenario-Dimension|Yes|


_**findScenarioDimensionByKey**_

Findet eine Scenario-Dimension über den Key

_Return type:_ [ScenarioDimension](types.md#scenariodimension)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Scenario](types.md#scenario)|scenario|Ein Scenario, in dem gesucht werden soll|Yes|
|_string_|scenarioDimensionKey|Key einer Scenario-Dimension|Yes|


_**findScenarioDimensionValueById**_

Findet einen Scenario-Dimension-Wert über die ID

_Return type:_ [ScenarioDimensionValue](types.md#scenariodimensionvalue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScenarioDimension](types.md#scenariodimension)|scenarioDimension|Eine Scenario-Dimension, in der gesucht werden soll|Yes|
|_number_|scenarioDimensionValueId|ID eines Scenario-Dimension-Werts|Yes|


_**findScenarioDimensionValueByLabel**_

Findet einen Scenario-Dimension-Wert über das Label

_Return type:_ [ScenarioDimensionValue](types.md#scenariodimensionvalue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScenarioDimension](types.md#scenariodimension)|scenarioDimension|Eine Scenario-Dimension, in der gesucht werden soll|Yes|
|_string_|scenarioDimensionValueLabel|Label eines Scenario-Dimension-Werts|Yes|


_**getNewActualValueDTO**_

Erstellt ein neues ScenarioActualValue-DTO

_Return type:_ [ScenarioActualValue](types.md#scenarioactualvalue)

_**updateScenarioActualValue**_

Aktualisiert ein ScenarioActualValue

_Return type:_ [ScenarioActualValue](types.md#scenarioactualvalue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScenarioActualValue](types.md#scenarioactualvalue)|toUpdate|Das zu aktualisierende Actual-Value|Yes|



## ScriptOutputHelperService
### Description
Ausgabe-Support Methoden

### Methods

_**createOutputRequest**_

Erzeugt einen neuen Output-Request

_Return type:_ [ScriptOutputRequest](types.md#scriptoutputrequest)


## ScriptingIOFactory
### Description
Factory zum Erzeugen von Writern und OutputStreams

### Methods

_**createPlainWriter**_

Erzeugt einen Writer für einfache Texte ohne besondere Formatierungs- oder Syntax-Unterstützung mit Standard-Zeilenumbruch (Windows).

_Return type:_ [PlainScriptingWriter](types.md#plainscriptingwriter)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScriptingOutputStream](types.md#scriptingoutputstream)|destination|Ziel-Stream, in den geschrieben wird|Yes|


_**createPlainWriter**_

Wie createPlainWriter(ScriptingOutputStream), aber mit einstellbarer Zeichenfolge für Zeilenumbrüche

_Return type:_ [PlainScriptingWriter](types.md#plainscriptingwriter)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScriptingOutputStream](types.md#scriptingoutputstream)|destination|Ziel-Stream, in den geschrieben wird|Yes|
|[ELinebreakType](types.md#elinebreaktype)|linebreakType|Zeichenfolge für einen Zeilenumbruch|Yes|


_**createStringCollector**_

Erzeugt einen StringCollector, der geschriebene Daten als String sammelt.

_Return type:_ [StringCollectorOutputStream](types.md#stringcollectoroutputstream)

_**createXmlWriter**_

Erzeugt einen XmlWriter, der in den übergebenen Stream schreibt.

_Return type:_ [ScriptingXmlWriter](types.md#scriptingxmlwriter)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScriptingOutputStream](types.md#scriptingoutputstream)|destination|Ziel-Stream, in den geschrieben wird|Yes|
|_string_|encoding|Encoding (z.B. UTF-8)|Yes|
|_boolean_|prettyPrint|besser leserlich formatieren?|No|



## ScriptingServiceList
### Description
Services

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[TextEnumerationScriptingService](#textenumerationscriptingservice)|textEnumerationService|Service zur Verarbeitung von Text-Enumerationen|Yes|
|[BundleSchemaScriptingService](#bundleschemascriptingservice)|bundleSchemaService|Service zur Verarbeitung von Artikeln-Gebinde-Relationen in Skripten|Yes|
|[VariantAttributeScriptingService](#variantattributescriptingservice)|variantAttributeService|Service zur Verarbeitung von Variantenattributen in Skripten|Yes|
|[CrmTaskScriptingService](#crmtaskscriptingservice)|crmTaskService|Service zur Verarbeitung von CRM-Aufgaben|Yes|
|[AccountScriptingService](#accountscriptingservice)|accountService|Service zur Verarbeitung von Accounts|Yes|
|[ShelfDocumentScriptingService](#shelfdocumentscriptingservice)|shelfDocumentService|Service zur Verarbeitung von Shelf-Documents|Yes|
|[LoggingScriptingService](#loggingscriptingservice)|logger|Logging im Scripting|Yes|
|[DeliveryMethodScriptingService](#deliverymethodscriptingservice)|deliveryMethodService|Verwaltung von Versandarten|Yes|
|[CrmDealScriptingService](#crmdealscriptingservice)|crmDealService|Service zur Verarbeitung von Deals|Yes|
|[ProductScriptingService](#productscriptingservice)|productService|Service zur Verarbeitung von Produkten in Skripten|Yes|
|[ProductGroupScriptingService](#productgroupscriptingservice)|productGroupService|Service zur Verarbeitung von Warengruppen im Skripten|Yes|
|[TextTemplateScriptingService](#texttemplatescriptingservice)|textTemplateService|Service zur Verarbeitung von TextTemplates in Skripten|Yes|
|[ScriptOutputHelperService](#scriptoutputhelperservice)|outputHelper|Ausgabe-Support Methoden|Yes|
|[ProductMainGroupScriptingService](#productmaingroupscriptingservice)|productMainGroupService|Service zur Verarbeitung von Hauptwarengruppen im Skripten|Yes|
|[AccountListingScriptingService](#accountlistingscriptingservice)|accountListingService|Service zur Verarbeitung von Account-Listings in Skripten|Yes|
|[dtoFactory](#dtofactory)|dtoFactory|Erstellt DTOs zur Verwendung im Skript|Yes|
|[ScriptingIOFactory](#scriptingiofactory)|ioFactory|Factory zum Erzeugen von Writern und OutputStreams|Yes|
|[ProductPriceScriptingService](#productpricescriptingservice)|priceService|Service zur Verarbeitung von Produktpreisen in Skripten|Yes|
|[ScriptingUtilities](#scriptingutilities)|utils|Hilfsmethoden zur Verwendung im Scripting|Yes|
|[VariantSchemaScriptingService](#variantschemascriptingservice)|variantSchemaService|Service zur Verarbeitung von Variantenschemas in Skripten|Yes|
|[ArticleCustomerScriptingService](#articlecustomerscriptingservice)|articleCustomerService|Service zur Verarbeitung von Artikel-Kundenbeziehungen im Skripten|Yes|
|[ArticleScriptingService](#articlescriptingservice)|articleService|Service zur Verarbeitung von Artikeln im Skripten|Yes|
|[DocumentScriptingService](#documentscriptingservice)|documentService|Service zur Verarbeitung von Belegen|Yes|
|[ArticleListingScriptingService](#articlelistingscriptingservice)|articleListingService|Service zur Verarbeitung von Artikel-Listings im Skripten|Yes|
|[VariantValueListingScriptingService](#variantvaluelistingscriptingservice)|variantValueListingService|Service zur Verarbeitung von Variantenattributwert-Listings in Skripten|Yes|
|[ArticleStorageScriptingService](#articlestoragescriptingservice)|articleStorageService|Service zur Verarbeitung von Artikel-Lager-Beziehungen im Skripten|Yes|
|[FreeSequencerScriptingService](#freesequencerscriptingservice)|freeSequencerService|Anfragen von neuen Zählerkreis-Nummern|Yes|
|[PaymentMethodScriptingService](#paymentmethodscriptingservice)|paymentMethodService|Verwaltung von Zahlungsarten|Yes|
|[AssetTypeScriptingService](#assettypescriptingservice)|assetTypeService|Service zur Verarbeitung von AssetsTypen in Skripten|Yes|
|[StockScriptingService](#stockscriptingservice)|stockService|Service zur Bestandsabfrage und Lagerbuchung in Skripten|Yes|
|[VariantValueScriptingService](#variantvaluescriptingservice)|variantValueService|Service zur Verarbeitung von Variantenwerten in Skripten|Yes|
|[AssetScriptingService](#assetscriptingservice)|assetService|Service zur Verarbeitung von Assets in Skripten|Yes|
|[ScenarioScriptingService](#scenarioscriptingservice)|scenarioService|Service zur Verarbeitung von ScenarioActualValue|Yes|
|[VqlScriptingService](#vqlscriptingservice)|vqlService|Service zur Verarbeitung von Accounts|Yes|
|[UserAndGroupScriptingService](#userandgroupscriptingservice)|userAndGroupService|Lesen von Benutzern und Benutzergruppen|Yes|
|[CrmActivityScriptingService](#crmactivityscriptingservice)|crmActivityService|Service zur Verarbeitung von CRM-Aktivitäten|Yes|
|[VariantAttributeListingScriptingService](#variantattributelistingscriptingservice)|variantAttributeListingService|Service zur Verarbeitung von Variantenattribut-Listings in Skripten|Yes|
|[TagScriptingService](#tagscriptingservice)|tagService|Service zur Verwendung von Tags|Yes|
|[DeliveryTermScriptingService](#deliverytermscriptingservice)|deliveryTermService|Verwaltung von Lieferbedingungen|Yes|
|[OpenItemScriptingService](#openitemscriptingservice)|openItemService|Service zur Verarbeitung von Offenen Posten|Yes|
|[CrmDocumentRefScriptingService](#crmdocumentrefscriptingservice)|crmDocumentRefService|Verwaltung von CRM-Belegreferenzen|Yes|
|[PaymentTermScriptingService](#paymenttermscriptingservice)|paymentTermService|Verwaltung von Zahlungsbedingungen|Yes|
|[ArticleSupplierScriptingService](#articlesupplierscriptingservice)|articleSupplierService|Service zur Verarbeitung von Artikel-Lieferantenbeziehungen im Skripten|Yes|
|[HttpClientScriptingService](#httpclientscriptingservice)|httpClientService|HTTP-Client im Scripting|Yes|
|[CrmProjectScriptingService](#crmprojectscriptingservice)|crmProjectService|Service zur Verarbeitung von Projekten|Yes|
|[DunningScriptingService](#dunningscriptingservice)|dunningService|Service zur Verarbeitung von Mahnungen|Yes|



## ScriptingUtilities
### Description
Hilfsmethoden zur Verwendung im Scripting

### Methods

_**concatLists**_

Verkettet zwei Listen

_Return type:_ _Array<object>_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<object>_|firstList|Erste Liste|No|
|_Array<object>_|secondList|Zweite Liste|No|


_**dateNow**_

Aktuelles Datum

_Return type:_ [ScriptingDate](types.md#scriptingdate)

_**dateTimeNow**_

Aktueller Datum-Zeit-Wert

_Return type:_ [ScriptingDateTime](types.md#scriptingdatetime)

_**newBigDecimal**_

Erstellt eine neue BigDecimal-Instanz

_Return type:_ _number_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_object_|value|Der Quell-Wert|Yes|
|_number_|scale|Anzahl Nachkommastellen|No|


_**newBigDecimal**_

Erstellt eine neue BigDecimal-Instanz

_Return type:_ _number_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_object_|value|Der Quell-Wert|Yes|


_**toApiReference**_

Erstellt eine API-Referenz

_Return type:_ [ApiObjectReference](types.md#apiobjectreference)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_object_|source|Das Quell-Objekt|No|



## ShelfDocumentScriptingService
### Description
Service zur Verarbeitung von Shelf-Documents

### Methods

_**create**_

Legt ein Dokument an. Der Inhalt muss noch separat hochgeladen werden.

_Return type:_ [ShelfDocument](types.md#shelfdocument)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|fileName|Dateiname|Yes|
|_string_|documentTypeKey|Schlüssel des Dokumenttypen|Yes|


_**createAttribution**_

Erstellt eine neue Verknüpfung zwischen einem DMS-Dokument und einem Geschäftsobjekt

_Return type:_ [ShelfDocumentAttribution](types.md#shelfdocumentattribution)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ShelfDocumentAttribution](types.md#shelfdocumentattribution)|attribution|Die zu erstellende Verknüpfung|Yes|


_**createDmsOutputStream**_

Erzeugt einen OutputStream, der geschriebene Daten als Datei ins DMS lädt.

_Return type:_ [DmsOutputStream](types.md#dmsoutputstream)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|shelfDocumentId|ID des Dokuments|Yes|
|_string_|fileName|Dateiname|Yes|


_**deleteAttribution**_

Löscht eine DMS-Verknüpfung

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|attributionId|ID der Verknüpfung|Yes|


_**downloadIntoDMS**_

Lädt eine Datei von einer URL mit Authentifizierung herunter und erstellt ein neues DMS-Dokument

_Return type:_ [ShelfDocument](types.md#shelfdocument)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|url|Download-URL|Yes|
|[EScriptingAuthenticationType](types.md#escriptingauthenticationtype)|authenticationType|Art der Authentifizierung (BASIC_AUTH, BEARER_TOKEN)|Yes|
|_string_|authValue|Authentifizierungswert — Platzhalter (z.B. {{secret:myApi:token}}) oder Klartext. Bei BASIC_AUTH im Format 'username:password'|Yes|
|_string_|documentTypeKey|Schlüssel der Dokumentenart|Yes|


_**downloadIntoDMS**_

Lädt eine Datei von einer URL herunter und erstellt ein neues DMS-Dokument

_Return type:_ [ShelfDocument](types.md#shelfdocument)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|url|Download-URL|Yes|
|_string_|documentTypeKey|Schlüssel der Dokumentenart|Yes|


_**findShelfDocumentTypeByKey**_

Findet ein Dokumentenart über ihren Schlüssel

_Return type:_ [ShelfDocumentType](types.md#shelfdocumenttype)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|key|Der Schlüssel einer Dokumentenart|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ShelfDocument](types.md#shelfdocument)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ShelfDocument](types.md#shelfdocument)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**setDeletionState**_

Setzt den Lösch-Status eines Dokuments

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|shelfDocumentId|ID des Dokuments|Yes|
|[EShelfDocumentDeletionState](types.md#eshelfdocumentdeletionstate)|newState|neuer Löschstatus|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ShelfDocument](types.md#shelfdocument)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ShelfDocument](types.md#shelfdocument)|toUpdate|Die zu aktualisierende Entity|Yes|


_**updateAttribution**_

Aktualisiert eine bestehende DMS-Verknüpfung

_Return type:_ [ShelfDocumentAttribution](types.md#shelfdocumentattribution)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ShelfDocumentAttribution](types.md#shelfdocumentattribution)|attribution|Die zu aktualisierende Verknüpfung|Yes|



## StockScriptingService
### Description
Service zur Bestandsabfrage und Lagerbuchung in Skripten

### Methods

_**bookBulkStockTransfer**_

Führt eine Stapel-Lagerumbuchung durch

_Return type:_ [BulkTransferResult](types.md#bulktransferresult)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BulkTransferRequestApi](types.md#bulktransferrequestapi)|bulkStockTransfer|Anweisungen für die Lagerumbuchungen|Yes|


_**bookManualStockMovement**_

Bucht eine manuelle Lagerbewegung

_Return type:_ [Stock](types.md#stock)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[StockMovementManualApi](types.md#stockmovementmanualapi)|stockMovementManual|Infos zur Durchführung der manuellen Lagerbuchung|Yes|


_**bookStockTransfer**_

Bucht eine Umlagerung

_Return type:_ [StockTransferResult](types.md#stocktransferresult)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[StockTransferApi](types.md#stocktransferapi)|stockTransfer|Details zur Umlagerung|Yes|


_**findAllByArticleAndStorageBin**_

Liefert alle Bestände zu einem Artikel auf einem Lagerplatz

_Return type:_ Array<[Stock](types.md#stock)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|storageBinId|ID des Lagerplatzes|Yes|


_**findByArticleAndStorage**_

Liefert alle Bestände zu einem Artikel in einem Lager

_Return type:_ Array<[Stock](types.md#stock)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|storageId|ID des Lagers|Yes|


_**findByArticleSerialNumberAndStorage**_

Liefert alle Bestände zu einer Artikel-Seriennummer in einem Lager

_Return type:_ Array<[Stock](types.md#stock)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleSerialNumberId|ID der Artikel-Seriennummer|Yes|
|_number_|storageId|ID des Lagers|Yes|


_**findByArticleSerialNumberAndStorageBin**_

Liefert den Bestand zu einer Artikel-Seriennummer auf einem Lagerplatz

_Return type:_ [Stock](types.md#stock)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleSerialNumberId|ID der Artikel-Seriennummer|Yes|
|_number_|storageBinId|ID des Lagerplatzes|Yes|



## TagScriptingService
### Description
Service zur Verwendung von Tags

### Methods

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[TagDto](types.md#tagdto)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [TagDto](types.md#tagdto)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|



## TextEnumerationScriptingService
### Description
Service zur Verarbeitung von Text-Enumerationen

### Methods

_**activate**_

Aktiviert eine Text-Enumeration

_Return type:_ [TextEnumGet](types.md#textenumget)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu aktivierenden Text-Enumeration|Yes|


_**create**_

Erstellt eine Text-Enumeration

_Return type:_ [TextEnumGet](types.md#textenumget)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[TextEnumCreate](types.md#textenumcreate)|toCreate|Die zu erstellende Text-Enumeration|Yes|


_**deactivate**_

Deaktiviert eine Text-Enumeration

_Return type:_ [TextEnumGet](types.md#textenumget)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu deaktivierenden Text-Enumeration|Yes|


_**deleteById**_

Löscht eine Text-Enumeration

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Text-Enumeration|Yes|


_**getNewCreateDto**_

Erstellt eine neue DTO-Instanz zum Anlegen einer Text-Enumeration

_Return type:_ [TextEnumCreate](types.md#textenumcreate)

_**readAllById**_

Liest eine Liste von Text-Enumerationen über ihre IDs

_Return type:_ Array<[TextEnumGet](types.md#textenumget)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|IDs der Text-Enumerationen|Yes|


_**readById**_

Liest eine Text-Enumeration über ihre ID

_Return type:_ [TextEnumGet](types.md#textenumget)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der Text-Enumeration|Yes|


_**update**_

Aktualisiert eine Text-Enumeration

_Return type:_ [TextEnumGet](types.md#textenumget)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[TextEnumGet](types.md#textenumget)|toUpdate|Die zu aktualisierende Text-Enumeration|Yes|



## TextTemplateScriptingService
### Description
Service zur Verarbeitung von TextTemplates in Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [TextTemplate](types.md#texttemplate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [TextTemplate](types.md#texttemplate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[TextTemplate](types.md#texttemplate)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [TextTemplate](types.md#texttemplate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [TextTemplate](types.md#texttemplate)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[TextTemplate](types.md#texttemplate)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [TextTemplate](types.md#texttemplate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [TextTemplate](types.md#texttemplate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[TextTemplate](types.md#texttemplate)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [TextTemplate](types.md#texttemplate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[TextTemplate](types.md#texttemplate)|toUpdate|Die zu aktualisierende Entity|Yes|



## UserAndGroupScriptingService
### Description
Lesen von Benutzern und Benutzergruppen

### Methods

_**findGroupById**_

Findet eine Benutzergruppe über ihre ID

_Return type:_ [Group](types.md#group)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|groupId|ID einer Benutzergruppe|Yes|


_**findGroupByLabel**_

Findet eine Benutzergruppe über ihr Label

_Return type:_ [Group](types.md#group)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|groupLabel|Label einer Benutzergruppe|Yes|


_**findUserById**_

Findet einen Benutzer über seine ID

_Return type:_ [User](types.md#user)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|userId|ID eines Benutzers|Yes|


_**findUserByName**_

Findet einen Benutzer über seinen Benutzernamen

_Return type:_ [User](types.md#user)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|userName|Benutzername|Yes|


_**getCurrentUser**_

Liefert den aktuellen Benutzer

_Return type:_ [User](types.md#user)


## VariantAttributeListingScriptingService
### Description
Service zur Verarbeitung von Variantenattribut-Listings in Skripten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [VariantAttributeListing](types.md#variantattributelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttributeListing](types.md#variantattributelisting)|toCreate|Das zu persistierende DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [VariantAttributeListing](types.md#variantattributelisting)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[VariantAttributeListing](types.md#variantattributelisting)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [VariantAttributeListing](types.md#variantattributelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [VariantAttributeListing](types.md#variantattributelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttributeListing](types.md#variantattributelisting)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [VariantAttributeListing](types.md#variantattributelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttributeListing](types.md#variantattributelisting)|toUpdate|Die zu aktualisierende Entity|Yes|



## VariantAttributeScriptingService
### Description
Service zur Verarbeitung von Variantenattributen in Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [VariantAttribute](types.md#variantattribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [VariantAttribute](types.md#variantattribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttribute](types.md#variantattribute)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [VariantAttribute](types.md#variantattribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [VariantAttribute](types.md#variantattribute)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[VariantAttribute](types.md#variantattribute)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [VariantAttribute](types.md#variantattribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [VariantAttribute](types.md#variantattribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttribute](types.md#variantattribute)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [VariantAttribute](types.md#variantattribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttribute](types.md#variantattribute)|toUpdate|Die zu aktualisierende Entity|Yes|



## VariantSchemaScriptingService
### Description
Service zur Verarbeitung von Variantenschemas in Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [VariantSchema](types.md#variantschema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [VariantSchema](types.md#variantschema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantSchema](types.md#variantschema)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [VariantSchema](types.md#variantschema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [VariantSchema](types.md#variantschema)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[VariantSchema](types.md#variantschema)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [VariantSchema](types.md#variantschema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [VariantSchema](types.md#variantschema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantSchema](types.md#variantschema)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [VariantSchema](types.md#variantschema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantSchema](types.md#variantschema)|toUpdate|Die zu aktualisierende Entity|Yes|



## VariantValueListingScriptingService
### Description
Service zur Verarbeitung von Variantenattributwert-Listings in Skripten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [VariantValueListing](types.md#variantvaluelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantValueListing](types.md#variantvaluelisting)|toCreate|Das zu persistierende DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [VariantValueListing](types.md#variantvaluelisting)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[VariantValueListing](types.md#variantvaluelisting)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [VariantValueListing](types.md#variantvaluelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [VariantValueListing](types.md#variantvaluelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantValueListing](types.md#variantvaluelisting)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [VariantValueListing](types.md#variantvaluelisting)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantValueListing](types.md#variantvaluelisting)|toUpdate|Die zu aktualisierende Entity|Yes|



## VariantValueScriptingService
### Description
Service zur Verarbeitung von Variantenwerten in Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [VariantValue](types.md#variantvalue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**createValue**_

Erstellt einen Variantenwert für ein Attribut

_Return type:_ [VariantValue](types.md#variantvalue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|attributeId|ID des Attributs|Yes|
|[VariantValue](types.md#variantvalue)|value|Der zu erstellende Variantenwert|Yes|


_**createValues**_

Erstellt mehrere Variantenwerte für ein Attribut

_Return type:_ Array<[VariantValue](types.md#variantvalue)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|attributeId|ID des Attributs|Yes|
|Array<[VariantValue](types.md#variantvalue)>|values|Die zu erstellenden Variantenwerte|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [VariantValue](types.md#variantvalue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToDeactivate|ID vom zu deaktivierenden DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**findAllByAttributeId**_

Liefert alle Variantenwerte eines Attributs

_Return type:_ Array<[VariantValue](types.md#variantvalue)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|attributeId|ID des Attributs|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[VariantValue](types.md#variantvalue)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [VariantValue](types.md#variantvalue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [VariantValue](types.md#variantvalue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantValue](types.md#variantvalue)|toUpdate|Die zu aktualisierende Entity|Yes|



## VqlScriptingService
### Description
Service zur Verarbeitung von Accounts

### Methods

_**query**_

Führt eine VQL mit Parametern aus

_Return type:_ Array<_Map<string,object>_>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|vql|Die auszuführende VQL|Yes|
|_number_|limit|Maximale Anzahl der Ergebnisdatensätze|Yes|
|Map<string,_Array<object>_>|variablesWithValues|Variablen mit Werten für die Ausführung der VQL|Yes|


_**query**_

Führt eine VQL mit Parametern aus

_Return type:_ Array<_Map<string,object>_>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|vql|Die auszuführende VQL|Yes|
|_number_|limit|Maximale Anzahl der Ergebnisdatensätze|Yes|


_**queryAll**_

Führt eine VQL mit Parametern aus

_Return type:_ Array<_Map<string,object>_>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|vql|Die auszuführende VQL|Yes|
|Map<string,_Array<object>_>|variablesWithValues|Variablen mit Werten für die Ausführung der VQL|Yes|


_**queryAll**_

Führt eine VQL mit Parametern aus

_Return type:_ Array<_Map<string,object>_>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|vql|Die auszuführende VQL|Yes|



## dtoFactory
### Description
Erstellt DTOs zur Verwendung im Skript

### Methods

_**createAccount**_

Erstellt einen neue Instanz von Account

_Return type:_ [Account](types.md#account)

_**createAccountAddress**_

Erstellt einen neue Instanz von AccountAddress

_Return type:_ [AccountAddress](types.md#accountaddress)

_**createAccountBankdetail**_

Erstellt einen neue Instanz von AccountBankdetail

_Return type:_ [AccountBankdetail](types.md#accountbankdetail)

_**createAccountLoanValue**_

Erstellt einen neue Instanz von AccountLoanValue

_Return type:_ [AccountLoanValue](types.md#accountloanvalue)

_**createAccountManufacturer**_

Erstellt einen neue Instanz von AccountManufacturer

_Return type:_ [AccountManufacturer](types.md#accountmanufacturer)

_**createAccountManufacturerDescription**_

Erstellt einen neue Instanz von AccountManufacturerDescription

_Return type:_ [AccountManufacturerDescription](types.md#accountmanufacturerdescription)

_**createAccountPerson**_

Erstellt einen neue Instanz von AccountPerson

_Return type:_ [AccountPerson](types.md#accountperson)

_**createAccountRelation**_

Erstellt einen neue Instanz von AccountRelation

_Return type:_ [AccountRelation](types.md#accountrelation)

_**createAdditionalParameter**_

Erstellt einen neue Instanz von AdditionalParameter

_Return type:_ [AdditionalParameter](types.md#additionalparameter)

_**createApiCreatableReference**_

Erstellt einen neue Instanz von ApiCreatableReference

_Return type:_ [ApiCreatableReference](types.md#apicreatablereference)

_**createApiObjectReference**_

Erstellt einen neue Instanz von ApiObjectReference

_Return type:_ [ApiObjectReference](types.md#apiobjectreference)

_**createArticle**_

Erstellt einen neue Instanz von Article

_Return type:_ [Article](types.md#article)

_**createArticleAssetInformation**_

Erstellt einen neue Instanz von ArticleAssetInformation

_Return type:_ [ArticleAssetInformation](types.md#articleassetinformation)

_**createArticleAvailabilityDetermination**_

Erstellt einen neue Instanz von ArticleAvailabilityDetermination

_Return type:_ [ArticleAvailabilityDetermination](types.md#articleavailabilitydetermination)

_**createArticleIdentifier**_

Erstellt einen neue Instanz von ArticleIdentifier

_Return type:_ [ArticleIdentifier](types.md#articleidentifier)

_**createArticlePrintLabelSettings**_

Erstellt einen neue Instanz von ArticlePrintLabelSettings

_Return type:_ [ArticlePrintLabelSettings](types.md#articleprintlabelsettings)

_**createArticleSerialNumber**_

Erstellt einen neue Instanz von ArticleSerialNumber

_Return type:_ [ArticleSerialNumber](types.md#articleserialnumber)

_**createAssemblyComponentReturnLine**_

Erstellt einen neue Instanz von AssemblyComponentReturnLine

_Return type:_ [AssemblyComponentReturnLine](types.md#assemblycomponentreturnline)

_**createAssetType**_

Erstellt einen neue Instanz von AssetType

_Return type:_ [AssetType](types.md#assettype)

_**createBulkTransferRequestApi**_

Erstellt einen neue Instanz von BulkTransferRequestApi

_Return type:_ [BulkTransferRequestApi](types.md#bulktransferrequestapi)

_**createBulkTransferResult**_

Erstellt einen neue Instanz von BulkTransferResult

_Return type:_ [BulkTransferResult](types.md#bulktransferresult)

_**createBundleUnitTypeRatio**_

Erstellt einen neue Instanz von BundleUnitTypeRatio

_Return type:_ [BundleUnitTypeRatio](types.md#bundleunittyperatio)

_**createContact**_

Erstellt einen neue Instanz von Contact

_Return type:_ [Contact](types.md#contact)

_**createCountryReference**_

Erstellt einen neue Instanz von CountryReference

_Return type:_ [CountryReference](types.md#countryreference)

_**createCreateNewDocumentRequest**_

Erstellt einen neue Instanz von CreateNewDocumentRequest

_Return type:_ [CreateNewDocumentRequest](types.md#createnewdocumentrequest)

_**createCrmActivity**_

Erstellt einen neue Instanz von CrmActivity

_Return type:_ [CrmActivity](types.md#crmactivity)

_**createCrmActivityType**_

Erstellt einen neue Instanz von CrmActivityType

_Return type:_ [CrmActivityType](types.md#crmactivitytype)

_**createCrmChecklistItem**_

Erstellt einen neue Instanz von CrmChecklistItem

_Return type:_ [CrmChecklistItem](types.md#crmchecklistitem)

_**createCrmDeal**_

Erstellt einen neue Instanz von CrmDeal

_Return type:_ [CrmDeal](types.md#crmdeal)

_**createCrmObjectRef**_

Erstellt einen neue Instanz von CrmObjectRef

_Return type:_ [CrmObjectRef](types.md#crmobjectref)

_**createCrmParticipant**_

Erstellt einen neue Instanz von CrmParticipant

_Return type:_ [CrmParticipant](types.md#crmparticipant)

_**createCrmProject**_

Erstellt einen neue Instanz von CrmProject

_Return type:_ [CrmProject](types.md#crmproject)

_**createCrmReference**_

Erstellt einen neue Instanz von CrmReference

_Return type:_ [CrmReference](types.md#crmreference)

_**createCrmReminder**_

Erstellt einen neue Instanz von CrmReminder

_Return type:_ [CrmReminder](types.md#crmreminder)

_**createCrmState**_

Erstellt einen neue Instanz von CrmState

_Return type:_ [CrmState](types.md#crmstate)

_**createCrmSubType**_

Erstellt einen neue Instanz von CrmSubType

_Return type:_ [CrmSubType](types.md#crmsubtype)

_**createCrmTask**_

Erstellt einen neue Instanz von CrmTask

_Return type:_ [CrmTask](types.md#crmtask)

_**createCrmTaskParticipant**_

Erstellt einen neue Instanz von CrmTaskParticipant

_Return type:_ [CrmTaskParticipant](types.md#crmtaskparticipant)

_**createCurrencyReference**_

Erstellt einen neue Instanz von CurrencyReference

_Return type:_ [CurrencyReference](types.md#currencyreference)

_**createCustomer**_

Erstellt einen neue Instanz von Customer

_Return type:_ [Customer](types.md#customer)

_**createDangerousGoodInformation**_

Erstellt einen neue Instanz von DangerousGoodInformation

_Return type:_ [DangerousGoodInformation](types.md#dangerousgoodinformation)

_**createDateRange**_

Erstellt einen neue Instanz von PicklistTemplate$DateRange

_Return type:_ [PicklistTemplate$DateRange](types.md#picklisttemplatedaterange)

_**createDocument**_

Erstellt einen neue Instanz von Document

_Return type:_ [Document](types.md#document)

_**createDocumentAdditionalInfo**_

Erstellt einen neue Instanz von DocumentAdditionalInfo

_Return type:_ [DocumentAdditionalInfo](types.md#documentadditionalinfo)

_**createDocumentAddress**_

Erstellt einen neue Instanz von DocumentAddress

_Return type:_ [DocumentAddress](types.md#documentaddress)

_**createDocumentContractDetail**_

Erstellt einen neue Instanz von DocumentContractDetail

_Return type:_ [DocumentContractDetail](types.md#documentcontractdetail)

_**createDocumentFabricationDetail**_

Erstellt einen neue Instanz von DocumentFabricationDetail

_Return type:_ [DocumentFabricationDetail](types.md#documentfabricationdetail)

_**createDocumentFinanceBooking**_

Erstellt einen neue Instanz von DocumentFinanceBooking

_Return type:_ [DocumentFinanceBooking](types.md#documentfinancebooking)

_**createDocumentLine**_

Erstellt einen neue Instanz von DocumentLine

_Return type:_ [DocumentLine](types.md#documentline)

_**createDocumentLineBooking**_

Erstellt einen neue Instanz von DocumentLineBooking

_Return type:_ [DocumentLineBooking](types.md#documentlinebooking)

_**createDocumentLineCommission**_

Erstellt einen neue Instanz von DocumentLineCommission

_Return type:_ [DocumentLineCommission](types.md#documentlinecommission)

_**createDocumentLineComponent**_

Erstellt einen neue Instanz von DocumentLineComponent

_Return type:_ [DocumentLineComponent](types.md#documentlinecomponent)

_**createDocumentLineComponentFabricationDetail**_

Erstellt einen neue Instanz von DocumentLineComponentFabricationDetail

_Return type:_ [DocumentLineComponentFabricationDetail](types.md#documentlinecomponentfabricationdetail)

_**createDocumentLineFabricationBookedComponent**_

Erstellt einen neue Instanz von DocumentLineFabricationBookedComponent

_Return type:_ [DocumentLineFabricationBookedComponent](types.md#documentlinefabricationbookedcomponent)

_**createDocumentLineFabricationComponent**_

Erstellt einen neue Instanz von DocumentLineFabricationComponent

_Return type:_ [DocumentLineFabricationComponent](types.md#documentlinefabricationcomponent)

_**createDocumentLineFabricationDetail**_

Erstellt einen neue Instanz von DocumentLineFabricationDetail

_Return type:_ [DocumentLineFabricationDetail](types.md#documentlinefabricationdetail)

_**createDocumentLineFabricationDetailSerialNumber**_

Erstellt einen neue Instanz von DocumentLineFabricationDetailSerialNumber

_Return type:_ [DocumentLineFabricationDetailSerialNumber](types.md#documentlinefabricationdetailserialnumber)

_**createDocumentLinePosDetail**_

Erstellt einen neue Instanz von DocumentLinePosDetail

_Return type:_ [DocumentLinePosDetail](types.md#documentlineposdetail)

_**createDocumentLineRef**_

Erstellt einen neue Instanz von DocumentLineRef

_Return type:_ [DocumentLineRef](types.md#documentlineref)

_**createDocumentLineReturnDetail**_

Erstellt einen neue Instanz von DocumentLineReturnDetail

_Return type:_ [DocumentLineReturnDetail](types.md#documentlinereturndetail)

_**createDocumentPosDetail**_

Erstellt einen neue Instanz von DocumentPosDetail

_Return type:_ [DocumentPosDetail](types.md#documentposdetail)

_**createDocumentPosPayment**_

Erstellt einen neue Instanz von DocumentPosPayment

_Return type:_ [DocumentPosPayment](types.md#documentpospayment)

_**createDocumentPriceModifier**_

Erstellt einen neue Instanz von DocumentPriceModifier

_Return type:_ [DocumentPriceModifier](types.md#documentpricemodifier)

_**createDocumentRef**_

Erstellt einen neue Instanz von DocumentRef

_Return type:_ [DocumentRef](types.md#documentref)

_**createDocumentShippingCost**_

Erstellt einen neue Instanz von DocumentShippingCost

_Return type:_ [DocumentShippingCost](types.md#documentshippingcost)

_**createDocumentTax**_

Erstellt einen neue Instanz von DocumentTax

_Return type:_ [DocumentTax](types.md#documenttax)

_**createDocumentText**_

Erstellt einen neue Instanz von DocumentText

_Return type:_ [DocumentText](types.md#documenttext)

_**createDocumentTransferToStateRequest**_

Erstellt einen neue Instanz von DocumentTransferToStateRequest

_Return type:_ [DocumentTransferToStateRequest](types.md#documenttransfertostaterequest)

_**createDocumentTransferToTypeRequest**_

Erstellt einen neue Instanz von DocumentTransferToTypeRequest

_Return type:_ [DocumentTransferToTypeRequest](types.md#documenttransfertotyperequest)

_**createDocumentType**_

Erstellt einen neue Instanz von DocumentType

_Return type:_ [DocumentType](types.md#documenttype)

_**createDocumentTypeFollowUp**_

Erstellt einen neue Instanz von DocumentTypeFollowUp

_Return type:_ [DocumentTypeFollowUp](types.md#documenttypefollowup)

_**createDocumentTypeLabel**_

Erstellt einen neue Instanz von DocumentTypeLabel

_Return type:_ [DocumentTypeLabel](types.md#documenttypelabel)

_**createDocumentTypeState**_

Erstellt einen neue Instanz von DocumentTypeState

_Return type:_ [DocumentTypeState](types.md#documenttypestate)

_**createDummySerialNumberStockTransferApi**_

Erstellt einen neue Instanz von DummySerialNumberStockTransferApi

_Return type:_ [DummySerialNumberStockTransferApi](types.md#dummyserialnumberstocktransferapi)

_**createExternalDocumentWithTaxesLine**_

Erstellt einen neue Instanz von ExternalDocumentWithTaxesLine

_Return type:_ [ExternalDocumentWithTaxesLine](types.md#externaldocumentwithtaxesline)

_**createExternalDocumentWithTaxesRequest**_

Erstellt einen neue Instanz von ExternalDocumentWithTaxesRequest

_Return type:_ [ExternalDocumentWithTaxesRequest](types.md#externaldocumentwithtaxesrequest)

_**createFabricationComponentForProduction**_

Erstellt einen neue Instanz von FabricationComponentForProduction

_Return type:_ [FabricationComponentForProduction](types.md#fabricationcomponentforproduction)

_**createFabricationDefectiveRequest**_

Erstellt einen neue Instanz von FabricationDefectiveRequest

_Return type:_ [FabricationDefectiveRequest](types.md#fabricationdefectiverequest)

_**createFabricationProduceRequest**_

Erstellt einen neue Instanz von FabricationProduceRequest

_Return type:_ [FabricationProduceRequest](types.md#fabricationproducerequest)

_**createFabricationRemainingComponent**_

Erstellt einen neue Instanz von FabricationRemainingComponent

_Return type:_ [FabricationRemainingComponent](types.md#fabricationremainingcomponent)

_**createFabricationRevertRequest**_

Erstellt einen neue Instanz von FabricationRevertRequest

_Return type:_ [FabricationRevertRequest](types.md#fabricationrevertrequest)

_**createFabricationSerialNumber**_

Erstellt einen neue Instanz von FabricationSerialNumber

_Return type:_ [FabricationSerialNumber](types.md#fabricationserialnumber)

_**createGroup**_

Erstellt einen neue Instanz von Group

_Return type:_ [Group](types.md#group)

_**createIncomingGoodsTarget**_

Erstellt einen neue Instanz von DocumentAdditionalInfo$IncomingGoodsTarget

_Return type:_ [DocumentAdditionalInfo$IncomingGoodsTarget](types.md#documentadditionalinfoincominggoodstarget)

_**createIncomingGoodsTargetOfLine**_

Erstellt einen neue Instanz von DocumentAdditionalInfo$IncomingGoodsTargetOfLine

_Return type:_ [DocumentAdditionalInfo$IncomingGoodsTargetOfLine](types.md#documentadditionalinfoincominggoodstargetofline)

_**createLocalizedTextTemplateContent**_

Erstellt einen neue Instanz von LocalizedTextTemplateContent

_Return type:_ [LocalizedTextTemplateContent](types.md#localizedtexttemplatecontent)

_**createMetric**_

Erstellt einen neue Instanz von Article$Metric

_Return type:_ [Article$Metric](types.md#articlemetric)

_**createOrderSelectionOptions**_

Erstellt einen neue Instanz von PicklistTemplate$OrderSelectionOptions

_Return type:_ [PicklistTemplate$OrderSelectionOptions](types.md#picklisttemplateorderselectionoptions)

_**createPaymentTermRef**_

Erstellt einen neue Instanz von PaymentTermRef

_Return type:_ [PaymentTermRef](types.md#paymenttermref)

_**createPickTrolley**_

Erstellt einen neue Instanz von PickTrolley

_Return type:_ [PickTrolley](types.md#picktrolley)

_**createPickTrolleyBox**_

Erstellt einen neue Instanz von PickTrolleyBox

_Return type:_ [PickTrolleyBox](types.md#picktrolleybox)

_**createPicklist**_

Erstellt einen neue Instanz von Picklist

_Return type:_ [Picklist](types.md#picklist)

_**createPicklistCreationOptions**_

Erstellt einen neue Instanz von PicklistTemplate$PicklistCreationOptions

_Return type:_ [PicklistTemplate$PicklistCreationOptions](types.md#picklisttemplatepicklistcreationoptions)

_**createPicklistLine**_

Erstellt einen neue Instanz von PicklistLine

_Return type:_ [PicklistLine](types.md#picklistline)

_**createPicklistLineBooking**_

Erstellt einen neue Instanz von PicklistLineBooking

_Return type:_ [PicklistLineBooking](types.md#picklistlinebooking)

_**createPicklistLineComponent**_

Erstellt einen neue Instanz von PicklistLineComponent

_Return type:_ [PicklistLineComponent](types.md#picklistlinecomponent)

_**createPicklistProcessingOptions**_

Erstellt einen neue Instanz von PicklistTemplate$PicklistProcessingOptions

_Return type:_ [PicklistTemplate$PicklistProcessingOptions](types.md#picklisttemplatepicklistprocessingoptions)

_**createPicklistScript**_

Erstellt einen neue Instanz von PicklistTemplate$PicklistScript

_Return type:_ [PicklistTemplate$PicklistScript](types.md#picklisttemplatepicklistscript)

_**createPicklistTemplate**_

Erstellt einen neue Instanz von PicklistTemplate

_Return type:_ [PicklistTemplate](types.md#picklisttemplate)

_**createPriceSelectionCriteria**_

Erstellt einen neue Instanz von PriceSelectionCriteria

_Return type:_ [PriceSelectionCriteria](types.md#priceselectioncriteria)

_**createPrintedTranslatedField**_

Erstellt einen neue Instanz von DocumentAdditionalInfo$PrintedTranslatedField

_Return type:_ [DocumentAdditionalInfo$PrintedTranslatedField](types.md#documentadditionalinfoprintedtranslatedfield)

_**createProductArticleRef**_

Erstellt einen neue Instanz von ProductArticleRef

_Return type:_ [ProductArticleRef](types.md#productarticleref)

_**createRecommendedRetailPrice**_

Erstellt einen neue Instanz von RecommendedRetailPrice

_Return type:_ [RecommendedRetailPrice](types.md#recommendedretailprice)

_**createRequestDocument**_

Erstellt einen neue Instanz von RequestDocument

_Return type:_ [RequestDocument](types.md#requestdocument)

_**createRequestDocumentLine**_

Erstellt einen neue Instanz von RequestDocumentLine

_Return type:_ [RequestDocumentLine](types.md#requestdocumentline)

_**createRequestDocumentLineBooking**_

Erstellt einen neue Instanz von RequestDocumentLineBooking

_Return type:_ [RequestDocumentLineBooking](types.md#requestdocumentlinebooking)

_**createRequestDocumentLineCommission**_

Erstellt einen neue Instanz von RequestDocumentLineCommission

_Return type:_ [RequestDocumentLineCommission](types.md#requestdocumentlinecommission)

_**createRequestDocumentLineFabricationDetail**_

Erstellt einen neue Instanz von RequestDocumentLineFabricationDetail

_Return type:_ [RequestDocumentLineFabricationDetail](types.md#requestdocumentlinefabricationdetail)

_**createRequestDocumentLineShippingCostDetail**_

Erstellt einen neue Instanz von RequestDocumentLineShippingCostDetail

_Return type:_ [RequestDocumentLineShippingCostDetail](types.md#requestdocumentlineshippingcostdetail)

_**createRequestDocumentPriceModifier**_

Erstellt einen neue Instanz von RequestDocumentPriceModifier

_Return type:_ [RequestDocumentPriceModifier](types.md#requestdocumentpricemodifier)

_**createRequestDocumentText**_

Erstellt einen neue Instanz von RequestDocumentText

_Return type:_ [RequestDocumentText](types.md#requestdocumenttext)

_**createRevenueCalculation**_

Erstellt einen neue Instanz von RevenueCalculation

_Return type:_ [RevenueCalculation](types.md#revenuecalculation)

_**createSalesAgent**_

Erstellt einen neue Instanz von SalesAgent

_Return type:_ [SalesAgent](types.md#salesagent)

_**createScenarioActualValue**_

Erstellt einen neue Instanz von ScenarioActualValue

_Return type:_ [ScenarioActualValue](types.md#scenarioactualvalue)

_**createScenarioDimension**_

Erstellt einen neue Instanz von ScenarioDimension

_Return type:_ [ScenarioDimension](types.md#scenariodimension)

_**createScenarioDimensionValue**_

Erstellt einen neue Instanz von ScenarioDimensionValue

_Return type:_ [ScenarioDimensionValue](types.md#scenariodimensionvalue)

_**createSequencerConfiguration**_

Erstellt einen neue Instanz von SequencerConfiguration

_Return type:_ [SequencerConfiguration](types.md#sequencerconfiguration)

_**createSequencerConfigurationDetail**_

Erstellt einen neue Instanz von SequencerConfigurationDetail

_Return type:_ [SequencerConfigurationDetail](types.md#sequencerconfigurationdetail)

_**createSerialNumberWithQuantityApi**_

Erstellt einen neue Instanz von SerialNumberWithQuantityApi

_Return type:_ [SerialNumberWithQuantityApi](types.md#serialnumberwithquantityapi)

_**createShelfDocument**_

Erstellt einen neue Instanz von ShelfDocument

_Return type:_ [ShelfDocument](types.md#shelfdocument)

_**createShelfDocumentAttribution**_

Erstellt einen neue Instanz von ShelfDocumentAttribution

_Return type:_ [ShelfDocumentAttribution](types.md#shelfdocumentattribution)

_**createShelfDocumentType**_

Erstellt einen neue Instanz von ShelfDocumentType

_Return type:_ [ShelfDocumentType](types.md#shelfdocumenttype)

_**createShelfFile**_

Erstellt einen neue Instanz von ShelfFile

_Return type:_ [ShelfFile](types.md#shelffile)

_**createShelfFileMetaData**_

Erstellt einen neue Instanz von ShelfFileMetaData

_Return type:_ [ShelfFileMetaData](types.md#shelffilemetadata)

_**createShelfShare**_

Erstellt einen neue Instanz von ShelfShare

_Return type:_ [ShelfShare](types.md#shelfshare)

_**createShelfTranslatableText**_

Erstellt einen neue Instanz von ShelfTranslatableText

_Return type:_ [ShelfTranslatableText](types.md#shelftranslatabletext)

_**createStock**_

Erstellt einen neue Instanz von Stock

_Return type:_ [Stock](types.md#stock)

_**createStockMovementManualApi**_

Erstellt einen neue Instanz von StockMovementManualApi

_Return type:_ [StockMovementManualApi](types.md#stockmovementmanualapi)

_**createStockTransferApi**_

Erstellt einen neue Instanz von StockTransferApi

_Return type:_ [StockTransferApi](types.md#stocktransferapi)

_**createStockTransferResult**_

Erstellt einen neue Instanz von StockTransferResult

_Return type:_ [StockTransferResult](types.md#stocktransferresult)

_**createStorageBinRef**_

Erstellt einen neue Instanz von StorageBinRef

_Return type:_ [StorageBinRef](types.md#storagebinref)

_**createSubFileInfo**_

Erstellt einen neue Instanz von SubFileInfo

_Return type:_ [SubFileInfo](types.md#subfileinfo)

_**createSupplier**_

Erstellt einen neue Instanz von Supplier

_Return type:_ [Supplier](types.md#supplier)

_**createTagDto**_

Erstellt einen neue Instanz von TagDto

_Return type:_ [TagDto](types.md#tagdto)

_**createTaxIdForeignCountry**_

Erstellt einen neue Instanz von TaxIdForeignCountry

_Return type:_ [TaxIdForeignCountry](types.md#taxidforeigncountry)

_**createTssSignature**_

Erstellt einen neue Instanz von TssSignature

_Return type:_ [TssSignature](types.md#tsssignature)

_**createUnitTypeReference**_

Erstellt einen neue Instanz von UnitTypeReference

_Return type:_ [UnitTypeReference](types.md#unittypereference)

_**createUpdateDocumentRequest**_

Erstellt einen neue Instanz von UpdateDocumentRequest

_Return type:_ [UpdateDocumentRequest](types.md#updatedocumentrequest)

_**createUser**_

Erstellt einen neue Instanz von User

_Return type:_ [User](types.md#user)

_**createVariantDescription**_

Erstellt einen neue Instanz von VariantDescription

_Return type:_ [VariantDescription](types.md#variantdescription)

_**createVariantValueReference**_

Erstellt einen neue Instanz von VariantValueReference

_Return type:_ [VariantValueReference](types.md#variantvaluereference)

