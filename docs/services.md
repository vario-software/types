# Services

## AccountScriptingService
### Description
Service zur Verarbeitung von Accounts

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [Account](types.md#Account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [Account](types.md#Account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Account](types.md#Account)|toCreate|Das zu persistierende DTO|Yes|


_**createAddress**_

Erstellt eine Adresse

_Return type:_ [AccountAddress](types.md#AccountAddress)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountAddress](types.md#AccountAddress)|address|Die zu erstellende Adresse|Yes|


_**createBankdetail**_

Erstellt ein Bankdetail

_Return type:_ [AccountBankdetail](types.md#AccountBankdetail)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|
|[AccountBankdetail](types.md#AccountBankdetail)|bankdetail|anzulegendes Bankdetails|Yes|


_**createPerson**_

Erstellt einen Ansprechpartner

_Return type:_ [AccountPerson](types.md#AccountPerson)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountPerson](types.md#AccountPerson)|person|Der zu erstellende Ansprechpartner|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [Account](types.md#Account)

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


_**getAddress**_

Liest eine Adresse

_Return type:_ [AccountAddress](types.md#AccountAddress)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|_number_|addressId|ID einer Adresse|Yes|


_**getAddresses**_

Liefert die Adressen eines Accounts (sortiert)

_Return type:_ Array<[AccountAddress](types.md#AccountAddress)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|


_**getBankdetail**_

Liest ein Bankdetail

_Return type:_ [AccountBankdetail](types.md#AccountBankdetail)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|
|_number_|bankdetailId|ID eines Bankdetails|Yes|


_**getBankdetails**_

Liefert die Bankdetails eines Accounts

_Return type:_ Array<[AccountBankdetail](types.md#AccountBankdetail)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [Account](types.md#Account)

_**getPerson**_

Liest einen Ansprechpartner

_Return type:_ [AccountPerson](types.md#AccountPerson)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|_number_|personId|ID eines Ansprechpartners|Yes|


_**getPersons**_

Liefert die Ansprechpartner eines Accounts (sortiert)

_Return type:_ Array<[AccountPerson](types.md#AccountPerson)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[Account](types.md#Account)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [Account](types.md#Account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**sendNotification**_

Schreibt eine Benachrichtigung auf Basis des Accounts

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId||No|
|[ScriptOutputRequest](types.md#ScriptOutputRequest)|outputRequest||No|


_**store**_

Persistiert eine DTO

_Return type:_ [Account](types.md#Account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Account](types.md#Account)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [Account](types.md#Account)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Account](types.md#Account)|toUpdate|Die zu aktualisierende Entity|Yes|


_**updateAddress**_

Aktualisiert eine Adresse

_Return type:_ [AccountAddress](types.md#AccountAddress)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountAddress](types.md#AccountAddress)|address|Die zu aktualisierende Adresse|Yes|


_**updateBankdetail**_

Aktualisiert ein Bankdetail

_Return type:_ [AccountBankdetail](types.md#AccountBankdetail)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountBankdetail](types.md#AccountBankdetail)|bankdetail|zu aktualisierendes Bankdetail|Yes|


_**updatePerson**_

Aktualisiert einen Ansprechpartner

_Return type:_ [AccountPerson](types.md#AccountPerson)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID eines Accounts|Yes|
|[AccountPerson](types.md#AccountPerson)|person|Der zu aktualisierende Ansprechpartner|Yes|



## ArticleListingScriptingService
### Description
Service zur Verarbeitung von Artikel-Listings im Skripten

### Methods

_**create**_

Erstellt ein Listing

_Return type:_ [ArticleListing](types.md#ArticleListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|[ArticleListing](types.md#ArticleListing)|articleListing|Zu erstellendes Listing|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue ArticleListing-Instanz

_Return type:_ [ArticleListing](types.md#ArticleListing)

_**readAllByArticleId**_

Liest alle Listings zu einem Artikel mit Texten zur Sprache languageCode

_Return type:_ Array<[ArticleListing](types.md#ArticleListing)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|


_**readAllByArticleId**_

Liest alle Listings zu einem Artikel

_Return type:_ Array<[ArticleListing](types.md#ArticleListing)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ArticleListing](types.md#ArticleListing)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ArticleListing](types.md#ArticleListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**readById**_

Liest ein Artikel-Listing mit Texten zur Sprache languageCode

_Return type:_ [ArticleListing](types.md#ArticleListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|listingId|ID des zu lesenden Listings|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|


_**update**_

Akutalisiert ein Listing

_Return type:_ [ArticleListing](types.md#ArticleListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|listingId|ID des Listings|Yes|
|[ArticleListing](types.md#ArticleListing)|articleListing|Zu aktualisierendes Listing|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|



## ArticleScriptingService
### Description
Service zur Verarbeitung von Artikeln im Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


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


_**addLabelToPrintBatch**_

Fügt Informationen zum Druck Etiketten zu einem Artikel zu einem Etikettendrucklauf hinzu

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|batchIdentifier|ID des Etikettendrucklaufs|Yes|
|_number_|articleId|ID des zu druckenden Artikels|Yes|
|_number_|articleSerialNumberId|ID der zu druckenden Seriennummer|No|
|_number_|labelCount|Anzahl der zu druckenden Etiketten|Yes|


_**create**_

Persistiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#Article)|toCreate|Der zu persistierende Artikel|Yes|
|_string_|languageCode||Yes|


_**create**_

Persistiert einen Artikel. Die Texte werden zur Sprache der eigenen Adresse gespeichert

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#Article)|toCreate|Der zu persistierende Artikel|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [Article](types.md#Article)

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


_**executeLabelPrintBatch**_

Führt einen Etikettendrucklauf aus

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|batchIdentifier|ID des Etikettendrucklaufs|Yes|
|_string_|reportGroupIdentifier|Name einer Etiketten-Report-Gruppe|No|


_**getArticlePurchaseDiscounts**_

Liefert die Einkaufsrabatte zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID eines Artikels|Yes|


_**getArticlePurchasePrices**_

Liefert die Einkaufspreise zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID eines Artikels|Yes|


_**getArticleSalesDiscounts**_

Liefert die Verkaufsrabatte zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID eines Artikels|Yes|


_**getArticleSalesPrices**_

Liefert die Verkaufspreise zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID eines Artikels|Yes|


_**getNewDto**_

Erstellt eine neue Article-Instanz

_Return type:_ [Article](types.md#Article)

_**newLabelPrintBatchIdentifier**_

Generiert die ID für einen neuen Etikettendrucklauf

_Return type:_ _string_

_**readById**_

Liest einen Artikel mit Texten zur Sprache der eigenen Adresse

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden Artikel|Yes|


_**readById**_

Liest einen Artikel mit Texten zur Sprache languageCode

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden Artikel|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|


_**readByNumber**_

Liest einen Artikel über die Artikelnummer mit Texten zur Sprache {@code languageCode}

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|articleNumber|Eine Artikelnummer|Yes|
|_string_|languageCode|Zu verwendende Sprache|Yes|


_**readByNumber**_

Liest einen Artikel über die Artikelnummer mit Texten zur Sprache der eigenen Adresse

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|articleNumber|Eine Artikelnummer|Yes|


_**store**_

Persistiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#Article)|toStore|Der zu persistierende Artikel|Yes|
|_string_|languageCode||Yes|


_**store**_

Persistiert einen Artikel. Die Texte werden zur Sprache der eigenen Adresse gespeichert

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#Article)|toStore|Der zu persistierende Artikel|Yes|


_**update**_

Persistiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#Article)|toUpdate|Der zu persistierende Artikel|Yes|


_**update**_

Aktualisiert einen Artikel. Die Texte werden zur Sprache {@code languageCode} gespeichert

_Return type:_ [Article](types.md#Article)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Article](types.md#Article)|toUpdate|Der zu persistierende Artikel|Yes|
|_string_|languageCode||Yes|



## ArticleStorageScriptingService
### Description
Service zur Verarbeitung von Artikel-Lager-Beziehungen im Skripten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [ArticleStorage](types.md#ArticleStorage)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleStorage](types.md#ArticleStorage)|toCreate|Das zu persistierende DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [ArticleStorage](types.md#ArticleStorage)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ArticleStorage](types.md#ArticleStorage)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ArticleStorage](types.md#ArticleStorage)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [ArticleStorage](types.md#ArticleStorage)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleStorage](types.md#ArticleStorage)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ArticleStorage](types.md#ArticleStorage)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleStorage](types.md#ArticleStorage)|toUpdate|Die zu aktualisierende Entity|Yes|



## ArticleSupplierScriptingService
### Description
Service zur Verarbeitung von Artikel-Lieferantenbeziehungen im Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [ArticleSupplier](types.md#ArticleSupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [ArticleSupplier](types.md#ArticleSupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleSupplier](types.md#ArticleSupplier)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [ArticleSupplier](types.md#ArticleSupplier)

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

_Return type:_ [ArticleSupplier](types.md#ArticleSupplier)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ArticleSupplier](types.md#ArticleSupplier)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ArticleSupplier](types.md#ArticleSupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [ArticleSupplier](types.md#ArticleSupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleSupplier](types.md#ArticleSupplier)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ArticleSupplier](types.md#ArticleSupplier)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ArticleSupplier](types.md#ArticleSupplier)|toUpdate|Die zu aktualisierende Entity|Yes|



## CrmActivityScriptingService
### Description
Service zur Verarbeitung von CRM-Aktivitäten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [CrmActivity](types.md#CrmActivity)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmActivity](types.md#CrmActivity)|toCreate|Das zu persistierende DTO|Yes|


_**createCrmObjectRef**_

Erstellte eine neue Instanz von CrmObjectRef

_Return type:_ [CrmObjectRef](types.md#CrmObjectRef)

_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**findTypeById**_

Findet eine Aktivitätsart über ihre ID

_Return type:_ [CrmActivityType](types.md#CrmActivityType)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID einer Aktivitätsart|Yes|


_**findTypeByLabel**_

Findet eine Aktivitätsart über ihr Label

_Return type:_ [CrmActivityType](types.md#CrmActivityType)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|typeLabel|Label einer Aktivitätsart|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [CrmActivity](types.md#CrmActivity)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[CrmActivity](types.md#CrmActivity)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [CrmActivity](types.md#CrmActivity)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [CrmActivity](types.md#CrmActivity)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmActivity](types.md#CrmActivity)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [CrmActivity](types.md#CrmActivity)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmActivity](types.md#CrmActivity)|toUpdate|Die zu aktualisierende Entity|Yes|



## CrmDealScriptingService
### Description
Service zur Verarbeitung von Deals

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [CrmDeal](types.md#CrmDeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmDeal](types.md#CrmDeal)|toCreate|Das zu persistierende DTO|Yes|


_**createCrmObjectRef**_

Erstellte eine neue Instanz von CrmObjectRef

_Return type:_ [CrmObjectRef](types.md#CrmObjectRef)

_**createNewDtoByTemplate**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmDeal](types.md#CrmDeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|templateName|Name einer Vorlage|Yes|


_**createNewDtoByTemplateId**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmDeal](types.md#CrmDeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|templateId|ID einer Vorlage|Yes|


_**dealWon**_

Gewinnt einen Deal ab. Der Deal wird positiv abgeschlossen

_Return type:_ [CrmDeal](types.md#CrmDeal)

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

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findPriorityById**_

Findet eine CRM-Priorität über die ID

_Return type:_ [CrmPriority](types.md#CrmPriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priorityId|ID der gesuchten Priorität|Yes|


_**findPriorityByLabel**_

Findet eine CRM-Priorität über ihr Label

_Return type:_ [CrmPriority](types.md#CrmPriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|priorityLabel|Label der gesuchten Priorität|Yes|


_**findPriorityByType**_

Findet eine CRM-Priorität über den Priorität-Typ

_Return type:_ [CrmPriority](types.md#CrmPriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ECrmPriorityType](types.md#ECrmPriorityType)|priorityType|Typ der gesuchten Priorität|Yes|


_**findStartState**_

Findet den Start-Status

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findStateById**_

Findet einen CRM-Status über die ID

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|stateId|ID vom gesuchten Status|Yes|


_**findStateByLabel**_

Findet einen CRM-Status über sein Label

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|stateLabel|Label vom gesuchten Status|Yes|
|_number_|typeId|ID des CRM-Sub-Typs|Yes|


_**findTopicById**_

Findet ein Deal-Thema über seine ID

_Return type:_ [CrmDealTopic](types.md#CrmDealTopic)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|topicId|ID des gesuchten Deal-Themas|Yes|


_**findTopicByLabel**_

Findet ein Deal-Thema über sein Label

_Return type:_ [CrmDealTopic](types.md#CrmDealTopic)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label des gesuchten Deal-Themas|Yes|


_**findTypeById**_

Findet einen CRM-Typ über die ID

_Return type:_ [CrmSubType](types.md#CrmSubType)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID vom gesuchten Typ|Yes|


_**findTypeByLabel**_

Findet einen CRM-Typ über sein Label

_Return type:_ [CrmSubType](types.md#CrmSubType)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|typeLabel|Label vom gesuchten Typ|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [CrmDeal](types.md#CrmDeal)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[CrmDeal](types.md#CrmDeal)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [CrmDeal](types.md#CrmDeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**sendNotification**_

erzeugt eine Ausgabe mit dem Benachrichtgungs-Modul für Deals

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|dealId|ID eines Deals|Yes|
|[ScriptOutputRequest](types.md#ScriptOutputRequest)|outputRequest|der Output Request|Yes|
|[DealNotificationEventConfig](types.md#DealNotificationEventConfig)|eventConfig|Reason für die Notification|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [CrmDeal](types.md#CrmDeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmDeal](types.md#CrmDeal)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [CrmDeal](types.md#CrmDeal)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmDeal](types.md#CrmDeal)|toUpdate|Die zu aktualisierende Entity|Yes|



## CrmDocumentRefScriptingService
### Description
Verwaltung von CRM-Belegreferenzen

### Methods

_**addDocumentRef**_

Erstellt eine CRM-Belegreferenz mit Referenztyp gleich NONE

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|crmId|ID eines CRM-Objekts|Yes|
|[ECrmType](types.md#ECrmType)|crmType|Typ eines CRM-Objekts|Yes|
|_number_|documentId|ID eines Belegs|Yes|


_**addDocumentRef**_

Erstellt eine CRM-Belegreferenz

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|crmId|ID eines CRM-Objekts|Yes|
|[ECrmType](types.md#ECrmType)|crmType|Typ eines CRM-Objekts|Yes|
|_number_|documentId|ID eines Belegs|Yes|
|[ECrmSpecialDocumentRefType](types.md#ECrmSpecialDocumentRefType)|specialRefType|Referenztyp|Yes|


_**readAllByDocumentId**_

Liefert CRM-Belegreferenzen zu einem Beleg

_Return type:_ [CrmTypedDocumentRefList](types.md#CrmTypedDocumentRefList)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID eines Belegs|Yes|



## CrmProjectScriptingService
### Description
Service zur Verarbeitung von Projekten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [CrmProject](types.md#CrmProject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmProject](types.md#CrmProject)|toCreate|Das zu persistierende DTO|Yes|


_**createCrmObjectRef**_

Erstellte eine neue Instanz von CrmObjectRef

_Return type:_ [CrmObjectRef](types.md#CrmObjectRef)

_**createNewDtoByTemplate**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmProject](types.md#CrmProject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|templateName|Name einer Vorlage|Yes|


_**createNewDtoByTemplateId**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmProject](types.md#CrmProject)

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

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findPriorityById**_

Findet eine CRM-Priorität über die ID

_Return type:_ [CrmPriority](types.md#CrmPriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priorityId|ID der gesuchten Priorität|Yes|


_**findPriorityByLabel**_

Findet eine CRM-Priorität über ihr Label

_Return type:_ [CrmPriority](types.md#CrmPriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|priorityLabel|Label der gesuchten Priorität|Yes|


_**findPriorityByType**_

Findet eine CRM-Priorität über den Priorität-Typ

_Return type:_ [CrmPriority](types.md#CrmPriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ECrmPriorityType](types.md#ECrmPriorityType)|priorityType|Typ der gesuchten Priorität|Yes|


_**findStartState**_

Findet den Start-Status

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findStateById**_

Findet einen CRM-Status über die ID

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|stateId|ID vom gesuchten Status|Yes|


_**findStateByLabel**_

Findet einen CRM-Status über sein Label

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|stateLabel|Label vom gesuchten Status|Yes|
|_number_|typeId|ID des CRM-Sub-Typs|Yes|


_**findTypeById**_

Findet einen CRM-Typ über die ID

_Return type:_ [CrmSubType](types.md#CrmSubType)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID vom gesuchten Typ|Yes|


_**findTypeByLabel**_

Findet einen CRM-Typ über sein Label

_Return type:_ [CrmSubType](types.md#CrmSubType)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|typeLabel|Label vom gesuchten Typ|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [CrmProject](types.md#CrmProject)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[CrmProject](types.md#CrmProject)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [CrmProject](types.md#CrmProject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [CrmProject](types.md#CrmProject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmProject](types.md#CrmProject)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [CrmProject](types.md#CrmProject)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmProject](types.md#CrmProject)|toUpdate|Die zu aktualisierende Entity|Yes|



## CrmTaskScriptingService
### Description
Service zur Verarbeitung von CRM-Aufgaben

### Methods

_**calculateServiceTime**_

Berechnet die gesamte Dienstleistungsdauer in Sekunden in den gegebenen Belegen

_Return type:_ _number_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|Array<[CrmTypedDocumentRef](types.md#CrmTypedDocumentRef)>|documentRefs|Zu beachtende Referenzen|Yes|
|[ECrmSpecialDocumentRefType](types.md#ECrmSpecialDocumentRefType)|documentRefType|Der zu beachtende Referenztyp|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [CrmTask](types.md#CrmTask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmTask](types.md#CrmTask)|toCreate|Das zu persistierende DTO|Yes|


_**createCrmObjectRef**_

Erstellte eine neue Instanz von CrmObjectRef

_Return type:_ [CrmObjectRef](types.md#CrmObjectRef)

_**createNewDtoByTemplate**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmTask](types.md#CrmTask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|templateName|Name einer Vorlage|Yes|


_**createNewDtoByTemplateId**_

Erstellt ein DTO über eine Vorlage

_Return type:_ [CrmTask](types.md#CrmTask)

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

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findPriorityById**_

Findet eine CRM-Priorität über die ID

_Return type:_ [CrmPriority](types.md#CrmPriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priorityId|ID der gesuchten Priorität|Yes|


_**findPriorityByLabel**_

Findet eine CRM-Priorität über ihr Label

_Return type:_ [CrmPriority](types.md#CrmPriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|priorityLabel|Label der gesuchten Priorität|Yes|


_**findPriorityByType**_

Findet eine CRM-Priorität über den Priorität-Typ

_Return type:_ [CrmPriority](types.md#CrmPriority)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ECrmPriorityType](types.md#ECrmPriorityType)|priorityType|Typ der gesuchten Priorität|Yes|


_**findReadyToBillState**_

Sucht den "Bereit zur Abrechnung"-Status

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Task-Typs|Yes|


_**findStartState**_

Findet den Start-Status

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID eines CRM-Typs|Yes|


_**findStateById**_

Findet einen CRM-Status über die ID

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|stateId|ID vom gesuchten Status|Yes|


_**findStateByLabel**_

Findet einen CRM-Status über sein Label

_Return type:_ [CrmState](types.md#CrmState)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|stateLabel|Label vom gesuchten Status|Yes|
|_number_|typeId|ID des CRM-Sub-Typs|Yes|


_**findTypeById**_

Findet einen CRM-Typ über die ID

_Return type:_ [CrmSubType](types.md#CrmSubType)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|typeId|ID vom gesuchten Typ|Yes|


_**findTypeByLabel**_

Findet einen CRM-Typ über sein Label

_Return type:_ [CrmSubType](types.md#CrmSubType)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|typeLabel|Label vom gesuchten Typ|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [CrmTask](types.md#CrmTask)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[CrmTask](types.md#CrmTask)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [CrmTask](types.md#CrmTask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [CrmTask](types.md#CrmTask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmTask](types.md#CrmTask)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [CrmTask](types.md#CrmTask)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CrmTask](types.md#CrmTask)|toUpdate|Die zu aktualisierende Entity|Yes|



## DeliveryMethodScriptingService
### Description
Verwaltung von Versandarten

### Methods

_**findByLabel**_

Findet eine Versandart über ein Label

_Return type:_ [DeliveryMethod](types.md#DeliveryMethod)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Versandart|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[DeliveryMethod](types.md#DeliveryMethod)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [DeliveryMethod](types.md#DeliveryMethod)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|



## DeliveryTermScriptingService
### Description
Verwaltung von Lieferbedingungen

### Methods

_**findByLabel**_

Findet eine Lieferbedingung über ein Label

_Return type:_ [DeliveryTerm](types.md#DeliveryTerm)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Lieferbedingung|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[DeliveryTerm](types.md#DeliveryTerm)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [DeliveryTerm](types.md#DeliveryTerm)

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

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des Belegs|Yes|


_**cancel**_

Bricht die Bearbeitung eines Belegs ab (Transition EDIT -> SAVED)

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des Belegs|Yes|
|Array<[AdditionalParameter](types.md#AdditionalParameter)>|additionalParameters|Zusätzliche Parameter|Yes|


_**copy**_

Kopiert einen Beleg in die vorgegebene Ziel-Belegart

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu kopierenden Belegs|Yes|
|_string_|targetDocumentTypeLabel|Ziel-Belegart der Kopie|Yes|


_**copy**_

Kopiert einen Beleg in die vorgegebene Ziel-Belegart

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu kopierenden Belegs|Yes|
|_string_|targetDocumentType|Ziel-Belegart der Kopie|Yes|
|Array<[AdditionalParameter](types.md#AdditionalParameter)>|additionalParameters|Zusätzliche Parameter|Yes|


_**create**_

Erstellt einen neuen Beleg

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[CreateNewDocumentRequest](types.md#CreateNewDocumentRequest)|request|Details zum neuen Beleg|Yes|


_**dissolve**_

Löst einen Beleg auf

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des aufzulösenden Belegs|Yes|


_**dissolve**_

Löst einen Beleg auf

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des aufzulösenden Belegs|Yes|
|Array<[AdditionalParameter](types.md#AdditionalParameter)>|additionalParameters|Zusätzliche Parameter|Yes|


_**edit**_

Startet die Bearbeitung eines Belegs (Transition SAVED -> EDIT)

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des Belegs|Yes|
|Array<[AdditionalParameter](types.md#AdditionalParameter)>|additionalParameters|Zusätzliche Parameter|Yes|


_**edit**_

Startet die Bearbeitung eines Belegs (Transition SAVED -> EDIT)

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des Belegs|Yes|


_**getAdditionalParameter**_

Erstellt ein AdditionalParameter-Objekt

_Return type:_ [AdditionalParameter](types.md#AdditionalParameter)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|key|Schlüssel des Parameters|Yes|
|_object_|value|Wert des Parameters|No|


_**getAdditionalParameterList**_

Erstellt eine Liste zur Sammlung von AdditionalParameter-Objekten

_Return type:_ Array<[AdditionalParameter](types.md#AdditionalParameter)>

_**getDocumentTransferToStateRequest**_

Erstellt ein Request-Objekt, um einen Beleg in einen anderen Status zu verschieben

_Return type:_ [DocumentTransferToStateRequest](types.md#DocumentTransferToStateRequest)

_**getDocumentTransferToTypeRequest**_

Erstellt ein Request-Objekt, um einen Beleg in einen anderen Beleg zu übernehmen (oder zu kopieren)

_Return type:_ [DocumentTransferToTypeRequest](types.md#DocumentTransferToTypeRequest)

_**getNewDocumentLine**_

Erstellt ein neues Belegposition-Objekt, um dieses in einen Beleg einzufügen

_Return type:_ [DocumentLine](types.md#DocumentLine)

_**getNewDocumentLineBooking**_

Erstellt ein neues Belegbuchung-Objekt, um dieses in einen Beleg einzufügen

_Return type:_ [DocumentLineBooking](types.md#DocumentLineBooking)

_**getNewDocumentPriceModifier**_

Erstellt ein neues Beleg-Rabatt/-Zuschlags-Objekt, um dieses in einen Beleg oder eine Position einzufügen

_Return type:_ [DocumentPriceModifier](types.md#DocumentPriceModifier)

_**getNewDocumentRequest**_

Erstellt ein Request-Objekt, um einen neuen Beleg zu erstellen

_Return type:_ [CreateNewDocumentRequest](types.md#CreateNewDocumentRequest)

_**getUpdateDocumentRequest**_

Erstellt ein Request-Objekt, um einen Beleg zu aktualisieren

_Return type:_ [UpdateDocumentRequest](types.md#UpdateDocumentRequest)

_**print**_

Druckt einen Beleg

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu druckenden Belegs|Yes|


_**readById**_

Liest einen Beleg über seine ID

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID eines Belegs|Yes|


_**save**_

Speichert einen Beleg (Transition EDIT -> SAVED)

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu speichernden Belegs|Yes|


_**save**_

Speichert einen Beleg (Transition EDIT -> SAVED)

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu speichernden Belegs|Yes|
|Array<[AdditionalParameter](types.md#AdditionalParameter)>|additionalParameters|Zusätzliche Parameter|Yes|


_**sendViaMail**_

Versendet einen Beleg per Mail

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu versendenden Belegs|Yes|
|_string_|reportGroupIdentifier||No|


_**sendViaMail**_

Versendet einen Beleg per Mail

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|documentId|ID des zu versendenden Belegs|Yes|


_**transferToState**_

Überführt einen Beleg in einen anderen Status

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[DocumentTransferToStateRequest](types.md#DocumentTransferToStateRequest)|request|Request zur Transition zum gewünschten Ziel-Status|Yes|


_**transferToType**_

Übernimmt (oder kopiert) einen Beleg in einen anderen Beleg

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[DocumentTransferToTypeRequest](types.md#DocumentTransferToTypeRequest)|request|Request zur Übernahme eines Belegs|Yes|


_**update**_

Aktualisiert einen Beleg

_Return type:_ [Document](types.md#Document)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[UpdateDocumentRequest](types.md#UpdateDocumentRequest)|request|Details zum zu aktualisierenden Beleg|Yes|



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

_Return type:_ [SecureHttpClient](types.md#SecureHttpClient)

_**createHttpClientWithBasicAuth**_

Erstellt eine neue Instanz vom HTTP-Client mit Basic Auth

_Return type:_ [SecureHttpClient](types.md#SecureHttpClient)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|username|Benutzername|Yes|
|_string_|password|Passwort|Yes|


_**createHttpClientWithBearerAuth**_

Erstellt eine neue Instanz vom HTTP-Client mit einem Bearer Token

_Return type:_ [SecureHttpClient](types.md#SecureHttpClient)

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



## PaymentMethodScriptingService
### Description
Verwaltung von Zahlungsarten

### Methods

_**findByLabel**_

Findet eine Zahlungsart über ein Label

_Return type:_ [PaymentMethod](types.md#PaymentMethod)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Zahlungsart|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[PaymentMethod](types.md#PaymentMethod)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [PaymentMethod](types.md#PaymentMethod)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|



## PaymentTermScriptingService
### Description
Verwaltung von Zahlungsbedingungen

### Methods

_**createPaymentTermRef**_

Lädt ein PaymentTerm über seine ID und liefer ein PaymentTermRef zurück

_Return type:_ [PaymentTermRef](types.md#PaymentTermRef)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID eines PaymentTerm|Yes|


_**createPaymentTermRef**_

Liefert ein PaymentTermRef zu einem PaymentTerm

_Return type:_ [PaymentTermRef](types.md#PaymentTermRef)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[PaymentTerm](types.md#PaymentTerm)|paymentTerm|Ein PaymentTerm|Yes|


_**findByLabel**_

Findet eine Zahlungsbedingung über ein Label

_Return type:_ [PaymentTerm](types.md#PaymentTerm)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Zahlungsbedingung|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[PaymentTerm](types.md#PaymentTerm)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [PaymentTerm](types.md#PaymentTerm)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|



## ProductGroupScriptingService
### Description
Service zur Verarbeitung von Warengruppen im Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [ProductGroup](types.md#ProductGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [ProductGroup](types.md#ProductGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductGroup](types.md#ProductGroup)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [ProductGroup](types.md#ProductGroup)

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

_Return type:_ [ProductGroup](types.md#ProductGroup)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ProductGroup](types.md#ProductGroup)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ProductGroup](types.md#ProductGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**readByLabel**_

Liest eine Warengruppe über ihr Label

_Return type:_ [ProductGroup](types.md#ProductGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Warengruppe|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [ProductGroup](types.md#ProductGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductGroup](types.md#ProductGroup)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ProductGroup](types.md#ProductGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductGroup](types.md#ProductGroup)|toUpdate|Die zu aktualisierende Entity|Yes|



## ProductMainGroupScriptingService
### Description
Service zur Verarbeitung von Hauptwarengruppen im Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [ProductMainGroup](types.md#ProductMainGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [ProductMainGroup](types.md#ProductMainGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductMainGroup](types.md#ProductMainGroup)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [ProductMainGroup](types.md#ProductMainGroup)

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

_Return type:_ [ProductMainGroup](types.md#ProductMainGroup)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ProductMainGroup](types.md#ProductMainGroup)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ProductMainGroup](types.md#ProductMainGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**readByLabel**_

Liest eine Hauptwarengruppe über ihr Label

_Return type:_ [ProductMainGroup](types.md#ProductMainGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|label|Label einer Hauptwarengruppe|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [ProductMainGroup](types.md#ProductMainGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductMainGroup](types.md#ProductMainGroup)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ProductMainGroup](types.md#ProductMainGroup)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductMainGroup](types.md#ProductMainGroup)|toUpdate|Die zu aktualisierende Entity|Yes|



## ProductPriceScriptingService
### Description
Service zur Verarbeitung von Produktpreisen in Skripten

### Methods

_**createPurchaseDiscount**_

Legt eine neue Einkaufspreisregel an

_Return type:_ [ProductDiscount](types.md#ProductDiscount)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductDiscount](types.md#ProductDiscount)|productDiscount|Die anzulegende Einkaufspreisregel|Yes|


_**createPurchasePrice**_

Legt einen neuen Einkaufspreis an

_Return type:_ [ProductPrice](types.md#ProductPrice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductPrice](types.md#ProductPrice)|productPrice|Der anzulegende Einkaufspreis|Yes|


_**createSalesDiscount**_

Legt eine neue Verkaufspreisregel

_Return type:_ [ProductDiscount](types.md#ProductDiscount)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductDiscount](types.md#ProductDiscount)|productDiscount|Die anzulegende Verkaufspreisregel|Yes|


_**createSalesPrice**_

Legt einen neuen Verkaufspreis an

_Return type:_ [ProductPrice](types.md#ProductPrice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductPrice](types.md#ProductPrice)|productPrice|Der anzulegende Verkaufspreis|Yes|


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

_Return type:_ [ProductDiscount](types.md#ProductDiscount)

_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [ProductPrice](types.md#ProductPrice)

_**getNewPriceDto**_

Erstellt eine neue Preis-DTO-Instanz

_Return type:_ [ProductPrice](types.md#ProductPrice)

_**getPurchaseDiscounts**_

Liefert alle Einkaufspreisregeln zu einem Artikel und Account

_Return type:_ Array<[ProductDiscount](types.md#ProductDiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|


_**getPurchaseDiscountsForCurrency**_

Liefert alle Einkaufspreisregeln zu einem Artikel und Account und Währung

_Return type:_ Array<[ProductDiscount](types.md#ProductDiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getPurchaseDiscountsToAccount**_

Liefert alle Einkaufspreisregeln zu einem Account

_Return type:_ Array<[ProductDiscount](types.md#ProductDiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|


_**getPurchaseDiscountsToArticle**_

Liefert alle Einkaufspreisregeln zu einem Artikel

_Return type:_ Array<[ProductDiscount](types.md#ProductDiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|


_**getPurchasePrices**_

Liefert alle Einkaufspreise zu einem Artikel und Account

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|


_**getPurchasePricesForCurrency**_

Liefert alle Einkaufspreise zu einem Artikel und Account und Währung

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getPurchasePricesToAccount**_

Liefert alle Einkaufspreise zu einem Account

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|


_**getPurchasePricesToArticle**_

Liefert alle Einkaufspreise zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|


_**getSalesDiscounts**_

Liefert alle Verkaufspreisregeln zu einem Artikel und Account

_Return type:_ Array<[ProductDiscount](types.md#ProductDiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|No|
|_number_|accountId|ID des Accounts|No|


_**getSalesDiscountsForCurrency**_

Liefert alle Verkaufspreisregeln zu einem Artikel und Account und Währung

_Return type:_ Array<[ProductDiscount](types.md#ProductDiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getSalesDiscountsToAccount**_

Liefert alle Verkaufspreisregeln zu einem Account

_Return type:_ Array<[ProductDiscount](types.md#ProductDiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|


_**getSalesDiscountsToAccountForCurrency**_

Liefert alle Verkaufspreisregeln zu einem Account und Währung

_Return type:_ Array<[ProductDiscount](types.md#ProductDiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getSalesDiscountsToArticle**_

Liefert alle Account-unabhängigen Verkaufspreisregeln zu einem Artikel

_Return type:_ Array<[ProductDiscount](types.md#ProductDiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|


_**getSalesDiscountsToArticleForCurrency**_

Liefert alle Account-unabhängigen Verkaufspreisregeln zu einem Artikel und Währung

_Return type:_ Array<[ProductDiscount](types.md#ProductDiscount)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getSalesPrices**_

Liefert alle Verkaufspreise zu einem Artikel und Account

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|No|
|_number_|accountId|ID des Accounts|No|


_**getSalesPricesForCurrency**_

Liefert alle Verkaufspreise zu einem Artikel und Account und Währung

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getSalesPricesToAccount**_

Liefert alle Verkaufspreise zu einem Account

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|


_**getSalesPricesToAccountForCurrency**_

Liefert alle Verkaufspreise zu einem Account und Währung

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|accountId|ID des Accounts|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**getSalesPricesToArticle**_

Liefert alle Account-unabhängigen Verkaufspreise zu einem Artikel

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|


_**getSalesPricesToArticleForCurrency**_

Liefert alle Account-unabhängigen Verkaufspreise zu einem Artikel und Währung

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|currencyId|ID der Währung|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ProductPrice](types.md#ProductPrice)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ProductPrice](types.md#ProductPrice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden Preis|Yes|


_**readDiscountById**_

Liest eine Preisregel

_Return type:_ [ProductDiscount](types.md#ProductDiscount)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priceId|ID einer Preisregel|Yes|


_**readPriceById**_

Liest einen Preis

_Return type:_ [ProductPrice](types.md#ProductPrice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|priceId|ID eines Preises|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ProductPrice](types.md#ProductPrice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductPrice](types.md#ProductPrice)|toUpdate|Die zu aktualisierende Entity|Yes|


_**updatePurchaseDiscount**_

Aktualisiert eine Einkaufspreisregel

_Return type:_ [ProductDiscount](types.md#ProductDiscount)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductDiscount](types.md#ProductDiscount)|productDiscount|Die zu aktualisierende Einkaufspreisregel|Yes|


_**updatePurchasePrice**_

Aktualisiert einen Einkaufspreis

_Return type:_ [ProductPrice](types.md#ProductPrice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductPrice](types.md#ProductPrice)|productPrice|Der zu aktualisierende Einkaufspreis|Yes|


_**updateSalesDiscount**_

Aktualisiert eine Verkaufspreisregel

_Return type:_ [ProductDiscount](types.md#ProductDiscount)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductDiscount](types.md#ProductDiscount)|productDiscount|Die zu aktualisierende Verkaufspreisregel|Yes|


_**updateSalesPrice**_

Aktualisiert einen Verkaufspreis

_Return type:_ [ProductPrice](types.md#ProductPrice)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ProductPrice](types.md#ProductPrice)|productPrice|Der zu aktualisierende Verkaufspreis|Yes|



## ProductScriptingService
### Description
Service zur Verarbeitung von Produkten in Skripten

### Methods

_**readByArticleId**_

Liest ein Produkt anhand einer Artikel-ID

_Return type:_ [Product](types.md#Product)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID eines zum Produkt gehörenden Artikels|Yes|


_**readById**_

Liest ein Produkt anhand seiner ID

_Return type:_ [Product](types.md#Product)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID des zu lesenden Produkts|Yes|


_**update**_

Aktualisiert ein Produkt

_Return type:_ [Product](types.md#Product)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Product](types.md#Product)|toUpdate|Das zu aktualisierende Produkt|Yes|



## ScenarioScriptingService
### Description
Service zur Verarbeitung von ScenarioActualValue

### Methods

_**createScenarioActualValue**_

Erstellt ein ScenarioActualValue

_Return type:_ [ScenarioActualValue](types.md#ScenarioActualValue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScenarioActualValue](types.md#ScenarioActualValue)|toCreate|Das zu erstellende Actual-Value|Yes|


_**findScenarioActualValueById**_

Findet ein ScenarioActualValue über die ID

_Return type:_ [ScenarioActualValue](types.md#ScenarioActualValue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|actualValueId|ID von einem Actual-Value|Yes|


_**findScenarioActualValuesBySelection**_

Liest eine Liste von ScenarioActualValue gemäß der Selektion

_Return type:_ Array<[ScenarioActualValue](types.md#ScenarioActualValue)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|referenceId|Eine Referenz-ID|Yes|
|_string_|scenarioDimKey|Optional: Schlüssel einer Scenario-Dimension|No|
|_string_|scenarioIdentifier|Optional: Identifier eines Scenarios|No|


_**findScenarioById**_

Findet ein Scenario über die ID

_Return type:_ [Scenario](types.md#Scenario)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|scenarioId|ID eines Scenarios|Yes|


_**findScenarioByIdentifer**_

Findet ein Scenario über den Identifier

_Return type:_ [Scenario](types.md#Scenario)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|scenarioIdentifier|Identifier eines Scenarios|Yes|


_**findScenarioByLabel**_

Findet ein Scenario über das Label

_Return type:_ [Scenario](types.md#Scenario)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|scenarioLabel|Label eines Scenarios|Yes|


_**findScenarioDimensionById**_

Findet eine Scenario-Dimension über die ID

_Return type:_ [ScenarioDimension](types.md#ScenarioDimension)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Scenario](types.md#Scenario)|scenario|Ein Scenario, in dem gesucht werden soll|Yes|
|_number_|scenarioDimensionId|ID einer Scenario-Dimension|Yes|


_**findScenarioDimensionByKey**_

Findet eine Scenario-Dimension über den Key

_Return type:_ [ScenarioDimension](types.md#ScenarioDimension)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[Scenario](types.md#Scenario)|scenario|Ein Scenario, in dem gesucht werden soll|Yes|
|_string_|scenarioDimensionKey|Key einer Scenario-Dimension|Yes|


_**findScenarioDimensionValueById**_

Findet einen Scenario-Dimension-Wert über die ID

_Return type:_ [ScenarioDimensionValue](types.md#ScenarioDimensionValue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScenarioDimension](types.md#ScenarioDimension)|scenarioDimension|Eine Scenario-Dimension, in der gesucht werden soll|Yes|
|_number_|scenarioDimensionValueId|ID eines Scenario-Dimension-Werts|Yes|


_**findScenarioDimensionValueByLabel**_

Findet einen Scenario-Dimension-Wert über das Label

_Return type:_ [ScenarioDimensionValue](types.md#ScenarioDimensionValue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScenarioDimension](types.md#ScenarioDimension)|scenarioDimension|Eine Scenario-Dimension, in der gesucht werden soll|Yes|
|_string_|scenarioDimensionValueLabel|Label eines Scenario-Dimension-Werts|Yes|


_**getNewActualValueDTO**_

Erstellt ein neues ScenarioActualValue-DTO

_Return type:_ [ScenarioActualValue](types.md#ScenarioActualValue)

_**updateScenarioActualValue**_

Aktualisiert ein ScenarioActualValue

_Return type:_ [ScenarioActualValue](types.md#ScenarioActualValue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScenarioActualValue](types.md#ScenarioActualValue)|toUpdate|Das zu aktualisierende Actual-Value|Yes|



## ScriptOutputHelperService
### Description
Ausgabe-Support Methoden

### Methods

_**createOutputRequest**_

Erzeugt einen neuen Output-Request

_Return type:_ [ScriptOutputRequest](types.md#ScriptOutputRequest)


## ScriptingServiceList
### Description
Services

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[TextEnumerationScriptingService](#TextEnumerationScriptingService)|textEnumerationService|Service zur Verarbeitung von Text-Enumerationen|Yes|
|[VariantAttributeScriptingService](#VariantAttributeScriptingService)|variantAttributeService|Service zur Verarbeitung von Variantenattributen in Skripten|Yes|
|[CrmTaskScriptingService](#CrmTaskScriptingService)|crmTaskService|Service zur Verarbeitung von CRM-Aufgaben|Yes|
|[ShelfDocumentScriptingService](#ShelfDocumentScriptingService)|shelfDocumentService|Service zur Verarbeitung von Shelf-Documents|Yes|
|[AccountScriptingService](#AccountScriptingService)|accountService|Service zur Verarbeitung von Accounts|Yes|
|[LoggingScriptingService](#LoggingScriptingService)|logger|Logging im Scripting|Yes|
|[DeliveryMethodScriptingService](#DeliveryMethodScriptingService)|deliveryMethodService|Verwaltung von Versandarten|Yes|
|[CrmDealScriptingService](#CrmDealScriptingService)|crmDealService|Service zur Verarbeitung von Deals|Yes|
|[ProductScriptingService](#ProductScriptingService)|productService|Service zur Verarbeitung von Produkten in Skripten|Yes|
|[ProductGroupScriptingService](#ProductGroupScriptingService)|productGroupService|Service zur Verarbeitung von Warengruppen im Skripten|Yes|
|[ScriptOutputHelperService](#ScriptOutputHelperService)|outputHelper|Ausgabe-Support Methoden|Yes|
|[ProductMainGroupScriptingService](#ProductMainGroupScriptingService)|productMainGroupService|Service zur Verarbeitung von Hauptwarengruppen im Skripten|Yes|
|[dtoFactory](#dtoFactory)|dtoFactory|Erstellt DTOs zur Verwendung im Skript|Yes|
|[ProductPriceScriptingService](#ProductPriceScriptingService)|priceService|Service zur Verarbeitung von Produktpreisen in Skripten|Yes|
|[ScriptingUtilities](#ScriptingUtilities)|utils|Hilfsmethoden zur Verwendung im Scripting|Yes|
|[VariantSchemaScriptingService](#VariantSchemaScriptingService)|variantSchemaService|Service zur Verarbeitung von Variantenschemas in Skripten|Yes|
|[ArticleScriptingService](#ArticleScriptingService)|articleService|Service zur Verarbeitung von Artikeln im Skripten|Yes|
|[DocumentScriptingService](#DocumentScriptingService)|documentService|Service zur Verarbeitung von Belegen|Yes|
|[ArticleListingScriptingService](#ArticleListingScriptingService)|articleListingService|Service zur Verarbeitung von Artikel-Listings im Skripten|Yes|
|[VariantValueListingScriptingService](#VariantValueListingScriptingService)|variantValueListingService|Service zur Verarbeitung von Variantenattributwert-Listings in Skripten|Yes|
|[ArticleStorageScriptingService](#ArticleStorageScriptingService)|articleStorageService|Service zur Verarbeitung von Artikel-Lager-Beziehungen im Skripten|Yes|
|[FreeSequencerScriptingService](#FreeSequencerScriptingService)|freeSequencerService|Anfragen von neuen Zählerkreis-Nummern|Yes|
|[PaymentMethodScriptingService](#PaymentMethodScriptingService)|paymentMethodService|Verwaltung von Zahlungsarten|Yes|
|[StockScriptingService](#StockScriptingService)|stockService|Service zur Bestandsabfrage und Lagerbuchung in Skripten|Yes|
|[VariantValueScriptingService](#VariantValueScriptingService)|variantValueService|Service zur Verarbeitung von Variantenwerten in Skripten|Yes|
|[ScenarioScriptingService](#ScenarioScriptingService)|scenarioService|Service zur Verarbeitung von ScenarioActualValue|Yes|
|[VqlScriptingService](#VqlScriptingService)|vqlService|Service zur Verarbeitung von Accounts|Yes|
|[UserAndGroupScriptingService](#UserAndGroupScriptingService)|userAndGroupService|Lesen von Benutzern und Benutzergruppen|Yes|
|[CrmActivityScriptingService](#CrmActivityScriptingService)|crmActivityService|Service zur Verarbeitung von CRM-Aktivitäten|Yes|
|[VariantAttributeListingScriptingService](#VariantAttributeListingScriptingService)|variantAttributeListingService|Service zur Verarbeitung von Variantenattribut-Listings in Skripten|Yes|
|[TagScriptingService](#TagScriptingService)|tagService|Service zur Verwendung von Tags|Yes|
|[DeliveryTermScriptingService](#DeliveryTermScriptingService)|deliveryTermService|Verwaltung von Lieferbedingungen|Yes|
|[CrmDocumentRefScriptingService](#CrmDocumentRefScriptingService)|crmDocumentRefService|Verwaltung von CRM-Belegreferenzen|Yes|
|[PaymentTermScriptingService](#PaymentTermScriptingService)|paymentTermService|Verwaltung von Zahlungsbedingungen|Yes|
|[ArticleSupplierScriptingService](#ArticleSupplierScriptingService)|articleSupplierService|Service zur Verarbeitung von Artikel-Lieferantenbeziehungen im Skripten|Yes|
|[HttpClientScriptingService](#HttpClientScriptingService)|httpClientService|HTTP-Client im Scripting|Yes|
|[CrmProjectScriptingService](#CrmProjectScriptingService)|crmProjectService|Service zur Verarbeitung von Projekten|Yes|
|[DunningScriptingService](#DunningScriptingService)|dunningService|Service zur Verarbeitung von Mahnungen|Yes|



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

_Return type:_ [ScriptingDate](types.md#ScriptingDate)

_**dateTimeNow**_

Aktueller Datum-Zeit-Wert

_Return type:_ [ScriptingDateTime](types.md#ScriptingDateTime)

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

_Return type:_ [ApiObjectReference](types.md#ApiObjectReference)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_object_|source|Das Quell-Objekt|No|



## ShelfDocumentScriptingService
### Description
Service zur Verarbeitung von Shelf-Documents

### Methods

_**createAttribution**_

Erstellt eine neue Verknüpfung zwischen einem DMS-Dokument und einem Geschäftsobjekt

_Return type:_ [ShelfDocumentAttribution](types.md#ShelfDocumentAttribution)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ShelfDocumentAttribution](types.md#ShelfDocumentAttribution)|attribution|Die zu erstellende Verknüpfung|Yes|


_**deleteAttribution**_

Löscht eine DMS-Verknüpfung

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|attributionId|ID der Verknüpfung|Yes|


_**downloadIntoDMS**_

Lädt eine Datei von einer URL herunter und erstellt ein neues DMS-Dokument

_Return type:_ [ShelfDocument](types.md#ShelfDocument)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|url|Download-URL|Yes|
|_string_|documentTypeKey|Schlüssel der Dokumentenart|Yes|


_**downloadIntoDMS**_

Lädt eine Datei von einer URL mit Authentifizierung herunter und erstellt ein neues DMS-Dokument

_Return type:_ [ShelfDocument](types.md#ShelfDocument)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|url|Download-URL|Yes|
|[EScriptingAuthenticationType](types.md#EScriptingAuthenticationType)|authenticationType|Art der Authentifizierung (BASIC_AUTH, BEARER_TOKEN)|Yes|
|_string_|authValue|Authentifizierungswert — Platzhalter (z.B. {{secret:myApi:token}}) oder Klartext. Bei BASIC_AUTH im Format 'username:password'|Yes|
|_string_|documentTypeKey|Schlüssel der Dokumentenart|Yes|


_**findShelfDocumentTypeByKey**_

Findet ein Dokumentenart über ihren Schlüssel

_Return type:_ [ShelfDocumentType](types.md#ShelfDocumentType)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|key|Der Schlüssel einer Dokumentenart|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[ShelfDocument](types.md#ShelfDocument)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [ShelfDocument](types.md#ShelfDocument)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**setDeletionState**_

Setzt den Lösch-Status eines Dokuments

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|shelfDocumentId|ID des Dokuments|Yes|
|[EShelfDocumentDeletionState](types.md#EShelfDocumentDeletionState)|newState|neuer Löschstatus|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [ShelfDocument](types.md#ShelfDocument)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ShelfDocument](types.md#ShelfDocument)|toUpdate|Die zu aktualisierende Entity|Yes|


_**updateAttribution**_

Aktualisiert eine bestehende DMS-Verknüpfung

_Return type:_ [ShelfDocumentAttribution](types.md#ShelfDocumentAttribution)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ShelfDocumentAttribution](types.md#ShelfDocumentAttribution)|attribution|Die zu aktualisierende Verknüpfung|Yes|



## StockScriptingService
### Description
Service zur Bestandsabfrage und Lagerbuchung in Skripten

### Methods

_**bookBulkStockTransfer**_

Führt eine Stapel-Lagerumbuchung durch

_Return type:_ [BulkTransferResult](types.md#BulkTransferResult)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[BulkTransferRequestApi](types.md#BulkTransferRequestApi)|bulkStockTransfer|Anweisungen für die Lagerumbuchungen|Yes|


_**bookManualStockMovement**_

Bucht eine manuelle Lagerbewegung

_Return type:_ [Stock](types.md#Stock)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[StockMovementManualApi](types.md#StockMovementManualApi)|stockMovementManual|Infos zur Durchführung der manuellen Lagerbuchung|Yes|


_**bookStockTransfer**_

Bucht eine Umlagerung

_Return type:_ [StockTransferResult](types.md#StockTransferResult)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[StockTransferApi](types.md#StockTransferApi)|stockTransfer|Details zur Umlagerung|Yes|


_**findAllByArticleAndStorageBin**_

Liefert alle Bestände zu einem Artikel auf einem Lagerplatz

_Return type:_ Array<[Stock](types.md#Stock)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|storageBinId|ID des Lagerplatzes|Yes|


_**findByArticleAndStorage**_

Liefert alle Bestände zu einem Artikel in einem Lager

_Return type:_ Array<[Stock](types.md#Stock)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleId|ID des Artikels|Yes|
|_number_|storageId|ID des Lagers|Yes|


_**findByArticleSerialNumberAndStorage**_

Liefert alle Bestände zu einer Artikel-Seriennummer in einem Lager

_Return type:_ Array<[Stock](types.md#Stock)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|articleSerialNumberId|ID der Artikel-Seriennummer|Yes|
|_number_|storageId|ID des Lagers|Yes|


_**findByArticleSerialNumberAndStorageBin**_

Liefert den Bestand zu einer Artikel-Seriennummer auf einem Lagerplatz

_Return type:_ [Stock](types.md#Stock)

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

_Return type:_ Array<[TagDto](types.md#TagDto)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [TagDto](types.md#TagDto)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|



## TextEnumerationScriptingService
### Description
Service zur Verarbeitung von Text-Enumerationen

### Methods

_**activate**_

Aktiviert eine Text-Enumeration

_Return type:_ [TextEnumGet](types.md#TextEnumGet)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu aktivierenden Text-Enumeration|Yes|


_**create**_

Erstellt eine Text-Enumeration

_Return type:_ [TextEnumGet](types.md#TextEnumGet)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[TextEnumCreate](types.md#TextEnumCreate)|toCreate|Die zu erstellende Text-Enumeration|Yes|


_**deactivate**_

Deaktiviert eine Text-Enumeration

_Return type:_ [TextEnumGet](types.md#TextEnumGet)

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

_Return type:_ [TextEnumCreate](types.md#TextEnumCreate)

_**readAllById**_

Liest eine Liste von Text-Enumerationen über ihre IDs

_Return type:_ Array<[TextEnumGet](types.md#TextEnumGet)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|IDs der Text-Enumerationen|Yes|


_**readById**_

Liest eine Text-Enumeration über ihre ID

_Return type:_ [TextEnumGet](types.md#TextEnumGet)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der Text-Enumeration|Yes|


_**update**_

Aktualisiert eine Text-Enumeration

_Return type:_ [TextEnumGet](types.md#TextEnumGet)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[TextEnumGet](types.md#TextEnumGet)|toUpdate|Die zu aktualisierende Text-Enumeration|Yes|



## UserAndGroupScriptingService
### Description
Lesen von Benutzern und Benutzergruppen

### Methods

_**findGroupById**_

Findet eine Benutzergruppe über ihre ID

_Return type:_ [Group](types.md#Group)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|groupId|ID einer Benutzergruppe|Yes|


_**findGroupByLabel**_

Findet eine Benutzergruppe über ihr Label

_Return type:_ [Group](types.md#Group)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|groupLabel|Label einer Benutzergruppe|Yes|


_**findUserById**_

Findet einen Benutzer über seine ID

_Return type:_ [User](types.md#User)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|userId|ID eines Benutzers|Yes|


_**findUserByName**_

Findet einen Benutzer über seinen Benutzernamen

_Return type:_ [User](types.md#User)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|userName|Benutzername|Yes|


_**getCurrentUser**_

Liefert den aktuellen Benutzer

_Return type:_ [User](types.md#User)


## VariantAttributeListingScriptingService
### Description
Service zur Verarbeitung von Variantenattribut-Listings in Skripten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [VariantAttributeListing](types.md#VariantAttributeListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttributeListing](types.md#VariantAttributeListing)|toCreate|Das zu persistierende DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [VariantAttributeListing](types.md#VariantAttributeListing)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[VariantAttributeListing](types.md#VariantAttributeListing)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [VariantAttributeListing](types.md#VariantAttributeListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [VariantAttributeListing](types.md#VariantAttributeListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttributeListing](types.md#VariantAttributeListing)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [VariantAttributeListing](types.md#VariantAttributeListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttributeListing](types.md#VariantAttributeListing)|toUpdate|Die zu aktualisierende Entity|Yes|



## VariantAttributeScriptingService
### Description
Service zur Verarbeitung von Variantenattributen in Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [VariantAttribute](types.md#VariantAttribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [VariantAttribute](types.md#VariantAttribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttribute](types.md#VariantAttribute)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [VariantAttribute](types.md#VariantAttribute)

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

_Return type:_ [VariantAttribute](types.md#VariantAttribute)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[VariantAttribute](types.md#VariantAttribute)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [VariantAttribute](types.md#VariantAttribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [VariantAttribute](types.md#VariantAttribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttribute](types.md#VariantAttribute)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [VariantAttribute](types.md#VariantAttribute)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantAttribute](types.md#VariantAttribute)|toUpdate|Die zu aktualisierende Entity|Yes|



## VariantSchemaScriptingService
### Description
Service zur Verarbeitung von Variantenschemas in Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [VariantSchema](types.md#VariantSchema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**create**_

Persistiert ein DTO

_Return type:_ [VariantSchema](types.md#VariantSchema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantSchema](types.md#VariantSchema)|toCreate|Das zu persistierende DTO|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [VariantSchema](types.md#VariantSchema)

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

_Return type:_ [VariantSchema](types.md#VariantSchema)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[VariantSchema](types.md#VariantSchema)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [VariantSchema](types.md#VariantSchema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [VariantSchema](types.md#VariantSchema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantSchema](types.md#VariantSchema)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [VariantSchema](types.md#VariantSchema)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantSchema](types.md#VariantSchema)|toUpdate|Die zu aktualisierende Entity|Yes|



## VariantValueListingScriptingService
### Description
Service zur Verarbeitung von Variantenattributwert-Listings in Skripten

### Methods

_**create**_

Persistiert ein DTO

_Return type:_ [VariantValueListing](types.md#VariantValueListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantValueListing](types.md#VariantValueListing)|toCreate|Das zu persistierende DTO|Yes|


_**deleteById**_

Löscht eine Entity

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID der zu löschenden Entity|Yes|


_**getNewDto**_

Erstellt eine neue DTO-Instanz

_Return type:_ [VariantValueListing](types.md#VariantValueListing)

_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[VariantValueListing](types.md#VariantValueListing)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [VariantValueListing](types.md#VariantValueListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**store**_

Persistiert eine DTO

_Return type:_ [VariantValueListing](types.md#VariantValueListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantValueListing](types.md#VariantValueListing)|toStore|Das zu persistierende DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [VariantValueListing](types.md#VariantValueListing)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantValueListing](types.md#VariantValueListing)|toUpdate|Die zu aktualisierende Entity|Yes|



## VariantValueScriptingService
### Description
Service zur Verarbeitung von Variantenwerten in Skripten

### Methods

_**activate**_

Aktiviert ein DTO

_Return type:_ [VariantValue](types.md#VariantValue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|idToActivate|ID vom zu aktivierenden DTO|Yes|


_**createValue**_

Erstellt einen Variantenwert für ein Attribut

_Return type:_ [VariantValue](types.md#VariantValue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|attributeId|ID des Attributs|Yes|
|[VariantValue](types.md#VariantValue)|value|Der zu erstellende Variantenwert|Yes|


_**createValues**_

Erstellt mehrere Variantenwerte für ein Attribut

_Return type:_ Array<[VariantValue](types.md#VariantValue)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|attributeId|ID des Attributs|Yes|
|Array<[VariantValue](types.md#VariantValue)>|values|Die zu erstellenden Variantenwerte|Yes|


_**deactivate**_

Deaktiviert ein DTO

_Return type:_ [VariantValue](types.md#VariantValue)

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

_Return type:_ Array<[VariantValue](types.md#VariantValue)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|attributeId|ID des Attributs|Yes|


_**readAllById**_

Liest eine Liste von DTOs

_Return type:_ Array<[VariantValue](types.md#VariantValue)>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_Array<number>_|ids|Die Liste der gelesenen DTOs|Yes|


_**readById**_

Liest ein DTO

_Return type:_ [VariantValue](types.md#VariantValue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|id|ID vom zu lesenden DTO|Yes|


_**update**_

Aktualisiert ein persistiertes DTO

_Return type:_ [VariantValue](types.md#VariantValue)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[VariantValue](types.md#VariantValue)|toUpdate|Die zu aktualisierende Entity|Yes|



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


_**queryAll**_

Führt eine VQL mit Parametern aus

_Return type:_ Array<_Map<string,object>_>

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|vql|Die auszuführende VQL|Yes|
|Map<string,_Array<object>_>|variablesWithValues|Variablen mit Werten für die Ausführung der VQL|Yes|



## dtoFactory
### Description
Erstellt DTOs zur Verwendung im Skript

### Methods

_**createAccount**_

Erstellt einen neue Instanz von Account

_Return type:_ [Account](types.md#Account)

_**createAccountAddress**_

Erstellt einen neue Instanz von AccountAddress

_Return type:_ [AccountAddress](types.md#AccountAddress)

_**createAccountBankdetail**_

Erstellt einen neue Instanz von AccountBankdetail

_Return type:_ [AccountBankdetail](types.md#AccountBankdetail)

_**createAccountLoanValue**_

Erstellt einen neue Instanz von AccountLoanValue

_Return type:_ [AccountLoanValue](types.md#AccountLoanValue)

_**createAccountManufacturer**_

Erstellt einen neue Instanz von AccountManufacturer

_Return type:_ [AccountManufacturer](types.md#AccountManufacturer)

_**createAccountManufacturerDescription**_

Erstellt einen neue Instanz von AccountManufacturerDescription

_Return type:_ [AccountManufacturerDescription](types.md#AccountManufacturerDescription)

_**createAccountPerson**_

Erstellt einen neue Instanz von AccountPerson

_Return type:_ [AccountPerson](types.md#AccountPerson)

_**createAccountRelation**_

Erstellt einen neue Instanz von AccountRelation

_Return type:_ [AccountRelation](types.md#AccountRelation)

_**createAdditionalParameter**_

Erstellt einen neue Instanz von AdditionalParameter

_Return type:_ [AdditionalParameter](types.md#AdditionalParameter)

_**createApiCreatableReference**_

Erstellt einen neue Instanz von ApiCreatableReference

_Return type:_ [ApiCreatableReference](types.md#ApiCreatableReference)

_**createApiObjectReference**_

Erstellt einen neue Instanz von ApiObjectReference

_Return type:_ [ApiObjectReference](types.md#ApiObjectReference)

_**createArticle**_

Erstellt einen neue Instanz von Article

_Return type:_ [Article](types.md#Article)

_**createArticleAvailabilityDetermination**_

Erstellt einen neue Instanz von ArticleAvailabilityDetermination

_Return type:_ [ArticleAvailabilityDetermination](types.md#ArticleAvailabilityDetermination)

_**createArticleIdentifier**_

Erstellt einen neue Instanz von ArticleIdentifier

_Return type:_ [ArticleIdentifier](types.md#ArticleIdentifier)

_**createArticlePrintLabelSettings**_

Erstellt einen neue Instanz von ArticlePrintLabelSettings

_Return type:_ [ArticlePrintLabelSettings](types.md#ArticlePrintLabelSettings)

_**createArticleSerialNumber**_

Erstellt einen neue Instanz von ArticleSerialNumber

_Return type:_ [ArticleSerialNumber](types.md#ArticleSerialNumber)

_**createBulkTransferRequestApi**_

Erstellt einen neue Instanz von BulkTransferRequestApi

_Return type:_ [BulkTransferRequestApi](types.md#BulkTransferRequestApi)

_**createBulkTransferResult**_

Erstellt einen neue Instanz von BulkTransferResult

_Return type:_ [BulkTransferResult](types.md#BulkTransferResult)

_**createContact**_

Erstellt einen neue Instanz von Contact

_Return type:_ [Contact](types.md#Contact)

_**createCountryReference**_

Erstellt einen neue Instanz von CountryReference

_Return type:_ [CountryReference](types.md#CountryReference)

_**createCreateNewDocumentRequest**_

Erstellt einen neue Instanz von CreateNewDocumentRequest

_Return type:_ [CreateNewDocumentRequest](types.md#CreateNewDocumentRequest)

_**createCrmActivity**_

Erstellt einen neue Instanz von CrmActivity

_Return type:_ [CrmActivity](types.md#CrmActivity)

_**createCrmActivityType**_

Erstellt einen neue Instanz von CrmActivityType

_Return type:_ [CrmActivityType](types.md#CrmActivityType)

_**createCrmChecklistItem**_

Erstellt einen neue Instanz von CrmChecklistItem

_Return type:_ [CrmChecklistItem](types.md#CrmChecklistItem)

_**createCrmDeal**_

Erstellt einen neue Instanz von CrmDeal

_Return type:_ [CrmDeal](types.md#CrmDeal)

_**createCrmObjectRef**_

Erstellt einen neue Instanz von CrmObjectRef

_Return type:_ [CrmObjectRef](types.md#CrmObjectRef)

_**createCrmParticipant**_

Erstellt einen neue Instanz von CrmParticipant

_Return type:_ [CrmParticipant](types.md#CrmParticipant)

_**createCrmProject**_

Erstellt einen neue Instanz von CrmProject

_Return type:_ [CrmProject](types.md#CrmProject)

_**createCrmReference**_

Erstellt einen neue Instanz von CrmReference

_Return type:_ [CrmReference](types.md#CrmReference)

_**createCrmReminder**_

Erstellt einen neue Instanz von CrmReminder

_Return type:_ [CrmReminder](types.md#CrmReminder)

_**createCrmState**_

Erstellt einen neue Instanz von CrmState

_Return type:_ [CrmState](types.md#CrmState)

_**createCrmSubType**_

Erstellt einen neue Instanz von CrmSubType

_Return type:_ [CrmSubType](types.md#CrmSubType)

_**createCrmTask**_

Erstellt einen neue Instanz von CrmTask

_Return type:_ [CrmTask](types.md#CrmTask)

_**createCrmTaskParticipant**_

Erstellt einen neue Instanz von CrmTaskParticipant

_Return type:_ [CrmTaskParticipant](types.md#CrmTaskParticipant)

_**createCustomer**_

Erstellt einen neue Instanz von Customer

_Return type:_ [Customer](types.md#Customer)

_**createDateRange**_

Erstellt einen neue Instanz von PicklistTemplate$DateRange

_Return type:_ [PicklistTemplate$DateRange](types.md#PicklistTemplateDateRange)

_**createDocument**_

Erstellt einen neue Instanz von Document

_Return type:_ [Document](types.md#Document)

_**createDocumentAdditionalInfo**_

Erstellt einen neue Instanz von DocumentAdditionalInfo

_Return type:_ [DocumentAdditionalInfo](types.md#DocumentAdditionalInfo)

_**createDocumentAddress**_

Erstellt einen neue Instanz von DocumentAddress

_Return type:_ [DocumentAddress](types.md#DocumentAddress)

_**createDocumentContractDetail**_

Erstellt einen neue Instanz von DocumentContractDetail

_Return type:_ [DocumentContractDetail](types.md#DocumentContractDetail)

_**createDocumentFabricationDetail**_

Erstellt einen neue Instanz von DocumentFabricationDetail

_Return type:_ [DocumentFabricationDetail](types.md#DocumentFabricationDetail)

_**createDocumentFinanceBooking**_

Erstellt einen neue Instanz von DocumentFinanceBooking

_Return type:_ [DocumentFinanceBooking](types.md#DocumentFinanceBooking)

_**createDocumentLine**_

Erstellt einen neue Instanz von DocumentLine

_Return type:_ [DocumentLine](types.md#DocumentLine)

_**createDocumentLineBooking**_

Erstellt einen neue Instanz von DocumentLineBooking

_Return type:_ [DocumentLineBooking](types.md#DocumentLineBooking)

_**createDocumentLineCommission**_

Erstellt einen neue Instanz von DocumentLineCommission

_Return type:_ [DocumentLineCommission](types.md#DocumentLineCommission)

_**createDocumentLineComponent**_

Erstellt einen neue Instanz von DocumentLineComponent

_Return type:_ [DocumentLineComponent](types.md#DocumentLineComponent)

_**createDocumentLineComponentFabricationDetail**_

Erstellt einen neue Instanz von DocumentLineComponentFabricationDetail

_Return type:_ [DocumentLineComponentFabricationDetail](types.md#DocumentLineComponentFabricationDetail)

_**createDocumentLineFabricationBookedComponent**_

Erstellt einen neue Instanz von DocumentLineFabricationBookedComponent

_Return type:_ [DocumentLineFabricationBookedComponent](types.md#DocumentLineFabricationBookedComponent)

_**createDocumentLineFabricationDetail**_

Erstellt einen neue Instanz von DocumentLineFabricationDetail

_Return type:_ [DocumentLineFabricationDetail](types.md#DocumentLineFabricationDetail)

_**createDocumentLineFabricationDetailSerialNumber**_

Erstellt einen neue Instanz von DocumentLineFabricationDetailSerialNumber

_Return type:_ [DocumentLineFabricationDetailSerialNumber](types.md#DocumentLineFabricationDetailSerialNumber)

_**createDocumentLinePosDetail**_

Erstellt einen neue Instanz von DocumentLinePosDetail

_Return type:_ [DocumentLinePosDetail](types.md#DocumentLinePosDetail)

_**createDocumentLineRef**_

Erstellt einen neue Instanz von DocumentLineRef

_Return type:_ [DocumentLineRef](types.md#DocumentLineRef)

_**createDocumentPosDetail**_

Erstellt einen neue Instanz von DocumentPosDetail

_Return type:_ [DocumentPosDetail](types.md#DocumentPosDetail)

_**createDocumentPosPayment**_

Erstellt einen neue Instanz von DocumentPosPayment

_Return type:_ [DocumentPosPayment](types.md#DocumentPosPayment)

_**createDocumentPriceModifier**_

Erstellt einen neue Instanz von DocumentPriceModifier

_Return type:_ [DocumentPriceModifier](types.md#DocumentPriceModifier)

_**createDocumentRef**_

Erstellt einen neue Instanz von DocumentRef

_Return type:_ [DocumentRef](types.md#DocumentRef)

_**createDocumentShippingCost**_

Erstellt einen neue Instanz von DocumentShippingCost

_Return type:_ [DocumentShippingCost](types.md#DocumentShippingCost)

_**createDocumentTax**_

Erstellt einen neue Instanz von DocumentTax

_Return type:_ [DocumentTax](types.md#DocumentTax)

_**createDocumentText**_

Erstellt einen neue Instanz von DocumentText

_Return type:_ [DocumentText](types.md#DocumentText)

_**createDocumentTransferToStateRequest**_

Erstellt einen neue Instanz von DocumentTransferToStateRequest

_Return type:_ [DocumentTransferToStateRequest](types.md#DocumentTransferToStateRequest)

_**createDocumentTransferToTypeRequest**_

Erstellt einen neue Instanz von DocumentTransferToTypeRequest

_Return type:_ [DocumentTransferToTypeRequest](types.md#DocumentTransferToTypeRequest)

_**createDocumentType**_

Erstellt einen neue Instanz von DocumentType

_Return type:_ [DocumentType](types.md#DocumentType)

_**createDocumentTypeFollowUp**_

Erstellt einen neue Instanz von DocumentTypeFollowUp

_Return type:_ [DocumentTypeFollowUp](types.md#DocumentTypeFollowUp)

_**createDocumentTypeLabel**_

Erstellt einen neue Instanz von DocumentTypeLabel

_Return type:_ [DocumentTypeLabel](types.md#DocumentTypeLabel)

_**createDocumentTypeState**_

Erstellt einen neue Instanz von DocumentTypeState

_Return type:_ [DocumentTypeState](types.md#DocumentTypeState)

_**createFabricationComponentForProduction**_

Erstellt einen neue Instanz von FabricationComponentForProduction

_Return type:_ [FabricationComponentForProduction](types.md#FabricationComponentForProduction)

_**createFabricationDefectiveRequest**_

Erstellt einen neue Instanz von FabricationDefectiveRequest

_Return type:_ [FabricationDefectiveRequest](types.md#FabricationDefectiveRequest)

_**createFabricationProduceRequest**_

Erstellt einen neue Instanz von FabricationProduceRequest

_Return type:_ [FabricationProduceRequest](types.md#FabricationProduceRequest)

_**createFabricationRemainingComponent**_

Erstellt einen neue Instanz von FabricationRemainingComponent

_Return type:_ [FabricationRemainingComponent](types.md#FabricationRemainingComponent)

_**createFabricationRevertRequest**_

Erstellt einen neue Instanz von FabricationRevertRequest

_Return type:_ [FabricationRevertRequest](types.md#FabricationRevertRequest)

_**createFabricationSerialNumber**_

Erstellt einen neue Instanz von FabricationSerialNumber

_Return type:_ [FabricationSerialNumber](types.md#FabricationSerialNumber)

_**createGroup**_

Erstellt einen neue Instanz von Group

_Return type:_ [Group](types.md#Group)

_**createIncomingGoodsTarget**_

Erstellt einen neue Instanz von DocumentAdditionalInfo$IncomingGoodsTarget

_Return type:_ [DocumentAdditionalInfo$IncomingGoodsTarget](types.md#DocumentAdditionalInfoIncomingGoodsTarget)

_**createIncomingGoodsTargetOfLine**_

Erstellt einen neue Instanz von DocumentAdditionalInfo$IncomingGoodsTargetOfLine

_Return type:_ [DocumentAdditionalInfo$IncomingGoodsTargetOfLine](types.md#DocumentAdditionalInfoIncomingGoodsTargetOfLine)

_**createMetric**_

Erstellt einen neue Instanz von Article$Metric

_Return type:_ [Article$Metric](types.md#ArticleMetric)

_**createOrderIntoPickingConvertResult**_

Erstellt einen neue Instanz von DocumentAdditionalInfo$OrderIntoPickingConvertResult

_Return type:_ [DocumentAdditionalInfo$OrderIntoPickingConvertResult](types.md#DocumentAdditionalInfoOrderIntoPickingConvertResult)

_**createOrderSelectionOptions**_

Erstellt einen neue Instanz von PicklistTemplate$OrderSelectionOptions

_Return type:_ [PicklistTemplate$OrderSelectionOptions](types.md#PicklistTemplateOrderSelectionOptions)

_**createPaymentTermRef**_

Erstellt einen neue Instanz von PaymentTermRef

_Return type:_ [PaymentTermRef](types.md#PaymentTermRef)

_**createPickTrolley**_

Erstellt einen neue Instanz von PickTrolley

_Return type:_ [PickTrolley](types.md#PickTrolley)

_**createPickTrolleyBox**_

Erstellt einen neue Instanz von PickTrolleyBox

_Return type:_ [PickTrolleyBox](types.md#PickTrolleyBox)

_**createPicklist**_

Erstellt einen neue Instanz von Picklist

_Return type:_ [Picklist](types.md#Picklist)

_**createPicklistCreationOptions**_

Erstellt einen neue Instanz von PicklistTemplate$PicklistCreationOptions

_Return type:_ [PicklistTemplate$PicklistCreationOptions](types.md#PicklistTemplatePicklistCreationOptions)

_**createPicklistLine**_

Erstellt einen neue Instanz von PicklistLine

_Return type:_ [PicklistLine](types.md#PicklistLine)

_**createPicklistLineBooking**_

Erstellt einen neue Instanz von PicklistLineBooking

_Return type:_ [PicklistLineBooking](types.md#PicklistLineBooking)

_**createPicklistLineComponent**_

Erstellt einen neue Instanz von PicklistLineComponent

_Return type:_ [PicklistLineComponent](types.md#PicklistLineComponent)

_**createPicklistProcessingOptions**_

Erstellt einen neue Instanz von PicklistTemplate$PicklistProcessingOptions

_Return type:_ [PicklistTemplate$PicklistProcessingOptions](types.md#PicklistTemplatePicklistProcessingOptions)

_**createPicklistScript**_

Erstellt einen neue Instanz von PicklistTemplate$PicklistScript

_Return type:_ [PicklistTemplate$PicklistScript](types.md#PicklistTemplatePicklistScript)

_**createPicklistTemplate**_

Erstellt einen neue Instanz von PicklistTemplate

_Return type:_ [PicklistTemplate](types.md#PicklistTemplate)

_**createPriceSelectionCriteria**_

Erstellt einen neue Instanz von PriceSelectionCriteria

_Return type:_ [PriceSelectionCriteria](types.md#PriceSelectionCriteria)

_**createPrintedTranslatedField**_

Erstellt einen neue Instanz von DocumentAdditionalInfo$PrintedTranslatedField

_Return type:_ [DocumentAdditionalInfo$PrintedTranslatedField](types.md#DocumentAdditionalInfoPrintedTranslatedField)

_**createRequestDocument**_

Erstellt einen neue Instanz von RequestDocument

_Return type:_ [RequestDocument](types.md#RequestDocument)

_**createRequestDocumentLine**_

Erstellt einen neue Instanz von RequestDocumentLine

_Return type:_ [RequestDocumentLine](types.md#RequestDocumentLine)

_**createRequestDocumentLineBooking**_

Erstellt einen neue Instanz von RequestDocumentLineBooking

_Return type:_ [RequestDocumentLineBooking](types.md#RequestDocumentLineBooking)

_**createRequestDocumentLineCommission**_

Erstellt einen neue Instanz von RequestDocumentLineCommission

_Return type:_ [RequestDocumentLineCommission](types.md#RequestDocumentLineCommission)

_**createRequestDocumentLineFabricationDetail**_

Erstellt einen neue Instanz von RequestDocumentLineFabricationDetail

_Return type:_ [RequestDocumentLineFabricationDetail](types.md#RequestDocumentLineFabricationDetail)

_**createRequestDocumentPriceModifier**_

Erstellt einen neue Instanz von RequestDocumentPriceModifier

_Return type:_ [RequestDocumentPriceModifier](types.md#RequestDocumentPriceModifier)

_**createRequestDocumentText**_

Erstellt einen neue Instanz von RequestDocumentText

_Return type:_ [RequestDocumentText](types.md#RequestDocumentText)

_**createRevenueCalculation**_

Erstellt einen neue Instanz von RevenueCalculation

_Return type:_ [RevenueCalculation](types.md#RevenueCalculation)

_**createSalesAgent**_

Erstellt einen neue Instanz von SalesAgent

_Return type:_ [SalesAgent](types.md#SalesAgent)

_**createScenarioActualValue**_

Erstellt einen neue Instanz von ScenarioActualValue

_Return type:_ [ScenarioActualValue](types.md#ScenarioActualValue)

_**createScenarioDimension**_

Erstellt einen neue Instanz von ScenarioDimension

_Return type:_ [ScenarioDimension](types.md#ScenarioDimension)

_**createScenarioDimensionValue**_

Erstellt einen neue Instanz von ScenarioDimensionValue

_Return type:_ [ScenarioDimensionValue](types.md#ScenarioDimensionValue)

_**createSequencerConfiguration**_

Erstellt einen neue Instanz von SequencerConfiguration

_Return type:_ [SequencerConfiguration](types.md#SequencerConfiguration)

_**createSequencerConfigurationDetail**_

Erstellt einen neue Instanz von SequencerConfigurationDetail

_Return type:_ [SequencerConfigurationDetail](types.md#SequencerConfigurationDetail)

_**createSerialNumberWithQuantityApi**_

Erstellt einen neue Instanz von SerialNumberWithQuantityApi

_Return type:_ [SerialNumberWithQuantityApi](types.md#SerialNumberWithQuantityApi)

_**createShelfDocument**_

Erstellt einen neue Instanz von ShelfDocument

_Return type:_ [ShelfDocument](types.md#ShelfDocument)

_**createShelfDocumentAttribution**_

Erstellt einen neue Instanz von ShelfDocumentAttribution

_Return type:_ [ShelfDocumentAttribution](types.md#ShelfDocumentAttribution)

_**createShelfDocumentType**_

Erstellt einen neue Instanz von ShelfDocumentType

_Return type:_ [ShelfDocumentType](types.md#ShelfDocumentType)

_**createShelfFile**_

Erstellt einen neue Instanz von ShelfFile

_Return type:_ [ShelfFile](types.md#ShelfFile)

_**createShelfFileMetaData**_

Erstellt einen neue Instanz von ShelfFileMetaData

_Return type:_ [ShelfFileMetaData](types.md#ShelfFileMetaData)

_**createShelfShare**_

Erstellt einen neue Instanz von ShelfShare

_Return type:_ [ShelfShare](types.md#ShelfShare)

_**createShelfTranslatableText**_

Erstellt einen neue Instanz von ShelfTranslatableText

_Return type:_ [ShelfTranslatableText](types.md#ShelfTranslatableText)

_**createStock**_

Erstellt einen neue Instanz von Stock

_Return type:_ [Stock](types.md#Stock)

_**createStockMovementManualApi**_

Erstellt einen neue Instanz von StockMovementManualApi

_Return type:_ [StockMovementManualApi](types.md#StockMovementManualApi)

_**createStockTransferApi**_

Erstellt einen neue Instanz von StockTransferApi

_Return type:_ [StockTransferApi](types.md#StockTransferApi)

_**createStockTransferResult**_

Erstellt einen neue Instanz von StockTransferResult

_Return type:_ [StockTransferResult](types.md#StockTransferResult)

_**createStorageBinRef**_

Erstellt einen neue Instanz von StorageBinRef

_Return type:_ [StorageBinRef](types.md#StorageBinRef)

_**createSubFileInfo**_

Erstellt einen neue Instanz von SubFileInfo

_Return type:_ [SubFileInfo](types.md#SubFileInfo)

_**createSupplier**_

Erstellt einen neue Instanz von Supplier

_Return type:_ [Supplier](types.md#Supplier)

_**createTagDto**_

Erstellt einen neue Instanz von TagDto

_Return type:_ [TagDto](types.md#TagDto)

_**createTaxIdForeignCountry**_

Erstellt einen neue Instanz von TaxIdForeignCountry

_Return type:_ [TaxIdForeignCountry](types.md#TaxIdForeignCountry)

_**createTssSignature**_

Erstellt einen neue Instanz von TssSignature

_Return type:_ [TssSignature](types.md#TssSignature)

_**createUnitTypeReference**_

Erstellt einen neue Instanz von UnitTypeReference

_Return type:_ [UnitTypeReference](types.md#UnitTypeReference)

_**createUpdateDocumentRequest**_

Erstellt einen neue Instanz von UpdateDocumentRequest

_Return type:_ [UpdateDocumentRequest](types.md#UpdateDocumentRequest)

_**createUser**_

Erstellt einen neue Instanz von User

_Return type:_ [User](types.md#User)

_**createVariantDescription**_

Erstellt einen neue Instanz von VariantDescription

_Return type:_ [VariantDescription](types.md#VariantDescription)

