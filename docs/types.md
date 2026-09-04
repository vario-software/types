# Types

## AccessoryInsertTerm

| Value | Description |
| :---- | :---------- |
|MANUAL||
|AUTOMATIC_QUANTITY_IF_ACCESSORY_INSERTED||
|AUTOMATIC_PROPORTIONAL_QUANTITY||
|AUTOMATIC_FIXED_QUANTITY||


## Account

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Notiz|No|
|_boolean_|taxLiabilityReversed|Umkehrung der Steuerschuld nach §13b UStG?|No|
|Array<[AccountAddress](#accountaddress)>|addresses|Alle Adressen außer der Standard-Adresse|No|
|_string_|receivablesSumCurrencyCode|Währung Summe Forderungen IsoAlpha3|Yes|
|_string_|displayName|Kurzbezeichnung zur Darstellung|Yes|
|_boolean_|anonymized|ist der Account anonymisiert?|Yes|
|_string_|localCourt|Zuständiges Amtsgericht|No|
|_string_|remark|Sonderbemerkung|No|
|_string_|companyRegister|Handelsregister-Kennung|No|
|Array<[TaxIdForeignCountry](#taxidforeigncountry)>|taxIds|Eine List von Steuernummern|No|
|[AccountManufacturer](#accountmanufacturer)|manufacturer|Manufacturer of this account|No|
|_string_|number|Address-Number|No|
|[BusinessRelationType](#businessrelationtype)|businessRelationType|Art der Geschäftsbeziehung|No|
|[AccountZoneId](#accountzoneid)|accountZoneId|Zeitzone (bzw. Zeitzonen-Offset) des Accounts|No|
|[ApiCreatableReference](#apicreatablereference)|initialContactTypeRef|first contact type for this account|No|
|[Supplier](#supplier)|supplier|Supplier of this account|No|
|[SalesAgent](#salesagent)|salesAgent|Sales Agent of this account|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|dunningBlock|Mahnsperre|No|
|_string_|payablesSumCurrencyCode|Währung Summe Verbindlichkeiten IsoAlpha3|Yes|
|_string_|loanCurrencyCode|Währung Kreditlimit IsoAlpha3|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|Array<[AccountType](#accounttype)>|types|list of types, this account is used for (e.g. CUSTOMER, SUPPLIER, |No|
|[AccountAddress](#accountaddress)|defaultAddress|Default address of account|No|
|_number_|payablesSum|Summe Verbindlichkeiten|Yes|
|_string_|costCenter|Kostenstelle|No|
|_number_|receivablesSum|Summe Forderungen|Yes|
|[EavAccount](#eavaccount)|custom|Custom account data|No|
|[ApiCreatableReference](#apicreatablereference)|companyLegalRef|companyLegal for this account|No|
|_string_|taxNumber|tax number/ Steuernummer|No|
|_boolean_|active|Is account active?|Yes|
|[ApiObjectReference](#apiobjectreference)|responsibleUserRef|verantwortlicher Benutzer|No|
|_string_|languageCode|Sprache des Accounts|No|
|[ScriptingDate](#scriptingdate)|initialContactAt|Erstkontakt am|No|
|[CalculationMode](#calculationmode)|calculationMode|calculation mode of this document|No|
|_boolean_|hasActiveDuplicates|Has this Account a possible duplicate|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#tagdto)>|tags|List of tags|No|
|Array<[AccountPerson](#accountperson)>|persons|Ansprechpartner|No|
|[ApiObjectReference](#apiobjectreference)|afterPickingTargetDocumentTypeRef|Referenz auf den Ziel-Belegtyp nach der Kommissionierung|No|
|[AccountPerson](#accountperson)|defaultPerson|Standard-Ansprechpartner|No|
|Array<[AccountRelation](#accountrelation)>|relations|Account-Beziehungen|No|
|_string_|currencyCode|currency code  IsoAlpha3|No|
|[AccountLoanValue](#accountloanvalue)|loanValue|Aktuell berechnete Werte zum Kreditlimit des Accounts|Yes|
|[ApiObjectReference](#apiobjectreference)|reportGroupRef|Report-Gruppe, falls vom Standard abweichend|No|
|[Customer](#customer)|customer|Customer of this account|No|



## AccountAddress

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|salutationRef|salutation for this address|No|
|_string_|city|City|No|
|[ApiObjectReference](#apiobjectreference)|deviatingDeliveryMethodRef|abweichende Lieferart|No|
|_number_|latitude|latitude|No|
|[EN16931Profile](#en16931profile)|en16931Profile|EN16931 Profil|No|
|_string_|remark|Sonderbemerkung|No|
|_string_|parcelProvider|Parcel provider|No|
|[ApiObjectReference](#apiobjectreference)|regionRef|Region|No|
|[ApiCreatableReference](#apicreatablereference)|titleRef|Title|No|
|_string_|postOfficeBox|Post office box|No|
|_string_|street|Street|No|
|_string_|countryCode|Country code|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|eoriNumber|EORI-Nummer|No|
|_number_|longitude|Longitude|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|Array<[ApiCreatableReference](#apicreatablereference)>|types|the kind of usages for this address|No|
|_string_|buyerReference|Leitweg-ID|No|
|_string_|globalLocationNumber|GLN/ILN as location identifier for this address|No|
|[EavAccountaddress](#eavaccountaddress)|custom|Custom data|No|
|[ApiObjectReference](#apiobjectreference)|deviatingPaymentMethodRef|abweichende Zahlungsart|No|
|_string_|postcode|Postcode|No|
|[ApiObjectReference](#apiobjectreference)|manufacturerRef|zugehöriger Hersteller|No|
|_boolean_|defaultForType|Standard für den Account-Typ|No|
|_string_|languageCode|Sprache der Adresse|No|
|[CalculationMode](#calculationmode)|calculationMode|calculation mode of this address|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|additionalAddressLine1|Additional address line1|No|
|_string_|taxIdentificationNumber|tax identification number/ UST-ID-Nr.|No|
|_string_|additionalAddressLine2|Additional address line2|No|
|_string_|parcelStation|Parcel station|No|
|_string_|streetAddressNumber|Street address number|No|
|_string_|parcelStationCustomerNumber|Parcel station customer number|No|
|Map<[ContactTypeType](#contacttypetype),[Contact](#contact)>|defaultContacts|Default contacts|Yes|
|_string_|name3|Name3|No|
|_string_|homepageUrl|Homepage URL|No|
|[ApiObjectReference](#apiobjectreference)|deviatingDeliveryTermRef|abweichende Lieferbedingungen|No|
|[TaxIdVerificationState](#taxidverificationstate)|taxIdVerificationState|State of the last validation of the tax id number/ UST-ID-Nr.?|Yes|
|_string_|name2|Name2|No|
|_string_|name1|Name1|No|
|Array<[Contact](#contact)>|contacts|Contacts|No|
|[ApiObjectReference](#apiobjectreference)|deviatingPaymentTermRef|abweichende Zahlungsbedingungen|No|
|_boolean_|defaultAddress|is this the default address of the account|Yes|



## AccountBankdetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Is active?|Yes|
|_string_|bankName|name of the bank|No|
|_string_|bankPostCode|post-code of the bank|No|
|_string_|accountFrom|account from, if differs from account-address|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|bankCity|city of the bank|No|
|[TaxPerformanceLocationType](#taxperformancelocationtype)|mainBankAccountType|Hauptbankverbindung für|No|
|_boolean_|defaultBank|Is default bank?|No|
|[AccountBankdetail$OriginType](#accountbankdetailorigintype)|originType|origin type|No|
|_string_|iban|IBAN|No|
|_string_|originInfo|origin info|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|bic|BIC|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## AccountBankdetail$OriginType

| Value | Description |
| :---- | :---------- |
|FRONTEND||
|IMPORT||


## AccountBillingType

| Value | Description |
| :---- | :---------- |
|GROSS||
|NET||


## AccountListing

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|customerListed|Kunde gelistet?|No|
|_boolean_|manufacturerListed|Hersteller gelisted?|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Verkaufskanal|No|
|[EavAccountlisting](#eavaccountlisting)|custom|Freifeld|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Adresse|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## AccountLoanValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|accountId|Account|No|
|_number_|unconsideredAmount|Nicht berücksichtigter Betrag|No|
|_number_|nonInvoicedDocumentLoan|Betrag aus Aufträgen|No|
|_number_|payablesSum|Betrag aus Verbindlichkeiten(negativ)|No|
|_number_|maximalLoan|Kreditlimit|No|
|_number_|exceededLoan|Überschrittener Kreditbetrag|No|
|_number_|currentDocumentLoan|Betrag des momentanen Dokuments|No|
|_number_|currentLoan|Aktueller Kredit|No|
|_number_|receivableLoan|Betrag aus Forderungen|No|
|_number_|remainingLoan|Übriger Betrag bis zum Erreichen des Kreditlimits|No|



## AccountManufacturer

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|active true/false|Yes|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|forcedRecommendedRetailPrice|Ist der UVP verpflichtend?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[AccountManufacturerDescription](#accountmanufacturerdescription)>|labels|Beschreibungen|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## AccountManufacturerDescription

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|manufacturerUrl|Hersteller-URL|No|
|_string_|description|Beschreibung|No|
|_string_|label|Bezeichnung|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|Sprache der Beschreibung|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## AccountOrderStackProcessingType

| Value | Description |
| :---- | :---------- |
|ACCORDING_TO_CRITERIA||
|ONLY_FULL_ORDER||
|ONLY_FULL_ORDER_LINES||
|AVAILABLE_QUANTITIES||
|NO_PROCESSING||
|FULL_ORDER_LINES_MAX_TWO_PARTIAL_DELIVERIES||
|AVAILABLE_QUANTITIES_MAX_TWO_PARTIAL_DELIVERIES||
|FULL_ORDER_LINES_MAX_THREE_PARTIAL_DELIVERIES||
|AVAILABLE_QUANTITIES_MAX_THREE_PARTIAL_DELIVERIES||
|AVAILABLE_QUANTITIES_FINISH_ORDER||


## AccountPerson

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|salutationRef|salutation for this person|No|
|_string_|lastName|Lastname|No|
|[PersonGenderType](#persongendertype)|gender|Gender|No|
|_string_|remark|Sonderbemerkung|No|
|_string_|locale|Locale|No|
|[ApiCreatableReference](#apicreatablereference)|titleRef|Title|No|
|[ApiCreatableReference](#apicreatablereference)|initialContactTypeRef|First contact type for this account person|No|
|[ApiCreatableReference](#apicreatablereference)|jobTypeRef|jobType|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[EavAccountperson](#eavaccountperson)|custom|Custom data|No|
|_string_|jobArea|Job area|No|
|_boolean_|active|Aktiv?|Yes|
|[ScriptingDate](#scriptingdate)|dateOfBirth|Date of birth|No|
|_string_|label|Label|No|
|[ScriptingDate](#scriptingdate)|initialContactAt|Erstkontakt am|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|defaultPerson|Standard-Ansprechpartner|Yes|
|Array<[TagDto](#tagdto)>|tags|List of tags|No|
|_string_|firstName|First name|No|
|Map<[ContactTypeType](#contacttypetype),[Contact](#contact)>|defaultContacts|Default contacts|Yes|
|[ApiObjectReference](#apiobjectreference)|userRef|zugeordneter Benutzer (für eigenen Account)|No|
|_number_|sortOrder|sortierreihenfolge|No|
|_string_|comment|Comment|No|
|_string_|middleName|Middle name|No|
|Array<[Contact](#contact)>|contacts|List of contacts|No|



## AccountRelation

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiCreatableReference](#apicreatablereference)|relationTypeRef|Relation type|No|
|[ApiObjectReference](#apiobjectreference)|relatedAccountRef|Related account|No|
|_string_|comment|Comment|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## AccountType

| Value | Description |
| :---- | :---------- |
|CUSTOMER||
|SUPPLIER||
|MANUFACTURER||
|SERVICE_PROVIDER||
|MERCHANT||
|SALES_AGENT||
|COMPANY||
|PROSPECTIVE||


## AccountZoneId

| Value | Description |
| :---- | :---------- |
|ACT||
|AET||
|AGT||
|ART||
|AST||
|BET||
|BST||
|CAT||
|CNT||
|CST||
|CTT||
|EAT||
|ECT||
|IET||
|IST||
|JST||
|MIT||
|NET||
|NST||
|PLT||
|PNT||
|PRT||
|PST||
|SST||
|VST||
|EST||
|MST||
|HST||


## AdditionalParameter

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_object_|value|value for this parameter|No|
|_string_|key|key for this parameter|No|



## ApiCreatableReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|description|a short description|Yes|
|_number_|id|Identifier|No|
|_string_|label|a label|No|



## ApiObjectReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Activ|Yes|
|_string_|description|a short description|Yes|
|_number_|id|Identifier|No|
|_string_|label|a label|Yes|



## Article

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[FabricationOfComponents](#fabricationofcomponents)|fabricationOfComponents|Produktion von Komponenten|No|
|[ArticlePrintLabelSettings](#articleprintlabelsettings)|printLabelSettings|Etikettdruck-Einstellungen|No|
|_string_|customsTariffNumber|Zolltarifnummer|Yes|
|[DangerousGoodInformation](#dangerousgoodinformation)|dangerousGoodInformation|Gefahrgut Informationen|No|
|[EavArticleListing](#eavarticlelisting)|listingCustom|Product custom data|No|
|_boolean_|purchasable|is this product purchasable|No|
|[UnitTypeReference](#unittypereference)|baseCapacityUnit|base capacity unit|No|
|_boolean_|sellableWithoutStock|is this product sellable without any quantity at the stock|No|
|[ArticleSerialNumberLabelingType](#articleserialnumberlabelingtype)|serialNumberLabelingType|Seriennummern Auszeichnungsart|No|
|_number_|initialAvgPurchasePrice|Durchschnittl. EKP (Startwert)|No|
|_number_|grossVolumeInCubicMeters|gross Volume in cubic meters|No|
|_boolean_|deliverable|Ist der Artikel noch lieferbar?|No|
|[UnitTypeReference](#unittypereference)|productUnit|unit-type of this product|No|
|_boolean_|forcedRecommendedRetailPrice|Ist der UVP verpflichtend?|No|
|_number_|warrantyInMonths|Garantie in Monaten|No|
|_string_|number|unique product number|No|
|[Article$Metric](#articlemetric)|netMetric|weight and size w.o. packaging|No|
|[ArticleAvailabilityDetermination](#articleavailabilitydetermination)|availabilityDetermination|Optionen zur Berechnung der Verfügbarkeit|No|
|_boolean_|mergeable|is this product mergeable to another package-variant|No|
|_boolean_|cashDiscountable|skontierbarer Artikel?|No|
|_boolean_|determineAvgPurchasePrice|dEK berechnen?|No|
|[ApiObjectReference](#apiobjectreference)|onGoodsArrivalConvertIntoBundleArticleRef|Auflösung in Gebindeartikel bei Wareneingang|No|
|[ApiObjectReference](#apiobjectreference)|discountGroupRef|Rabattgruppe|No|
|[DropShippingPolicy](#dropshippingpolicy)|dropShippingPolicy|Vorgabe zu Streckengeschäft|No|
|[ArticleAssetInformation](#articleassetinformation)|articleAssetInformation|Information zur Verbindung zwischen Asset und Article|No|
|_number_|id|Unique identifier of the Object|No|
|[ArticleSerialType](#articleserialtype)|serialType|serial-type of this article|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#apiobjectreference)|taxSchemaRef|reference to TaxSchema|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|reference to DeliveryMethod|No|
|_boolean_|fabrication|Produktion|No|
|_number_|targetTradingMargin|Soll-Handelsspanne|No|
|_boolean_|active|active|Yes|
|[ApiObjectReference](#apiobjectreference)|responsibleUserRef|Zuständiger Mitarbeiter|No|
|_number_|listingId|die id des Listings|No|
|_string_|languageCode|Einschränkung auf Land|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#tagdto)>|tags|Tags zum Produkt|No|
|_boolean_|solvable|is this product solvable to another package-variant|No|
|_boolean_|returnable|retournierbar|No|
|[Article$Metric](#articlemetric)|grossMetric|weight and size inc. packaging|No|
|_number_|salesUnit|Verkaufseinheit|No|
|_string_|name|name of this product|No|
|[ScriptingDateTime](#scriptingdatetime)|listingStateChangeTime|die letzte Aktualisierung des listingStates|Yes|
|[CountryReference](#countryreference)|countryOfOriginRef|Country code|No|
|_number_|workUnitInMinutes|Arbeitseinheit in Minuten|No|
|[EavArticleListingDescription](#eavarticlelistingdescription)|listingDescriptionCustom|description custom data|No|
|_boolean_|freelyPickable|Frei kommissionierbar|No|
|_boolean_|lotOnlyRequiredWhenBookedToSalesStorage|Charge muss bei Einbuchung in ein Verkaufslager vergeben werden (für Serientyp LOT und BEST_BEFORE)|No|
|_boolean_|taxLiabilityReversed|Umkehrung der Steuerschuld nach §13b UStG?|No|
|_string_|note|Notiz|No|
|[ArticlePickingType](#articlepickingtype)|pickingType|Erlaubte Arten der Kommissionierung|No|
|_boolean_|printWarningIfNoContingentAvailable|Nur für Kontingentartikel: soll bei der Abrechnung angedruckt werden, dass kein Kontingent vorhanden ist?|No|
|_string_|description|description of this product|No|
|_string_|remark|Sonderbemerkung|No|
|_boolean_|sellable|is this product sellable|No|
|[ApiObjectReference](#apiobjectreference)|productGroupRef|reference to Product Group|No|
|_number_|capacity|capacity|No|
|_number_|grossSalesPrice|gross sales prices|No|
|_number_|minimumRemainingDaysBeforeExpiryDateOnGoodsReceipt|Mindestrestlaufzeit Eingang (Tage): Minimale Restlaufzeit in Tagen, die ein Artikel bei der Einbuchung in ein Verkaufslager noch aufweisen muss|No|
|_number_|defaultFabricationCost|Vorgabe Herstellungskosten|No|
|_number_|initialLastPurchasePrice|Letzter EKP (Startwert)|No|
|_boolean_|permissibleForOrderProposal|zulässig für Aufnahme in Bestellvorschläge|No|
|[ApiObjectReference](#apiobjectreference)|productRef|reference to Product|No|
|_boolean_|shippingLabelPrinting|Versandlabeldruck|No|
|_string_|alternativeName|alternative name of this product|No|
|[ApiObjectReference](#apiobjectreference)|contingentArticleRef|Kontingentartikel|No|
|_boolean_|discountable|rabattierbarer Artikel?|No|
|_number_|baseCapacity|base capacity|No|
|[ProductType](#producttype)|productType|type of this article|No|
|_string_|manufacturerArticleNumber|Artikelnummer|No|
|_boolean_|baseArticle|Ist das der Basis-Artikel des Produkts?|No|
|_boolean_|dangerousGoods|Artikel ist Gefahrgut|No|
|Array<[ArticleIdentifier](#articleidentifier)>|identifiers|all (external) product numbers (SKU, EAN, ...)|No|
|[EavArticle](#eavarticle)|custom|Product custom data|No|
|[ArticleSerialExpiryDateType](#articleserialexpirydatetype)|expiryDateType|Art des Haltbarkeitsdatums|No|
|_boolean_|needsAssessmentOnlyOnReservationBasis|Bedarfsermittlung nur über Reservierungen|No|
|[ApiObjectReference](#apiobjectreference)|manufacturerRef|Hersteller|No|
|_number_|netSalesPrice|net sales prices|No|
|[UnitTypeReference](#unittypereference)|capacityUnit|capacity unit|No|
|_number_|basePriceUnit|Basispreiseinheit|No|
|_boolean_|listed|soll der Artikel gelistet werden|No|
|_boolean_|onlyManualFabrication|Nur manuelle Produktion|No|
|_boolean_|commissionable|provisionsberechtiger Artikel?|No|
|_number_|minimumRemainingDaysBeforeExpiryDateForGoodsIssued|Mindestrestlaufzeit Ausgang (Tage): Minimale Restlaufzeit in Tagen, die ein Artikel beim Verkauf noch aufweisen muss|No|
|[ArticlePriceBase](#articlepricebase)|priceBase|Preisbasis|No|
|_boolean_|availableAlone|alleine lieferbarer Artikel?|No|
|[ListingState](#listingstate)|listingState|der aktuelle listing stand|Yes|



## Article$Metric

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sizeX|size|No|
|[UnitTypeReference](#unittypereference)|sizeUnit|size unit|No|
|_number_|weight|weight|No|
|_number_|sizeY|size|No|
|_number_|sizeZ|size|No|
|[UnitTypeReference](#unittypereference)|weightUnit|weight unit|No|



## ArticleAssetInformation

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|createAssetOnStorageEntry|Assets automatisch beim Lagerzugang erstellen|No|
|_boolean_|createAssetOnSale|Asset automatisch beim Verkauf erstellen|No|
|[AssetCreateOnDocumentCategory](#assetcreateondocumentcategory)|createAssetOnDocumentCategory|Asset erstellen bei Belegtyp|No|
|[AssetType](#assettype)|createWithAssetType|Asset Asset-Typ zum Erstellen|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ArticleAvailabilityDetermination

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ArticleAvailabilityDetermination$Operation](#articleavailabilitydeterminationoperation)|ordered|wie werden Bestellt-Mengen behandelt|No|
|[ArticleAvailabilityDetermination$Operation](#articleavailabilitydeterminationoperation)|reserved|wie werden Reserviert-Mengen behandelt|No|
|[ArticleAvailabilityDetermination$Operation](#articleavailabilitydeterminationoperation)|inStock|wie wird der Bestand behandelt|No|
|[ArticleAvailabilityDetermination$Operation](#articleavailabilitydeterminationoperation)|inPicking|wie werden Mengen in Kommissionierung behandelt|No|
|[ArticleAvailabilityDetermination$Operation](#articleavailabilitydeterminationoperation)|reporting|wie werden Meldebestände behandelt|No|



## ArticleAvailabilityDetermination$Operation

| Value | Description |
| :---- | :---------- |
|IGNORE||
|ADD||
|SUBTRACT||


## ArticleBundleConversionInfo

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[ArticleConversionRatio](#articleconversionratio)>|dissolveRatios|Mögliche Ziele für die Auflösung|No|
|[ProductArticleRef](#productarticleref)|articleRef|Artikels, zu dem hier die Infos zu finden sind|No|
|Array<[ArticleConversionRatio](#articleconversionratio)>|mergeRatios|Mögliche Ziele für die Zusammenführung|No|



## ArticleConversionRatio

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[UnitTypeReference](#unittypereference)|sourceUnitTypeRef|Quelleinheit|No|
|[ProductArticleRef](#productarticleref)|articleRef|Ein Artikel|No|
|_number_|factor|Faktor|No|



## ArticleCustomer

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|accountDisplayName|Anzeigename des Accounts|Yes|
|_string_|articleName|Referenced Article name|No|
|_boolean_|useDeviatingArticleIdentifier|Soll der abweichende Produktidentifier verwendet werden (z.B. in einer Scanner-Erfassung)|No|
|[ArticlePrintLabelSettings](#articleprintlabelsettings)|customerPrintLabelSettings|Etikettdruck-Einstellungen|No|
|Array<[ProductPrice](#productprice)>|productPrices|Kunden-Preise|Yes|
|_boolean_|useDeviatingArticleDescription|Soll die abweichende Produktbeschreibung verwendet werden (z.B. in Belegen)|No|
|_number_|articleId|Referenced Article|No|
|_boolean_|active|Aktiv?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|deviatingArticleDescription|Abweichende Produktbeschreibung|No|
|_number_|defaultNetPrice|Standardpreis Netto|No|
|_number_|accountId|Referenced Customer-Account|No|
|_string_|deviatingArticleName|Abweichende Produktbezeichnung|No|
|_number_|defaultGrossPrice|Standardpreis Brutto|No|
|_string_|articleNumber|Artikelnummer|Yes|
|_string_|deviatingArticleNumber|Abweichende Produktnummer|No|
|[ArticleCustomerPriceDetermination](#articlecustomerpricedetermination)|priceDetermination|Art der Preisermittlung|No|
|_string_|deviatingArticleIdentifier|Abweichender Produktidentifer (z.B. Barcode)|No|
|_boolean_|useDeviatingArticleNumber|Soll die abweichende Produktnummer verwendet werden (z.B. in Belegen)|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|useDeviatingArticleName|Soll die abweichende Produktbezeichnung verwendet werden (z.B. in Belegen)|No|
|_boolean_|lockedForCustomer|Ist das Produkt für den Kunden gesperrt?|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ArticleCustomerPriceDetermination

| Value | Description |
| :---- | :---------- |
|DEFAULT||
|SPECIAL||
|ONLY_DEFAULT_PRICE||


## ArticleIdentifier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|defaultArticleIdentifier|Standard Artikel Kennung?|No|
|_string_|name|identifier type|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|value|identifier|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ArticleListing

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|WithDefaults<List<[ArticleIdentifier](#articleidentifier)>>|identifiers|all (external) article numbers (SKU, EAN, ...)|No|
|_boolean_|sellableWithoutStock|is this product sellable without any quantity at the stock|No|
|[EavArticleListing](#eavarticlelisting)|custom|custom data|No|
|[ArticleListing$CustomFieldWithDefaults](#articlelistingcustomfieldwithdefaults)|descriptionCustom|description custom data|No|
|_WithDefaults<String>_|description|description of this article|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|proposedLowestPriceGross|Niedrigster Brutto-Preis der letzten 30 Tage (vom System ermittelt)|Yes|
|_number_|customLowestPriceGross|Niedrigster Brutto-Preis der letzten 30 Tage (benutzerdefinierte Eingabe)|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|der Sales Channel|No|
|_boolean_|listed|soll der Artikel gelistet werden|No|
|_WithDefaults<String>_|name|name of this article|No|
|Array<[ApiObjectReference](#apiobjectreference)>|categoryRefs|Kategorien, denen dieses Listing zugeordnet ist|No|
|[ScriptingDateTime](#scriptingdatetime)|listingStateChangeTime|die letzte aktualisierung des listingStates|Yes|
|_number_|id|Unique identifier of the Object|No|
|_WithDefaults<String>_|alternativeName|alternative name of this article|No|
|_number_|proposedLowestPriceNet|Niedrigster Netto-Preis der letzten 30 Tage (vom System ermittelt)|Yes|
|_number_|customLowestPriceNet|Niedrigster Netto-Preis der letzten 30 Tage (benutzerdefinierte Eingabe)|No|
|[ListingState](#listingstate)|listingState|der aktuelle listing stand|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ArticleListing$CustomFieldWithDefaults

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[EavArticleListingDescription](#eavarticlelistingdescription)|defaultValue|Wert des Default-Sales-Channel|Yes|
|[EavArticleListingDescription](#eavarticlelistingdescription)|value|Wert dieses Sales-Channel|No|



## ArticlePickingType

| Value | Description |
| :---- | :---------- |
|ACCORDING_TO_TEMPLATE||
|PICKING_ALLOWED||
|PICKING_NOT_ALLOWED||
|ONLY_SINGLE_ORDER_PICKING_ALLOWED||
|ONLY_COLLECTIVE_ORDER_PICKING_ALLOWED||


## ArticlePriceBase

| Value | Description |
| :---- | :---------- |
|NET_PRICE||
|GROSS_PRICE||


## ArticlePrintLabelCalculationMode

| Value | Description |
| :---- | :---------- |
|NO_LABEL||
|FIXED_AMOUNT||
|QUANTITY_TIMES_AMOUNT||
|QUANTITY_PER_PACKAGING_UNIT||
|QUANTITY_TIMES_AMOUNT_AND_PACKAGING_QUANTITY||


## ArticlePrintLabelSettings

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|outgoingPrintQuantity|Warenausgang: Druckmenge|No|
|[ArticlePrintLabelCalculationMode](#articleprintlabelcalculationmode)|outgoingCalculationMode|Warenausgang: Bestimmung der Druckmenge|No|
|[ArticlePrintLabelCalculationMode](#articleprintlabelcalculationmode)|incomingCalculationMode|Wareneingang: Bestimmung der Druckmenge|No|
|_number_|incomingPrintQuantity|Wareneingang: Druckmenge|No|
|[ApiObjectReference](#apiobjectreference)|report|Der Report zum Etikett|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ArticleSerialExpiryDateType

| Value | Description |
| :---- | :---------- |
|NONE||
|BEST_BEFORE_DATE||
|EXPIRATION_DATE||


## ArticleSerialNumber

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDate](#scriptingdate)|expiryDate|Haltbarkeitsdatum|No|
|_string_|note|Notiz|No|
|_string_|serialNumber2|Seriennummer 2|No|
|_string_|serialNumber1|Seriennummer 1|No|
|[EavArticleserialnumber](#eavarticleserialnumber)|custom|Zusatzfeld Seriennummer|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Artikel|No|
|_string_|udi|Unique Device Identifier (UDI)|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ArticleSerialNumberLabelingType

| Value | Description |
| :---- | :---------- |
|MANUAL||
|AUTOMATIC_ON_SUPPLIER_ORDER||
|AUTOMATIC_ON_SUPPLIER_DELIVERY||


## ArticleSerialType

| Value | Description |
| :---- | :---------- |
|NONE||
|SERIAL_NUMBER||
|LOT||
|BEST_BEFORE||
|DOUBLE_SERIAL_NUMBER||


## ArticleStorage

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantityInStock|Bestand im Lager|Yes|
|_number_|replenishmentFrom|Nachschub ab|No|
|_number_|reorderPoint|Meldebestand|No|
|_number_|quantityInPicking|Aktuelle Menge in Kommissionierung|Yes|
|_number_|orderedQuantity|Bestellte Menge|Yes|
|_number_|replenishmentOn|Nachschub auf|No|
|_number_|virtualStockAmount|Aktueller "virtueller" Bestand (wenn größere Gebinde in dieses aufgelöst werden würden)|Yes|
|_number_|reservedQuantity|Reservierte Menge|Yes|
|_number_|virtualStockAvailable|Aktuelle "virtuelle" verfügbare Menge (wenn größere Gebinde in dieses aufgelöst werden würden)|Yes|
|_number_|articleId|Das Produkt, dessen Lagerinfos hier ausgegeben werden|No|
|_string_|storageLocation|Lagerort|No|
|_number_|stockAvailable|Verfügbare Menge im Lager gemäß konfigurierter Verfügbarkeitsermittlung|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|withStorageBins|Hat dieses Lager Lagerplätze?|Yes|
|[ApiObjectReference](#apiobjectreference)|storageRef|Das Lager, dessen Infos hier ausgegeben werden|No|
|Array<[StorageBinRef](#storagebinref)>|presetStorageBinRefs|Vorgabe-Lagerplätze|No|
|_number_|targetStock|Sollbestand|No|
|_number_|quantityInFabrication|Aktuelle Menge in Produktion|Yes|
|_number_|minimumStock|Mindestbestand|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ArticleSupplier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|accountDisplayName|Anzeigename des Accounts|No|
|_number_|supplierReportingStock|Lieferanten-Meldebestand|No|
|_boolean_|useSupplierArticleDescription|Soll die abweichende Produktbeschreibung verwendet werden (z.B. in Belegen)|No|
|_boolean_|useSupplierArticleIdentifier|Soll der abweichende Produktidentifier verwendet werden (z.B. in einer Scanner-Erfassung)|No|
|_number_|deliveryTime|Lieferzeit in (Werk-)Tagen|No|
|_boolean_|useSupplierArticleNumber|Soll die abweichende Produktnummer verwendet werden (z.B. in Belegen)|No|
|_number_|minimumOrderQuantity|Mindestbestellmenge|No|
|[UnitTypeReference](#unittypereference)|productUnit|Mengeneinheit|No|
|_boolean_|useSupplierArticleName|Soll die abweichende Produktbezeichnung verwendet werden (z.B. in Belegen)|No|
|_number_|defaultGrossPrice|Standardpreis Brutto|No|
|_string_|articleNumber|Artikelnummer|Yes|
|[ApiObjectReference](#apiobjectreference)|discountGroupRef|Rabattgruppe|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_string_|articleName|Referenced Article name|No|
|_number_|packagingUnit|Verpackungseinheit|No|
|Array<[ProductPrice](#productprice)>|productPrices|Lieferanten-Preise|No|
|_number_|articleId|Referenced Article|No|
|_boolean_|active|Aktiv?|No|
|_boolean_|mainSupplier|Hauptlieferant|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|dropShippingAllowed|Kennzeichen, ob Streckengeschäft erlaubt|No|
|_string_|supplierArticleName|Abweichende Produktbezeichnung|No|
|_string_|supplierArticleDescription|Abweichende Produktbeschreibung|No|
|_number_|defaultNetPrice|Standardpreis Netto|No|
|_boolean_|orderOnComponentBase|Sollen Baugruppen auf Komponenten-Basis bestellt werden?)|No|
|_number_|purchaseUnit|Einkaufseinheit|No|
|_number_|accountId|Referenced Supplier-Account|No|
|_string_|supplierArticleIdentifier|Abweichender Produktidentifer (z.B. Barcode)|No|
|_string_|supplierArticleNumber|Abweichende Produktnummer|No|
|[ArticlePrintLabelSettings](#articleprintlabelsettings)|supplierPrintLabelSettings|Etikettdruck-Einstellungen|No|



## AssemblyComponentReturnLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Retournierte Menge|No|
|Array<[RequestDocumentLineBooking](#requestdocumentlinebooking)>|bookings|Buchungen zu der Komponente|No|
|_number_|sourceLineId|ID der Baugruppen-Quellposition|No|
|_number_|sourceComponentId|ID der Komponente in der Baugruppen-Quellposition|No|
|_number_|returnCauseId|ID des Retourengrunds|No|



## Asset

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Notiz|No|
|[ArticleSerialNumber](#articleserialnumber)|serialNumber|Seriennummer|No|
|_string_|freeSerialNumber|frei eingebbare Seriennummer / MHD|No|
|[EavAsset](#eavasset)|custom|Asset Zusatzfelder|No|
|_boolean_|active|active|Yes|
|[ApiObjectReference](#apiobjectreference)|articleRef|Artikel|No|
|[ScriptingDate](#scriptingdate)|warrantyEndDate|Ende Garantie|No|
|Array<[ApiObjectReference](#apiobjectreference)>|childAssetRefs|Zugehörige Assets|Yes|
|_string_|label|Asset-Bezeichnung|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|billingAddressRef|Rechnungsadresse|No|
|[ApiObjectReference](#apiobjectreference)|contractRef|Vertrag|No|
|[ApiObjectReference](#apiobjectreference)|accountAddressRef|Zusatzadresse|No|
|_string_|number|Asset-Nummer|No|
|[ScriptingDate](#scriptingdate)|warrantyStartDate|Beginn Garantie|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Asset-Halter|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|parentAssetRef|Übergeordnetes Asset|No|
|[ApiObjectReference](#apiobjectreference)|typeRef|Asset-Typ|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## AssetCreateOnDocumentCategory

| Value | Description |
| :---- | :---------- |
|CUSTOMER_DELIVERY||
|CUSTOMER_INVOICE||


## AssetType

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Aktiv?|Yes|
|_string_|label|Bezeichnung|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## BankPaymentType

| Value | Description |
| :---- | :---------- |
|MONEY_TRANSFER||
|REALTIME_MONEY_TRANSFER||
|SEPA_CORE_DIRECT_DEBIT||
|SEPA_B2B_DIRECT_DEBIT||
|CLEARING||
|CLEARING_WITH_PREDECESSOR_DOCUMENT||
|OTHER||


## BatchScriptingContext$BatchScriptImportSession


## BillingType

| Value | Description |
| :---- | :---------- |
|GROSS||
|NET||


## BulkTransferRequestApi

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|createReportAfterTransfer|Soll nach der Umbuchung ein Report dazu erstellt werden?|No|
|Array<[StockTransferApi](#stocktransferapi)>|stockTransfers|Enthält die Anweisungen für die Umbuchungen|No|



## BulkTransferResult

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDate](#scriptingdate)|date|Das Buchungsdatum|No|
|_number_|reportId|Falls der Report im Request angefordert wurde, wird hier die ID aus dem DMS geliefert|No|
|Array<[StockTransferResult](#stocktransferresult)>|stocks|Die durch die Lagerbuchung geänderten Lagerplatz-Bestände|No|



## BundleSchema

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|productId|Produkt, zu dem dieses Schema gehört|Yes|
|_string_|label|Name|No|
|_number_|id|Unique identifier of the Object|No|
|[UnitTypeReference](#unittypereference)|baseTypeRef|Basis-Einheit des Schemas|No|
|Array<[BundleUnitTypeRatio](#bundleunittyperatio)>|ratios|Umrechnungen für Artikel des zugehörigen Produkts|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## BundleUnitTypeRatio

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[UnitTypeReference](#unittypereference)|baseUnitTypeRef|Mengeneinheit|No|
|[UnitTypeReference](#unittypereference)|relationUnitTypeRef|Verhältnis-Mengeneinheit|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|factor|Faktor|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## BusinessRelationType

| Value | Description |
| :---- | :---------- |
|B2B||
|B2C||
|B2G||


## BuyerReferenceOrigin

| Value | Description |
| :---- | :---------- |
|FROM_BILLING_ADDRESS||
|FROM_DEFAULT_ADDRESS||
|USER_DEFINED||


## CalculateFreightChargesFromType

| Value | Description |
| :---- | :---------- |
|CHARGES_FROM_ORDER||
|RECALCULATE||


## CalculateFreightChargesWithType

| Value | Description |
| :---- | :---------- |
|EVERY_SHIPPING||
|FIRST_SHIPPING||


## CalculationMode

| Value | Description |
| :---- | :---------- |
|HORIZONTAL||
|VERTICAL||


## CalculationModeOrigin

| Value | Description |
| :---- | :---------- |
|FROM_BILLING_ADDRESS||
|FROM_DEFAULT_ADDRESS||
|FROM_ACCOUNT||
|FROM_SALES_CHANNEL||
|FROM_DOCUMENT_PARAMS||
|USER_DEFINED||


## CashJournalWithdrawalMode

| Value | Description |
| :---- | :---------- |
|FULL||
|BALANCE||
|MANUAL||
|NONE||


## CommonUserType

| Value | Description |
| :---- | :---------- |
|REGULAR||
|SUPPORT||
|SYSTEM||
|LIMITED_WMS||
|LIMITED_POS||
|LIMITED_DASHBOARD||
|LIMITED_AGENT||
|APP_BUILTIN_USER||


## Contact

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|defaultContact|Is default contact?|No|
|[EavContact](#eavcontact)|custom|Freifeld|No|
|_number_|ctId|Type identifier|No|
|_string_|ctLabel|Contact label|No|
|_number_|id|Unique identifier of the Object|No|
|[ContactTypeType](#contacttypetype)|ctType|Contact type|No|
|_string_|value|A Value|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ContactTypeType

| Value | Description |
| :---- | :---------- |
|PHONE||
|SOCIAL||
|EMAIL||
|FAX||
|SKYPE||
|MS_TEAMS||
|CUSTOM||
|MOBILE||


## CountryReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|isoAlpha2|IsoAlpha2-Code des Landes|No|
|_string_|isoAlpha3|IsoAlpha3-Code des Landes|No|
|_number_|id|ID des Landes|No|
|_string_|label|Bezeichnung des Landes|Yes|



## CreateNewDocumentRequest
### Description
Details zur Erstellung eines neuen Belegs

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[EDocumentCategory](#edocumentcategory)|defaultDocumentTypeByCategory|Standard-Belegart der Kategorie verwenden|No|
|_string_|documentTypeLabel|Belegart|No|
|_boolean_|externallyCreated|Beleg als extern erstellt kennzeichnen (extern erstellter Beleg)|No|
|[RequestDocument](#requestdocument)|document|Details zum Beleg|No|
|Array<[AdditionalParameter](#additionalparameter)>|parameters|Zusätzliche Parameter|No|



## CrmActivity

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|notes|Notizen|No|
|_number_|durationInSeconds|Dauer der Aktivität in Sekunden|No|
|[CrmActivityType](#crmactivitytype)|type|Aktivitätsart|No|
|[CrmActivityBillingType](#crmactivitybillingtype)|billingType|Art der Abrechnung dieser Aktivität|No|
|_number_|durationToBillInSeconds|tatsächliche Dauer|No|
|[ScriptingDateTime](#scriptingdatetime)|plannedStartDateTime|geplante Startzeit|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|billingDocumentLineRef|Abrechnungsbelegposition|Yes|
|_boolean_|email|Handelt es sich bei der Aktivität um eine E-Mail|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_boolean_|internalBilled|Aktivität intern abgerechnet?|Yes|
|_number_|plannedDurationInSeconds|geplante Dauer|No|
|[EavCrmactivity](#eavcrmactivity)|custom|Freie Felder der CRM-Aktivität|No|
|_number_|billingDiscount|Rabatt zur Abrechnung|No|
|_boolean_|published|Ist die Aktivität veröffentlicht|No|
|[ApiObjectReference](#apiobjectreference)|accountPersonRef|Ansprechpartner|No|
|_boolean_|billable|Abrechenbar?|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|userRef|Von welchem User ist diese Aktivität? Wenn NULL dann handelt es sich um eine System-Aktivität|No|
|_boolean_|system|Handelt es sich um eine System-Aktivität?|Yes|
|[ScriptingDateTime](#scriptingdatetime)|startDateTime|tatsächliche Startzeit|No|
|_string_|comment|Inhalt dieser Aktivität|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Zu welcher Adresse gehört diese Aktivität|No|
|[CrmObjectRef](#crmobjectref)|crmParent|Zu welchem CRM-Objekt gehört diese Aktivität|No|



## CrmActivityBillingType

| Value | Description |
| :---- | :---------- |
|LIKE_TASK||
|UNCLEAR||
|CUSTOMER||
|INTERNAL||
|PLANNED||


## CrmActivityType

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|descriptionTemplate|Text für Aktivitätstyp der im Editor eingetragen wird|No|
|Array<[PossibleUsingType](#possibleusingtype)>|possibleUsingTypes|Mögliche Typen, wo diese Aktivitätsart verwendet werden kann|No|
|_boolean_|active|Aktiv?|Yes|
|_string_|description|Beschreibung|No|
|_string_|label|Bezeichnung|No|
|_boolean_|emailArchiving|Für "E-Mail-Archivieren"?|No|
|_boolean_|billable|Abrechenbar?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|defaultForComments|Standard für Kommentare?|No|
|_boolean_|emailProcessing|Für "E-Mail-Bearbeitung"?|No|
|_number_|sortOrder|Sortierreihenfolge|No|
|[CrmActivityBillingType](#crmactivitybillingtype)|defaultBillingType|Standard-Abrechnungsart|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|canBePublished|Darf die Aktivität veröffentlicht werden?|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmChecklistItem

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|memo|Text des Checklisten-Elements|No|
|_boolean_|checked|Ist das Element "angehakt"?|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmDeal

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|plannedInvestmentSum|Geplante Investitionssumme|No|
|[ApiObjectReference](#apiobjectreference)|closingReasonRef|Abschlußgrund|No|
|_string_|notes|Notizen|No|
|[ScriptingDate](#scriptingdate)|plannedPerformanceDate|Geplantes Leistungs-Datum|No|
|_string_|detailedClosingReason|Freier/Detaillierter Abschlußgrund|No|
|_string_|description|Notiz/Beschreibung|No|
|Array<[ApiObjectReference](#apiobjectreference)>|observerRefs|Beobachter|No|
|[ApiObjectReference](#apiobjectreference)|responsibleCustomerPersonRef|Hauptverantwortlicher Ansprechpartner Kunde|No|
|[ApiObjectReference](#apiobjectreference)|priorityRef|Priorität der Aufgabe|No|
|_string_|number|Aufgaben-Nummer|Yes|
|[ApiObjectReference](#apiobjectreference)|mainResponsibleUserRef|Verantwortlicher Benutzer|No|
|[ApiObjectReference](#apiobjectreference)|stateRef|Status der Aufgabe|No|
|[ApiObjectReference](#apiobjectreference)|topicRef|Thema|No|
|[ScriptingDate](#scriptingdate)|plannedClosingDate|Geplantes Abschluss-Datum|No|
|Array<[DocumentRef](#documentref)>|salesDocumentRefs|Verkaufsbelege|No|
|Array<[DocumentRef](#documentref)>|contractRefs|Vertrag|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|typeRef|Typ der Aufgabe|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#apiobjectreference)|assignedUserRef|Zu Erledigen von Benutzer (zugeordneter Benutzer)|No|
|Array<[CrmParticipant](#crmparticipant)>|additionalParticipantsOfCustomer|Weitere Teilnehmer vom Auftraggeber|No|
|_number_|chance|Chance (in Prozent)|No|
|Array<[CrmObjectRef](#crmobjectref)>|parentRefs|Übergeordnete CRM-Objekte|No|
|[ApiObjectReference](#apiobjectreference)|healthRef|Gesundheitsstatus|No|
|[ApiObjectReference](#apiobjectreference)|assignedByUserRef|Zugewiesen von|No|
|_string_|label|Aufgabentitel|No|
|_boolean_|processedByWorkflow|In Workflow-Verarbeitung?|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[EavCrmdeal](#eavcrmdeal)|customField|Freie Felder des CRM-Deals|No|
|Array<[CrmObjectRef](#crmobjectref)>|childRefs|Untergeordnete CRM-Objekt|No|
|Array<[TagDto](#tagdto)>|tags|Tags|No|
|[ApiObjectReference](#apiobjectreference)|assignedGroupRef|Zu Erledigen von Benutzergruppe (zugeordnete Benutzergruppe)|No|
|Array<[CrmParticipant](#crmparticipant)>|additionalParticipantsOfContractor|Weitere Teilnehmer vom Auftragnehmer|No|
|[CrmDealClosingType](#crmdealclosingtype)|closingType|Art des Abschluß|No|
|[ApiObjectReference](#apiobjectreference)|mainResponsibleGroupRef|Verantwortlicher Benutzer|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Adresse, zu welcher die Aufgabe gehört|No|
|[ScriptingDateTime](#scriptingdatetime)|nextPlannedContactDate|Nächster geplanter Kontakt|No|
|[ApiObjectReference](#apiobjectreference)|salesAgentAccountRef|Vertreterinformationen|No|



## CrmDealClosingType

| Value | Description |
| :---- | :---------- |
|POSITIVE||
|NEGATIVE||


## CrmDealTopic

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sortierreihenfolge|No|
|_boolean_|active|aktiv|Yes|
|_string_|description|Beschreibung|No|
|_string_|label|Bezeichnung|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmObjectRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Nummer|No|
|_string_|description|Beschreibung|No|
|[CrmSubType](#crmsubtype)|subType|Sub-Type|No|
|_number_|id|ID|No|
|[CrmState](#crmstate)|state|Status|No|
|_string_|label|Bezeichung|No|
|[CrmType](#crmtype)|type|CRM-Typ|No|



## CrmParticipant

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|description|Beschreibung|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|accountPersonRef|Ansprechpartner|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmPriority

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sortierreihenfolge|No|
|[CrmPriorityType](#crmprioritytype)|crmPriorityType|Prioritäten-Typ|No|
|_string_|label|Bezeichnung|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiCreatableReference](#apicreatablereference)|portalEnumRef|portalEnum for this priority|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmPriorityType

| Value | Description |
| :---- | :---------- |
|CRITICAL||
|NORMAL||
|LOW||


## CrmProject

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|notes|Notizen|No|
|_number_|recordedTimes|Erfasste Zeiten in Sekunden|Yes|
|[ScriptingDate](#scriptingdate)|actualProjectPeriodTo|Tatsächlicher Projektzeitraum (bis)|No|
|[ScriptingDate](#scriptingdate)|actualProjectPeriodFrom|Tatsächlicher Projektzeitraum (von)|No|
|_string_|description|Notiz/Beschreibung|No|
|Array<[ApiObjectReference](#apiobjectreference)>|observerRefs|Beobachter|No|
|[ApiObjectReference](#apiobjectreference)|priorityRef|Priorität der Aufgabe|No|
|[ApiObjectReference](#apiobjectreference)|phaseRef|Phase|No|
|[CrmParticipant](#crmparticipant)|projectManagerOfContractor|Projektleiter vom Auftragnehmer|No|
|_string_|number|Aufgaben-Nummer|Yes|
|[ApiObjectReference](#apiobjectreference)|stateRef|Status der Aufgabe|No|
|_number_|billedTimes|Abgerechnete Zeiten in Sekunden|Yes|
|[ScriptingDate](#scriptingdate)|plannedProjectPeriodFrom|Geplanter Projektzeitraum (von)|No|
|Array<[DocumentRef](#documentref)>|purchaseDocumentRefs|Einkaufsbelege|No|
|Array<[DocumentRef](#documentref)>|salesDocumentRefs|Verkaufsbelege|No|
|Array<[DocumentRef](#documentref)>|contractRefs|Vertrag|No|
|_number_|id|Unique identifier of the Object|No|
|[ScriptingDate](#scriptingdate)|contractConclusionDate|Datum Vertragsabschluss|No|
|[ApiObjectReference](#apiobjectreference)|typeRef|Typ der Aufgabe|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[CrmParticipant](#crmparticipant)|projectManagerOfCustomer|Projektleiter vom Auftraggeber|No|
|Array<[CrmParticipant](#crmparticipant)>|additionalParticipantsOfCustomer|Weitere Teilnehmer vom Auftraggeber|No|
|Array<[CrmObjectRef](#crmobjectref)>|parentRefs|Übergeordnete CRM-Objekte|No|
|_number_|effortCommissioned|Gesamt beauftragte Zeit in Sekunden|No|
|_number_|effortEstimation|Gesamt Aufwandsschätzung in Sekunden|No|
|Array<[CrmChecklistItem](#crmchecklistitem)>|checklist|Checkliste: Memo + Checked|No|
|_string_|label|Aufgabentitel|No|
|_boolean_|processedByWorkflow|In Workflow-Verarbeitung?|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[EavCrmproject](#eavcrmproject)|customField|Freie Felder des CRM-Projekten|No|
|Array<[CrmObjectRef](#crmobjectref)>|childRefs|Untergeordnete CRM-Objekt|No|
|Array<[TagDto](#tagdto)>|tags|Tags|No|
|Array<[CrmParticipant](#crmparticipant)>|additionalParticipantsOfContractor|Weitere Teilnehmer vom Auftragnehmer|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Adresse, zu welcher die Aufgabe gehört|No|
|[ScriptingDate](#scriptingdate)|plannedProjectPeriodTo|Geplanter Projektzeitraum (bis)|No|



## CrmReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|reference|Referenz|No|
|[CrmReferenceType](#crmreferencetype)|referenceType|Typ der Referenz|No|



## CrmReferenceType

| Value | Description |
| :---- | :---------- |
|ARTICLE||
|DOCUMENT_LINE||
|OPEN_ITEM||
|ASSET||


## CrmReminder

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|crmId|ID des CRM Objekts|No|
|_string_|note|Notiz zur Erinnerung|No|
|[ApiObjectReference](#apiobjectreference)|userRef|Wer soll erinnert werden|No|
|_boolean_|critical|Kritische Erinnerung?|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ScriptingDateTime](#scriptingdatetime)|remindAt|Erinnerungszeitpunkt|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmState

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[CrmSubType](#crmsubtype)>|crmSubTypes|Typ zu dem dieser Status gehört|No|
|_boolean_|active|active|Yes|
|_string_|description|Beschreibung|No|
|_boolean_|needsCommentOnPositiveFinish|Kommentar bei positivem Abschluß erforderlich|No|
|_string_|label|Bezeichnung|No|
|[ApiCreatableReference](#apicreatablereference)|portalEnumRef|portalEnum for this state|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|finishState|Handelt es sich um einen End-Status|No|
|_number_|sortOrder|Sortierreihenfolge|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|readyToBill|Handelt es sich um einen "Bereit zur Abrechnung"-Status|No|
|_boolean_|startState|Handelt es sich um einen Anfang-Status|No|
|_boolean_|needsCommentOnNegativeFinish|Kommentar bei negativem Abschluß erforderlich|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmSubType

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sortierreihenfolge|No|
|_boolean_|active|aktiv|Yes|
|_string_|description|Beschreibung|No|
|_string_|label|Bezeichnung|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmTask

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[CrmReminder](#crmreminder)>|reminders|Liste von Erinnerungen|No|
|[DocumentRef](#documentref)|customerOfferRef|Angebot|No|
|[ApiObjectReference](#apiobjectreference)|mainResponsibleParticipantRef|Verantwortlicher Teilnehmer (Ansprechpartner)|No|
|_string_|notes|Notizen|No|
|Array<[CrmReference](#crmreference)>|references|Referenzen|No|
|Array<[ApiObjectReference](#apiobjectreference)>|observerRefs|Beobachter|No|
|[ApiObjectReference](#apiobjectreference)|responsibleCustomerPersonRef|Hauptverantwortlicher Ansprechpartner Kunde|No|
|[ApiObjectReference](#apiobjectreference)|priorityRef|Priorität der Aufgabe|No|
|_string_|number|Aufgaben-Nummer|Yes|
|[ApiObjectReference](#apiobjectreference)|mainResponsibleUserRef|Verantwortlicher Benutzer|No|
|[DocumentRef](#documentref)|customerOrderRef|Auftrag|No|
|_number_|internalRecordedTimes|Erfasste Zeiten in Sekunden (intern)|Yes|
|Array<[DocumentRef](#documentref)>|purchaseDocumentRefs|Einkaufsbelege|No|
|Array<[DocumentRef](#documentref)>|contractRefs|Vertrag|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|Array<[CrmTaskParticipant](#crmtaskparticipant)>|additionalParticipantsOfCustomer|Weitere Teilnehmer vom Auftraggeber|No|
|[ApiObjectReference](#apiobjectreference)|assignedByUserRef|Zugewiesen von|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[EavCrmtask](#eavcrmtask)|customField|Freie Felder der CRM-Aufgabe|No|
|Array<[CrmObjectRef](#crmobjectref)>|childRefs|Untergeordnete CRM-Objekt|No|
|Array<[TagDto](#tagdto)>|tags|Tags|No|
|Array<[ApiObjectReference](#apiobjectreference)>|duplicatedByTaskRefs|Wird von diesen Aufgaben dupliziert|No|
|[ApiObjectReference](#apiobjectreference)|assignedGroupRef|Zu Erledigen von Benutzergruppe (zugeordnete Benutzergruppe)|No|
|[ScriptingDateTime](#scriptingdatetime)|dueDateTime|Zu erledigen |No|
|[ApiObjectReference](#apiobjectreference)|mainResponsibleGroupRef|Verantwortlicher Benutzer|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Adresse, zu welcher die Aufgabe gehört|No|
|Array<[ApiObjectReference](#apiobjectreference)>|blockedByTaskRefs|Wird von diesen Aufgaben blockiert|No|
|[ApiObjectReference](#apiobjectreference)|assignedParticipantRef|Zu Erledigen von Teilnehmer (Ansprechpartner)|No|
|_number_|externalBilledTimes|Abgerechnete Zeiten in Sekunden (extern)|Yes|
|_number_|kanbanSortOrder|Kanban-Sortierreihenfolge|No|
|Array<[ApiObjectReference](#apiobjectreference)>|relatedToTaskRefs|Steht mit diesen Aufgaben im Zusammenhang|No|
|_string_|description|Notiz/Beschreibung|No|
|[ApiObjectReference](#apiobjectreference)|stateRef|Status der Aufgabe|No|
|[CrmTaskBillingType](#crmtaskbillingtype)|billingType|Abrechnungsart|No|
|Array<[DocumentRef](#documentref)>|billingDocumentRefs|Abrechnungen|No|
|Array<[DocumentRef](#documentref)>|salesDocumentRefs|Verkaufsbelege|No|
|[ScriptingDateTime](#scriptingdatetime)|toBeDoneStartingFrom|Zu erledigen ab|No|
|[ApiObjectReference](#apiobjectreference)|typeRef|Typ der Aufgabe|No|
|[ApiObjectReference](#apiobjectreference)|assignedUserRef|Zu Erledigen von Benutzer (zugeordneter Benutzer)|No|
|Array<[CrmObjectRef](#crmobjectref)>|parentRefs|Übergeordnete CRM-Objekte|No|
|_number_|effortCommissioned|Beauftragte Zeit in Sekunden|No|
|_number_|externalRecordedTimes|Erfasste Zeiten in Sekunden (extern)|Yes|
|_number_|effortEstimation|Aufwandsschätzung in Sekunden|No|
|[CrmTaskBillingRule](#crmtaskbillingrule)|billingRule|Abrechnungsregel|No|
|Array<[CrmChecklistItem](#crmchecklistitem)>|checklist|Checkliste: Memo + Checked|No|
|_string_|label|Aufgabentitel|No|
|_boolean_|processedByWorkflow|In Workflow-Verarbeitung?|Yes|
|_number_|internalBilledTimes|Abgerechnete Zeiten in Sekunden (intern)|Yes|
|Array<[ApiObjectReference](#apiobjectreference)>|blocksTaskRefs|Blockiert diese Aufgaben|No|
|Array<[CrmTaskParticipant](#crmtaskparticipant)>|additionalParticipantsOfContractor|Weitere Teilnehmer vom Auftragnehmer|No|
|_boolean_|publish|Soll die Aufgabe veröffentlicht werden?|No|
|_number_|progress|Fortschritt in Prozent|No|
|Array<[ApiObjectReference](#apiobjectreference)>|duplicatesTaskRefs|Duplizierte Aufgaben|No|



## CrmTaskBillingRule

| Value | Description |
| :---- | :---------- |
|ONLY_COMPLETE||
|ONLY_BILL_WITH_PARENT_TASK||
|ALLOW_ACTIVITIES_INDIVIDUALLY||


## CrmTaskBillingType

| Value | Description |
| :---- | :---------- |
|UNCLEAR||
|CUSTOMER||
|INTERNAL||


## CrmTaskParticipant

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|observer|Beobachter|No|
|_string_|description|Beschreibung|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|voteComment|Kommentar zur Abstimmung|No|
|[ApiObjectReference](#apiobjectreference)|accountPersonRef|Ansprechpartner|No|
|_boolean_|vote|Abstimmung|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmType

| Value | Description |
| :---- | :---------- |
|TASK||
|DEAL||
|PROJECT||


## CrmTypedDocumentRef
### Description
CRM-Belegreferenz

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ECrmSpecialDocumentRefType](#ecrmspecialdocumentreftype)|specialRefType|Typ der Belegreferenz|Yes|
|[EDocumentQualifier](#edocumentqualifier)|documentQualifier|Beleg-Qualifizierer|Yes|
|[DocumentRef](#documentref)|documentRef|Belegreferenz|Yes|



## CrmTypedDocumentRefList
### Description
Liste von CRM-Belegreferenzen


## CurrencyReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|symbol|Symbol der Währung|Yes|
|_string_|isoAlpha3|IsoAlpha3-Code der Währung|No|
|_number_|id|ID der Währung|No|
|_string_|label|Bezeichnung der Währung|Yes|



## Customer

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[AccountOrderStackProcessingType](#accountorderstackprocessingtype)|stackProcessingType|Option für die Stapelverarbeitung|No|
|[ApiObjectReference](#apiobjectreference)|customerGroupRef|reference to customer group|No|
|_string_|dueDateCalculation|Cron-Ausdruck zur Berechnung der Sammelabrechnung|No|
|_number_|maximalLoan|Kreditlimit|No|
|[ScriptingDate](#scriptingdate)|dueDate|Fälligkeit der nächsten Sammelabrechnung|No|
|_number_|maxDeliveries|Maximal mögliche Lieferungen|No|
|_boolean_|collectiveBillable|collective billable|No|
|_boolean_|deliveryBlocked|Hat der Kunde eine Liefersperre?|No|
|_string_|number|number of customer|No|
|[AccountBillingType](#accountbillingtype)|billingType|presetting of billing type|No|
|[ScriptingDate](#scriptingdate)|nextDueDate|Nächste Fälligkeit nach der aktuellen|No|
|_number_|stackProcessingPriority|Priorität für die Stapelverarbeitung|No|
|_boolean_|collectiveInvoiceManually|Sammelabrechnung nur manuell auslösen?|No|
|[ApiObjectReference](#apiobjectreference)|productPriceGroupRef|reference to product price group|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|accountingNumber|finance account-number of customer|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_boolean_|taxable|tax able or tax free|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|reference to the delivery method|No|
|_boolean_|active|active true/false|Yes|
|[ApiObjectReference](#apiobjectreference)|responsibleUserRef|reference to responsible user|No|
|_string_|ourNumber|customers number for us|No|
|[ApiObjectReference](#apiobjectreference)|paymentTermRef|reference to the payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|reference to the delivery term|No|
|_string_|performanceCountryCode|country code performance country IsoAlpha3|No|
|[ApiObjectReference](#apiobjectreference)|paymentMethodRef|reference to the payment method|No|
|_string_|currencyCode|currency code  IsoAlpha3|No|



## DangerousGoodInformation

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|shippingName|shipping name|No|
|[TunnelRestrictionCode](#tunnelrestrictioncode)|tunnelRestrictionCode|tunnel restriction classes|No|
|_string_|transportCategory|transportation category|No|
|_string_|description|description|No|
|_string_|technicalName|technical name|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|subsidiaryRisk|secundary risk of the dangerous good|No|
|_string_|classificationCode|classification code|No|
|_string_|packingCode|packing code|No|
|_string_|unNumber|united nations number (un number)|No|
|_string_|identificationClass|identification class|No|
|[RegulationCode](#regulationcode)|regulationCode|regulation code|No|
|[RegulationSet](#regulationset)|regulationSet|regulation Set, e.g. ADR|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|packingGroup|packing group (I, II, III or blank)|No|
|_number_|hazardousWeight|weight of the hazardous part|No|
|_string_|adrNumber|adr identification number|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DealNotificationEventConfig

| Value | Description |
| :---- | :---------- |
|DEAL_CHANGED||
|DEAL_COMMENT_MENTIONED||
|DEAL_CLOSED_LOOSE||
|DEAL_CLOSED_WON||
|DEAL_REMINDER||


## DeliveryMethod

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|splitIntoNewDocument|Soll eine Position mit dieser Liefermethode in einen Lieferbeleg mit dieser Methode übernommen werden|No|
|_boolean_|forwardEmailToShipper|E-Mail an Versender übergeben|No|
|_string_|identifier|Barcode|No|
|_number_|minWeightPerParcel|Min. Gewicht pro Paket|No|
|_number_|deliveryTime|Versanddauer in Tagen|No|
|_string_|printDescription|printDescription|No|
|_number_|maxWeightPerParcel|Max. Gewicht pro Paket|No|
|_boolean_|active|Aktiv?|Yes|
|_string_|description|description|No|
|_string_|label|label for this delivery method|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|forwardPhoneToShipper|Telefon an Versender übergeben|No|
|[UnitTypeReference](#unittypereference)|defaultSizeUnit|Standardlängeneinheit|No|
|Array<[DocumentTypeTerm](#documenttypeterm)>|translations|translations|No|
|[DeliveryMethodParcelWeightSource](#deliverymethodparcelweightsource)|parcelWeightSource|Quelle für Paketgewicht|No|
|_number_|vdsCarrierId|Versand-Anbieter|No|
|_Array<string>_|validCountryCodes|Gültige Ländercodes|No|
|[UnitTypeReference](#unittypereference)|defaultWeightUnit|Standardgewichtseinheit|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DeliveryMethodParcelWeightSource

| Value | Description |
| :---- | :---------- |
|AUTOMATIC_VIA_DOCUMENT_LINE||
|MANUAL_RECORDING||


## DeliveryTerm

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|freeShippingGrossValue|free shipping gross value|No|
|_number_|codNetFee|cod net fee to charge on document|No|
|_string_|printDescription|printDescription|No|
|_number_|codGrossFee|cod gross fee to charge on document|No|
|_boolean_|active|Aktiv?|No|
|_string_|description|description|No|
|_string_|label|label for this delivery term|No|
|[CalculateFreightChargesWithType](#calculatefreightchargeswithtype)|calculateFreightChargesWithType|information, when the shipping charges should be calculated|No|
|_string_|languageCode|Sprache des Accounts|No|
|_boolean_|freightChargesPerParcel|calculate shipping charges per parcel|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[CalculateFreightChargesFromType](#calculatefreightchargesfromtype)|calculateFreightChargesFromType|information, how the shipping charges should be calculated|No|
|Array<[DocumentTypeTerm](#documenttypeterm)>|translations|translations|No|
|Array<[ApiObjectReference](#apiobjectreference)>|deliveryMethodRefs|Lieferarten|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|freeShippingNetValue|free shipping net value|No|
|[ApiObjectReference](#apiobjectreference)|shippingCostArticleRef|Versandkostenartikel|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DmsOutputStream
### Description
Leitet die geschriebenen Daten an ein Dokument im DMS weiter.

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ShelfFileUploadSession](#shelffileuploadsession)|delegate||No|
|[ShelfFile](#shelffile)|producedFile||No|
|[ShelfCommonMapper](#shelfcommonmapper)|shelfCommonMapper||No|



## Document

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|billingAccountRef|Referenz zum Rechnungskonto|No|
|[ScriptingDate](#scriptingdate)|confirmedDeliveryDateEnd|Bestätigtes Lieferende (nur wenn bestätigtes Lieferdatum gesetzt)|No|
|_string_|externalNumber|Externe Belegnummer|No|
|Array<[DocumentTax](#documenttax)>|taxes|Steuerzusammenfassung für diesen Beleg|Yes|
|_number_|baseTotalNetPrice|Gesamtpreis - Netto Basiswährung|No|
|[DocumentPosDetail](#documentposdetail)|posDetail|Quittungsdetails|No|
|[ScriptingDate](#scriptingdate)|confirmedDeliveryDate|Bestätigtes Lieferdatum|No|
|_string_|number|Belegnummer|No|
|_number_|totalVat|Gesamte Mehrwertsteuer|Yes|
|[ApiObjectReference](#apiobjectreference)|defaultStorageRef|Standardlager für neue Positionen|No|
|_string_|orderedBy|Name der bestellenden Person|No|
|[DocumentAddress](#documentaddress)|deliveryAddress|Lieferadresse|No|
|_number_|stackProcessingPriority|Priorität in der Stapelverarbeitung|No|
|_number_|totalLinePriceModifier|Positionsrabatt gesamt [BRUTTO, NETTO]|Yes|
|_number_|id|Unique identifier of the Object|No|
|_number_|posReceiptBalance|Quittung: Saldo
positiver Wert: Betrag der noch zu zahlen ist
negativer Wert: überzahlter Betrag / Rückgeld
|No|
|_number_|deliveryQuantityPackages|Voraussichtliche Paketanzahl (nur Info)|No|
|[DocumentAddress](#documentaddress)|returnDeliveryAddress|Retoure-Lieferadresse|No|
|_boolean_|taxable|Steuerpflichtig oder steuerfrei|No|
|_string_|buyerReference|Leitweg-ID|No|
|_string_|referencedOrderNumber|Bestellnummer aus Vorbeleg|Yes|
|_number_|baseTotalLinePriceModifier|Preisanpassungen - Belegpositionssumme Basiswährung|No|
|_number_|baseDepositPaymentAmount|Vorkassebetrag Basiswährung|No|
|_number_|totalBeforeModifier|Gesamtpreis vor Rabatt [BRUTTO, NETTO]|Yes|
|_boolean_|frozen|Ist der Beleg festgeschrieben?|Yes|
|[ApiObjectReference](#apiobjectreference)|responsibleUserRef|Referenz auf verantwortlichen Benutzer|No|
|_string_|salesAgentNumber|Vertreternummer|Yes|
|_string_|languageCode|Sprache|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#tagdto)>|tags|Tags für diesen Beleg|No|
|_number_|accountId|ID der Organisationseinheit|No|
|_string_|sourceCountryCode|Länderkennzeichen Ursprungsland (ISO Alpha-3)|No|
|_string_|performanceCountryCode|Länderkennzeichen Leistungsland (ISO Alpha-3)|No|
|[ScriptingDate](#scriptingdate)|depositPaymentDate|Vereinbartes Anzahlungsdatum|Yes|
|_number_|shippingCostSum|Summe der Versandkosten (netto/brutto)|Yes|
|[DocumentQualifier](#documentqualifier)|qualifier|Art des Belegs|Yes|
|[ApiObjectReference](#apiobjectreference)|paymentMethodRef|Referenz auf Zahlungsmethode|No|
|[ScriptingDate](#scriptingdate)|documentDate|Belegdatum|No|
|_number_|roundingAmount|Endbetragsrundung: Differenz zwischen gerundetem Brutto und (Netto + MwSt)|Yes|
|_boolean_|taxLiabilityReversed|Reverse-Charge-Verfahren nach §13b UStG?|No|
|[ScriptingDate](#scriptingdate)|shippingDate|Versanddatum|No|
|_string_|supplierNumber|Lieferantennummer|Yes|
|_boolean_|deliveryApproved|Ist der Beleg zur Lieferung freigegeben?|No|
|_number_|totalGrossPrice|Gesamtpreis brutto|Yes|
|Array<[DocumentPosPayment](#documentpospayment)>|posPayments|Kassen-Zahlungspositionen|No|
|_boolean_|posReceiptPayed|Ist die Quittung bezahlt
true wenn die Quittung bezahlt ist
|No|
|_number_|maxDeliveries|Maximal mögliche Lieferungen|No|
|_string_|ourCustomerNumber|Kundennummer beim Lieferanten|Yes|
|_number_|posReceiptPaymentSum|Quittung: Summe Zahlbetrag|No|
|[ScriptingDate](#scriptingdate)|deliveryDate|Voraussichtliches Lieferdatum|No|
|[ScriptingDate](#scriptingdate)|deliveryDateEnd|Voraussichtliches Lieferende (nur wenn Lieferdatum gesetzt)|No|
|[DocumentContractDetail](#documentcontractdetail)|contractDetail|Vertragsdetails|No|
|_number_|cashDiscountableTotalGrossPrice|Skontofähiger Bruttogesamtbetrag|Yes|
|_boolean_|paymentPlan|Zahlungsplan vorhanden?|No|
|[DocumentFabricationDetail](#documentfabricationdetail)|fabricationDetail|Produktionsdetails|No|
|_string_|accountNumber|Kontonummer der zugehörigen Organisationseinheit|Yes|
|[CalculationMode](#calculationmode)|calculationMode|Berechnungsmodus|No|
|_boolean_|processedByWorkflow|Wird vom Workflow verarbeitet?|Yes|
|[PaymentTermRef](#paymenttermref)|paymentTermRef|Referenz auf Zahlungsbedingung|No|
|_number_|baseTotalDocumentPriceModifier|Preisanpassungen - Beleg Basiswährung|No|
|_boolean_|forwardPhoneToShipper|Telefon an Versender übergeben|No|
|Array<[DocumentText](#documenttext)>|texts|Liste der Belegtexte|No|
|[ApiObjectReference](#apiobjectreference)|locationRef|Standort (bei Produktionsaufträgen)|No|
|_boolean_|collectiveInvoice|Sammelrechnung?|No|
|_string_|currencyCode|Währung (ISO-Code, Alpha-3)|No|
|[DocumentAddress](#documentaddress)|defaultAddress|Standardadresse|No|
|[ScriptingDate](#scriptingdate)|performanceDate|Leistungsdatum|No|
|[OrderStackProcessingType](#orderstackprocessingtype)|stackProcessingType|Verarbeitungsoption für Stapel|No|
|_boolean_|dropShippingInvoiceApproved|Ist der Streckengeschäfts-Beleg zur Rechnung freigegeben?|Yes|
|[EN16931Profile](#en16931profile)|en16931Profile|EN16931-Profil für elektronische Rechnungen|No|
|_number_|exchangeRate|Wechselkurs|No|
|[TaxPerformanceLocationType](#taxperformancelocationtype)|taxPerformanceLocation|Ort der steuerlichen Leistungserbringung|No|
|[DocumentAdditionalInfo](#documentadditionalinfo)|additionalInfo|Zusätzliche Infos zu Entscheidungen im Belegkontext|Yes|
|_number_|baseCashDiscountableTotalGrossPrice|skontierbarer Rechnungsbetrag Basiswährung|No|
|[ScriptingDate](#scriptingdate)|orderedOn|Bestelldatum|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|Referenz auf Liefermethode|No|
|_number_|totalPriceModifier|Rabatt gesamt [BRUTTO, NETTO]|Yes|
|_boolean_|dropShipping|Streckengeschäft|Yes|
|[EInvoiceValidationState](#einvoicevalidationstate)|valitoolValidationState|Validierungsstatus bei elektronischen Rechnungen|Yes|
|_number_|totalNetPrice|Gesamtpreis netto|Yes|
|_boolean_|published|Ist der Beleg veröffentlicht (gedruckt, per Mail versendet)?|Yes|
|[ApiObjectReference](#apiobjectreference)|afterPickingTargetDocumentTypeRef|Ziel-Belegtyp nach Kommissionierung|No|
|_number_|depositPaymentAmount|Vereinbarter Anzahlungsbetrag|No|
|_number_|totalDocumentPriceModifier|Belegrabatt gesamt [BRUTTO, NETTO]|Yes|
|_string_|documentType|Belegtyp (intern)|Yes|
|_number_|totalGrossVolumeInCubicMeters|total gross Volume in cubic meters|Yes|
|_number_|documentTypeId|ID des Belegtyps|Yes|
|[DocumentCategory](#documentcategory)|documentTypeCategory|Kategorie des Belegs|Yes|
|[DocumentImportType](#documentimporttype)|importType|Importmodus des Belegs|Yes|
|_boolean_|userDefinedWeight|Gesamtgewicht wurde manuell gesetzt|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Referenz zum zugeordneten Vertriebskanal|No|
|[BillingType](#billingtype)|billingType|Abrechnungstyp|No|
|_number_|baseTotalGrossPrice|Gesamtpreis - Brutto Basiswährung|No|
|_string_|externalIdentifier|Externe Kennung|No|
|[UnitTypeReference](#unittypereference)|grossWeightUnit|Einheit für das Gesamtgewicht|No|
|Array<[DocumentLine](#documentline)>|lines|Liste der Belegpositionen|No|
|_boolean_|forwardEmailToShipper|E-Mail an Versender übergeben|No|
|_string_|deliveryText|Zusätzlicher Liefertext|No|
|[EavDocument](#eavdocument)|custom|Benutzerdefinierte Felder|No|
|[ScriptingDate](#scriptingdate)|valueDate|Valutadatum|No|
|_string_|customerNumber|Kundennummer|Yes|
|Array<[DocumentShippingCost](#documentshippingcost)>|shippingCosts|Versandkostenpositionen|No|
|[DocumentTypeState](#documenttypestate)|documentState|Statusinstanz des Belegs|Yes|
|_string_|taxIdentificationNumber|Umsatzsteuer-Identifikationsnummer|No|
|_number_|posReceiptChangeAmount|Rückgeld|No|
|_boolean_|posReceiptBalanced|Ist die Quittung ausbalanciert, also bezahlt und kein Rückgeld
true wenn die Quittung ausbalanciert ist
|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|Referenz auf Lieferbedingung|No|
|_number_|grossWeight|Gesamtbruttogewicht|No|
|_string_|baseCurrencyCode|Basiswährung des Belegs|No|
|[ExchangeRateOrigin](#exchangerateorigin)|exchangeRateOrigin|Ursprung für Währungskursermittlung|No|
|Array<[DocumentPriceModifier](#documentpricemodifier)>|priceModifiers|Preisänderungen (z.B. Rabatte)|No|
|[TaxIdVerificationState](#taxidverificationstate)|taxIdVerificationState|Status der USt-ID-Prüfung|Yes|
|[DocumentAddress](#documentaddress)|billingAddress|Rechnungsadresse|No|
|[ApiObjectReference](#apiobjectreference)|orderedByPersonRef|Bestellt durch Ansprechpartner|No|
|[ApiObjectReference](#apiobjectreference)|reportGroupRef|Report-Gruppe, falls vom Standard abweichend|No|



## DocumentAdditionalInfo

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[TaxSituationOrigin](#taxsituationorigin)|taxSituationOrigin|Steuersachverhalt Herkunft|No|
|[DocumentRounding](#documentrounding)|roundingMode|Aktiver Rundungsmodus für diesen Beleg (eingefroren aus dem SalesChannel)|Yes|
|Array<[AdditionalParameter](#additionalparameter)>|contextParameters|Parameter, welche im {@link DocumentContext} verwendet wurden|No|
|[LanguageCodeOrigin](#languagecodeorigin)|languageCodeOrigin|Herkunft der Sprache|No|
|[BuyerReferenceOrigin](#buyerreferenceorigin)|buyerReferenceOrigin|Herkunft der Käufer-Referenz|Yes|
|[CalculationModeOrigin](#calculationmodeorigin)|calculationModeOrigin|Herkunft des Berechnungsmodus|Yes|
|[DocumentAdditionalInfo$IncomingGoodsTarget](#documentadditionalinfoincominggoodstarget)|incomingGoodsTarget|Ziele für den Wareneingang für den gesamten Beleg|No|
|[EN16931Origin](#en16931origin)|en16931Origin|Herkunft des E-Rechnungs-Profils|Yes|
|Array<[DocumentAdditionalInfo$PrintedTranslatedField](#documentadditionalinfoprintedtranslatedfield)>|translations|Übersetzungen|No|
|_string_|previousDecisions|Enthält die Ergebnisse von vorherigen Entscheidungen des Benutzers zu diesem Document|Yes|
|Array<[DocumentAdditionalInfo$IncomingGoodsTargetOfLine](#documentadditionalinfoincominggoodstargetofline)>|incomingGoodsTargetsPerLine|Ziele für den Wareneingang je Belegposition|No|



## DocumentAdditionalInfo$IncomingGoodsTarget

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|pickTrolleyId|Pickwagen für den Wareneingang|No|
|_number_|storageBinId|Lagerplatz für den Wareneingang|No|



## DocumentAdditionalInfo$IncomingGoodsTargetOfLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|pickTrolleyId|Pickwagen für den Wareneingang|No|
|_number_|storageBinId|Lagerplatz für den Wareneingang|No|
|_number_|lineId|ID einer Belegposition|No|
|_number_|sourceLineId|ID einer Vorbelegposition|No|



## DocumentAdditionalInfo$PrintedTranslatedField

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|fieldName|name des Feldes|No|
|_string_|entityName|zur welcher Entity?|No|
|_string_|content|Übersetzung|No|



## DocumentAddress

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|city|city|No|
|_string_|title|Titel|No|
|[ApiObjectReference](#apiobjectreference)|regionRef|Region|No|
|_string_|postOfficeBox|Post office box|No|
|_string_|street|Street|No|
|_string_|countryCode|country code IsoAlpha3|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|mailContact|Mail contact|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_string_|globalLocationNumber|GLN|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|Lieferart|No|
|_string_|postcode|Postcode|No|
|_string_|languageCode|Language Code|No|
|[ApiObjectReference](#apiobjectreference)|paymentTermRef|Zahlungsbedingungen|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|additionalAddressLine1|Additional address line1|No|
|_string_|additionalAddressLine2|Additional address line2|No|
|_string_|streetAddressNumber|Street address number|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|Lieferbedingungen|No|
|_string_|name3|address line 3|No|
|_string_|phoneContact|Phone contact|No|
|[ApiObjectReference](#apiobjectreference)|paymentMethodRef|Zahlungsart|No|
|_string_|salutation|salutation for this address|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Referenz zum Account|No|
|_string_|name2|address line 2|No|
|_string_|name1|address line 1|No|



## DocumentCategory

| Value | Description |
| :---- | :---------- |
|CUSTOMER_OFFER||
|CUSTOMER_ORDER||
|CUSTOMER_DELIVERY_DOCUMENT||
|CUSTOMER_INVOICE||
|CUSTOMER_PROFORMA_INVOICE||
|CUSTOMER_DELIVERY_INVOICE||
|CUSTOMER_PROGRESS_INVOICE||
|CUSTOMER_FINAL_INVOICE||
|CUSTOMER_PARTIAL_INVOICE||
|CUSTOMER_INVOICE_CANCELLATION||
|CUSTOMER_DELIVERY_INVOICE_CANCELLATION||
|CUSTOMER_PROGRESS_INVOICE_CANCELLATION||
|CUSTOMER_FINAL_INVOICE_CANCELLATION||
|CUSTOMER_PARTIAL_INVOICE_CANCELLATION||
|CUSTOMER_DEPOSIT_INVOICE||
|CUSTOMER_DEPOSIT_INVOICE_CANCELLATION||
|CUSTOMER_CREDIT_NOTE_WITH_STOCK||
|CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK||
|CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION||
|CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION||
|CUSTOMER_RETURN_ANNOUNCEMENT||
|CUSTOMER_GOODS_RETURN||
|SUPPLIER_PRICE_REQUEST||
|SUPPLIER_ORDER||
|SUPPLIER_DELIVERY_DOCUMENT||
|SUPPLIER_INVOICE||
|SUPPLIER_DELIVERY_INVOICE||
|SUPPLIER_CREDIT_NOTE_WITH_STOCK||
|SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK||
|SUPPLIER_DEPOSIT_INVOICE||
|SUPPLIER_PROGRESS_INVOICE||
|SUPPLIER_PARTIAL_INVOICE||
|SUPPLIER_FINAL_INVOICE||
|COMMISSION_SETTLEMENT||
|COMMISSION_SETTLEMENT_CANCELLATION||
|SUPPLIER_COMMISSION_CREDIT_NOTE||
|SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION||
|CUSTOMER_SUBSCRIPTION_CONTRACT||
|POS_CASH_JOURNAL_OPENING||
|POS_CASH_RECEIPT||
|POS_RETURN_CASH_RECEIPT||
|POS_CASH_JOURNAL_DEPOSIT||
|POS_CASH_JOURNAL_EXPENSE||
|POS_CASH_JOURNAL_WITHDRAWAL||
|POS_CASH_JOURNAL_CLOSING||
|FABRICATION_ORDER||


## DocumentCommissionOrigin

| Value | Description |
| :---- | :---------- |
|NOT_COMMISSIONABLE||
|USER_DEFINED||
|AUTOMATIC||
|PREDECESSOR||
|RECALCULATE||


## DocumentContractDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|dueDateCalculation|Cron-Ausdruck zur Berechnung der Fälligkeit|No|
|[ScriptingDate](#scriptingdate)|runtimeFromDate|Laufzeit von|No|
|[ScriptingDate](#scriptingdate)|endDate|Vertragsende (nur Kopf)|No|
|_boolean_|publishInPortal|Portal anzeigen?|No|
|[ScriptingDate](#scriptingdate)|dueDate|Fälligkeit|No|
|_boolean_|active|Vertrag aktiv?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|calculateDirectly|Direkt abrechnen?|No|
|[ScriptingDate](#scriptingdate)|runtimeToDate|Laufzeit bis|No|
|[ScriptingDate](#scriptingdate)|lastProviderCancellationDate|Letztmöglicher kündigungstermin des Anbieters|No|
|[ScriptingDate](#scriptingdate)|nextDueDate|Nächste Fälligkeit|No|
|[ScriptingDate](#scriptingdate)|lastCustomerCancellationDate|Letztmöglicher kündigungstermin des Kunden|No|
|_number_|id|Unique identifier of the Object|No|
|[ScriptingDate](#scriptingdate)|startDate|Vertragsstart (nur Kopf)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|targetStorageRef|Ziel-Lager|No|
|[ApiObjectReference](#apiobjectreference)|componentsStorageRef|Material-Lager|No|
|_string_|note|Notiz|No|
|[ApiObjectReference](#apiobjectreference)|qualityAssuranceStorageRef|QS-Lager|No|
|[ApiObjectReference](#apiobjectreference)|workbenchStorageRef|Werkbank-Lager|No|
|[EavFabrication](#eavfabrication)|custom|Freifeld|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|defectiveStorageBinRef|Defekt-Lagerplatz (wenn das Lager mit Lagerplätzen ist)|No|
|[ApiObjectReference](#apiobjectreference)|qualityAssuranceStorageBinRef|QS-Lagerplatz (wenn das Lager mit Lagerplätzen ist)|No|
|[ApiObjectReference](#apiobjectreference)|defectiveStorageRef|Defekt-Lager|No|
|[ApiObjectReference](#apiobjectreference)|targetStorageBinRef|Ziel-Lagerplatz (wenn das Lager mit Lagerplätzen ist)|No|
|[ApiObjectReference](#apiobjectreference)|workbenchStorageBinRef|Werkbank-Lagerplatz (wenn das Lager mit Lagerplätzen ist)|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|minimumDegreeOfFulfillment|Minimaler Erfüllungsgrad|No|
|[ScriptingDate](#scriptingdate)|startDate|Startdatum|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentFinanceBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|costCenter1|Kostenstelle|No|
|_string_|ledgerNumber|FiBu-Kontonummer|No|
|_number_|documentLineId|Id der Dokumentzeile|No|
|_string_|description|Buchungstext|No|
|_string_|comment|Kommentar|No|
|_string_|transactionKey|Buchungsschlüssel|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentImportType

| Value | Description |
| :---- | :---------- |
|NOT_IMPORTED||
|TRANSFERABLE||
|TRANSFERABLE_AND_EDITABLE||
|HISTORICAL_DATA||
|E_INVOICE||
|EXTERNALLY_CREATED||


## DocumentLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDate](#scriptingdate)|confirmedDeliveryDateEnd|bestätigtes Ende des Lieferzeitraums (nur notwendig für Lieferrzeiträume, wenn Lieferdatum gesetzt)|No|
|[UnitTypeReference](#unittypereference)|baseCapacityUnit|Grundeinheit|No|
|_number_|quantityCommitted|verarbeitete Menge|Yes|
|Array<[DocumentTax](#documenttax)>|taxes|Steuern|No|
|[DocumentLinePosDetail](#documentlineposdetail)|posDetail|Kasseninformationen|No|
|[ScriptingDate](#scriptingdate)|confirmedDeliveryDate|bestätigtes Lieferdatum|No|
|_string_|number|Artikelnummer|No|
|[DocumentLineRef](#documentlineref)|customerOrderLineRef|Referenz zur Kundenauftragszeile|No|
|_number_|totalGrossWeight|Gesamtbruttogewicht|No|
|[ApiObjectReference](#apiobjectreference)|settledOpenItemRef|Referenz zum auszugleichenden Offenen Posten (nur bei OPEN_ITEM_SETTLEMENT)|No|
|_boolean_|cashDiscountable|skontierbare Position?|No|
|_number_|price|Preis pro Menge [Brutto, Netto]|No|
|[DocumentFinanceBooking](#documentfinancebooking)|financeBooking|FiBu-Buchung|No|
|_number_|totalLinePriceModifier|Summe Positionspreisänderungen [Brutto, Netto]|Yes|
|[DropShippingPolicy](#dropshippingpolicy)|dropShippingPolicy|Vorgabe zu Streckengeschäft|No|
|_boolean_|articleTaxLiabilityReversed|Vorgabe §13b UStG Artikel|Yes|
|_number_|id|Unique identifier of the Object|No|
|_number_|basePrice|Preis pro Einheit in Basiswährung|No|
|_number_|positionOfArticleLine|Positionsnummer über alle Artikelpositionen hinweg|Yes|
|[ArticleSerialType](#articleserialtype)|serialType|Serientyp|Yes|
|_number_|priceUnit|Preiseinheit|No|
|[ApiObjectReference](#apiobjectreference)|taxSchemaRef|Steuerschema|No|
|_number_|baseTotalLinePriceModifier|Preisanpassungen - Position Basiswährung|No|
|_number_|vat|Steuerbetrag|Yes|
|[ApiObjectReference](#apiobjectreference)|mainArticleLineRef|Referenz zur Hauptartikel-Position des Zubehörs|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|externalArticleName|Externer Artikelname|Yes|
|_number_|totalNetWeight|Gesamtnettogewicht|No|
|_boolean_|taxLiabilityReversed|wird §13b UStG angewendet?|Yes|
|Array<[DocumentLineComponent](#documentlinecomponent)>|components|Komponenten|No|
|[ScriptingDate](#scriptingdate)|shippingDate|Versanddatum|No|
|_number_|settledOpenItemBalance|Offener Restbetrag des auszugleichenden Offenen Postens (nur in der Response)|No|
|[DocumentLineReturnDetail](#documentlinereturndetail)|returnDetail|Retourendetails|No|
|_string_|calculationData|Kalkulationsstruktur|No|
|[DocumentLineRef](#documentlineref)|sourceLineRef|Referenz zur Vorbelegzeile|No|
|[PriceSelectionCriteria](#priceselectioncriteria)|priceSelectionCriteria|Preisermittlungskriterien|Yes|
|_number_|capacity|Inhalt der Maßeinheit|No|
|[UnitTypeReference](#unittypereference)|unitType|Einheitentyp|No|
|[AccessoryInsertTerm](#accessoryinsertterm)|insertTerm|Zubehör Einfügeart|No|
|[ScriptingDate](#scriptingdate)|deliveryDate|Lieferdatum|No|
|[ScriptingDate](#scriptingdate)|deliveryDateEnd|vorr. Ende des Lieferzeitraums (nur notwendig für Lieferzeiträume, wenn Lieferdatum gesetzt)|No|
|_number_|settledOpenItemDiscountAmount|Zum Belegdatum anwendbares Skonto des auszugleichenden Offenen Postens (nur in der Response)|No|
|[UnitTypeReference](#unittypereference)|netWeightUnit|Einheit Nettogewicht|No|
|_number_|baseSalesValueNet|Nettoverkaufswert der Position in Basiswährung|No|
|[DocumentContractDetail](#documentcontractdetail)|contractDetail|Vertragsinformationen|No|
|[RequestDocumentLineShippingCostDetail](#requestdocumentlineshippingcostdetail)|shippingCostDetail|Versandkosten-Details; nur gesetzt für Versandkostenpositionen, die als nummerierte Belegposition geführt werden (z.B. Sammelrechnung)|No|
|[DocumentLineFabricationDetail](#documentlinefabricationdetail)|fabricationDetail|Produktionsdetails|No|
|_number_|baseTotalDocumentPriceModifier|Preisanpassungen - anteilig durch Beleg Basiswährung|No|
|Array<[DocumentText](#documenttext)>|texts|Positionstexte|No|
|_boolean_|commissionable|provisionierbare Position?|No|
|_boolean_|hasAccessories|Hat der Artikel Zubehör?|No|
|_boolean_|complete|ist diese Position komplett verarbeitet?|Yes|
|[ScriptingDate](#scriptingdate)|settledOpenItemPaymentDueDate|Fälligkeitsdatum des auszugleichenden Offenen Postens (nur in der Response)|No|
|[CountryReference](#countryreference)|country|Land der Herkunft|No|
|_string_|customsTariffNumber|Zolltarifnummer|No|
|[ScriptingDate](#scriptingdate)|performanceDate|Leistungsdatum|No|
|[ApiObjectReference](#apiobjectreference)|convertedIntoBundleArticleRef|wurde aufgelöst in Gebindeartikel|Yes|
|_string_|internalVatInfo|Interne Steuerinformationen|No|
|_number_|warrantyInMonths|Garantie in Monaten|No|
|_boolean_|progressInvoice|Abschlagsposition?|No|
|_string_|packageOptions|Versenderspezifische Informationen|No|
|Array<[DocumentLineCommission](#documentlinecommission)>|commissions|Provisionen|No|
|_number_|baseTotalLinePrice|Gesamtpreis Position in Basiswährung|No|
|[DocumentLineType](#documentlinetype)|lineType|Positionstyp|No|
|_number_|preOrderPickedQuantity|vorgeorderte Menge in Pickvorgang|Yes|
|_Array<number>_|supplierOrderLineIds|Referenz zur Lieferantenbestellungszeile|No|
|_string_|externalReferenceVds|Externe Referenz zum VDS-Paket|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_boolean_|doPrintLabel|Soll zu der Position Etiketten gedruckt werden.|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|Lieferart|No|
|[ApiObjectReference](#apiobjectreference)|countryRegion|Region der Bezahlung wenn aus Inland kommt|No|
|_number_|netWeight|Nettogewicht|No|
|[DocumentCommissionOrigin](#documentcommissionorigin)|commissionOrigin|Provisionsursprung|No|
|_number_|salesValueNet|Netto-Gesamtpreis (nach Preisänderungen)|Yes|
|_string_|name|Name des Artikels|No|
|_number_|position|Positions-Nummer|Yes|
|Array<[DocumentLineBooking](#documentlinebooking)>|bookings|Buchungen|No|
|_boolean_|recalcLinePriceViaComponents|Soll die DocumentLine über die Komponenten neu berechnet werden?|No|
|_number_|unitGrossVolumeInCubicMeters|unit gross Volume in cubic meters|No|
|_number_|totalDocumentPriceModifier|Summe Dokumentpreisänderungen [Brutto, Netto]|Yes|
|_number_|pickingQuantity|Menge in Pick-Vorgang|Yes|
|_number_|totalGrossVolumeInCubicMeters|unit gross Volume in cubic meters|Yes|
|_string_|description|Beschreibung des Artikels|No|
|[ProductPriceOrigin](#productpriceorigin)|priceOrigin|Preisherkunft|Yes|
|[ApiObjectReference](#apiobjectreference)|storage|Referenz zum Lager|No|
|[RevenueCalculation](#revenuecalculation)|revenueCalculation|Rohertragsermittlung|Yes|
|_number_|totalLinePrice|Positionssumme [Brutto, Netto], also Preis*Menge ./. Positionsrabatte|Yes|
|_number_|baseLineId|Referenz zur Basiszeile|No|
|[UnitTypeReference](#unittypereference)|grossWeightUnit|Einheit Bruttogewicht|No|
|_boolean_|discountable|rabattierbare Position?|No|
|_number_|baseCapacity|Inhalt der Grundeinheit|No|
|[ProductType](#producttype)|productType|Produkttyp|No|
|_number_|quantity|Menge|No|
|_string_|deliveryText|Liefertext|No|
|_number_|presetPrice|Vorgabewert für die Preiskalkulation|Yes|
|[EavDocumentline](#eavdocumentline)|custom|Freifelder|No|
|_number_|articleId|Artikel|No|
|_string_|settledOpenItemComment|Bemerkung zur OP-Position - wird beim Abschluss in den Kommentar des Offenen Postens übernommen|No|
|_string_|internalPriceModifierInfo|Interne Preisänderungsinformationen|No|
|[UnitTypeReference](#unittypereference)|capacityUnit|Maßeinheit|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|Lieferbedingung|No|
|_number_|grossWeight|Bruttogewicht|No|
|_string_|externalArticleDescription|Externe Artikelbeschreibung|Yes|
|Array<[DocumentPriceModifier](#documentpricemodifier)>|priceModifiers|angewendete Preisänderungen|No|
|[JsonNode](#jsonnode)|previousDecisions|Enthält die Ergebnisse von vorherigen Entscheidungen des Benutzers zu dieser DocumentLine|Yes|
|_string_|externalArticleNumber|Externe Artikelnummer|Yes|
|Array<[DocumentLineFabricationComponent](#documentlinefabricationcomponent)>|fabricationComponents|Komponenten|No|
|Array<[ApiObjectReference](#apiobjectreference)>|variantValues|Produktvariantenwerte|Yes|



## DocumentLineBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Notiz|No|
|[ApiObjectReference](#apiobjectreference)|serialNumberRef|Seriennummer (Objekt)|No|
|_number_|quantity|Gebuchte Menge|No|
|_string_|serialNumber2|Seriennummer 2|No|
|_string_|serialNumber1|Seriennummer 1|No|
|[ApiObjectReference](#apiobjectreference)|storageBinRef|Bebuchter Lagerplatz|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Bebuchter Artikel|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ScriptingDate](#scriptingdate)|expiryDate|Haltbarkeitsdatum|No|
|_string_|udi|Unique Device Identifier (UDI)|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineCommission

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|valueCurrencyCode|the currency-code IsoAlpha3|No|
|[ValueType](#valuetype)|valueType|Provisionstyp|No|
|[DocumentCommissionOrigin](#documentcommissionorigin)|origin|Herkunft|No|
|_string_|description|Beschreibung|No|
|_string_|comment|Kommentar|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|value|Provision Prozent/Wert|No|
|[ApiObjectReference](#apiobjectreference)|salesAgentAccountRef|Vertreter|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Menge|No|
|_number_|pickingQuantity|Menge in Kommissionierung|No|
|[EavDocumentlinecomponent](#eavdocumentlinecomponent)|custom|Freifelder|No|
|[DocumentLineComponentFabricationDetail](#documentlinecomponentfabricationdetail)|fabricationDetail|Produktionsdetails|No|
|_number_|articleId|Referenz auf den Artikel der Komponente|No|
|_number_|quantityCommitted|Gelieferte Menge|No|
|_string_|description|Beschreibung des Artikels|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|sourceDocumentLineComponentId|Referenz auf die Komponente im Quell-Document|No|
|Array<[DocumentText](#documenttext)>|texts|Texte zu dieser Komponente|No|
|_number_|price|Einzelpreis|No|
|_string_|name|Name des Artikels|No|
|_number_|quantityPerAssemblyGroup|Menge pro Baugruppe|No|
|_number_|position|Position der Komponente in der Baugruppe|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[DocumentLineBooking](#documentlinebooking)>|bookings|Buchungen zu dieser Komponente|No|
|[ArticleSerialType](#articleserialtype)|serialType|Serientyp|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineComponentFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ProductArticleRef](#productarticleref)|sourceBundleArticleRef|Quell-Gebindeartikel für die Umlagerung von Material|No|
|_number_|deviatingUnitPrice|Abweichende Herstellungskosten|No|
|[EavFabricationlinecomponent](#eavfabricationlinecomponent)|custom|Freifeld|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|serialInheritanceComponent|Für S/N-Vererbung verwenden|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineFabricationBookedComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Nummer des Artikels|No|
|[ApiObjectReference](#apiobjectreference)|serialNumberRef|Seriennummer|No|
|_number_|quantity|Verwendete Menge|No|
|_string_|name|Name des Artikels|No|
|_number_|articleId|ID des Artikels|No|
|_string_|description|Beschreibung des Artikels|No|



## DocumentLineFabricationComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ProductArticleRef](#productarticleref)|sourceBundleArticleRef|Quell-Gebindeartikel für die Umlagerung von Material|No|
|_number_|deviatingUnitPrice|Abweichende Herstellungskosten|No|
|_number_|quantity|Menge|No|
|_string_|description|Beschreibung|No|
|[UnitTypeReference](#unittypereference)|deviatingUnitRef|Abweichende Produkteinheit|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|forSerialInheritance|Basis für die Vererbung der Seriennummer|No|
|_string_|name|Bezeichnung|No|
|_number_|position|Position|No|
|_number_|id|Unique identifier of the Object|No|
|[ProductArticleRef](#productarticleref)|componentArticleRef|Komponentenartikel|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantityFinished|Menge abgeschlossen|No|
|_number_|quantityDefective|Menge defekt|No|
|[EavFabricationline](#eavfabricationline)|custom|Freifeld|No|
|Array<[DocumentLineFabricationDetailSerialNumber](#documentlinefabricationdetailserialnumber)>|serialNumbers|Produzierte Seriennummern|No|
|_number_|quantityCommitted|Menge produziert|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|quantityInQA|Menge in QS|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineFabricationDetailSerialNumber

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantityFinished|Menge abgeschlossen|No|
|_number_|quantity|Produzierte/geplante Menge|No|
|[ArticleSerialNumber](#articleserialnumber)|serialNumber|Produzierte Seriennummer|No|
|Array<[DocumentLineFabricationBookedComponent](#documentlinefabricationbookedcomponent)>|bookedComponents|Gebuchte Komponenten|No|
|_number_|quantityDefective|Menge defekt|No|
|_number_|quantityCommitted|Tatsächlich produzierte Menge|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|quantityInQA|Menge in QS|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLinePosDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[PosPaymentOperation](#pospaymentoperation)|paymentOperation|Art der Zahlungsoperation (PAYMENT, CANCEL, REFUND)|No|
|[CashJournalWithdrawalMode](#cashjournalwithdrawalmode)|withdrawalMode|Modus für die Entnahme/Abschöpfung beim Kassenabschluss|Yes|
|_boolean_|deletable|Kann diese Zahlungsposition aus dem Beleg entfernt werden? false, solange die Zahlung noch läuft oder bereits erfolgreich ausgeführt wurde|Yes|
|_number_|depositExpenseTypeId|Typ der Einlage/Ausgabe|No|
|[PosPaymentStatus](#pospaymentstatus)|externalPaymentStatus|Status der externen Zahlung|No|
|_number_|withdrawToBalance|Abschöpfung auf Betrag (Modus BALANCE) — Restbetrag, der in der Kasse verbleibt|Yes|
|_string_|cancelledExternalPaymentId|Externe Payment-ID der zu stornierenden Zahlung (nur bei CANCEL)|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|withdrawalAmount|Abschöpfungsbetrag (Modus MANUAL)|Yes|
|_number_|paymentMethodId|Zahlungsart|No|
|_string_|externalPaymentErrorMessage|Fehlermeldung vom Payment-Backend (nur bei fehlgeschlagener Zahlung)|No|
|_number_|balanceBeforeWithdrawal|Saldo der Zahlungsart vor Abschöpfung|Yes|
|[PosLineType](#poslinetype)|posLineType|Typ der Position|No|
|_string_|externalPaymentId|Externe Payment-ID für Verbindung zum Payment-Backend|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Belegnummer|No|
|_number_|quantity|quantity|No|
|_string_|articleNumber|Artikelnummer|No|
|_string_|documentType|Belegart|No|
|_string_|displayName|Kurzbezeichnung des Kunden|No|
|_number_|price|price per quantity [GROSS, NET]|No|
|_string_|name|Artikelbezeichnung|No|
|_number_|documentId|Id des Dokuments|No|
|_number_|id|Id der Dokumentzeile|No|
|_number_|position|Positions-Nummer|No|
|[DocumentCategory](#documentcategory)|category|Belegtyp|No|
|_string_|documentState|Belegstatus|No|



## DocumentLineReturnDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|replacementDeliveryTermRef|Lieferbedingung für den Ersatzversand bei Übernahme in Versand- oder Kundenauftrag|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|Liefermethode für die Retoure (wie der Kunde zurücksendet)|No|
|[ApiObjectReference](#apiobjectreference)|goodsExchangeArticleRef|Referenz auf den Ersatzartikel (nur bei GOODS_EXCHANGE_*; Standard: gleicher Artikel wie in der Belegposition)|No|
|_boolean_|repairRequested|Reparatur gewünscht? (nur bei GOODS_EXCHANGE_ITEM_GETS_SEND_BACK)|No|
|_boolean_|warrantyExchange|Garantieaustausch? (nur bei *_ITEM_GETS_SEND_BACK)|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|customerShareOnReduction|Kundenanteil bei Minderpreis in Prozent (0-100). Wie viel % der Ersparnis bekommt der Kunde gutgeschrieben?|No|
|_boolean_|waitForReturnBeforeExchange|Auf Retoure warten vor Warenersatz? (nur bei GOODS_EXCHANGE_ITEM_GETS_SEND_BACK)|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|Lieferbedingung für die Retoure (wie der Kunde zurücksendet)|No|
|[ApiObjectReference](#apiobjectreference)|returnCauseRef|Referenz auf Retourengrund|No|
|_number_|customerShareOnSurcharge|Kundenanteil bei Aufpreis in Prozent (0-100). Wie viel % des Aufpreises zahlt der Kunde?|No|
|[ApiObjectReference](#apiobjectreference)|replacementDeliveryMethodRef|Liefermethode für den Ersatzversand bei Übernahme in Versand- oder Kundenauftrag|No|
|_number_|id|Unique identifier of the Object|No|
|[ReturnCategory](#returncategory)|returnCategory|Retouren-Kategorie|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineType

| Value | Description |
| :---- | :---------- |
|ARTICLE_LINE||
|ALTERNATIVE_POSITION||
|LINK_POSITION||
|OPTIONAL_POSITION||
|TEXT_LINE||
|SHIPPING_COST_LINE||
|SUBTOTAL||
|POS||
|ROUNDING_LINE||
|OPEN_ITEM_SETTLEMENT||
|ON_ACCOUNT_PAYMENT||


## DocumentPosDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|timeEnd|Transaktion Endzeit|No|
|_string_|tssSerialNumber|TSS Seriennummer|No|
|[ApiObjectReference](#apiobjectreference)|fiscalizationBackendRef|Fiskalisierungs-Backend, mit dem der Beleg angelegt wurde|Yes|
|_string_|signature|Signatur|No|
|_string_|clientSerialNumber|Client Seriennummer|No|
|_number_|transactionNumber|Transaktionsnummer|No|
|_number_|signatureCounter|Signaturzähler|No|
|[TssSignature](#tsssignature)|tssSignature|TSS Signatur|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|revision|Revision|No|
|_string_|externalReference|Externe Referenz|Yes|
|_number_|timeStart|Transaktion Startzeit|No|
|[ApiObjectReference](#apiobjectreference)|cashJournalRef|Kassenbuch|No|
|[ApiObjectReference](#apiobjectreference)|posRegisterRef|Kasse|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|cashDrawerRef|Kassenschublade|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentPosPayment

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[PosPaymentOperation](#pospaymentoperation)|paymentOperation|Art der Zahlungsoperation (PAYMENT, CANCEL, REFUND)|Yes|
|_number_|amount|Betrag|No|
|[CashJournalWithdrawalMode](#cashjournalwithdrawalmode)|withdrawalMode|Modus für die Entnahme/Abschöpfung beim Kassenabschluss (nur bei CASH_FINAL_BALANCE-Position relevant)|No|
|[ApiObjectReference](#apiobjectreference)|depositExpenseTypeRef|Typ der Einlage/Ausgabe|No|
|_boolean_|deletable|Kann diese Zahlungsposition aus dem Beleg entfernt werden? false, solange die Zahlung noch läuft oder bereits erfolgreich ausgeführt wurde|Yes|
|[PosPaymentStatus](#pospaymentstatus)|externalPaymentStatus|Status der externen Zahlung|Yes|
|_number_|withdrawToBalance|Abschöpfung auf Betrag (Modus BALANCE) — Restbetrag, der in der Kasse verbleibt|No|
|_string_|cancelledExternalPaymentId|Externe Payment-ID der zu stornierenden Zahlung (nur bei CANCEL)|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|withdrawalAmount|Abschöpfungsbetrag. Im Modus MANUAL vom Anwender vorgegeben; in den Modi FULL/BALANCE/NONE vom Backend aus aktuellem Saldo berechnet|No|
|[ApiObjectReference](#apiobjectreference)|posPaymentMethodRef|Zahlungsart|No|
|_string_|externalPaymentErrorMessage|Fehlermeldung vom Payment-Backend (nur bei fehlgeschlagener Zahlung)|Yes|
|_number_|balanceBeforeWithdrawal|Saldo der Zahlungsart vor Abschöpfung (vom Backend gesetzt)|Yes|
|[PosLineType](#poslinetype)|posLineType|Typ der Position|No|
|_string_|externalPaymentId|Externe Payment-ID für Verbindung zum Payment-Backend|Yes|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentPriceModifier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sourceId|ID of Source entity of price modifier|No|
|_number_|baseCalculatedValue|Berechneter Wert des Modifiers in Basiswährung|No|
|_number_|calculatedValue|calculated discount/surcharge|No|
|[PriceModifierType](#pricemodifiertype)|modifierType|modifierType|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseValue|Wert des Modifiers in Basiswährung|No|
|[DocumentPriceModifier$PriceModifierSourceType](#documentpricemodifierpricemodifiersourcetype)|sourceType|Source of price modifier|No|
|[ValueType](#valuetype)|valueType|Type of value|No|
|_string_|name|Name of modifier|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|value|Value|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentPriceModifier$PriceModifierSourceType

| Value | Description |
| :---- | :---------- |
|CUSTOM||
|PRODUCT||
|DISCOUNT_GROUP||


## DocumentQualifier

| Value | Description |
| :---- | :---------- |
|SALE||
|PURCHASE||
|COMMISSION||
|SALES_CONTRACT||
|PURCHASE_CONTRACT||
|POINT_OF_SALE||
|FABRICATION||
|RMA||


## DocumentRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Belegnummer|No|
|_string_|documentType|Belegart|No|
|_number_|id|ID|No|
|[DocumentCategory](#documentcategory)|category|Belegtyp|No|
|_string_|documentState|Belegstatus|No|



## DocumentRounding

| Value | Description |
| :---- | :---------- |
|NONE||
|SWITZERLAND||


## DocumentShippingCost

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|costs|Die Versandkosten|No|
|Array<[DocumentTax](#documenttax)>|taxes|Steuern|No|
|_string_|description|Artikelbeschreibung|No|
|_number_|purchasePrice|Einkaufspreis|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|manualCosts|Wurden die Versandkosten manuell eingetragen?|No|
|_boolean_|freeShipping|Keine Versandkosten (freier Versand)|No|
|Array<[DocumentText](#documenttext)>|texts|Texte|No|
|_boolean_|cashDiscountable|skontierbar|No|
|_string_|name|Artikelname|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|discountable|rabattierbar|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentTax

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|taxableAmount|taxable amount|No|
|_boolean_|taxFree|Steuerfrei?|No|
|_number_|baseTaxValue|Steuerbetrag in Basiswährung|No|
|_string_|internalCalculationInfo|internal calculation infos|No|
|_number_|grossAmount|gross amount|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseGrossAmount|Bruttobetrag in Basiswährung|No|
|[ApiObjectReference](#apiobjectreference)|taxRateRef|reference to tax rate|No|
|_number_|baseTaxableAmount|Besteuerbarer Betrag in Basiswährung|No|
|_number_|taxValue|tax value|No|
|_number_|id|Unique identifier of the Object|No|
|[DocumentTaxType](#documenttaxtype)|taxType|tax type|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentTaxType

| Value | Description |
| :---- | :---------- |
|VAT||


## DocumentText

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|transferableIntoSubsequentDocuments|Does this text remain after transfer into a subsequent document|No|
|_boolean_|deleted|Wurde entfernt und soll deshalb nicht mehr angezeigt werden.|No|
|[TextPosition](#textposition)|textPosition|position relative to the product line OR Document. For usage within text-line, this position is irrelevant|No|
|[ApiObjectReference](#apiobjectreference)|textTemplateRef|textBaustein Vorlage|No|
|_boolean_|initialized|ist der content befüllt?|Yes|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|content|if this attribute is used, the text is used as free-text|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentTransferToStateRequest
### Description
Transfer-to-State-Request für Belege

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[DocumentType](#documenttype)|copyTargetDocumentType||No|
|_number_|documentId|ID eines Belegs|No|
|Array<[AdditionalParameter](#additionalparameter)>|parameters|Zusätzliche Parameter|No|
|[EDocumentTransition](#edocumenttransition)|transition|Transition zum gewünschten Ziel-Status|No|



## DocumentTransferToTypeRequest
### Description
Transfer-to-Type-Request für Belege

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|targetDocumentType|Gewünschte Ziel-Belegart|No|
|_number_|documentId|ID eines Belegs|No|
|Array<[AdditionalParameter](#additionalparameter)>|parameters|Zusätzliche Parameter|No|
|_boolean_|copyDocument|Soll der Beleg kopiert werden? (Standard: nein)|No|



## DocumentType

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|showForManualDocumentCreation|Darf dieser Typ zur Neuanlage von Belegen verwendet werden?|No|
|_boolean_|active|ist diese Belegart aktiv|No|
|[ApiObjectReference](#apiobjectreference)|shelfDocumentTypeRef|Referenz auf die Dokumentenart im DMS|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[DocumentTypeLabel](#documenttypelabel)>|labels|label/name of this type|No|
|_string_|nextNumber|nächste Belegnummer|Yes|
|[SequencerConfiguration](#sequencerconfiguration)|sequencerConfiguration|Zählerkreis|No|
|_number_|sortOrder|Sortierung|No|
|Array<[DocumentTypeFollowUp](#documenttypefollowup)>|followUpDocumentTypes|follow up document types|Yes|
|[PublishingPolicy](#publishingpolicy)|publishingPolicy|Verhalten zugeordnetem DMS-Dokument|No|
|_boolean_|requiresBusinessRelationship|Geschäftsbeziehung verpflichtend|No|
|_number_|id|Unique identifier of the Object|No|
|[DocumentCategory](#documentcategory)|category|associated category|No|
|_boolean_|defaultTypeOfCategory|ist diese Belegart die Standard-Belegart für ihre Kategorie?|No|
|_string_|key|unique key for this type (internal representation)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentTypeFollowUp

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|ist diese Folge-Belegart aktiv|Yes|
|[ApiObjectReference](#apiobjectreference)|targetDocumentTypeRef|target type|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|sourceDocumentTypeRef|source type|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentTypeLabel

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|labelPrintout|label/name of this type (for printout)|No|
|_string_|label|label/name of this type (for display)|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|Language code|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentTypeState

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[DocumentTypeState$StateDefinition](#documenttypestatestatedefinition)|definition|additional state information|No|
|_string_|label|label/name of this state|No|
|_string_|key|unique key for this state|No|



## DocumentTypeState$StateDefinition

| Value | Description |
| :---- | :---------- |
|SELECTABLE_TYPES||
|EDITABLE||
|DELETED||


## DocumentTypeTerm

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|documentType|documentType|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|sprache|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|content|content|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DropShippingPolicy

| Value | Description |
| :---- | :---------- |
|ANY||
|DROP_SHIPPING||
|STORAGE||
|STORAGE_WITH_FALLBACK_TO_DROP_SHIPPING||


## DummySerialNumberStockTransferApi

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|targetStorageId|Ziel-Lager|No|
|_number_|serialNumberId|Seriennummer|No|
|_string_|note|Bemerkung|No|
|[ScriptingDate](#scriptingdate)|bookDate|Buchungsdatum|No|
|_string_|targetSerialNumber|Die gültige Seriennummer|No|
|[ScriptingDate](#scriptingdate)|targetExpiryDate|Ggf. ein MHD-/Verfallsdatum, falls der Artikel ein solches benötigt|No|
|_number_|sourceStorageBinId|Quell-Lagerplatz|No|
|_number_|quantity|Menge|No|
|_number_|sourceStorageId|Quell-Lager|No|
|_number_|targetStorageBinId|Ziel-Lagerplatz|No|
|_number_|articleId|Artikel|No|
|_number_|picklistLineComponentId|Komponente einer Picklistenposition, falls dafür die Buchung stattfindet|No|



## ECrmPriorityType

| Value | Description |
| :---- | :---------- |
|CRITICAL||
|NORMAL||
|LOW||


## ECrmSpecialDocumentRefType

| Value | Description |
| :---- | :---------- |
|NONE|Normaler Beleg|
|CUSTOMER_OFFER|Angebot|
|CUSTOMER_ORDER|Auftrag|
|BILLING_DOCUMENT|Abrechnungsbeleg|


## ECrmType

| Value | Description |
| :---- | :---------- |
|TASK|Aufgaben|
|DEAL|Deals|
|PROJECT|Projekte|


## EDocumentCategory

| Value | Description |
| :---- | :---------- |
|CUSTOMER_OFFER||
|CUSTOMER_ORDER||
|CUSTOMER_DELIVERY_DOCUMENT||
|CUSTOMER_INVOICE||
|CUSTOMER_PROFORMA_INVOICE||
|CUSTOMER_DELIVERY_INVOICE||
|CUSTOMER_DEPOSIT_INVOICE||
|CUSTOMER_DEPOSIT_INVOICE_CANCELLATION||
|CUSTOMER_PROGRESS_INVOICE||
|CUSTOMER_PROGRESS_INVOICE_CANCELLATION||
|CUSTOMER_PARTIAL_INVOICE||
|CUSTOMER_PARTIAL_INVOICE_CANCELLATION||
|CUSTOMER_FINAL_INVOICE||
|CUSTOMER_FINAL_INVOICE_CANCELLATION||
|CUSTOMER_CREDIT_NOTE_WITH_STOCK||
|CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK||
|CUSTOMER_INVOICE_CANCELLATION||
|CUSTOMER_DELIVERY_INVOICE_CANCELLATION||
|CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION||
|CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION||
|CUSTOMER_RETURN_ANNOUNCEMENT||
|CUSTOMER_GOODS_RETURN||
|SUPPLIER_PRICE_REQUEST||
|SUPPLIER_ORDER||
|SUPPLIER_DELIVERY_DOCUMENT||
|SUPPLIER_INVOICE||
|SUPPLIER_DELIVERY_INVOICE||
|SUPPLIER_CREDIT_NOTE_WITH_STOCK||
|SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK||
|SUPPLIER_DEPOSIT_INVOICE||
|SUPPLIER_PROGRESS_INVOICE||
|SUPPLIER_PARTIAL_INVOICE||
|SUPPLIER_FINAL_INVOICE||
|COMMISSION_SETTLEMENT||
|COMMISSION_SETTLEMENT_CANCELLATION||
|SUPPLIER_COMMISSION_CREDIT_NOTE||
|SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION||
|CUSTOMER_SUBSCRIPTION_CONTRACT||
|POS_CASH_JOURNAL_OPENING||
|POS_CASH_RECEIPT||
|POS_RETURN_CASH_RECEIPT||
|POS_CASH_JOURNAL_DEPOSIT||
|POS_CASH_JOURNAL_EXPENSE||
|POS_CASH_JOURNAL_WITHDRAWAL||
|POS_CASH_JOURNAL_CLOSING||
|FABRICATION_ORDER||


## EDocumentQualifier

| Value | Description |
| :---- | :---------- |
|SALE||
|PURCHASE||
|COMMISSION||
|POINT_OF_SALE||
|SALES_CONTRACT||
|PURCHASE_CONTRACT||
|FABRICATION||
|RMA||


## EDocumentTransition

| Value | Description |
| :---- | :---------- |
|BEGIN_EDITING|Bearbeitung beginnen|
|END_EDITING|Speichern|
|CANCEL_EDITING|Bearbeitung abbrechen|
|EDIT_ACCEPTED|Bearbeiten (für übernommenen Beleg)|
|CANCEL_EDITING_ACCEPTED|Bearbeitung abbrechen (für übernommenen Beleg)|
|SAVE_ACCEPTED|Speichern (für übernommenen Beleg)|
|CREATE_NEW_VERSION|Neue Version erstellen|
|ORDER_IN_PICKING|Auftrag in Kommissionierung übernehmen|
|ORDER_RESET_FROM_PICKING|Auftrags aus Kommissionierung stornieren|
|ORDER_CLOSE_REMAINING|Auftrag abschließen|
|ORDER_REOPEN|Auftrag wieder öffnen|
|DISSOLVE|Beleg auflösen|
|CANCEL_POS_RECEIPT|Quittung abbrechen|
|START_FABRICATION|Produktion starten|
|CANCEL_FABRICATION|Produktion stornieren|
|UPDATE_WHILE_IN_FABRICATION||
|PAUSE_FABRICATION|Produktion pausieren|
|RESUME_FABRICATION|Produktion fortsetzen|
|COMPLETE_FABRICATION|Produktion fertigstellen|
|RESTART_FABRICATION|Produktion fortsetzen|
|START_FABRICATION_QA|QS-Prüfung starten|
|START_PROCESSING_FABRICATION_QA||
|PROCESSING_FABRICATION_QA||
|FINISH_PROCESSING_FABRICATION_QA||
|CANCEL_FABRICATION_QA|QS-Prüfung abbrechen|
|FINISH_FABRICATION_QA|QS-Prüfung abschließen|
|FINISH_FABRICATION|Produktion abschließen|
|CUSTOMER_ORDER_TO_FABRICATION_ORDER|Kundenauftrag in Produktionsauftrag übernehmen|


## EInvoiceValidationState

| Value | Description |
| :---- | :---------- |
|NOT_VALIDATED||
|VALID||
|NOT_VALID||


## ELinebreakType

| Value | Description |
| :---- | :---------- |
|CR_LF||
|CR||
|LF||


## EN16931Origin

| Value | Description |
| :---- | :---------- |
|FROM_BILLING_ADDRESS||
|FROM_DEFAULT_ADDRESS||
|FROM_ACCOUNT_PARAMS||
|USER_DEFINED||


## EN16931Profile

| Value | Description |
| :---- | :---------- |
|ZUGFERD||
|XRECHNUNG||
|NO_EN_PROFILE||


## EScriptingAuthenticationType

| Value | Description |
| :---- | :---------- |
|BASIC_AUTH||
|BEARER_TOKEN||


## EShelfDocumentDeletionState

| Value | Description |
| :---- | :---------- |
|NOT_YET||
|PREPARE_DELETE||
|FILE_DELETED||
|MANUALLY_RETAIN||


## EWorkflowInstanceState

| Value | Description |
| :---- | :---------- |
|CREATED|Erstellt|
|IN_PROCESS|In Verarbeitung|
|COMPLETED_SUCCESSFULLY|Erfolgreich beendet|
|COMPLETED_WITH_FAILURE|Fehlgeschlagen|
|ERRONEOUS|Fehlerhaft|
|ABORTED_CRASHED|Abgestürzt abgebrochen|
|ABORTED_MANUALLY|Manuell abgebrochen|
|CRASHED|Abgestürzt|
|WAITING|Wartend|
|INTERRUPTED|Unterbrochen|


## EavAccount
### Description
Zusatzfelder


## EavAccountaddress
### Description
Zusatzfelder


## EavAccountlisting
### Description
Zusatzfelder


## EavAccountperson
### Description
Zusatzfelder


## EavArticle
### Description
Zusatzfelder


## EavArticleListing
### Description
Zusatzfelder


## EavArticleListingDescription
### Description
Zusatzfelder


## EavArticleserialnumber
### Description
Zusatzfelder


## EavAsset
### Description
Zusatzfelder


## EavContact
### Description
Zusatzfelder


## EavCrmactivity
### Description
Zusatzfelder


## EavCrmdeal
### Description
Zusatzfelder


## EavCrmproject
### Description
Zusatzfelder


## EavCrmtask
### Description
Zusatzfelder


## EavDocument
### Description
Zusatzfelder


## EavDocumentline
### Description
Zusatzfelder


## EavDocumentlinecomponent
### Description
Zusatzfelder


## EavFabrication
### Description
Zusatzfelder


## EavFabricationline
### Description
Zusatzfelder


## EavFabricationlinecomponent
### Description
Zusatzfelder


## EavProductgroup
### Description
Zusatzfelder


## EavProductmaingroup
### Description
Zusatzfelder


## EavSalesagent
### Description
Zusatzfelder


## EavShelfdocument
### Description
Zusatzfelder


## EavShelfshare
### Description
Zusatzfelder


## EavTextenumeration
### Description
Zusatzfelder


## EavVariantattributelisting
### Description
Zusatzfelder


## EavVariantvaluelisting
### Description
Zusatzfelder


## ExchangeRateOrigin

| Value | Description |
| :---- | :---------- |
|AUTOMATIC||
|AUTOMATIC_FOR_CURRENT_DATE||
|USER_DEFINED||


## ExternalDocumentWithTaxesLine
### Description
Position eines extern erstellten Belegs inkl. gelieferter Steuerangaben

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Menge|No|
|_number_|netAmount|Zeilen-Netto|No|
|_number_|taxValue|Steuerbetrag (nur bei steuerpflichtigem Beleg)|No|
|_number_|price|Netto-Einzelpreis|No|
|_number_|articleId|ID des Artikels|No|
|_number_|grossAmount|Zeilen-Brutto|No|
|_number_|taxRateId|ID des Steuersatzes (nur bei steuerpflichtigem Beleg)|No|
|[DocumentTaxType](#documenttaxtype)|taxType|Steuerart (Standard: VAT)|No|



## ExternalDocumentWithTaxesRequest
### Description
Details zum Import eines extern erstellten Belegs

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDate](#scriptingdate)|documentDate|Belegdatum|No|
|_number_|accountId|ID des Kontos/Accounts|No|
|_boolean_|taxable|Steuerpflichtig? true = mit Steuern, false = steuerfrei (keine Steuerzeilen). Null = Steuerstatus aus dem Kundenstamm übernehmen|No|
|[BillingType](#billingtype)|billingType|Abrechnungsart (Brutto/Netto)|No|
|Array<[ExternalDocumentWithTaxesLine](#externaldocumentwithtaxesline)>|lines|Belegpositionen inkl. gelieferter Steuerangaben|No|
|_string_|documentTypeKey|Key der Belegart|No|
|_string_|taxIdentificationNumber|USt-IdNr des Empfängers (z.B. bei steuerfreier innergemeinschaftlicher Lieferung)|No|



## FabricationComponentForProduction

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|serialNumberId|Zu produzierende Seriennummer, für die die Komponente verwendet werden|No|
|_number_|quantity|Zu verwendende Menge|No|
|_number_|documentLineComponentId|ID der Komponente|No|
|_number_|articleSerialNumberId|ID einer Seriennummer|No|



## FabricationDefectiveRequest

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|(Nicht mehr) defekte Menge|No|
|Array<[SerialNumberWithQuantityApi](#serialnumberwithquantityapi)>|serialNumberIdsWithQuantity|(Nicht mehr) defekte Seriennummern|No|
|_boolean_|createLineForReproduction|Soll eine neue Position zur Nachproduktion der defekten Artikel erstellt werden?|No|



## FabricationOfComponents

| Value | Description |
| :---- | :---------- |
|NEVER||
|COMPLETELY_IF_NECESSARY||
|REQUIRED_QUANTITY_IF_NECESSARY||
|ALWAYS||


## FabricationProduceRequest

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|autoCommitComponents|Material automatisch bestätigen|No|
|_number_|quantity|Zu produzierende Menge|No|
|Array<[FabricationComponentForProduction](#fabricationcomponentforproduction)>|componentsForProduction|Für die Produktion zu verwendendes Material|No|
|_number_|documentLineId|ID der zu produzierenden Position|No|
|Array<[FabricationSerialNumber](#fabricationserialnumber)>|serialNumbers|Zu produzierende Seriennummern|No|



## FabricationRemainingComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ArticleSerialNumber](#articleserialnumber)|lineSerialNumber|Zu produzierende Seriennummer, zu der die Komponente gehört|No|
|_number_|quantity|Offene Menge|No|
|_number_|documentLineComponentId|ID der Komponente|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Artikel|No|
|[ArticleSerialType](#articleserialtype)|serialType|Serientyp|No|



## FabricationRevertRequest

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Zu stornierende Menge|No|
|_boolean_|autoRevertComponents|Material automatisch stornieren|No|
|_number_|documentLineId|ID der zu stornierenden Position|No|
|Array<[FabricationSerialNumber](#fabricationserialnumber)>|serialNumbers|Zu stornierende Seriennummern|No|
|Array<[FabricationComponentForProduction](#fabricationcomponentforproduction)>|componentsToRevert|Zu stornierendes Material|No|



## FabricationSerialNumber

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|serialNumberId|ID der zu produzierenden Seriennummer (nur zur gezielten Produktion von bereits definierten Seriennummern)|No|
|[ScriptingDate](#scriptingdate)|expiryDate|MHD / Verfallsdatum|No|
|_string_|note|Bemerkung|No|
|_number_|quantity|Abweichende Menge für Chargen|No|
|_string_|serialNumber2|Seriennummer 2|No|
|_string_|serialNumber1|Seriennummer 1|No|



## FabricationSerialNumberLabelingType

| Value | Description |
| :---- | :---------- |
|QUERY_ON_START||
|QUERY_ON_FINISH||
|INHERITANCE||
|AUTOMATICALLY_ON_START||
|AUTOMATICALLY_ON_FINISH||


## Group

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[ApiObjectReference](#apiobjectreference)>|roles|roles associated with this group|No|
|_boolean_|active|Is the group active?|No|
|_string_|description|Description of this Group|No|
|_string_|label|Label of this Group|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[ApiObjectReference](#apiobjectreference)>|users|users associated with this group|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ImportDataMap
### Description
Zu importierende Daten


## JsonNode


## LanguageCodeOrigin

| Value | Description |
| :---- | :---------- |
|FROM_DELIVERY_ADDRESS||
|FROM_BILLING_ADDRESS||
|FROM_DEFAULT_ADDRESS||
|FROM_RETURN_DELIVERY_ADDRESS||
|FROM_MY_COMPANY||


## ListingState

| Value | Description |
| :---- | :---------- |
|DISABLED||
|NEED_SYNCHRONIZE||
|QUEUED_FOR_SYNCHRONIZE||
|SYNCHRONIZED||
|ERRONEOUS||
|NEED_DELETION||
|QUEUED_FOR_DELETION||


## LocalizedTextTemplateContent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|languageCodeIsoAlpha2|Sprache des Textes|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|content|Text|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## MetaInfo

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDateTime](#scriptingdatetime)|createdAt|Created At Timestamp|Yes|
|_number_|createdFrom|TenantUser-Identifier of the creator|Yes|
|_number_|updatedFrom|TenantUser-Identifier of most recent updater|Yes|
|[ScriptingDateTime](#scriptingdatetime)|updatedAt|Last Updated AT Timestamp|Yes|



## NotificationDataprovider

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[Referenceable](#referenceable)|referenceable||No|
|Set<[Referenceable](#referenceable)>|links||No|
|_NotificationEventConfig<Object>_|event||No|



## NotificationEventConfig<Object>


## OpenItem

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDate](#scriptingdate)|performanceDate|Leistungsdatum (von außen setzbar, wenn kein Beleg vorhanden ist)|No|
|[ScriptingDate](#scriptingdate)|paymentDiscount2DueDate|Fälligkeitsdatum (Skonto2)|Yes|
|_string_|externalNumber|Externe OP-Nummer |Yes|
|_number_|paymentDays1|How many days are given for using the first discount rule|Yes|
|_number_|paymentDays2|How many days are given for using the second discount rule|Yes|
|[ScriptingDate](#scriptingdate)|paymentDiscount1DueDate|Fälligkeitsdatum (Skonto1)|Yes|
|[PaymentDiscountOrigin](#paymentdiscountorigin)|paymentDiscountOrigin|Ursprung der Skontowerte (Tage und Prozentsätze)|No|
|_number_|dunningCount|Anzahl Mahnpositionen/Mahnungen für diesen OP|Yes|
|[ScriptingDate](#scriptingdate)|balancedDate|balanced date of this open item (calculated)|Yes|
|_number_|baseSumTotalAmount|Gesamtsumme der Rechnungsbeträge in Basiswährung|No|
|_string_|number|OP-Nummer|Yes|
|[OpenItem$OpenItemPaymentKind](#openitemopenitempaymentkind)|paymentKind|The kind of payment|Yes|
|_number_|balance|saldo|Yes|
|_number_|exchangeRate|Kurs der Währung zu Basiswährung|No|
|[TaxPerformanceLocationType](#taxperformancelocationtype)|taxPerformanceLocation|Steuersachverhalt Leistungserbringung (von außen setzbar, wenn kein Beleg vorhanden ist)|No|
|_number_|dunningLevel|Die Mahnstufe|Yes|
|_number_|paymentDaysNet|Fälligkeit in Tagen|No|
|_number_|id|Unique identifier of the Object|No|
|[OpenItemPaymentState](#openitempaymentstate)|paymentState|Der Zustand der Zahlung|No|
|_boolean_|dunningBlock|Mahnsperre|No|
|_number_|baseSumPayments|Summe der Zahlungen in Basiswährung|No|
|[ApiObjectReference](#apiobjectreference)|order|order|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_number_|sumDunnings|Summe Mahngebühren und Zinsen|Yes|
|_number_|baseSumFee|allgemeine Gebühren in Basiswährung|No|
|_number_|baseDepositPaymentAmount|Vereinbarter Anzahlungsbetrag in Basiswährung|No|
|_number_|sumPayments|Summe gebuchte Zahlungen|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseSumDiscountableAmount|Summe der skontierbaren Rechnungsbeträge in Basiswährung|No|
|Array<[TagDto](#tagdto)>|tags|List of tags|No|
|[ScriptingDate](#scriptingdate)|paymentDueDate|Fälligkeitsdatum|No|
|_string_|sourceCountryCode|Länderkennzeichen Ursprungsland (ISO Alpha-3, von außen setzbar, wenn kein Beleg vorhanden ist)|No|
|_string_|performanceCountryCode|Länderkennzeichen Leistungsland (ISO Alpha-3, von außen setzbar, wenn kein Beleg vorhanden ist)|No|
|_boolean_|valueDateReadOnly|Valutadatum schreibgeschützt|No|
|[ScriptingDate](#scriptingdate)|depositPaymentDate|agreed Deposit payment date|Yes|
|[OpenItem$OpenItemQualifier](#openitemopenitemqualifier)|qualifier|Does this open item belong to accounts payable or accounts receivable|Yes|
|[ApiObjectReference](#apiobjectreference)|basisPaymentTermRef|Ursprüngliche Zahlungsbedingung|No|
|_boolean_|blockedByDocument|Ist der OP durch ein Dokument geblockt?|No|
|[ApiObjectReference](#apiobjectreference)|paymentMethodRef|Zahlungsart|No|
|_number_|baseBalance|Offener Betrag (Saldo) in Basiswährung|No|
|_boolean_|depositPayed|is the agreed deposit payed?|Yes|
|_number_|depositPaymentAmount|agreed Deposit payment amount|Yes|
|_string_|purpose|Verwendungszweck|No|
|Array<[OpenItemRecord](#openitemrecord)>|records|free payments|Yes|
|_number_|paymentDiscount2|How much discount can be given for speedy payment, rule 2|Yes|
|_boolean_|canBeReopened|kann wiedereröffet werden|No|
|_number_|paymentDiscount1|How much discount can be given for speedy payment, rule 1|Yes|
|_number_|paymentAmount|Der momentan gültige zu zahlende Betrag|Yes|
|[OpenItem$OpenItemRefundType](#openitemopenitemrefundtype)|refundType|how should a refund be done?|No|
|[ApiObjectReference](#apiobjectreference)|creditNote|Rechnungskorrektur|Yes|
|[OpenItem$BookingAccountType](#openitembookingaccounttype)|bookingAccountType|Buchung auf Lieferant oder Kunde bei manuellen OPs|Yes|
|[OpenItemDunningState](#openitemdunningstate)|dunningState|Der Mahnzustand|No|
|_number_|paymentDiscount2Amount|Skontobetrag 2|No|
|_number_|sumFee|allgemeine Gebühren|Yes|
|_number_|fullPaymentAmount|The full amount of the payment|Yes|
|[OpenItemPaymentPlan](#openitempaymentplan)|paymentPlan|Zahlungsplan|No|
|_boolean_|paymentBlock|Zahlungssperre|No|
|[ScriptingDate](#scriptingdate)|originalPaymentDueDate|Ursprüngliches Fälligkeitsdatum|Yes|
|[OpenItemBalanceState](#openitembalancestate)|balanceState|whether this open item is balanced, partially paid or open|Yes|
|[ScriptingDate](#scriptingdate)|valueDate|Valutadatum|No|
|_number_|paymentDiscount1Amount|Skontobetrag 1|No|
|_number_|baseSumDiscount|Summe der Abzüge (Skonto usw.) in Basiswährung|No|
|[ApiObjectReference](#apiobjectreference)|paymentTemplateRef|Zahlungsvorlage|No|
|_number_|baseSumDunnings|Summe der Mahngebühren und Zinsen in Basiswährung|No|
|_number_|sumTotalAmount|Rechnungsbetrag|Yes|
|[ApiObjectReference](#apiobjectreference)|taxRateRef|Steuersatz (von außen setzbar, wenn kein Beleg vorhanden ist)|No|
|_string_|baseCurrencyCode|Basiswährung des offenen Postens  (ISO-A3)|No|
|[ApiObjectReference](#apiobjectreference)|depositInvoice|Anzahlungsrechnung|Yes|
|[TaxStateType](#taxstatetype)|taxState|Steuerstatus (von außen setzbar, wenn kein Beleg vorhanden ist)|No|
|_string_|comment|Kommentar|No|
|[ApiObjectReference](#apiobjectreference)|invoice|invoice|Yes|
|_number_|sumDiscountableAmount|skontierbarer Rechnungsbetrag|Yes|
|_string_|currencyCode|Währung des offenen Postens (ISO-A3)|No|
|[ApiObjectReference](#apiobjectreference)|account|account|Yes|



## OpenItem$BookingAccountType

| Value | Description |
| :---- | :---------- |
|CUSTOMER||
|SUPPLIER||


## OpenItem$OpenItemPaymentKind

| Value | Description |
| :---- | :---------- |
|PREPAYMENT||
|PAYMENT||


## OpenItem$OpenItemQualifier

| Value | Description |
| :---- | :---------- |
|PAYABLE||
|RECEIVABLE||


## OpenItem$OpenItemRefundType

| Value | Description |
| :---- | :---------- |
|DISBURSE||
|OFFSET_LATER||


## OpenItemBalanceState

| Value | Description |
| :---- | :---------- |
|OPEN||
|PARTIALLY_BALANCED||
|BALANCED||
|OVERPAID||


## OpenItemDunningState

| Value | Description |
| :---- | :---------- |
|IN_DUNNING||
|NO_DUNNING||
|DUNNING_PAID||
|DUNNING_PARTIALLY_PAID||
|DUNNING_OVERPAID||


## OpenItemPaymentPlan

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|amount|Betrag|No|
|_string_|dueDateCalculation|Fälligkeitsregel|No|
|[ScriptingDate](#scriptingdate)|endDate|Enddatum|No|
|[ScriptingDate](#scriptingdate)|dueDate|Fälligkeitsdatum|No|
|[OpenItemPaymentPlan$PaymentPlanType](#openitempaymentplanpaymentplantype)|paymentPlanType|Zahlungsplantyp|No|
|_boolean_|active|Aktiv|No|
|_string_|description|Beschreibung|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseAmount|Betrag in Basiswährung|No|
|_string_|baseCurrencyCode|Basiswährung des Zahlungsplans (ISO-A3)|No|
|_number_|exchangeRate|Kurs der Währung zu Basiswährung|No|
|Array<[PaymentPlanManualRule](#paymentplanmanualrule)>|manualRuleEntries|manuelle Buchungsvorgaben|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|currencyCode|Währung des Zahlungsplans (ISO-A3)|No|
|[ScriptingDate](#scriptingdate)|startDate|Startdatum|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## OpenItemPaymentPlan$PaymentPlanType

| Value | Description |
| :---- | :---------- |
|RULE||
|MANUAL||


## OpenItemPaymentState

| Value | Description |
| :---- | :---------- |
|NO_PAYMENT||
|PAYMENT_CREATED||
|PAYMENT_TRANSFERRED||
|PAYMENT_COMMITTED||


## OpenItemRecord

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|document|document |Yes|
|[OpenItemRecord$RecordOrigin](#openitemrecordrecordorigin)|origin|origin for this record|Yes|
|[ApiObjectReference](#apiobjectreference)|accountBankdetailsRef|company account bankdetails|Yes|
|_number_|discountAmount|record discount amount|Yes|
|_number_|baseDunningInterest|Mahnzinsen in Basiswährung|No|
|_string_|recordReferenceNumber|record reference number|Yes|
|_string_|number|Eine Vorgangsnummer die zur Buchung führte|Yes|
|_number_|bookingRecordId|ref to the financialBookingRecord|Yes|
|_boolean_|revertable|revertable|Yes|
|_number_|exchangeRate|Kurs der Währung zu Basiswährung|No|
|[OpenItemRecord$BookingType](#openitemrecordbookingtype)|bookingType|Buchungsart der OP-Bewegung (abgeleitet aus Herkunft und Buchungsart)|Yes|
|_number_|discountableAmount|record discountable amount|Yes|
|[ScriptingDate](#scriptingdate)|recordDate|record date|Yes|
|_number_|baseTotalAmount|Gesamtbetrag in Basiswährung|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|locked|locked|Yes|
|_number_|baseDiscountableAmount|Skontierbarer Gesamtbetrag in Basiswährung|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_number_|dunningLvl|Mahnstufe|Yes|
|_number_|amount|record amount|Yes|
|[ApiObjectReference](#apiobjectreference)|transactionRef|bank transaction details|Yes|
|[ApiObjectReference](#apiobjectreference)|bankAccountRef|Konto des Umsatzes|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|transactionId|id der transaction, die diesen record hervorgerufen hat|Yes|
|_number_|baseAmount|Buchungsbetrag in Basiswährung|No|
|_number_|baseDiscountAmount|Abzugsbetrag in Basiswährung|No|
|_number_|baseDunningFee|Mahngebühren in Basiswährung|No|
|_number_|totalAmount|record total amount|Yes|
|_number_|revertedByRecordId|id des records, der diesen storniert hat|Yes|
|_string_|baseCurrencyCode|Basiswährung des offenen Postens  (ISO-A3)|No|
|[OpenItemRecord$RecordQualifier](#openitemrecordrecordqualifier)|qualifier|qualifier of open item|Yes|
|[ApiObjectReference](#apiobjectreference)|paymentMethod|payment-method |Yes|
|_string_|comment|comment|Yes|
|[ApiObjectReference](#apiobjectreference)|businessTransaction|Geschäftsvorfall|Yes|
|_string_|currencyCode|Währung des offenen Postens (ISO-A3)|No|



## OpenItemRecord$BookingType

| Value | Description |
| :---- | :---------- |
|PAYABLE||
|RECEIVABLE||
|PAYMENT_PAYABLE||
|PAYMENT_RECEIVABLE||
|PAYMENT_PAYABLE_DISSOLVED||
|PAYMENT_RECEIVABLE_DISSOLVED||
|DUNNING_PAYABLE||
|DUNNING_RECEIVABLE||
|DUNNING_PAYABLE_DISSOLVED||
|DUNNING_RECEIVABLE_DISSOLVED||


## OpenItemRecord$RecordOrigin

| Value | Description |
| :---- | :---------- |
|DOCUMENT||
|PAYMENT||
|PAYMENT_DISSOLVED||
|REIMBURSEMENT||
|REIMBURSEMENT_DISSOLVED||
|MANUAL_CLOSURE||
|MANUAL_REOPENING||
|DUNNING||
|DUNNING_DISSOLVED||
|DUNNING_INTEREST_REVERSAL||
|IMPORT||
|PAYMENT_PLAN||
|PAYMENT_PLAN_ENTRY||
|PAYMENT_IMPORT||
|CLEARING||
|CLEARING_DISSOLVED||
|DEPOSIT||
|CREDIT_NOTE||
|BALANCE_ADJUSTMENT||
|FEE||
|DUNNING_PAYMENT||
|DUNNING_PAYMENT_DISSOLVED||
|POS_PAYMENT||


## OpenItemRecord$RecordQualifier

| Value | Description |
| :---- | :---------- |
|PAYABLE||
|RECEIVABLE||
|PAYMENT_RECEIVED||
|PAYMENT_SENT||
|PAYMENT_RECEIVED_REVERTED||
|PAYMENT_SENT_REVERTED||
|DUNNING_RECEIVABLE||
|DUNNING_PAYABLE||
|DUNNING_RECEIVABLE_REVERTED||
|DUNNING_PAYABLE_REVERTED||


## OrderStackProcessingType

| Value | Description |
| :---- | :---------- |
|NO_PICKING||
|ACCORDING_TO_CRITERIA||
|ONLY_FULL_ORDER||
|ONLY_FULL_ORDER_LINES||
|AVAILABLE_QUANTITIES||
|NO_PROCESSING||
|FULL_ORDER_LINES_MAX_TWO_PARTIAL_DELIVERIES||
|AVAILABLE_QUANTITIES_MAX_TWO_PARTIAL_DELIVERIES||
|FULL_ORDER_LINES_MAX_THREE_PARTIAL_DELIVERIES||
|AVAILABLE_QUANTITIES_MAX_THREE_PARTIAL_DELIVERIES||
|AVAILABLE_QUANTITIES_FINISH_ORDER||


## PaymentDiscountOrigin

| Value | Description |
| :---- | :---------- |
|FROM_PAYMENT_TERM||
|FROM_ACCOUNT||
|USER_DEFINED||


## PaymentMethod

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|closePayable|Verbindlichkeiten-OP abschließen?|No|
|_number_|daysToAddForDirectDebit|+Tage für Erstlastschrift|No|
|_string_|printDescription|printDescription|No|
|_boolean_|active|Aktiv?|No|
|_string_|description|description|No|
|_string_|label|label for this payment method|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[BankPaymentType](#bankpaymenttype)|paymentType|Payment Type|No|
|_boolean_|dunnable|dunnable|No|
|_boolean_|closeCustomerAccountType|Debitoren-OP abschließen?|No|
|Array<[DocumentTypeTerm](#documenttypeterm)>|translations|translations|No|
|_number_|daysToAddForFollowup|+Tage für Folgelastschrift|No|
|[ApiObjectReference](#apiobjectreference)|businessTransaction|Die Business Transaction|No|
|_string_|externalPaymentId|external Payment Id|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|closeSupplierAccountType|Kreditoren-OP abschließen?|No|
|_boolean_|closeReceivable|Forderungs-OP abschließen?|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PaymentPlanManualRule

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|processed|bereits verarbeitet|Yes|
|_number_|amount|Betrag|No|
|_string_|baseCurrencyCode|Basiswährung (ISO-A3)|No|
|_number_|exchangeRate|Kurs der Währung zu Basiswährung|No|
|[ScriptingDate](#scriptingdate)|dueDate|Fälligkeit|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|currencyCode|Währung (ISO-A3)|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseAmount|Betrag in Basiswährung|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PaymentTerm

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|paymentDiscount2|Percent for Discount 2 |No|
|_string_|printDescription|printDescription|No|
|_number_|paymentDiscount1|Percent for Discount 1 |No|
|[ApiObjectReference](#apiobjectreference)|remainingTermRef|for deposit: remaining term|No|
|_number_|paymentDays1|Days for Discount 1 |No|
|_number_|paymentDays2|Days for Discount 2 |No|
|_boolean_|active|Aktiv?|No|
|_string_|description|description|No|
|_string_|label|label for this payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[PaymentType](#paymenttype)|paymentType|payment type|No|
|Array<[DocumentTypeTerm](#documenttypeterm)>|translations|translations|No|
|_boolean_|considerForCreditLimit|Für Kreditlimit berücksichtigen?|No|
|_string_|externalPaymentId|external Payment Id|No|
|_number_|paymentDaysNet|Days for net payment |No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|dunningBlock|Mahnsperre|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PaymentTermRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Activ|Yes|
|_string_|description|a short description|Yes|
|_number_|id|Identifier|No|
|_string_|label|a label|Yes|
|[PaymentType](#paymenttype)|paymentType|payment type|No|



## PaymentType

| Value | Description |
| :---- | :---------- |
|PREPAYMENT||
|PAYMENT||
|DEPOSIT||


## PersonGenderType

| Value | Description |
| :---- | :---------- |
|MALE||
|FEMALE||
|ETC||


## PickTrolley

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|identifier|Barcode zur Selektion des Wagens|No|
|Array<[PickTrolleyBox](#picktrolleybox)>|pickTrolleyBoxes|Zu diesem Wagen gehörende Boxen|No|
|[ApiObjectReference](#apiobjectreference)|processedByUserRef|Bearbeiter der Pickliste|Yes|
|[StorageBinRef](#storagebinref)|storageBinRef|Lagerplatz, dem dieser Pickwagen zugeordnet ist|No|
|_string_|description|Beschreibung des Wagens|No|
|_number_|currentPicklistId|Wagen gehört aktuell zu dieser Pickliste|Yes|
|_string_|label|Bezeichnung des Wagens|No|
|[PickTrolleyType](#picktrolleytype)|type|Typ des Wagens|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[ApiObjectReference](#apiobjectreference)>|picklistTemplateRefs|Picklistenvorlagen, welche genutzt werden können, um in der MDE Picklisten zu dem Wagen zu erzeugen|No|
|[PickTrolleyState](#picktrolleystate)|state|Status des Wagens|Yes|
|[ApiObjectReference](#apiobjectreference)|pickTrolleyGroupRef|Wagen gehört zu dieser Pickwagen-Gruppe|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PickTrolleyBox

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|pickTrolleyId|Box gehört zu diesem Pickwagen|No|
|_string_|identifier|Barcode zur Selektion der Box|No|
|_number_|currentDocumentId|Aktuell kommissionierter Beleg|No|
|_string_|description|Beschreibung der Box|No|
|[PickTrolleyBoxState](#picktrolleyboxstate)|state|Status der Box|Yes|
|_string_|label|Bezeichnung der Box|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PickTrolleyBoxState

| Value | Description |
| :---- | :---------- |
|NOT_ACTIVE||
|AVAILABLE||
|RESERVED_FOR_ORDER||
|IN_PICKING||
|READY_FOR_PACKING||
|READY_FOR_SHIPPING||
|WAITING_FOR_DELIVERY_DOCUMENT_AND_SHIPPING_LABEL||
|WAITING_FOR_DELIVERY_DOCUMENT||
|WAITING_FOR_SHIPPING_LABEL||


## PickTrolleyState

| Value | Description |
| :---- | :---------- |
|NOT_ACTIVE||
|AVAILABLE||
|CONTAINS_GOODS||
|RESERVED_FOR_PICKLIST||
|IN_PICKING||
|PAUSED_IN_PICKING||
|READY_FOR_PACKING||
|IN_PACKING||
|PAUSED_IN_PACKING||
|READY_FOR_SHIPPING||
|WAITING_FOR_SHIPPING_DOCUMENTS||


## PickTrolleyType

| Value | Description |
| :---- | :---------- |
|FREE_COLLECTION||
|FOR_ROLLING_ORDER_PICKING||
|FOR_CONSOLIDATION||


## PickingArticleProcessing

| Value | Description |
| :---- | :---------- |
|FREE||
|SCAN_ONCE||
|SCAN_ALWAYS||


## PickingDeviatingQuantity

| Value | Description |
| :---- | :---------- |
|ALLOW_ONLY_ORDERED_QUANTITY||
|ALLOW_MINOR_QUANTITY||
|ALLOW_OVER_DELIVERY||
|ALLOW_DEVIATING_QUANTITY||


## PickingType

| Value | Description |
| :---- | :---------- |
|FAST_ORDER_PICKING||
|SINGLE_ORDER_PICKING||
|COLLECTIVE_ORDER_PICKING||
|ROLLING_ORDER_PICKING||
|CONSOLIDATION||
|REPLENISHMENT||
|FABRICATION||
|MISSING_GOODS_PICKING||
|INCORRECTLY_PICKED_GOODS||


## Picklist

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|targetStorageRef|Ziellager für Nachschub|Yes|
|[PicklistTemplate](#picklisttemplate)|usedTemplate|Zur Erstellung der Pickliste verwendete Vorlage|No|
|_string_|number|Nummer der Pickliste|No|
|[ScriptingDateTime](#scriptingdatetime)|pickingFinishedAt|Zeitpunkt, zu dem der Pickvorgang beendet wurde|No|
|[ApiObjectReference](#apiobjectreference)|pickingUserRef|Benutzer, welcher den Pickvorgang durchführt|No|
|[ScriptingDateTime](#scriptingdatetime)|pickingStartedAt|Zeitpunkt, zu dem der Pickvorgang gestartet wurde|No|
|[PicklistState](#pickliststate)|state|Status der Pickliste|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[PicklistLine](#picklistline)>|lines|Positionen der Pickliste |No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PicklistLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|pickTrolleyBoxRef|Pickbox, mit der diese Position gesammelt werden soll|No|
|_number_|quantityCollected|Gesammelte Menge der Position|No|
|Array<[PicklistLineComponent](#picklistlinecomponent)>|components|Komponenten dieser Position, falls es sich bei dieser Position um eine Baugruppe handelt|No|
|_number_|quantity|Menge der Position|No|
|[ProductArticleRef](#productarticleref)|articleRef|Artikel|No|
|_number_|targetDocumentId|ID des Ziel-Dokuments|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|sourceDocumentLineId|ID der Quell-Dokumentposition|No|
|[ApiObjectReference](#apiobjectreference)|storageRef|Lagers |No|
|[PicklistLineType](#picklistlinetype)|lineType|Art der Position|No|
|_number_|targetDocumentLineId|ID der Ziel-Dokumentposition|No|
|[PicklistLineState](#picklistlinestate)|state|Status der Position|No|
|_number_|quantityPacked|Verpackte Menge der Position|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[PicklistLineBooking](#picklistlinebooking)>|bookings|Buchungen zu dieser Position|No|
|_number_|sourceDocumentId|ID des Quell-Dokuments|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PicklistLineBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Zu buchende Menge (gesammelt)|No|
|[ArticleSerialNumber](#articleserialnumber)|serialNumber|Seriennummer|No|
|_string_|storageBinDisplayName|Anzeigename vom Lagerplatz|Yes|
|_number_|storageBinId|ID vom bebuchten Lagerplatz|No|
|[PicklistLineBookingState](#picklistlinebookingstate)|state|Status der Buchung|No|
|_number_|quantityPacked|Zu buchende Menge (verpackt)|No|



## PicklistLineBookingState

| Value | Description |
| :---- | :---------- |
|PRESETTING||
|PROCESSED||


## PicklistLineComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantityCollected|Gesammelte Menge der Position|No|
|_string_|articleName|Artikelbezeichnung|Yes|
|_number_|quantity|Menge der Position|No|
|_string_|articleDescription|Artikelbeschreibung|Yes|
|_number_|articleId|ID des Artikels|No|
|_number_|picklistLineId|ID einer Position einer Pickliste|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|sourceDocumentLineComponentId|ID der Komponente der Quell-Dokumentposition|No|
|_string_|articleNumber|Artikelnummer|Yes|
|_number_|targetDocumentLineComponentId|ID der Komponente der Ziel-Dokumentposition|No|
|_string_|articleAlternativeName|abweichende Artikelbezeichnung|Yes|
|_number_|quantityPerAssemblyGroup|Menge pro Baugruppe (falls die Picklist-Line eine Baugruppe ist)|No|
|_number_|position|Position der Komponente in der Baugruppe|No|
|_number_|quantityPacked|Verpackte Menge der Position|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[PicklistLineBooking](#picklistlinebooking)>|bookings|Buchungen zu dieser Komponente|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PicklistLineState

| Value | Description |
| :---- | :---------- |
|IN_CREATION||
|CREATED||
|NEWLY_ADDED||
|PICKED||
|NEWLY_ADDED_AND_PICKED||
|WAITING_FOR_SHIPPING_DOCUMENTS||
|CANCELLED||
|FINISHED||


## PicklistLineType

| Value | Description |
| :---- | :---------- |
|ARTICLE||
|ASSEMBLY_GROUP||


## PicklistScriptType

| Value | Description |
| :---- | :---------- |
|CONNECT_PICK_BOXES_TO_PICKLIST_LINE||


## PicklistState

| Value | Description |
| :---- | :---------- |
|IN_CREATION||
|CREATED||
|PAUSED_IN_PICKING||
|IN_PICKING||
|PICKED||
|PAUSED_IN_PACKING||
|IN_PACKING||
|CANCELLED||
|FINISHED||


## PicklistTemplate

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[PickingType](#pickingtype)|pickingType|Art der Kommissionierung|No|
|[PicklistTemplate$OrderSelectionOptions](#picklisttemplateorderselectionoptions)|orderSelectionOptions|Optionen zur Selektion von Aufträgen für die Pickliste|No|
|Map<[PicklistScriptType](#picklistscripttype),[PicklistTemplate$PicklistScript](#picklisttemplatepicklistscript)>|picklistScripts|Skripte für die Erstellung und Verarbeitung von Picklisten|No|
|_boolean_|defaultTemplate|Handelt es sich um eine Standard-Vorlage?|No|
|_boolean_|active|Is Template active?|Yes|
|_string_|description|Beschreibung der Vorlage|No|
|_string_|label|Name der Vorlage|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[PicklistTemplate$PicklistCreationOptions](#picklisttemplatepicklistcreationoptions)|picklistCreationOptions|Optionen zur Erstellung der Pickliste|No|
|_number_|id|Unique identifier of the Object|No|
|[PicklistTemplate$PicklistProcessingOptions](#picklisttemplatepicklistprocessingoptions)|picklistProcessingOptions|Optionen zur Verarbeitung von Picklisten|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PicklistTemplate$DateRange

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|allowEmpty|Datumsbereich darf leer sein|No|
|_string_|from|Datum von (ggf. als relatives Datum)|No|
|_string_|to|Datum bis (ggf. als relatives Datum)|No|



## PicklistTemplate$OrderSelectionOptions

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|maxShippingWeightPerOrder|Maximales Versandgewicht pro Auftrag|No|
|[PicklistTemplate$DateRange](#picklisttemplatedaterange)|confirmedDeliveryDateRange|Selektion über den Bereich vom bestätigten Lieferdatum|No|
|_boolean_|allowOnlyDefinedDeliveryMethods|dürfen nur gültige Lieferarten genutz werden?|No|
|_number_|minArticleCountPerOrder|Minimale Anzahl Artikel pro Auftrag|No|
|Array<[ApiObjectReference](#apiobjectreference)>|documentTypeRefs|Liste der Belegarten vom Belegtyp "Auftrag"|No|
|_number_|maxArticleCountPerOrder|Maximale Anzahl Artikel pro Auftrag|No|
|_string_|alternativeSelectionInVql|Alternative Selektion in VQL|No|
|_number_|maxOrderValue|Maximaler Auftragswert|No|
|_boolean_|onlyFullDeliverableOrderLines|Nur vollständig lieferbare Positionen|No|
|_number_|maxOrderCount|Nur für Einzelkommissionierung und Konsolidierung: maximale Anzahl zu übernehmender Aufträge|No|
|[PicklistTemplate$DateRange](#picklisttemplatedaterange)|deliveryDateRange|Selektion über den Bereich vom Lieferdatum|No|
|[PicklistTemplate$DateRange](#picklisttemplatedaterange)|documentDateRange|Selektion über den Bereich vom Belegdatum|No|
|Array<[ApiObjectReference](#apiobjectreference)>|storageAreaRefs|Liste von gültigen Lagerbereichen|No|
|_number_|salesChannelId|Id des salesChannels der bei der Selektion berücksichtigt wird|No|
|_boolean_|onlyFullDeliverableOrders|Nur vollständig lieferbare Aufträge|No|
|Array<[ApiObjectReference](#apiobjectreference)>|deliveryMethodRefs|Liste der gültigen Lieferarten|No|
|_number_|maxTotalVolumePerOrderInCCM|Maximales Gesamtvolumen pro Auftrag (in ccm)|No|
|_Array<string>_|additionalExistsStatementsInVql|Zusätzliche Exists-Statements in VQL|No|



## PicklistTemplate$PicklistCreationOptions

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|specifySerialWithOldestExpiryDate|Für Serien-Artikel mit Verfallsdatum/MHD: älteste Serie in Pickliste vorgeben|No|
|_string_|cycleToCreatePicklistsCronExpression|Zyklus zur Erstellung von Picklisten (für Background-Jobs, als Quartz-Cron-Expression) (https://www.freeformatter.com/cron-expression-generator-quartz.html)|No|
|[ApiObjectReference](#apiobjectreference)|fastOrderPickingTemplateToUseRef|Die zu verwendende Vorlage zur Erzeugung von Picklisten für die Schnellkommissionierung|No|
|_boolean_|printLabelsOnCreation|Soll nach der Erstellung automatisch die Etiketten gedruckt werden?|No|
|_number_|maxQuantityOfOrderLineForFastOrderPicking|Maximale Menge einer Auftragsposition für Schnellkommissionierungs-Picklisten|No|
|_boolean_|printPicklist|Soll die Pickliste gedruckt werden?|No|
|_number_|maxPicklistLineCount|Maximale Anzahl an Positionen einer Pickliste|No|
|[ApiObjectReference](#apiobjectreference)|orderPickingTrolleyGroupRef|Die zu verwendende Pickwagengruppe|No|
|[ApiObjectReference](#apiobjectreference)|picklistOutputReportGroupRef|Mit welcher Reportgruppe soll die Pickliste gedruckt werden?|No|
|_boolean_|specifyStorageBins|Lagerplätze vorgeben|No|
|[ApiObjectReference](#apiobjectreference)|orderPickingTrolleyRef|Der zu verwendende Pickwagen|No|
|_boolean_|useAllAvailOrderPickingTrolleys|Sollen alle verfügbaren Pickwagen verwendet werden?|No|
|_boolean_|sortByRoutePosition|Positionen der Pickliste nach Laufwegposition sortieren|No|
|_boolean_|firstCreateFastOrderPickingPicklists|Sollen zuerst noch Picklisten für die Schnellkommissionierung erzeugt werden?|No|



## PicklistTemplate$PicklistProcessingOptions

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|assemblyGroupAtOnce|Baugruppen als Ganzes kommissionieren|No|
|_boolean_|autoPrintShippingLabel|Sollen die Paketlabel automatisch nach Abschluss der Kommissionierung gedruckt werden?|No|
|[PickingArticleProcessing](#pickingarticleprocessing)|articleScanRequirement|Dürfen Artikel nur per Scan (oder z.B. auch Eingabe der Artikelnummer) erfasst werden|No|
|_boolean_|allowSkipPosition|Ist das Überspringen von Positionen erlaubt?|No|
|_boolean_|autoPickingFinishAfterLastArticleInOrder|Automatischer Abschluss nach letztem Artikel vom aktuellen Auftrag|No|
|_boolean_|usePickNPack|Pick'n'Pack verwenden|No|
|[PickingDeviatingQuantity](#pickingdeviatingquantity)|deviatingQuantity|Kommissionierung von abweichenden Mengen|No|
|_boolean_|alwaysShowDeliveryMethod|Immer die Lieferbedingung in Masken zeigen|No|
|_boolean_|blockIfMaximumPackageWeightIsExceeded|Überschreitung vom maximalen Paketgewicht blockieren?|No|
|_boolean_|autoPrintDeliveryDocument|Soll die Lieferbelege automatisch nach Abschluss der Kommissionierung gedruckt werden?|No|
|_boolean_|showShippingFormOnPickingFinish|Versand-Dialog beim Abschluss zeigen|No|
|_boolean_|allowPickingOfServiceArticles|Sollen Dienstleistungen kommissioniert werden?|No|
|_boolean_|printLabelOnScan|Sollen bei der Erfassung automatisch die Etiketten gedruckt werden?|No|
|_boolean_|useDigitalPicklist|Digitale Pickliste verwenden: dabei werden nur die Positionen im Frontend gezeigt und durch Tippen oder Wischen bestätigt|No|
|_boolean_|allowFullConfirmation|Sammelbestätigung erlauben|No|
|_boolean_|useSalesUnit|Verwende die Verkaufseinheit als Standardmenge|No|
|_boolean_|scanDeliveryDocumentAndShippingLabelOnFinish|Nur für Konsolidierung: Lieferbeleg und Versandlabel zum Abschluss scannen|No|
|_boolean_|printLabelOnCompleteOrder|Sollen bei Abschluss des Auftrages automatisch die Etiketten gedruckt werden?|No|
|_boolean_|scanPickTrolleyBoxToConfirmPickedArticle|Rollende Kommissionierung/Konsolidierung: beim Sammeln muss die Box nach dem Scan eines Artikels per Scan bestätigt werden|No|
|_boolean_|printLabelAfterPicking|Sollen bei Abschluss des des Pickens automatisch die Etiketten gedruckt werden?|No|
|_boolean_|allowPickingOfNonInventoryManagedArticles|Sollen nicht-bestandsgeführte Artikel kommissioniert werden?|No|
|_boolean_|autoDeterminationOfLots|Chargen automatisch bestätigen, wenn sie vorgegeben oder bereits beim Picken erfasst wurden|No|
|_boolean_|hideTargetQuantityInViews|Zielmengen in Masken verstecken?|No|
|_boolean_|alwaysRequireScanOfStorageBin|Lagerplätze müssen erfasst werden, trotz Vorgabe|No|



## PicklistTemplate$PicklistScript

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Ist das Skript aktiv?|No|
|_string_|source|Der Quelltext vom Skript|No|



## PlainScriptingWriter
### Description
Writer für einfache Texte ohne besondere Formatierung


## PosLineType

| Value | Description |
| :---- | :---------- |
|CASH_PAYMENT||
|CASH_CHANGE||
|CARD_PAYMENT||
|CASH_START_BALANCE||
|CASH_FINAL_BALANCE||
|CASH_DEPOSIT||
|CASH_EXPENSE||
|CASH_WITHDRAWAL||


## PosPaymentOperation

| Value | Description |
| :---- | :---------- |
|PAYMENT||
|CANCEL||
|REFUND||


## PosPaymentStatus

| Value | Description |
| :---- | :---------- |
|PENDING||
|PROCESSING||
|SUCCESSFUL||
|CANCELLED||
|REJECTED||


## PossibleUsingType

| Value | Description |
| :---- | :---------- |
|ACCOUNT||
|CRM_DEAL||
|CRM_PROJECT||
|CRM_TASK||


## PriceModifierType

| Value | Description |
| :---- | :---------- |
|DISCOUNT||
|SURCHARGE||


## PriceSelectionCriteria

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDate](#scriptingdate)|date|Ein Datum|No|
|_number_|quantity|Eine Menge|No|
|_number_|priceGroupId|Die Preisgruppe|No|
|_Array<number>_|articleIds|Liste von Artikel-IDs|No|
|_Array<number>_|accountIds|Liste von Account-IDs|No|
|[ProductPriceQualifier](#productpricequalifier)|qualifier|ein qualifier|No|
|_number_|productGroupId|Die Warengruppe|No|
|_boolean_|selectOnlyDefaultPrice|soll nur der Standardpreis selektiert werden?|No|
|_boolean_|noteSpecialOfferPrice|Aktionspreis beachten?|No|



## Product

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|lotOnlyRequiredWhenBookedToSalesStorage|Charge muss bei Einbuchung in ein Verkaufslager vergeben werden (für Serientyp LOT und BEST_BEFORE)|No|
|_string_|customsTariffNumber|Zolltarifnummer|No|
|[ApiObjectReference](#apiobjectreference)|bundleSchemaRef|Gebindeschema dieses Produkts|Yes|
|[ArticleSerialNumberLabelingType](#articleserialnumberlabelingtype)|serialNumberLabelingType|Seriennummern Auszeichnungsart|No|
|[ApiObjectReference](#apiobjectreference)|regionOfOrigin|Ursprungsregion|No|
|[ProductType](#producttype)|type|Produkt-Art|No|
|_number_|warrantyInMonths|Garantie in Monaten|No|
|_number_|minimumRemainingDaysBeforeExpiryDateOnGoodsReceipt|Mindestrestlaufzeit Eingang (Tage): Minimale Restlaufzeit in Tagen, die ein Artikel bei der Einbuchung in ein Verkaufslager noch aufweisen muss|No|
|[ArticleAvailabilityDetermination](#articleavailabilitydetermination)|availabilityDetermination|Optionen zur Berechnung der Verfügbarkeit|No|
|Array<[ProductArticleRef](#productarticleref)>|articleRefs|alle artikel, die zu diesem Produkt gehören|Yes|
|_boolean_|useSerialSequencerConfiguration|Soll ein eigener Zählerkreis für Seriennummern verwendet werden?|No|
|[FabricationSerialNumberLabelingType](#fabricationserialnumberlabelingtype)|fabricationSerialNumberLabelingType|Produktions-S/N-Auszeichnungsart|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|bundle|Handelt es sich um ein Gebinde?|No|
|[ArticleSerialType](#articleserialtype)|serialType|Serientyp|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#apiobjectreference)|mainVariantProductRef|Variantenhauptartikel|No|
|[ApiObjectReference](#apiobjectreference)|variantSchemaRef|Variantenschema|No|
|[SequencerConfiguration](#sequencerconfiguration)|serialSequencerConfiguration|Eigener Zählerkreis für Seriennummern|No|
|[ArticleSerialExpiryDateType](#articleserialexpirydatetype)|expiryDateType|Art des Haltbarkeitsdatums|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|minimumRemainingDaysBeforeExpiryDateForGoodsIssued|Mindestrestlaufzeit Ausgang (Tage): Minimale Restlaufzeit in Tagen, die ein Artikel beim Verkauf noch aufweisen muss|No|
|[CountryReference](#countryreference)|countryOfOrigin|Country code|No|
|Array<[VariantValueReference](#variantvaluereference)>|variantValues|Variantenwerte|No|



## ProductArticleRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Article number|No|
|[UnitTypeReference](#unittypereference)|unit|named unit of this article (piece, palette, container)|No|
|_string_|name|Bezeichnung|No|
|_string_|description|Beschreibung|No|
|_number_|id|Article ID|No|
|[ArticleSerialType](#articleserialtype)|serialType|Serientyp|No|



## ProductDiscount

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|accessoryMainArticleRef|Hauptartikel, für welchen dieser Rabatt gültig ist|No|
|[ApiObjectReference](#apiobjectreference)|customerGroupRef|Kundengruppe|No|
|[ApiObjectReference](#apiobjectreference)|supplierGroupRef|Lieferantengruppe|No|
|_number_|fromQuantity|Bestimmt ab welcher Menge dieser Rabatt gültig ist|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Produkt, für welches dieser Rabatt gültig ist|No|
|[ApiObjectReference](#apiobjectreference)|manufacturerRef|Hersteller|No|
|[ScriptingDate](#scriptingdate)|validFrom|Gültig von|No|
|[ApiObjectReference](#apiobjectreference)|productGroupRef|Warengruppe|No|
|[PriceModifierType](#pricemodifiertype)|modifierType|Bestimmt die Art des Rabatts|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Verkaufskanal|No|
|[CurrencyReference](#currencyreference)|currencyRef|Währung|No|
|[ApiObjectReference](#apiobjectreference)|priceGroupRef|Preisgruppe|No|
|_number_|modifierValue|Wert des Rabatts|No|
|[ProductPriceQualifier](#productpricequalifier)|qualifier|Bestimmt, ob es sich um einen Verkaufs- oder Einkaufsrabatt handelt|Yes|
|_boolean_|specialOfferPrice|Aktionpreis|No|
|[ScriptingDate](#scriptingdate)|validUntil|Gültig bis|No|
|[ValueType](#valuetype)|modifierValueType|Bestimmt die Art des Rabattwerts (fest oder prozentual)|No|
|_string_|modifierName|Name des Rabatts|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Account, für den der Rabatt gültig ist|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ProductGroup

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|externalReference|needed for data migration from third party applications|No|
|_string_|customsTariffNumber|Zolltarifnummer|No|
|_number_|targetTradingMargin|Soll-Handelsspanne|No|
|[ApiObjectReference](#apiobjectreference)|mainGroupRef|main product group|No|
|[EavProductgroup](#eavproductgroup)|custom|Freifeld|No|
|_boolean_|active|warengruppe aktiv ja/nein|Yes|
|_string_|description|product group description|No|
|_string_|label|product group name|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ProductMainGroup

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|targetTradingMargin|Soll-Handelsspanne|No|
|[EavProductmaingroup](#eavproductmaingroup)|custom|Freifeld|No|
|_boolean_|active|Hauptwarengruppe aktiv ja/nein|Yes|
|_string_|description|Beschreibung der Hauptwarengruppe|No|
|_string_|label|Hauptwarengruppe|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ProductPrice

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|accessoryMainArticleRef|Hauptartikel, für welches dieser Preis gültig ist|No|
|[ApiObjectReference](#apiobjectreference)|customerGroupRef|Kundengruppe|No|
|[PurchasePriceSource](#purchasepricesource)|purchasePriceSource|Einkaufspreis zur Kalkulation|No|
|_number_|fromQuantity|Bestimmt ab welcher Menge dieser Preis gültig ist|No|
|_number_|netPrice|Netto-Preis|No|
|_number_|grossPrice|Brutto-Preis|No|
|[ScriptingDate](#scriptingdate)|validFrom|Gültig von|No|
|[ApiObjectReference](#apiobjectreference)|productGroupRef|Warengruppe|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Verkaufskanal|No|
|[ApiObjectReference](#apiobjectreference)|priceGroupRef|Preisgruppe|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[TaxRate](#taxrate)|usedTaxRate|Verwendete Umsatzsteuer zur Umrechnung Netto <-> Brutto|Yes|
|[ApiObjectReference](#apiobjectreference)|supplierGroupRef|Lieferantengruppe|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Produkt, für welches dieser Preis gültig ist|No|
|[ApiObjectReference](#apiobjectreference)|manufacturerRef|Hersteller|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[CurrencyReference](#currencyreference)|currencyRef|Währung|No|
|_number_|modifierValue|Wert des Aufschlags bei EK-Kalkulation|No|
|[ProductPriceQualifier](#productpricequalifier)|qualifier|Bestimmt, ob es sich um einen Verkaufs- oder Einkaufspreis handelt|Yes|
|_boolean_|specialOfferPrice|Aktionpreis|No|
|[ArticlePriceBase](#articlepricebase)|priceBase|Preisbasis|No|
|[ScriptingDate](#scriptingdate)|validUntil|Gültig bis|No|
|[ValueType](#valuetype)|modifierValueType|Bestimmt die Art des Aufschlages (fest oder prozentual) bei EK-Kalkulation|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Account, für den der Preis gültig ist|No|



## ProductPriceOrigin

| Value | Description |
| :---- | :---------- |
|USER_DEFINED||
|PRODUCT||
|PREDECESSOR_DOCUMENT||
|PICKLIST||


## ProductPriceQualifier

| Value | Description |
| :---- | :---------- |
|SALES||
|PURCHASE||


## ProductType

| Value | Description |
| :---- | :---------- |
|WITH_STOCK||
|WITHOUT_STOCK||
|SERVICE_ARTICLE||
|SERVICE_CONTINGENT||
|ASSEMBLY_GROUP||
|JUMBO||
|SHIPPING_COSTS||
|VARIANT_MAIN_ARTICLE||


## PublishingPolicy

| Value | Description |
| :---- | :---------- |
|AUTOMATIC||
|MANUAL||


## PurchasePriceSource

| Value | Description |
| :---- | :---------- |
|NONE||
|AVERAGE||
|MOST_RECENT||


## RecommendedRetailPrice

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[CountryReference](#countryreference)|countryCode|Land (Iso-A-2)|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Verweis auf den Artikel|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|value|Preis|No|
|[CurrencyReference](#currencyreference)|currencyCode|Währung (Iso-A-3)|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## Referenceable


## RegulationCode

| Value | Description |
| :---- | :---------- |
|FR||
|LQ||
|EQ||
|LR||


## RegulationSet

| Value | Description |
| :---- | :---------- |
|ADR||
|IATA||


## RequestDocument

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|incomingGoodsStorageBinId|ID vom Lagerplatz für den Wareneingang (wenn incomingGoodsPickTrolleyId = null)|No|
|[ScriptingDate](#scriptingdate)|documentDate|Belegdatum|No|
|_number_|cashDrawerId|ID der Kassenschublade (bei POS)|No|
|[ScriptingDate](#scriptingdate)|performanceDate|Leistungsdatum|No|
|_number_|depositPaymentAmount|Der Anzahlungsbetrag|No|
|_number_|deliveryMethodId|Für interne Zwecke: Liefermethode für das Document|No|
|_string_|externalNumber|externe Belegnummer|No|
|_boolean_|externallyCreated|Für interne Zwecke: Markiert den Beleg als extern erstellt (z.B. Marktplatz-Rechnung; das Original liegt im Fremdsystem)|No|
|_number_|performanceCountryId|Für interne Zwecke: Leistungsland für das Document|No|
|Array<[DocumentPosPayment](#documentpospayment)>|posPayments|Eine oder mehr Kassenzahlungen|No|
|[DocumentPosDetail](#documentposdetail)|posDetail|Die Quittungsdetails|No|
|_number_|salesChannelId|sales-channel-id to create a new Document|No|
|[BillingType](#billingtype)|billingType|billing type|No|
|_number_|paymentMethodId|Für interne Zwecke: Zahlungsmethode für das Document|No|
|_number_|deliveryTermId|Für interne Zwecke: Lieferbedingung für das Document|No|
|Array<[RequestDocumentLine](#requestdocumentline)>|lines|Dokumentzeilen|No|
|_number_|currencyId|Für interne Zwecke: Währung für das Document|No|
|Array<[AssemblyComponentReturnLine](#assemblycomponentreturnline)>|assemblyComponentReturnsToAddOnTransfer|Nur für interne Zwecke: neue Positionen für einzeln retournierte Baugruppen-Komponenten|No|
|[DocumentContractDetail](#documentcontractdetail)|contractDetail|Die Vertragsdetails|No|
|_number_|posRegisterId|ID der Kasse (bei POS)|No|
|_number_|supplierAccountId|Vorgabelieferant bei Übernahme von Auftrag zu Bestellung(en)|No|
|_number_|paymentTermId|Für interne Zwecke: Zahlungsbedingung für das Document|No|
|[EavDocument](#eavdocument)|custom|Schema Freifelder|No|
|_boolean_|dropShipping|Für interne Zwecke: Vorgabe Streckengeschäft|No|
|[DocumentType](#documenttype)|targetDocumentType|target document type for document copy|No|
|_string_|externalId|reference to the corresponding document in an external system|No|
|_number_|incomingGoodsPickTrolleyId|ID vom Pickwagen für den Wareneingang (wenn incomingGoodsStorageBinId = null)|No|
|[CalculationMode](#calculationmode)|calculationMode|calculation mode|No|
|_boolean_|eInvoice|Für interne Zwecke: Markiert den Beleg als E-Rechnung|No|
|_number_|accountId|account-id to create a new Document|No|
|Array<[DocumentText](#documenttext)>|texts|Kopf-/Fußtexte des Belegs|No|
|_boolean_|processedByPicklistProcessing|Wird dieser Beleg durch die Picklistenverarbeitung verarbeitet?|No|
|Array<[PicklistLine](#picklistline)>|picklistLinesToAddOnTransfer|Nur für interne Zwecke: neue Positionen, die bei Übernahme aus einer Pickliste angelegt werden sollen|No|
|Array<[RequestDocumentPriceModifier](#requestdocumentpricemodifier)>|priceModifiers|Die Rabatte des Beleges|No|



## RequestDocumentLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|incomingGoodsStorageBinId|ID des Lagerplatzes für den Wareneingang (wenn `incomingGoodsPickTrolleyId` = null)|No|
|[ScriptingDate](#scriptingdate)|performanceDate|Leistungsdatum|No|
|[DocumentLineReturnDetail](#documentlinereturndetail)|returnDetail|Retourendetails zur Belegposition|No|
|_boolean_|markCompleted|Soll die Quellposition nach erfolgreicher Verarbeitung als abgeschlossen markiert werden?|No|
|_string_|description|Artikelbeschreibung|No|
|[ProductPriceOrigin](#productpriceorigin)|priceOrigin|Herkunft des Preises|No|
|[DocumentLinePosDetail](#documentlineposdetail)|posDetail|Quittungsdetails zur Belegposition|No|
|_number_|totalLinePrice|(optional) Gesamtpreis dieser Position|No|
|_number_|refLineId|(optional) ID der referenzierten Belegposition|No|
|Array<[RequestDocumentLineCommission](#requestdocumentlinecommission)>|commissions|Provisionen zu dieser Belegposition|No|
|[DocumentFinanceBooking](#documentfinancebooking)|financeBooking|FiBu-Angaben|No|
|[DocumentLineType](#documentlinetype)|lineType|Typ dieser Position|No|
|_number_|taxPercent|Für interne Zwecke: Steuersatz in Prozent|No|
|[DropShippingPolicy](#dropshippingpolicy)|dropShippingPolicy|Streckengeschäft?|No|
|_number_|storageId|(optional) Lager-ID|No|
|_number_|positionOfArticleLine|Positionsnummer der Artikel|No|
|[DocumentContractDetail](#documentcontractdetail)|contractDetail|Vertragsdetails zur Belegposition|No|
|_number_|supplierAccountId|Wird für die Umwandlung von Kundenauftrag in Lieferantenauftrag benötigt|No|
|_number_|mainArticleLinePosition|Position der Hauptartikel-Position einer Zubehör-Position|No|
|_number_|quantity|Menge, die in dieser Transaktion verarbeitet werden soll|No|
|[RequestDocumentLineShippingCostDetail](#requestdocumentlineshippingcostdetail)|shippingCostDetail|Versandkosten mit Bedingungen|No|
|[EavDocumentline](#eavdocumentline)|custom|Für interne Zwecke: Freifelder|No|
|[RequestDocumentLineFabricationDetail](#requestdocumentlinefabricationdetail)|fabricationDetail|Details Produktionsbelegen|No|
|_number_|articleId|(optional) ID des Artikels dieser Position|No|
|_string_|settledOpenItemComment|Bemerkung zur OP-Position - wird beim Abschluss in den Kommentar des Offenen Postens übernommen|No|
|_number_|lineId|ID der Belegposition im aktuellen Beleg|No|
|_string_|externalId|Referenz auf die zugehörige Position in einem externen System|No|
|_number_|incomingGoodsPickTrolleyId|ID des Pickwagens für den Wareneingang (wenn `incomingGoodsStorageBinId` = null)|No|
|_number_|settledOpenItemId|ID des auszugleichenden Offenen Postens (nur bei OPEN_ITEM_SETTLEMENT)|No|
|[DocumentCommissionOrigin](#documentcommissionorigin)|commissionOrigin|Provisionsherkunft dieser Belegposition|No|
|Array<[RequestDocumentText](#requestdocumenttext)>|texts|(optional) Liste von Texten für diese Position|No|
|_string_|name|Artikelname|No|
|Array<[RequestDocumentPriceModifier](#requestdocumentpricemodifier)>|priceModifiers|(optional) Liste von Preismodifikatoren für diese Position|No|
|Array<[RequestDocumentLineBooking](#requestdocumentlinebooking)>|bookings|Buchungen zu dieser Belegposition|No|
|_string_|externalArticleNumber|Für interne Zwecke: Externe Artikelnummer|No|
|_number_|sourceLineId|ID der Quell-Belegposition|No|
|_boolean_|doLabelPrint|Zu der Zeile Etikettendruck anstoßen|No|
|_number_|productPrice|(optional) Preis des Artikels dieser Position|No|



## RequestDocumentLineBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|serialNumberId|Ggf. ID einer zu buchenden Seriennummer|No|
|_number_|quantity|Gebuchte Menge|No|
|_number_|storageBinId|ID vom bebuchten Lagerplatz|No|
|_number_|sourceComponentId|ID der bebuchten Quell-DocumentLineComponent|No|



## RequestDocumentLineCommission

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ValueType](#valuetype)|valueType|Provisionstyp|No|
|[DocumentCommissionOrigin](#documentcommissionorigin)|origin|Herkunft|No|
|_string_|description|Beschreibung|No|
|_string_|comment|Kommentar|No|
|_number_|value|Provision Prozent/Wert|No|
|[Account](#account)|salesAgentAccountRef|Vertreter|No|



## RequestDocumentLineFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[FabricationSerialNumber](#fabricationserialnumber)>|fabricationSerialNumbers|Nur füllen, wenn die Seriennummern vor der Start der Produktion manuell bestimmt werden sollen|No|



## RequestDocumentLineShippingCostDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|manualCosts|Wurden die Versandkosten manuell eingetragen?|No|
|_boolean_|freeShipping|Keine Versandkosten (freier Versand)|No|
|_number_|purchasePrice|Einkaufspreis in Basiswährung|No|



## RequestDocumentPriceModifier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[DocumentPriceModifier$PriceModifierSourceType](#documentpricemodifierpricemodifiersourcetype)|sourceType|Source of price modifier|No|
|_number_|modifierValue|modifierValue of this line|No|
|[ValueType](#valuetype)|valueType|value-type of modifier of this line|No|
|_string_|modifierName|modifierName of this line|No|
|[PriceModifierType](#pricemodifiertype)|modifierType|type of this price modifier (discount/surcharge)|No|



## RequestDocumentText

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[TextPosition](#textposition)|textPosition|header or footer text|No|
|_string_|content|text content|No|



## ReturnCategory

| Value | Description |
| :---- | :---------- |
|MONETARY_COMPENSATION_ITEM_STAYS_WITH_CUSTOMER||
|MONETARY_COMPENSATION_ITEM_GETS_SEND_BACK||
|GOODS_EXCHANGE_ITEM_STAYS_WITH_CUSTOMER||
|GOODS_EXCHANGE_ITEM_GETS_SEND_BACK||
|UNDECIDED||


## RevenueCalculation

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|revenue|Deckungsbeitrag (absolut)|Yes|
|_number_|salesValue|Netto Umsatz|Yes|
|_number_|productPurchasePrice|Einkaufspreis|Yes|
|_number_|revenueInPercent|Deckungsbeitrag (Prozent)|Yes|



## SalesAgent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Bemerkung|No|
|_boolean_|taxable|is sales agent taxable|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|reference to the delivery method|No|
|[EavSalesagent](#eavsalesagent)|custom|Freifelder|No|
|_boolean_|active|active true/false|Yes|
|[ApiObjectReference](#apiobjectreference)|paymentTermRef|reference to the payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[SalesAgentCommissionType](#salesagentcommissiontype)|commissionType|commission type of sales agent|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|reference to the delivery term|No|
|_string_|number|number of sales agent|No|
|[ApiObjectReference](#apiobjectreference)|taxRateRef|reference to the tax rate|No|
|[ApiObjectReference](#apiobjectreference)|userRef|reference to the assigned user|No|
|_string_|performanceCountryCode|country code performance country IsoAlpha3|No|
|[AccountBillingType](#accountbillingtype)|billingType|billing type|No|
|[ApiObjectReference](#apiobjectreference)|paymentMethodRef|reference to the payment method|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|currencyCode|currency code  IsoAlpha3|No|
|_string_|accountingNumber|accounting number|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## SalesAgentCommissionType

| Value | Description |
| :---- | :---------- |
|INVOICE||
|ORDER||
|PAYMENT||


## Scenario

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|identifier|Identifier für das Scenario|Yes|
|Array<[ScenarioDimension](#scenariodimension)>|dimDefinitions|Dimensions Definition|No|
|Array<[ScenarioFactDef](#scenariofactdef)>|factDefinitions|Fakten/Daten Definition|No|
|_string_|description|die beschreibung für dieses Scenario|No|
|_string_|label|die beschreibung für dieses Scenario|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ScriptingDate](#scriptingdate)|startDate|Start-Datum für die Berechnung (optional)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ScenarioActualValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|scenarioDimRef|Referenz auf ein ScenarioDimDef|No|
|_number_|weight|gewichtung|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|referenceId|Referenz auf die LookupReferenz|No|
|[ApiObjectReference](#apiobjectreference)|dimValueRef|Referenz auf eine Scenario-Dimension-Ausprägung|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ScenarioDimension

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[ScenarioDimensionValue](#scenariodimensionvalue)>|definedValues|Verteilschlüssel Ausprägungen|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|key|Verteilschlüssel - Key/Gruppe|No|
|_boolean_|multiSelect|können mehrere Schlüssel bei der Verteilung verwendet werden|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ScenarioDimensionValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sortierreihenfolge|Yes|
|_boolean_|active|ist der Wert weiterhin aktiv/selektierbar|No|
|_string_|label|Ausprägung|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|fallback|handelt es sich um den Fallback-Value|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ScenarioFactDef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|factAttribute|Attribut Name|No|
|[ScenarioFactDef$FactType](#scenariofactdeffacttype)|attributeType|Attribut Typ|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ScenarioFactDef$FactType

| Value | Description |
| :---- | :---------- |
|DATE_DIM_FACT||
|LOOKUP_FACT||
|DISTRIBUTE_FACT||
|DATA_FACT||


## ScriptOutputRequest
### Description
Ausgabe-Anforderung


## ScriptingDate
### Description
Datentyp für Datumswerte


## ScriptingDateTime
### Description
Datentyp für Datum-Zeit-Werte


## ScriptingOutputStream


## ScriptingXmlWriter
### Description
Zum einfachen Schreiben von Daten im XML-Format


## SecureHttpClient
### Description
HTTP-Client fürs Scripting


## SequenceAssignmentMode

| Value | Description |
| :---- | :---------- |
|MANUAL||
|AUTOMATIC||
|SEMI_AUTOMATIC||
|FREE||


## SequenceType

| Value | Description |
| :---- | :---------- |
|NON_POOLED_SEQUENCES||
|POOLED_SEQUENCES||
|PREFETCHED_SEQUENCES||


## SequencerConfiguration

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|configurationGroup|Group of the sequencer configuration (e.g. Document, Account, ...)|Yes|
|_boolean_|active|Sequencer aktiv?|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|key|Unique key to identify the sequencer configuration|Yes|
|[SequencerConfigurationDetail](#sequencerconfigurationdetail)|configurationDetail|Contains details about the sequencer configuration|No|
|[ApiObjectReference](#apiobjectreference)|alternativeConfiguration|Alternative configuration used to generate sequences instead of this configuration|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## SequencerConfigurationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|numberUnique|Eindeutigkeitsprüfung|No|
|_string_|expression|Präfix-Ausdruck|No|
|[SequenceAssignmentMode](#sequenceassignmentmode)|assignmentMode|Vergabeverfahren|No|
|_number_|length|Länge|No|
|_string_|padChar|Auffüllzeichen|No|
|_string_|postExpression|Postfix-Ausdruck|No|
|[SequenceType](#sequencetype)|type|Typ der Sequenz|No|
|_number_|initialValue|Initialer Wert|No|



## SerialNumberWithQuantityApi

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Menge|No|
|[ArticleSerialNumber](#articleserialnumber)|serialNumber|Seriennummer|No|



## ShelfCommonMapper


## ShelfDocument

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Notiz|No|
|[ScriptingDate](#scriptingdate)|entryDate|Date of this Entry/Document|No|
|[EavShelfdocument](#eavshelfdocument)|custom|Custom data|No|
|[UUID](#uuid)|externalId|Externe Id|Yes|
|_string_|description|description of this document|No|
|[ShelfDocumentDeletionState](#shelfdocumentdeletionstate)|deletionState|Löschungsstatus|Yes|
|[ShelfDocumentType](#shelfdocumenttype)|type|Dokumentenart|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#tagdto)>|tags|List of tags|No|
|Array<[ShelfShare](#shelfshare)>|shares|share informations|Yes|
|Array<[ShelfTranslatableText](#shelftranslatabletext)>|translatableTexts|Mehrsprachige Bezeichnungen|No|
|[ScriptingDate](#scriptingdate)|plannedRemovalDate|Automatische Löschung ab|Yes|
|[ShelfFile](#shelffile)|file|file data|Yes|
|_string_|alias|Alias|No|
|[ShelfDocumentState](#shelfdocumentstate)|state|Status|Yes|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ShelfDocumentAttribution

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|uiSort|UI-verwaltetes Feld|No|
|_string_|purpose|Art der Beziehung / Verwendungszweck|No|
|_string_|refType|type of the referenced object|No|
|_string_|uiComment|UI-verwaltetes Feld|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|uiFavorite|UI-verwaltetes Feld|No|
|_boolean_|publish|Soll das Dokument veröffentlicht werden?|No|
|_number_|shelfResourceId|ID der verknüpften DMS-Ressource|No|
|_number_|refId|id of the referenced object|No|
|_Array<string>_|transformationKeys|Verfügbare Transformationen zum Bild|Yes|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|mainAttribution|Hauptverknüpfung dieser DMS-Ressource|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ShelfDocumentDeletionState

| Value | Description |
| :---- | :---------- |
|NOT_YET||
|PREPARE_DELETE||
|FILE_DELETED||
|MANUALLY_RETAIN||


## ShelfDocumentState

| Value | Description |
| :---- | :---------- |
|DRAFT||
|FILE_ATTACHED||
|MISSING||


## ShelfDocumentType

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|accessLevelWrite|access level for writing|No|
|_boolean_|systemPresetting|system presetting|Yes|
|_boolean_|active|Ist die Dokumentenart aktiv|No|
|_string_|label|label of type|No|
|_number_|accessLevelRead|access level or reading|No|
|_number_|revisionStorageRule|storage rule for revisions|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|duration|duration of storage (years)|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|accessLevelDelete|access level for deleting|No|
|_string_|key|unique key of type|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ShelfFile

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[SubFileInfo](#subfileinfo)>|subFiles|subFiles for this file|Yes|
|_number_|revisionNumber|revision number of this file|Yes|
|_number_|fileSize|fileSize|Yes|
|_string_|publicFileExtension|file-extension of this entry|Yes|
|_number_|id|Unique identifier of the Object|No|
|_string_|publicFileName|file-name (without extension) of this entry|Yes|
|_string_|contentType|detected content type|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|storageHandle|current reference of this file in our storage |Yes|
|Array<[ShelfFileMetaData](#shelffilemetadata)>|metaDataEntries|meta data|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ShelfFileMetaData

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|metaValue|metadaten wert|No|
|_string_|metaKey|metadaten key|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ShelfFileUploadSession


## ShelfShare

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ShelfSharePublishState](#shelfsharepublishstate)|publishState|Veröffentlichungsstatus|No|
|[EavShelfshare](#eavshelfshare)|custom|Freifelder|No|
|_number_|publicUrlDurationInMinutes|wie viele Minuten bleibt dieser resource-pfad zugreifbar (null = unlimited)|No|
|_string_|publicUrlPath|der url-pfadanteil, der öffentlichen zugriff auf diese resource gibt|Yes|
|[ShelfShareAvailability](#shelfshareavailability)|availability|Verfügbarkeit|No|
|_string_|sharedByExternalRef|Externer Verweis auf dieses Share|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|revision|Revision|Yes|
|Array<[ShelfTranslatableText](#shelftranslatabletext)>|translatableTexts|Mehrsprachige Bezeichnungen|No|
|[UUID](#uuid)|appId|App-ID|No|
|_number_|timesUsed|Anzahl der Nutzungen|Yes|
|[ScriptingDate](#scriptingdate)|publicUrlCreatedAt|wann die öffentliche resource erstellt wurde|Yes|
|_string_|eTag|Hash der Revision|Yes|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ShelfShareAvailability

| Value | Description |
| :---- | :---------- |
|UNLIMITED||
|ONE_TIME_USE||


## ShelfSharePublishState

| Value | Description |
| :---- | :---------- |
|SYNCED||
|PENDING||
|DRAFT||


## ShelfTranslatableText

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|metaTitle|Meta-Titel|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|Sprache|No|
|_string_|alternativeText|Alternativer Text|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## Stock

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|amount|Bestand|No|
|[ArticleSerialNumber](#articleserialnumber)|serialNumber|Seriennummer|No|
|_string_|storageBinDisplayName|Anzeigename vom Lagerplatz|Yes|
|_number_|storageBinId|Lagerplatz|No|
|_number_|articleId|Artikel|No|



## StockJournalFactor

| Value | Description |
| :---- | :---------- |
|NONE||
|INCREMENT||
|DECREMENT||


## StockMovementManualApi

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|priceUnit|Preiseinheit, auf die sich der EK bezieht (i.d.R. basePriceUnit des Artikels)|No|
|_string_|note|Bemerkung|No|
|_number_|quantity|Menge|No|
|_string_|serialNumber2|Seriennummer 2, welche gebucht werden soll|No|
|_string_|serialNumber1|Seriennummer 1, welche gebucht werden soll|No|
|_number_|storageBinId|Lagerplatz|No|
|_number_|articleId|Artikel|No|
|_string_|storageLocation|Lagerort (spielt nur bei Zugängen eine Rolle)|No|
|_number_|purchasePrice|EK pro Preiseinheit (siehe priceUnit); spielt nur bei Zugängen eine Rolle|No|
|[ScriptingDate](#scriptingdate)|expiryDate|Haltbarkeitsdatum|No|
|_string_|serialNumberNote|Notiz zur Seriennummer|No|
|[StockJournalFactor](#stockjournalfactor)|factor|Zugang oder Abgang|No|
|_number_|storageId|Lager|No|



## StockTransferApi

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|targetStorageId|Ziel-Lager|No|
|_number_|serialNumberId|Seriennummer|No|
|_string_|note|Bemerkung|No|
|[ScriptingDate](#scriptingdate)|bookDate|Buchungsdatum|No|
|_number_|sourceStorageBinId|Quell-Lagerplatz|No|
|_number_|quantity|Menge|No|
|_number_|sourceStorageId|Quell-Lager|No|
|_number_|targetStorageBinId|Ziel-Lagerplatz|No|
|_number_|articleId|Artikel|No|
|_number_|picklistLineComponentId|Komponente einer Picklistenposition, falls dafür die Buchung stattfindet|No|



## StockTransferResult

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sourceOldStock|Alter Bestand Quellagerplatz|No|
|[ApiObjectReference](#apiobjectreference)|sourceStorage|Quellager|No|
|[ApiObjectReference](#apiobjectreference)|serialNumber|Umgebuchte Seriennummer|No|
|[ApiObjectReference](#apiobjectreference)|targetStorageBin|Ziellagerplatz|No|
|_number_|sourceNewStock|Neuer Bestand Quellagerplatz|No|
|[ApiObjectReference](#apiobjectreference)|targetStorage|Ziellager|No|
|_number_|targetOldStock|Alter Bestand Ziellagerplatz|No|
|_number_|targetNewStock|Neuer Bestand Ziellagerplatz|No|
|[ApiObjectReference](#apiobjectreference)|article|Umgebuchter Artikel|No|
|[ApiObjectReference](#apiobjectreference)|sourceStorageBin|Quellagerplatz|No|



## StorageBinRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|storageRef|Referenz auf das Lager|No|
|_string_|color|Anzeigefarbe|No|
|_string_|displayName|Anzeigename|No|
|_number_|id|ID|No|
|_number_|routePosition|Laufwegposition|No|



## StringCollectorOutputStream
### Description
Speichert die geschriebenen Daten als String.


## SubFileInfo

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|fullPath|Full-Path|No|
|[ApiObjectReference](#apiobjectreference)|shelfFile|dazugehörige FileEntity|No|
|[ScriptingDateTime](#scriptingdatetime)|modifiedAt|file last modified|No|
|_string_|parentPath|Parent-Path|No|
|_string_|name|fileName|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|contentType|Inhaltstyp|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## Supplier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|createCustomerDeliveryWhenDropShipping|Erzeugung Ausgangs-Lieferschein bei Streckengeschäft-Bestellung|No|
|_number_|minimumOrderValue|Mindestbestellwert|No|
|_string_|number|number of supplier|No|
|_boolean_|permissibleForOrderProposal|zulässig für Aufnahme in Bestellvorschläge|No|
|[AccountBillingType](#accountbillingtype)|billingType|Fakturisierungsart Netto oder Brutto|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|accountingNumber|finance account-number of supplier|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_boolean_|taxable|tax able or tax free|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|reference to the delivery method|No|
|[ApiObjectReference](#apiobjectreference)|supplierGroupRef|Lieferantengruppe|No|
|_boolean_|dunning|Mahnen?|No|
|_number_|freeShippingValue|Frachtkostenfrei ab|No|
|_boolean_|active|active true/false|Yes|
|[ApiObjectReference](#apiobjectreference)|responsibleUserRef|reference to responsible user|No|
|_string_|ourNumber|suppliers number for us|No|
|[ApiObjectReference](#apiobjectreference)|paymentTermRef|reference to the payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|dropShippingAllowed|Kennzeichen, ob Streckengeschäft erlaubt|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|reference to the delivery term|No|
|_string_|performanceCountryCode|country code performance country IsoAlpha3|No|
|[ApiObjectReference](#apiobjectreference)|paymentMethodRef|reference to the payment method|No|
|_number_|defaultDeliveryTime|Lieferzeit in (Werk-)Tagen|No|
|_boolean_|orderBlocked|Bestellsperre|No|
|_string_|currencyCode|currency code  IsoAlpha3|No|



## TagDto

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiCreatableReference](#apicreatablereference)|tagGroup|Tag-Gruppe|No|
|_string_|editColor|Farbe in Verwaltungs-GUI|No|
|_string_|color|Farbe für die Anzeige des Tags|No|
|_string_|searchColor|Farbe in Such-GUI|No|
|_string_|label|Beschriftung des Tags|No|
|_number_|id|Unique identifier of the Object|No|
|[TagType](#tagtype)|type|Typ des Tags|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## TagType

| Value | Description |
| :---- | :---------- |
|COMMON||
|ACCOUNT||
|PRODUCT||
|DOCUMENT||
|OPEN_ITEM||
|CRM_COMMON||
|CRM_TASK||
|CRM_DEAL||
|CRM_PROJECT||
|DMS_SHELF_DOCUMENT||


## TaxIdForeignCountry

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|taxId|Tax ID of the company in the associated country|No|
|_string_|countryCode|ISO 2 Code of the country this tax ID is used for|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## TaxIdVerificationState

| Value | Description |
| :---- | :---------- |
|NOT_YET_VERIFIED||
|VALID||
|VALID_WITH_INVALID_ADDRESS||
|INVALID||
|NOT_NEEDED||


## TaxPerformanceLocationType

| Value | Description |
| :---- | :---------- |
|DOMESTIC||
|EUROPEAN_COMMUNITY||
|INTERNATIONAL||


## TaxRate

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|rate|the rate of this tax-rate|No|
|_string_|countryCode|the country code for this tax-rate|No|
|_boolean_|active|is this tax-rate active (selectable)|Yes|
|[ScriptingDate](#scriptingdate)|validFrom|the date, this entry is valid from|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiCreatableReference](#apicreatablereference)|typeRef|a type lable, this tax-rate is associated with. this label is used as a selector in the TaxSchema resource|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## TaxSituationOrigin

| Value | Description |
| :---- | :---------- |
|UNDEFINED||
|USER_DEFINED||
|FROM_CUSTOMER||
|FROM_SUPPLIER||
|FROM_SALES_AGENT||
|FROM_DELIVERY_ADDRESS||
|FROM_DEFAULT_ADDRESS||
|FROM_OWN_ADDRESS||
|FROM_TAX_ID||


## TaxStateType

| Value | Description |
| :---- | :---------- |
|TAX_FREE||
|TAX_ABLE||


## TextEnumCreate

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|visible|Sichtbar|No|
|[EavTextenumeration](#eavtextenumeration)|custom|Custom data|No|
|_boolean_|active|active|Yes|
|_string_|label|Wert der Aufzählung|No|
|_string_|groupKey|Gruppe der Text-Aufzählung|No|



## TextEnumGet

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|visible|Sichtbar|No|
|[EavTextenumeration](#eavtextenumeration)|custom|Custom data|No|
|_boolean_|systemPresetting|System-Vorgabe|Yes|
|_boolean_|active|active|Yes|
|_number_|id|PrimaryKey|Yes|
|_string_|label|Wert der Aufzählung|No|
|_string_|groupKey|Gruppe der Text-Aufzählung|Yes|



## TextPosition

| Value | Description |
| :---- | :---------- |
|HEADER_TEXT||
|FOOTER_TEXT||


## TextTemplate

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[TextTemplate$TextTemplateType](#texttemplatetexttemplatetype)|templateType|Verwendungszweck des Templates|No|
|_boolean_|resolveContentInFollowUpDocument|Soll der Inhalt des Textbausteins erst bei Belegübernahme gezogen werden?|No|
|Array<[ApiObjectReference](#apiobjectreference)>|targetDocumentTypes|Zieldokumenttypen. Geben zusammen mit Vorbelegstypen die Transitionen an für die dieses Template gilt|No|
|Array<[LocalizedTextTemplateContent](#localizedtexttemplatecontent)>|languageSpecificContents|Texte in den angebotenen Sprachen|No|
|Array<[ApiObjectReference](#apiobjectreference)>|sourceDocumentTypes|Vorbelegtypen. Geben zusammen mit Zieldokumenttypen die Transitionen an für die dieses Template gilt|No|
|_boolean_|separateLine|Wird eine eigene DocumentLine für den Baustein angelegt?|No|
|_number_|articleId|article für den diese Templates gelten|No|
|Array<[TextTemplate$UiHintType](#texttemplateuihinttype)>|uiHintTypes|Wann wird ein UI-Hint angezeigt|No|
|_boolean_|active|ist dieser Baustein aktiv?|Yes|
|_string_|label|Bezeichnung des Bausteins|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|transferableIntoSubsequentDocuments|Erzeugte DocumentTexts beim Übergang in Folgebelege übernehmen?|No|
|_number_|accountId|account für den diese Templates gelten|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Verkaufskanal|No|
|[TextPosition](#textposition)|position|Position für den erzeugten DocumentText|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## TextTemplate$TextTemplateType

| Value | Description |
| :---- | :---------- |
|UI_HINT||
|AUTOMATIC||
|MANUAL||


## TextTemplate$UiHintType

| Value | Description |
| :---- | :---------- |
|UI_HINT_MASTER_DATA||
|UI_HINT_DOCUMENT||


## TssSignature

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|externalReference|Externe Referenz|Yes|
|_string_|responseData|Antwortdaten der TSS|Yes|
|_number_|revision|Revision|Yes|
|[TssSignature$TssSignatureStatus](#tsssignaturetsssignaturestatus)|status|Status der Signierung|Yes|



## TssSignature$TssSignatureStatus

| Value | Description |
| :---- | :---------- |
|FINISHED||
|ACTIVE||
|CANCELLED||
|ERROR||


## TunnelRestrictionCode

| Value | Description |
| :---- | :---------- |
|A||
|B||
|C||
|D||
|E||


## UUID


## UnitTypeReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|name|descriptive name|No|
|_number_|id|unit type id|No|
|_string_|abbreviation|unique abbreviation|No|



## UpdateDocumentRequest
### Description
Details zur Aktualisierung eines Belegs

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[Document](#document)|document|Der Beleg|No|
|Array<[AdditionalParameter](#additionalparameter)>|parameters|Zusätzliche Parameter|No|



## User

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|owner|Is owner user?|Yes|
|_string_|lastName|last-name|No|
|Array<[ApiObjectReference](#apiobjectreference)>|roles|Rollen|No|
|_number_|referencedCustomerUserId|Referenzierte Kundenbenutzer ID (CustomerUserEntity.id aus vab-manager)|Yes|
|Array<[ApiObjectReference](#apiobjectreference)>|groups|Gruppen|No|
|_boolean_|active|Is the user active?|Yes|
|[CommonUserType](#commonusertype)|type|User type|No|
|[UUID](#uuid)|appIdentifier|App-Identifier|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|firstName|first-name|No|
|_boolean_|emailVerified|is the email verified|Yes|
|_string_|emailAddress|email-address|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|username|username|No|
|[ScriptingDateTime](#scriptingdatetime)|validTo|Valid to|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ValueType

| Value | Description |
| :---- | :---------- |
|PERCENT||
|FIX||


## VariantAttribute

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|identifier|Eindeutiger Identifier|No|
|_boolean_|active|Aktiv?|Yes|
|_string_|description|Beschreibung|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[VariantDescription](#variantdescription)>|labels|Bezeichnung (mehrsprachig)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantAttributeListing

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Verkaufskanal|No|
|[EavVariantattributelisting](#eavvariantattributelisting)|custom|Freifelder|No|
|[ApiObjectReference](#apiobjectreference)|variantAttributeRef|Variantenattribut|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantDescription

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|label|Bezeichnung|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|Sprache|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantSchema

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[ApiObjectReference](#apiobjectreference)>|eligibleValueRefs|Wählbare Werte|No|
|Array<[ApiObjectReference](#apiobjectreference)>|attributeRefs|Zugeordnete Attribute|No|
|_boolean_|active|Aktiv?|Yes|
|_string_|description|Beschreibung|No|
|_string_|label|Bezeichnung|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sortierung|No|
|[UnitTypeReference](#unittypereference)|unitTypeRef|Referenz auf eine Mengeneinheit|No|
|_boolean_|active|Aktiv?|Yes|
|_number_|id|Unique identifier of the Object|No|
|_string_|abbreviation|Abkürzung|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[VariantDescription](#variantdescription)>|labels|Mehrsprachige Bezeichnungen|No|
|[ApiObjectReference](#apiobjectreference)|attributeRef|Variantenattribut|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantValueListing

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|variantValueRef|Variantenattributwert|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Verkaufskanal|No|
|[EavVariantvaluelisting](#eavvariantvaluelisting)|custom|Freifelder|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantValueReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|variantAttributeRef|Variantenattribut|Yes|
|_string_|description|Beschreibung|Yes|
|_number_|id|Identifier|No|
|_string_|label|Bezeichnung|Yes|



## WithDefaults<List<ArticleIdentifier>>

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_object_|defaultValue|Wert des Default-Sales-Channel|Yes|
|_object_|value|Wert dieses Sales-Channel|No|



## WithDefaults<String>

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_object_|defaultValue|Wert des Default-Sales-Channel|Yes|
|_object_|value|Wert dieses Sales-Channel|No|



## WorkflowInstanceDetails

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|id||No|
|[EWorkflowInstanceState](#eworkflowinstancestate)|state||No|


