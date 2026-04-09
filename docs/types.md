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
|_boolean_|taxLiabilityReversed|Umkehrung der Steuerschuld nach §13b UStG?|No|
|_string_|note|Notiz|No|
|Array<[AccountAddress](#AccountAddress)>|addresses|Alle Adressen außer der Standard-Adresse|No|
|_string_|receivablesSumCurrencyCode|Währung Summe Forderungen IsoAlpha3|Yes|
|_string_|displayName|Kurzbezeichnung zur Darstellung|Yes|
|_boolean_|anonymized|ist der Account anonymisiert?|Yes|
|_string_|localCourt|Zuständiges Amtsgericht|No|
|_string_|remark|Sonderbemerkung|No|
|_string_|companyRegister|Handelsregister-Kennung|No|
|Array<[TaxIdForeignCountry](#TaxIdForeignCountry)>|taxIds|Eine List von Steuernummern|No|
|[AccountManufacturer](#AccountManufacturer)|manufacturer|Manufacturer of this account|No|
|_string_|number|Address-Number|No|
|[BusinessRelationType](#BusinessRelationType)|businessRelationType|Art der Geschäftsbeziehung|No|
|[AccountZoneId](#AccountZoneId)|accountZoneId|Zeitzone (bzw. Zeitzonen-Offset) des Accounts|No|
|[ApiCreatableReference](#ApiCreatableReference)|initialContactTypeRef|first contact type for this account|No|
|[Supplier](#Supplier)|supplier|Supplier of this account|No|
|[SalesAgent](#SalesAgent)|salesAgent|Sales Agent of this account|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|dunningBlock|Mahnsperre|No|
|_string_|payablesSumCurrencyCode|Währung Summe Verbindlichkeiten IsoAlpha3|Yes|
|_string_|loanCurrencyCode|Währung Kreditlimit IsoAlpha3|Yes|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|Array<[AccountType](#AccountType)>|types|list of types, this account is used for (e.g. CUSTOMER, SUPPLIER, |No|
|[AccountAddress](#AccountAddress)|defaultAddress|Default address of account|No|
|_number_|payablesSum|Summe Verbindlichkeiten|Yes|
|_string_|costCenter|Kostenstelle|No|
|_number_|receivablesSum|Summe Forderungen|Yes|
|[ApiCreatableReference](#ApiCreatableReference)|companyLegalRef|companyLegal for this account|No|
|[EavAccount](#EavAccount)|custom|Custom account data|No|
|_string_|taxNumber|tax number/ Steuernummer|No|
|_boolean_|active|Is account active?|Yes|
|[ApiObjectReference](#ApiObjectReference)|responsibleUserRef|verantwortlicher Benutzer|No|
|[ScriptingDate](#ScriptingDate)|initialContactAt|Erstkontakt am|No|
|[CalculationMode](#CalculationMode)|calculationMode|calculation mode of this document|No|
|_string_|languageCode|Sprache des Accounts|No|
|_boolean_|hasActiveDuplicates|Has this Account a possible duplicate|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#TagDto)>|tags|List of tags|No|
|Array<[AccountPerson](#AccountPerson)>|persons|Ansprechpartner|No|
|[AccountPerson](#AccountPerson)|defaultPerson|Standard-Ansprechpartner|No|
|[ApiObjectReference](#ApiObjectReference)|afterPickingTargetDocumentTypeRef|Referenz auf den Ziel-Belegtyp nach der Kommissionierung|No|
|Array<[AccountRelation](#AccountRelation)>|relations|Account-Beziehungen|No|
|[AccountLoanValue](#AccountLoanValue)|loanValue|Aktuell berechnete Werte zum Kreditlimit des Accounts|Yes|
|_string_|currencyCode|currency code  IsoAlpha3|No|
|[ApiObjectReference](#ApiObjectReference)|reportGroupRef|Report-Gruppe, falls vom Standard abweichend|No|
|[Customer](#Customer)|customer|Customer of this account|No|



## AccountAddress

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|salutationRef|salutation for this address|No|
|_string_|city|City|No|
|[ApiObjectReference](#ApiObjectReference)|deviatingDeliveryMethodRef|abweichende Lieferart|No|
|_number_|latitude|latitude|No|
|[EN16931Profile](#EN16931Profile)|en16931Profile|EN16931 Profil|No|
|_string_|remark|Sonderbemerkung|No|
|_string_|parcelProvider|Parcel provider|No|
|[ApiObjectReference](#ApiObjectReference)|regionRef|Region|No|
|[ApiCreatableReference](#ApiCreatableReference)|titleRef|Title|No|
|_string_|postOfficeBox|Post office box|No|
|_string_|countryCode|Country code|No|
|_string_|street|Street|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|longitude|Longitude|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|Array<[ApiCreatableReference](#ApiCreatableReference)>|types|the kind of usages for this address|No|
|_string_|buyerReference|Leitweg-ID|No|
|_string_|globalLocationNumber|GLN/ILN as location identifier for this address|No|
|[ApiObjectReference](#ApiObjectReference)|deviatingPaymentMethodRef|abweichende Zahlungsart|No|
|[EavAccountaddress](#EavAccountaddress)|custom|Custom data|No|
|_string_|postcode|Postcode|No|
|_boolean_|defaultForType|Standard für den Account-Typ|No|
|[CalculationMode](#CalculationMode)|calculationMode|calculation mode of this address|No|
|_string_|languageCode|Sprache der Adresse|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|taxIdentificationNumber|tax identification number/ UST-ID-Nr.|No|
|_string_|additionalAddressLine1|Additional address line1|No|
|_string_|parcelStation|Parcel station|No|
|_string_|additionalAddressLine2|Additional address line2|No|
|_string_|streetAddressNumber|Street address number|No|
|Map<[ContactTypeType](#ContactTypeType),[Contact](#Contact)>|defaultContacts|Default contacts|Yes|
|_string_|parcelStationCustomerNumber|Parcel station customer number|No|
|_string_|name3|Name3|No|
|_string_|homepageUrl|Homepage URL|No|
|[ApiObjectReference](#ApiObjectReference)|deviatingDeliveryTermRef|abweichende Lieferbedingungen|No|
|[TaxIdVerificationState](#TaxIdVerificationState)|taxIdVerificationState|State of the last validation of the tax id number/ UST-ID-Nr.?|Yes|
|_string_|name2|Name2|No|
|_string_|name1|Name1|No|
|[ApiObjectReference](#ApiObjectReference)|deviatingPaymentTermRef|abweichende Zahlungsbedingungen|No|
|Array<[Contact](#Contact)>|contacts|Contacts|No|
|_boolean_|defaultAddress|is this the default address of the account|Yes|



## AccountBankdetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Is active?|Yes|
|_string_|bankPostCode|post-code of the bank|No|
|_string_|bankName|name of the bank|No|
|_string_|accountFrom|account from, if differs from account-address|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|bankCity|city of the bank|No|
|[TaxPerformanceLocationType](#TaxPerformanceLocationType)|mainBankAccountType|Hauptbankverbindung für|No|
|_boolean_|defaultBank|Is default bank?|No|
|[AccountBankdetail$OriginType](#AccountBankdetailOriginType)|originType|origin type|No|
|_string_|iban|IBAN|No|
|_string_|originInfo|origin info|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|bic|BIC|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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


## AccountLoanValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|unconsideredAmount|Nicht berücksichtigter Betrag|No|
|_number_|accountId|Account|No|
|_number_|nonInvoicedDocumentLoan|Betrag aus Aufträgen|No|
|_number_|maximalLoan|Kreditlimit|No|
|_number_|payablesSum|Betrag aus Verbindlichkeiten(negativ)|No|
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
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[AccountManufacturerDescription](#AccountManufacturerDescription)>|labels|Beschreibungen|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[ApiObjectReference](#ApiObjectReference)|salutationRef|salutation for this person|No|
|_string_|lastName|Lastname|No|
|[PersonGenderType](#PersonGenderType)|gender|Gender|No|
|_string_|remark|Sonderbemerkung|No|
|_string_|locale|Locale|No|
|[ApiCreatableReference](#ApiCreatableReference)|titleRef|Title|No|
|[ApiCreatableReference](#ApiCreatableReference)|initialContactTypeRef|First contact type for this account person|No|
|[ApiCreatableReference](#ApiCreatableReference)|jobTypeRef|jobType|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|[EavAccountperson](#EavAccountperson)|custom|Custom data|No|
|_string_|jobArea|Job area|No|
|_boolean_|active|Aktiv?|Yes|
|[ScriptingDate](#ScriptingDate)|dateOfBirth|Date of birth|No|
|_string_|label|Label|No|
|[ScriptingDate](#ScriptingDate)|initialContactAt|Erstkontakt am|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|defaultPerson|Standard-Ansprechpartner|Yes|
|Array<[TagDto](#TagDto)>|tags|List of tags|No|
|Map<[ContactTypeType](#ContactTypeType),[Contact](#Contact)>|defaultContacts|Default contacts|Yes|
|_string_|firstName|First name|No|
|[ApiObjectReference](#ApiObjectReference)|userRef|zugeordneter Benutzer (für eigenen Account)|No|
|_number_|sortOrder|sortierreihenfolge|No|
|_string_|middleName|Middle name|No|
|_string_|comment|Comment|No|
|Array<[Contact](#Contact)>|contacts|List of contacts|No|



## AccountRelation

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiCreatableReference](#ApiCreatableReference)|relationTypeRef|Relation type|No|
|[ApiObjectReference](#ApiObjectReference)|relatedAccountRef|Related account|No|
|_string_|comment|Comment|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|_string_|label|a label|No|
|_number_|id|Identifier|No|



## ApiObjectReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Activ|Yes|
|_string_|description|a short description|Yes|
|_string_|label|a label|Yes|
|_number_|id|Identifier|No|



## Article

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[FabricationOfComponents](#FabricationOfComponents)|fabricationOfComponents|Produktion von Komponenten|No|
|[ArticlePrintLabelSettings](#ArticlePrintLabelSettings)|printLabelSettings|Etikettdruck-Einstellungen|No|
|_string_|customsTariffNumber|Zolltarifnummer|No|
|_boolean_|purchasable|is this product purchasable|No|
|[EavArticleListing](#EavArticleListing)|listingCustom|Product custom data|No|
|[UnitTypeReference](#UnitTypeReference)|baseCapacityUnit|base capacity unit|No|
|_boolean_|sellableWithoutStock|is this product sellable without any quantity at the stock|No|
|[ArticleSerialNumberLabelingType](#ArticleSerialNumberLabelingType)|serialNumberLabelingType|Seriennummern Auszeichnungsart|No|
|_number_|initialAvgPurchasePrice|Durchschnittl. EKP (Startwert)|No|
|_number_|grossVolumeInCubicMeters|gross Volume in cubic meters|No|
|_boolean_|deliverable|Ist der Artikel noch lieferbar?|No|
|[UnitTypeReference](#UnitTypeReference)|productUnit|unit-type of this product|No|
|_number_|warrantyInMonths|Garantie in Monaten|No|
|[Article$Metric](#ArticleMetric)|netMetric|weight and size w.o. packaging|No|
|[ArticleAvailabilityDetermination](#ArticleAvailabilityDetermination)|availabilityDetermination|Optionen zur Berechnung der Verfügbarkeit|No|
|_string_|number|unique product number|No|
|_boolean_|mergeable|is this product mergeable to another package-variant|No|
|[ApiObjectReference](#ApiObjectReference)|dangerousGoodInformationRef|Gefahrgut Informationen|No|
|_boolean_|cashDiscountable|skontierbarer Artikel?|No|
|_boolean_|determineAvgPurchasePrice|dEK berechnen?|No|
|[ApiObjectReference](#ApiObjectReference)|onGoodsArrivalConvertIntoBundleArticleRef|Auflösung in Gebindeartikel bei Wareneingang|No|
|[ApiObjectReference](#ApiObjectReference)|discountGroupRef|Rabattgruppe|No|
|[DropShippingPolicy](#DropShippingPolicy)|dropShippingPolicy|Vorgabe zu Streckengeschäft|No|
|_number_|id|Unique identifier of the Object|No|
|[ArticleSerialType](#ArticleSerialType)|serialType|serial-type of this article|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#ApiObjectReference)|taxSchemaRef|reference to TaxSchema|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryMethodRef|reference to DeliveryMethod|No|
|_boolean_|fabrication|Produktion|No|
|_number_|targetTradingMargin|Soll-Handelsspanne|No|
|_boolean_|active|active|Yes|
|_number_|listingId|die id des Listings|No|
|_string_|languageCode|Einschränkung auf Land|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#TagDto)>|tags|Tags zum Produkt|No|
|_boolean_|solvable|is this product solvable to another package-variant|No|
|[Article$Metric](#ArticleMetric)|grossMetric|weight and size inc. packaging|No|
|_number_|salesUnit|Verkaufseinheit|No|
|_string_|name|name of this product|No|
|[ScriptingDateTime](#ScriptingDateTime)|listingStateChangeTime|die letzte Aktualisierung des listingStates|Yes|
|[CountryReference](#CountryReference)|countryOfOriginRef|Country code|No|
|_number_|workUnitInMinutes|Arbeitseinheit in Minuten|No|
|_boolean_|freelyPickable|Frei kommissionierbar|No|
|[EavArticleListingDescription](#EavArticleListingDescription)|listingDescriptionCustom|description custom data|No|
|_boolean_|taxLiabilityReversed|Umkehrung der Steuerschuld nach §13b UStG?|No|
|_string_|note|Notiz|No|
|[ArticlePickingType](#ArticlePickingType)|pickingType|Erlaubte Arten der Kommissionierung|No|
|_boolean_|printWarningIfNoContingentAvailable|Nur für Kontingentartikel: soll bei der Abrechnung angedruckt werden, dass kein Kontingent vorhanden ist?|No|
|_string_|description|description of this product|No|
|_string_|remark|Sonderbemerkung|No|
|_boolean_|sellable|is this product sellable|No|
|[ApiObjectReference](#ApiObjectReference)|productGroupRef|reference to Product Group|No|
|_number_|capacity|capacity|No|
|_number_|grossSalesPrice|gross sales prices|No|
|_number_|initialLastPurchasePrice|Letzter EKP (Startwert)|No|
|_boolean_|permissibleForOrderProposal|zulässig für Aufnahme in Bestellvorschläge|No|
|_boolean_|shippingLabelPrinting|Versandlabeldruck|No|
|[ApiObjectReference](#ApiObjectReference)|productRef|reference to Product|No|
|_boolean_|isDangerousGood|Artikel ist Gefahrgut|No|
|[ApiObjectReference](#ApiObjectReference)|contingentArticleRef|Kontingentartikel|No|
|_string_|alternativeName|alternative name of this product|No|
|_boolean_|discountable|rabattierbarer Artikel?|No|
|_number_|baseCapacity|base capacity|No|
|[ProductType](#ProductType)|productType|type of this article|No|
|_boolean_|baseArticle|Ist das der Basis-Artikel des Produkts?|No|
|Array<[ArticleIdentifier](#ArticleIdentifier)>|identifiers|all (external) product numbers (SKU, EAN, ...)|No|
|[EavArticle](#EavArticle)|custom|Product custom data|No|
|[ArticleSerialExpiryDateType](#ArticleSerialExpiryDateType)|expiryDateType|Art des Haltbarkeitsdatums|No|
|_boolean_|needsAssessmentOnlyOnReservationBasis|Bedarfsermittlung nur über Reservierungen|No|
|_number_|netSalesPrice|net sales prices|No|
|[UnitTypeReference](#UnitTypeReference)|capacityUnit|capacity unit|No|
|_number_|basePriceUnit|Basispreiseinheit|No|
|_boolean_|listed|soll der Artikel gelistet werden|No|
|_boolean_|onlyManualFabrication|Nur manuelle Produktion|No|
|_boolean_|commissionable|provisionsberechtiger Artikel?|No|
|[ArticlePriceBase](#ArticlePriceBase)|priceBase|Preisbasis|No|
|_boolean_|availableAlone|alleine lieferbarer Artikel?|No|
|[ListingState](#ListingState)|listingState|der aktuelle listing stand|Yes|



## Article$Metric

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sizeX|size|No|
|[UnitTypeReference](#UnitTypeReference)|sizeUnit|size unit|No|
|_number_|weight|weight|No|
|_number_|sizeY|size|No|
|_number_|sizeZ|size|No|
|[UnitTypeReference](#UnitTypeReference)|weightUnit|weight unit|No|



## ArticleAvailabilityDetermination

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ArticleAvailabilityDetermination$Operation](#ArticleAvailabilityDeterminationOperation)|ordered|wie werden Bestellt-Mengen behandelt|No|
|[ArticleAvailabilityDetermination$Operation](#ArticleAvailabilityDeterminationOperation)|reserved|wie werden Reserviert-Mengen behandelt|No|
|[ArticleAvailabilityDetermination$Operation](#ArticleAvailabilityDeterminationOperation)|inStock|wie wird der Bestand behandelt|No|
|[ArticleAvailabilityDetermination$Operation](#ArticleAvailabilityDeterminationOperation)|inPicking|wie werden Mengen in Kommissionierung behandelt|No|
|[ArticleAvailabilityDetermination$Operation](#ArticleAvailabilityDeterminationOperation)|reporting|wie werden Meldebestände behandelt|No|



## ArticleAvailabilityDetermination$Operation

| Value | Description |
| :---- | :---------- |
|IGNORE||
|ADD||
|SUBTRACT||


## ArticleIdentifier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|name|identifier type|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|value|identifier|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ArticleListing

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|WithDefaults<List<[ArticleIdentifier](#ArticleIdentifier)>>|identifiers|all (external) article numbers (SKU, EAN, ...)|No|
|_boolean_|sellableWithoutStock|is this product sellable without any quantity at the stock|No|
|[EavArticleListing](#EavArticleListing)|custom|custom data|No|
|[ArticleListing$CustomFieldWithDefaults](#ArticleListingCustomFieldWithDefaults)|descriptionCustom|description custom data|No|
|_WithDefaults<String>_|description|description of this article|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|proposedLowestPriceGross|Niedrigster Brutto-Preis der letzten 30 Tage (vom System ermittelt)|Yes|
|_number_|customLowestPriceGross|Niedrigster Brutto-Preis der letzten 30 Tage (benutzerdefinierte Eingabe)|No|
|[ApiObjectReference](#ApiObjectReference)|salesChannelRef|der Sales Channel|No|
|_boolean_|listed|soll der Artikel gelistet werden|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|categoryRefs|Kategorien, denen dieses Listing zugeordnet ist|No|
|_WithDefaults<String>_|name|name of this article|No|
|[ScriptingDateTime](#ScriptingDateTime)|listingStateChangeTime|die letzte aktualisierung des listingStates|Yes|
|_number_|id|Unique identifier of the Object|No|
|_WithDefaults<String>_|alternativeName|alternative name of this article|No|
|_number_|proposedLowestPriceNet|Niedrigster Netto-Preis der letzten 30 Tage (vom System ermittelt)|Yes|
|_number_|customLowestPriceNet|Niedrigster Netto-Preis der letzten 30 Tage (benutzerdefinierte Eingabe)|No|
|[ListingState](#ListingState)|listingState|der aktuelle listing stand|Yes|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ArticleListing$CustomFieldWithDefaults

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[EavArticleListingDescription](#EavArticleListingDescription)|defaultValue|Wert des Default-Sales-Channel|Yes|
|[EavArticleListingDescription](#EavArticleListingDescription)|value|Wert dieses Sales-Channel|No|



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
|[ArticlePrintLabelCalculationMode](#ArticlePrintLabelCalculationMode)|outgoingCalculationMode|Warenausgang: Bestimmung der Druckmenge|No|
|[ArticlePrintLabelCalculationMode](#ArticlePrintLabelCalculationMode)|incomingCalculationMode|Wareneingang: Bestimmung der Druckmenge|No|
|_number_|incomingPrintQuantity|Wareneingang: Druckmenge|No|
|[ApiObjectReference](#ApiObjectReference)|report|Der Report zum Etikett|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[ScriptingDate](#ScriptingDate)|expiryDate|Haltbarkeitsdatum|No|
|_string_|note|Notiz|No|
|_string_|serialNumber2|Seriennummer 2|No|
|_string_|serialNumber1|Seriennummer 1|No|
|[ApiObjectReference](#ApiObjectReference)|articleRef|Artikel|No|
|_string_|udi|Unique Device Identifier (UDI)|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|DOUBLE_SERIAL_NUMBER||


## ArticleSupplier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|accountDisplayName|Anzeigename des Accounts|No|
|_boolean_|useSupplierArticleDescription|Soll die abweichende Produktbeschreibung verwendet werden (z.B. in Belegen)|No|
|_number_|supplierReportingStock|Lieferanten-Meldebestand|No|
|_boolean_|useSupplierArticleIdentifier|Soll der abweichende Produktidentifier verwendet werden (z.B. in einer Scanner-Erfassung)|No|
|_number_|deliveryTime|Lieferzeit in (Werk-)Tagen|No|
|_boolean_|useSupplierArticleNumber|Soll die abweichende Produktnummer verwendet werden (z.B. in Belegen)|No|
|_number_|minimumOrderQuantity|Mindestbestellmenge|No|
|[UnitTypeReference](#UnitTypeReference)|productUnit|Mengeneinheit|No|
|_boolean_|useSupplierArticleName|Soll die abweichende Produktbezeichnung verwendet werden (z.B. in Belegen)|No|
|_number_|defaultGrossPrice|Standardpreis Brutto|No|
|_string_|articleNumber|Artikelnummer|Yes|
|[ApiObjectReference](#ApiObjectReference)|discountGroupRef|Rabattgruppe|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|_number_|packagingUnit|Verpackungseinheit|No|
|_string_|articleName|Referenced Article name|No|
|Array<[ProductPrice](#ProductPrice)>|productPrices|Lieferanten-Preise|No|
|_number_|articleId|Referenced Article|No|
|_boolean_|active|Aktiv?|No|
|_boolean_|mainSupplier|Hauptlieferant|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|dropShippingAllowed|Kennzeichen, ob Streckengeschäft erlaubt|No|
|_string_|supplierArticleName|Abweichende Produktbezeichnung|No|
|_string_|supplierArticleDescription|Abweichende Produktbeschreibung|No|
|_number_|defaultNetPrice|Standardpreis Netto|No|
|_number_|purchaseUnit|Einkaufseinheit|No|
|_boolean_|orderOnComponentBase|Sollen Baugruppen auf Komponenten-Basis bestellt werden?)|No|
|_number_|accountId|Referenced Supplier-Account|No|
|_string_|supplierArticleIdentifier|Abweichender Produktidentifer (z.B. Barcode)|No|
|_string_|supplierArticleNumber|Abweichende Produktnummer|No|
|[ArticlePrintLabelSettings](#ArticlePrintLabelSettings)|supplierPrintLabelSettings|Etikettdruck-Einstellungen|No|



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


## CollectiveInvoicePeriodicity

| Value | Description |
| :---- | :---------- |
|MANUAL||


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
|[EavContact](#EavContact)|custom|Freifeld|No|
|_number_|ctId|Type identifier|No|
|_string_|ctLabel|Contact label|No|
|_number_|id|Unique identifier of the Object|No|
|[ContactTypeType](#ContactTypeType)|ctType|Contact type|No|
|_string_|value|A Value|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|_string_|label|Bezeichnung des Landes|Yes|
|_number_|id|ID des Landes|No|



## CreateNewDocumentRequest
### Description
Details zur Erstellung eines neuen Belegs

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|documentTypeLabel|Belegart|No|
|[EDocumentCategory](#EDocumentCategory)|defaultDocumentTypeByCategory|Standard-Belegart der Kategorie verwenden|No|
|[RequestDocument](#RequestDocument)|document|Details zum Beleg|No|
|Array<[AdditionalParameter](#AdditionalParameter)>|parameters|Zusätzliche Parameter|No|



## CrmActivity

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|notes|Notizen|No|
|_number_|durationInSeconds|Dauer der Aktivität in Sekunden|No|
|[CrmActivityType](#CrmActivityType)|type|Aktivitätsart|No|
|[CrmActivityBillingType](#CrmActivityBillingType)|billingType|Art der Abrechnung dieser Aktivität|No|
|_number_|durationToBillInSeconds|tatsächliche Dauer|No|
|[ScriptingDateTime](#ScriptingDateTime)|plannedStartDateTime|geplante Startzeit|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#ApiObjectReference)|billingDocumentLineRef|Abrechnungsbelegposition|Yes|
|_boolean_|email|Handelt es sich bei der Aktivität um eine E-Mail|Yes|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|_number_|plannedDurationInSeconds|geplante Dauer|No|
|_boolean_|internalBilled|Aktivität intern abgerechnet?|Yes|
|[EavCrmactivity](#EavCrmactivity)|custom|Freie Felder der CRM-Aktivität|No|
|_number_|billingDiscount|Rabatt zur Abrechnung|No|
|_boolean_|published|Ist die Aktivität veröffentlicht|No|
|[ApiObjectReference](#ApiObjectReference)|accountPersonRef|Ansprechpartner|No|
|_boolean_|billable|Abrechenbar?|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#ApiObjectReference)|userRef|Von welchem User ist diese Aktivität? Wenn NULL dann handelt es sich um eine System-Aktivität|No|
|[ScriptingDateTime](#ScriptingDateTime)|startDateTime|tatsächliche Startzeit|No|
|_boolean_|system|Handelt es sich um eine System-Aktivität?|Yes|
|_string_|comment|Inhalt dieser Aktivität|No|
|[ApiObjectReference](#ApiObjectReference)|accountRef|Zu welcher Adresse gehört diese Aktivität|No|
|[CrmObjectRef](#CrmObjectRef)|crmParent|Zu welchem CRM-Objekt gehört diese Aktivität|No|



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
|Array<[PossibleUsingType](#PossibleUsingType)>|possibleUsingTypes|Mögliche Typen, wo diese Aktivitätsart verwendet werden kann|No|
|_boolean_|active|Aktiv?|Yes|
|_string_|description|Beschreibung|No|
|_boolean_|emailArchiving|Für "E-Mail-Archivieren"?|No|
|_string_|label|Bezeichnung|No|
|_boolean_|billable|Abrechenbar?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|defaultForComments|Standard für Kommentare?|No|
|_boolean_|emailProcessing|Für "E-Mail-Bearbeitung"?|No|
|_number_|sortOrder|Sortierreihenfolge|No|
|[CrmActivityBillingType](#CrmActivityBillingType)|defaultBillingType|Standard-Abrechnungsart|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|canBePublished|Darf die Aktivität veröffentlicht werden?|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## CrmChecklistItem

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|checked|Ist das Element "angehakt"?|No|
|_string_|memo|Text des Checklisten-Elements|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## CrmDeal

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|plannedInvestmentSum|Geplante Investitionssumme|No|
|[ApiObjectReference](#ApiObjectReference)|closingReasonRef|Abschlußgrund|No|
|_string_|notes|Notizen|No|
|[ScriptingDate](#ScriptingDate)|plannedPerformanceDate|Geplantes Leistungs-Datum|No|
|_string_|detailedClosingReason|Freier/Detaillierter Abschlußgrund|No|
|_string_|description|Notiz/Beschreibung|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|observerRefs|Beobachter|No|
|[ApiObjectReference](#ApiObjectReference)|responsibleCustomerPersonRef|Hauptverantwortlicher Ansprechpartner Kunde|No|
|[ApiObjectReference](#ApiObjectReference)|priorityRef|Priorität der Aufgabe|No|
|_string_|number|Aufgaben-Nummer|Yes|
|[ApiObjectReference](#ApiObjectReference)|mainResponsibleUserRef|Verantwortlicher Benutzer|No|
|[ApiObjectReference](#ApiObjectReference)|stateRef|Status der Aufgabe|No|
|[ApiObjectReference](#ApiObjectReference)|topicRef|Thema|No|
|[ScriptingDate](#ScriptingDate)|plannedClosingDate|Geplantes Abschluss-Datum|No|
|Array<[DocumentRef](#DocumentRef)>|salesDocumentRefs|Verkaufsbelege|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#ApiObjectReference)|typeRef|Typ der Aufgabe|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#ApiObjectReference)|assignedUserRef|Zu Erledigen von Benutzer (zugeordneter Benutzer)|No|
|Array<[CrmParticipant](#CrmParticipant)>|additionalParticipantsOfCustomer|Weitere Teilnehmer vom Auftraggeber|No|
|_number_|chance|Chance (in Prozent)|No|
|[ApiObjectReference](#ApiObjectReference)|assignedByUserRef|Zugewiesen von|No|
|_string_|label|Aufgabentitel|No|
|_boolean_|processedByWorkflow|In Workflow-Verarbeitung?|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[EavCrmdeal](#EavCrmdeal)|customField|Freie Felder des CRM-Deals|No|
|Array<[CrmObjectRef](#CrmObjectRef)>|childRefs|Untergeordnete CRM-Objekt|No|
|[CrmObjectRef](#CrmObjectRef)|parentRef|Übergeordnetes CRM-Objekt|No|
|Array<[TagDto](#TagDto)>|tags|Tags|No|
|[ApiObjectReference](#ApiObjectReference)|assignedGroupRef|Zu Erledigen von Benutzergruppe (zugeordnete Benutzergruppe)|No|
|Array<[CrmParticipant](#CrmParticipant)>|additionalParticipantsOfContractor|Weitere Teilnehmer vom Auftragnehmer|No|
|[CrmDealClosingType](#CrmDealClosingType)|closingType|Art des Abschluß|No|
|[ApiObjectReference](#ApiObjectReference)|mainResponsibleGroupRef|Verantwortlicher Benutzer|No|
|[ApiObjectReference](#ApiObjectReference)|accountRef|Adresse, zu welcher die Aufgabe gehört|No|
|[ScriptingDateTime](#ScriptingDateTime)|nextPlannedContactDate|Nächster geplanter Kontakt|No|
|[ApiObjectReference](#ApiObjectReference)|salesAgentAccountRef|Vertreterinformationen|No|



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
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## CrmObjectRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Nummer|No|
|_string_|description|Beschreibung|No|
|[CrmSubType](#CrmSubType)|subType|Sub-Type|No|
|_string_|label|Bezeichung|No|
|_number_|id|ID|No|
|[CrmState](#CrmState)|state|Status|No|
|[CrmType](#CrmType)|type|CRM-Typ|No|



## CrmParticipant

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|description|Beschreibung|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#ApiObjectReference)|accountPersonRef|Ansprechpartner|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## CrmPriority

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sortierreihenfolge|No|
|[CrmPriorityType](#CrmPriorityType)|crmPriorityType|Prioritäten-Typ|No|
|_string_|label|Bezeichnung|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiCreatableReference](#ApiCreatableReference)|portalEnumRef|portalEnum for this priority|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[ScriptingDate](#ScriptingDate)|actualProjectPeriodTo|Tatsächlicher Projektzeitraum (bis)|No|
|[ScriptingDate](#ScriptingDate)|actualProjectPeriodFrom|Tatsächlicher Projektzeitraum (von)|No|
|_string_|description|Notiz/Beschreibung|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|observerRefs|Beobachter|No|
|[ApiObjectReference](#ApiObjectReference)|priorityRef|Priorität der Aufgabe|No|
|[CrmParticipant](#CrmParticipant)|projectManagerOfContractor|Projektleiter vom Auftragnehmer|No|
|[ApiObjectReference](#ApiObjectReference)|phaseRef|Phase|No|
|_string_|number|Aufgaben-Nummer|Yes|
|[ApiObjectReference](#ApiObjectReference)|stateRef|Status der Aufgabe|No|
|_number_|billedTimes|Abgerechnete Zeiten in Sekunden|Yes|
|Array<[DocumentRef](#DocumentRef)>|purchaseDocumentRefs|Einkaufsbelege|No|
|[ScriptingDate](#ScriptingDate)|plannedProjectPeriodFrom|Geplanter Projektzeitraum (von)|No|
|Array<[DocumentRef](#DocumentRef)>|salesDocumentRefs|Verkaufsbelege|No|
|_number_|id|Unique identifier of the Object|No|
|[ScriptingDate](#ScriptingDate)|contractConclusionDate|Datum Vertragsabschluss|No|
|[ApiObjectReference](#ApiObjectReference)|typeRef|Typ der Aufgabe|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|[CrmParticipant](#CrmParticipant)|projectManagerOfCustomer|Projektleiter vom Auftraggeber|No|
|Array<[CrmParticipant](#CrmParticipant)>|additionalParticipantsOfCustomer|Weitere Teilnehmer vom Auftraggeber|No|
|_number_|effortCommissioned|Gesamt beauftragte Zeit in Sekunden|No|
|_number_|effortEstimation|Gesamt Aufwandsschätzung in Sekunden|No|
|Array<[CrmChecklistItem](#CrmChecklistItem)>|checklist|Checkliste: Memo + Checked|No|
|_string_|label|Aufgabentitel|No|
|_boolean_|processedByWorkflow|In Workflow-Verarbeitung?|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[EavCrmproject](#EavCrmproject)|customField|Freie Felder des CRM-Projekten|No|
|Array<[CrmObjectRef](#CrmObjectRef)>|childRefs|Untergeordnete CRM-Objekt|No|
|[CrmObjectRef](#CrmObjectRef)|parentRef|Übergeordnetes CRM-Objekt|No|
|Array<[TagDto](#TagDto)>|tags|Tags|No|
|Array<[CrmParticipant](#CrmParticipant)>|additionalParticipantsOfContractor|Weitere Teilnehmer vom Auftragnehmer|No|
|[ApiObjectReference](#ApiObjectReference)|accountRef|Adresse, zu welcher die Aufgabe gehört|No|
|[ScriptingDate](#ScriptingDate)|plannedProjectPeriodTo|Geplanter Projektzeitraum (bis)|No|



## CrmReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|reference|Referenz|No|
|[CrmReferenceType](#CrmReferenceType)|referenceType|Typ der Referenz|No|



## CrmReferenceType

| Value | Description |
| :---- | :---------- |
|ARTICLE||
|DOCUMENT_LINE||
|OPEN_ITEM||


## CrmReminder

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|crmId|ID des CRM Objekts|No|
|_string_|note|Notiz zur Erinnerung|No|
|[ApiObjectReference](#ApiObjectReference)|userRef|Wer soll erinnert werden|No|
|_boolean_|critical|Kritische Erinnerung?|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ScriptingDateTime](#ScriptingDateTime)|remindAt|Erinnerungszeitpunkt|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## CrmState

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|active|Yes|
|_string_|description|Beschreibung|No|
|_boolean_|needsCommentOnPositiveFinish|Kommentar bei positivem Abschluß erforderlich|No|
|_string_|label|Bezeichnung|No|
|[ApiCreatableReference](#ApiCreatableReference)|portalEnumRef|portalEnum for this state|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|finishState|Handelt es sich um einen End-Status|No|
|_number_|sortOrder|Sortierreihenfolge|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|readyToBill|Handelt es sich um einen "Bereit zur Abrechnung"-Status|No|
|_boolean_|needsCommentOnNegativeFinish|Kommentar bei negativem Abschluß erforderlich|No|
|_boolean_|startState|Handelt es sich um einen Anfang-Status|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## CrmTask

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[DocumentRef](#DocumentRef)|customerOfferRef|Angebot|No|
|Array<[CrmReminder](#CrmReminder)>|reminders|Liste von Erinnerungen|No|
|_string_|notes|Notizen|No|
|Array<[CrmReference](#CrmReference)>|references|Referenzen|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|observerRefs|Beobachter|No|
|[ApiObjectReference](#ApiObjectReference)|responsibleCustomerPersonRef|Hauptverantwortlicher Ansprechpartner Kunde|No|
|[ApiObjectReference](#ApiObjectReference)|priorityRef|Priorität der Aufgabe|No|
|_string_|number|Aufgaben-Nummer|Yes|
|[ApiObjectReference](#ApiObjectReference)|mainResponsibleUserRef|Verantwortlicher Benutzer|No|
|[DocumentRef](#DocumentRef)|customerOrderRef|Auftrag|No|
|_number_|internalRecordedTimes|Erfasste Zeiten in Sekunden (intern)|Yes|
|Array<[DocumentRef](#DocumentRef)>|purchaseDocumentRefs|Einkaufsbelege|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|Array<[CrmParticipant](#CrmParticipant)>|additionalParticipantsOfCustomer|Weitere Teilnehmer vom Auftraggeber|No|
|[ApiObjectReference](#ApiObjectReference)|assignedByUserRef|Zugewiesen von|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[EavCrmtask](#EavCrmtask)|customField|Freie Felder der CRM-Aufgabe|No|
|Array<[CrmObjectRef](#CrmObjectRef)>|childRefs|Untergeordnete CRM-Objekt|No|
|Array<[TagDto](#TagDto)>|tags|Tags|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|duplicatedByTaskRefs|Wird von diesen Aufgaben dupliziert|No|
|[ApiObjectReference](#ApiObjectReference)|assignedGroupRef|Zu Erledigen von Benutzergruppe (zugeordnete Benutzergruppe)|No|
|[ScriptingDateTime](#ScriptingDateTime)|dueDateTime|Fälligkeit|No|
|[ApiObjectReference](#ApiObjectReference)|mainResponsibleGroupRef|Verantwortlicher Benutzer|No|
|[ApiObjectReference](#ApiObjectReference)|accountRef|Adresse, zu welcher die Aufgabe gehört|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|blockedByTaskRefs|Wird von diesen Aufgaben blockiert|No|
|_number_|externalBilledTimes|Abgerechnete Zeiten in Sekunden (extern)|Yes|
|Array<[ApiObjectReference](#ApiObjectReference)>|relatedToTaskRefs|Steht mit diesen Aufgaben im Zusammenhang|No|
|_string_|description|Notiz/Beschreibung|No|
|[ApiObjectReference](#ApiObjectReference)|stateRef|Status der Aufgabe|No|
|[CrmTaskBillingType](#CrmTaskBillingType)|billingType|Abrechnungsart|No|
|Array<[DocumentRef](#DocumentRef)>|billingDocumentRefs|Abrechnungen|No|
|Array<[DocumentRef](#DocumentRef)>|salesDocumentRefs|Verkaufsbelege|No|
|[ApiObjectReference](#ApiObjectReference)|typeRef|Typ der Aufgabe|No|
|[ApiObjectReference](#ApiObjectReference)|assignedUserRef|Zu Erledigen von Benutzer (zugeordneter Benutzer)|No|
|_number_|externalRecordedTimes|Erfasste Zeiten in Sekunden (extern)|Yes|
|_number_|effortCommissioned|Beauftragte Zeit in Sekunden|No|
|_number_|effortEstimation|Aufwandsschätzung in Sekunden|No|
|[CrmTaskBillingRule](#CrmTaskBillingRule)|billingRule|Abrechnungsregel|No|
|Array<[CrmChecklistItem](#CrmChecklistItem)>|checklist|Checkliste: Memo + Checked|No|
|_string_|label|Aufgabentitel|No|
|_boolean_|processedByWorkflow|In Workflow-Verarbeitung?|Yes|
|_number_|internalBilledTimes|Abgerechnete Zeiten in Sekunden (intern)|Yes|
|[CrmObjectRef](#CrmObjectRef)|parentRef|Übergeordnetes CRM-Objekt|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|blocksTaskRefs|Blockiert diese Aufgaben|No|
|_boolean_|publish|Soll die Aufgabe veröffentlicht werden?|No|
|Array<[CrmParticipant](#CrmParticipant)>|additionalParticipantsOfContractor|Weitere Teilnehmer vom Auftragnehmer|No|
|_number_|progress|Fortschritt in Prozent|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|duplicatesTaskRefs|Duplizierte Aufgaben|No|



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
|[ECrmSpecialDocumentRefType](#ECrmSpecialDocumentRefType)|specialRefType|Typ der Belegreferenz|Yes|
|[EDocumentQualifier](#EDocumentQualifier)|documentQualifier|Beleg-Qualifizierer|Yes|
|[DocumentRef](#DocumentRef)|documentRef|Belegreferenz|Yes|



## CrmTypedDocumentRefList
### Description
Liste von CRM-Belegreferenzen


## CurrencyReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|symbol|Symbol der Währung|Yes|
|_string_|isoAlpha3|IsoAlpha3-Code der Währung|No|
|_string_|label|Bezeichnung der Währung|Yes|
|_number_|id|ID der Währung|No|



## Customer

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[AccountOrderStackProcessingType](#AccountOrderStackProcessingType)|stackProcessingType|Option für die Stapelverarbeitung|No|
|[ApiObjectReference](#ApiObjectReference)|customerGroupRef|reference to customer group|No|
|_number_|maximalLoan|Kreditlimit|No|
|_number_|maxDeliveries|Maximal mögliche Lieferungen|No|
|_boolean_|collectiveBillable|collective billable|No|
|_boolean_|deliveryBlocked|Hat der Kunde eine Liefersperre?|No|
|_string_|number|number of customer|No|
|[AccountBillingType](#AccountBillingType)|billingType|presetting of billing type|No|
|_number_|stackProcessingPriority|Priorität für die Stapelverarbeitung|No|
|[ApiObjectReference](#ApiObjectReference)|productPriceGroupRef|reference to product price group|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|accountingNumber|finance account-number of customer|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|_boolean_|taxable|tax able or tax free|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryMethodRef|reference to the delivery method|No|
|_boolean_|active|active true/false|Yes|
|[ApiObjectReference](#ApiObjectReference)|responsibleUserRef|reference to responsible user|No|
|_string_|ourNumber|customers number for us|No|
|[ApiObjectReference](#ApiObjectReference)|paymentTermRef|reference to the payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryTermRef|reference to the delivery term|No|
|_string_|performanceCountryCode|country code performance country IsoAlpha3|No|
|[CollectiveInvoicePeriodicity](#CollectiveInvoicePeriodicity)|collectiveInvoicePeriodicity|periodicity of collective invoice|No|
|[ApiObjectReference](#ApiObjectReference)|paymentMethodRef|reference to the payment method|No|
|_string_|currencyCode|currency code  IsoAlpha3|No|



## DealNotificationEventConfig

| Value | Description |
| :---- | :---------- |
|DEAL_CHANGED||
|DEAL_COMMENT_MENTIONED||
|DEAL_CLOSED_LOOSE||
|DEAL_CLOSED_WON||


## DeliveryMethod

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|forwardEmailToShipper|E-Mail an Versender übergeben|No|
|_boolean_|splitIntoNewDocument|Soll eine Position mit dieser Liefermethode in einen Lieferbeleg mit dieser Methode übernommen werden|No|
|_number_|minWeightPerParcel|Min. Gewicht pro Paket|No|
|_number_|deliveryTime|Versanddauer in Tagen|No|
|_string_|printDescription|printDescription|No|
|_number_|maxWeightPerParcel|Max. Gewicht pro Paket|No|
|_boolean_|active|Aktiv?|Yes|
|_string_|description|description|No|
|_string_|label|label for this delivery method|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|forwardPhoneToShipper|Telefon an Versender übergeben|No|
|[UnitTypeReference](#UnitTypeReference)|defaultSizeUnit|Standardlängeneinheit|No|
|Array<[DocumentTypeTerm](#DocumentTypeTerm)>|translations|translations|No|
|[DeliveryMethodParcelWeightSource](#DeliveryMethodParcelWeightSource)|parcelWeightSource|Quelle für Paketgewicht|No|
|_Array<string>_|validCountryCodes|Gültige Ländercodes|No|
|_number_|vdsCarrierId|Versand-Anbieter|No|
|[UnitTypeReference](#UnitTypeReference)|defaultWeightUnit|Standardgewichtseinheit|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[CalculateFreightChargesWithType](#CalculateFreightChargesWithType)|calculateFreightChargesWithType|information, when the shipping charges should be calculated|No|
|_string_|languageCode|Sprache des Accounts|No|
|_boolean_|freightChargesPerParcel|calculate shipping charges per parcel|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[CalculateFreightChargesFromType](#CalculateFreightChargesFromType)|calculateFreightChargesFromType|information, how the shipping charges should be calculated|No|
|Array<[DocumentTypeTerm](#DocumentTypeTerm)>|translations|translations|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|deliveryMethodRefs|Lieferarten|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|freeShippingNetValue|free shipping net value|No|
|[ApiObjectReference](#ApiObjectReference)|shippingCostArticleRef|Versandkostenartikel|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## Document

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDate](#ScriptingDate)|confirmedDeliveryDateEnd|Bestätigtes Lieferende (nur wenn bestätigtes Lieferdatum gesetzt)|No|
|[ApiObjectReference](#ApiObjectReference)|billingAccountRef|Referenz zum Rechnungskonto|No|
|_string_|externalNumber|Externe Belegnummer|No|
|Array<[DocumentTax](#DocumentTax)>|taxes|Steuerzusammenfassung für diesen Beleg|Yes|
|_number_|baseTotalNetPrice|Gesamtpreis - Netto Basiswährung|No|
|[DocumentPosDetail](#DocumentPosDetail)|posDetail|Quittungsdetails|No|
|[ScriptingDate](#ScriptingDate)|confirmedDeliveryDate|Bestätigtes Lieferdatum|No|
|_string_|number|Belegnummer|No|
|_number_|totalVat|Gesamte Mehrwertsteuer|Yes|
|_string_|orderedBy|Name der bestellenden Person|No|
|[ApiObjectReference](#ApiObjectReference)|defaultStorageRef|Standardlager für neue Positionen|No|
|[DocumentAddress](#DocumentAddress)|deliveryAddress|Lieferadresse|No|
|_number_|stackProcessingPriority|Priorität in der Stapelverarbeitung|No|
|_number_|totalLinePriceModifier|Positionsrabatt gesamt [BRUTTO, NETTO]|Yes|
|_number_|id|Unique identifier of the Object|No|
|_number_|posReceiptBalance|Quittung: Saldo
positiver Wert: Betrag der noch zu zahlen ist
negativer Wert: überzahlter Betrag / Rückgeld
|No|
|_number_|deliveryQuantityPackages|Voraussichtliche Paketanzahl (nur Info)|No|
|_string_|referencedOrderNumber|Bestellnummer aus Vorbeleg|Yes|
|_string_|buyerReference|Leitweg-ID|No|
|_boolean_|taxable|Steuerpflichtig oder steuerfrei|No|
|_number_|baseTotalLinePriceModifier|Preisanpassungen - Belegpositionssumme Basiswährung|No|
|_number_|baseDepositPaymentAmount|Vorkassebetrag Basiswährung|No|
|_number_|totalBeforeModifier|Gesamtpreis vor Rabatt [BRUTTO, NETTO]|Yes|
|[ApiObjectReference](#ApiObjectReference)|responsibleUserRef|Referenz auf verantwortlichen Benutzer|No|
|_string_|salesAgentNumber|Vertreternummer|Yes|
|_string_|languageCode|Sprache|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#TagDto)>|tags|Tags für diesen Beleg|No|
|_number_|accountId|ID der Organisationseinheit|No|
|_string_|sourceCountryCode|Länderkennzeichen Ursprungsland (ISO Alpha-3)|No|
|_string_|performanceCountryCode|Länderkennzeichen Leistungsland (ISO Alpha-3)|No|
|[ScriptingDate](#ScriptingDate)|depositPaymentDate|Vereinbartes Anzahlungsdatum|Yes|
|_number_|shippingCostSum|Summe der Versandkosten (netto/brutto)|Yes|
|[DocumentQualifier](#DocumentQualifier)|qualifier|Art des Belegs|Yes|
|[ApiObjectReference](#ApiObjectReference)|paymentMethodRef|Referenz auf Zahlungsmethode|No|
|[ScriptingDate](#ScriptingDate)|documentDate|Belegdatum|No|
|_boolean_|taxLiabilityReversed|Reverse-Charge-Verfahren nach §13b UStG?|No|
|[ScriptingDate](#ScriptingDate)|shippingDate|Versanddatum|No|
|_string_|supplierNumber|Lieferantennummer|Yes|
|_number_|totalGrossPrice|Gesamtpreis brutto|Yes|
|_boolean_|deliveryApproved|Ist der Beleg zur Lieferung freigegeben?|No|
|Array<[DocumentPosPayment](#DocumentPosPayment)>|posPayments|Kassen-Zahlungspositionen|No|
|_boolean_|posReceiptPayed|Ist die Quittung bezahlt
true wenn die Quittung bezahlt ist
|No|
|_string_|ourCustomerNumber|Kundennummer beim Lieferanten|Yes|
|_number_|maxDeliveries|Maximal mögliche Lieferungen|No|
|_number_|posReceiptPaymentSum|Quittung: Summe Zahlbetrag|No|
|[ScriptingDate](#ScriptingDate)|deliveryDate|Voraussichtliches Lieferdatum|No|
|[ScriptingDate](#ScriptingDate)|deliveryDateEnd|Voraussichtliches Lieferende (nur wenn Lieferdatum gesetzt)|No|
|[DocumentContractDetail](#DocumentContractDetail)|contractDetail|Vertragsdetails|No|
|_number_|cashDiscountableTotalGrossPrice|Skontofähiger Bruttogesamtbetrag|Yes|
|_boolean_|paymentPlan|Zahlungsplan vorhanden?|No|
|[DocumentFabricationDetail](#DocumentFabricationDetail)|fabricationDetail|Produktionsdetails|No|
|_string_|accountNumber|Kontonummer der zugehörigen Organisationseinheit|Yes|
|[CalculationMode](#CalculationMode)|calculationMode|Berechnungsmodus|No|
|_boolean_|processedByWorkflow|Wird vom Workflow verarbeitet?|Yes|
|[PaymentTermRef](#PaymentTermRef)|paymentTermRef|Referenz auf Zahlungsbedingung|No|
|_number_|baseTotalDocumentPriceModifier|Preisanpassungen - Beleg Basiswährung|No|
|_boolean_|forwardPhoneToShipper|Telefon an Versender übergeben|No|
|Array<[DocumentText](#DocumentText)>|texts|Liste der Belegtexte|No|
|_boolean_|collectiveInvoice|Sammelrechnung?|No|
|_string_|currencyCode|Währung (ISO-Code, Alpha-3)|No|
|[DocumentAddress](#DocumentAddress)|defaultAddress|Standardadresse|No|
|[ScriptingDate](#ScriptingDate)|performanceDate|Leistungsdatum|No|
|[OrderStackProcessingType](#OrderStackProcessingType)|stackProcessingType|Verarbeitungsoption für Stapel|No|
|_boolean_|dropShippingInvoiceApproved|Ist der Streckengeschäfts-Beleg zur Rechnung freigegeben?|Yes|
|[EN16931Profile](#EN16931Profile)|en16931Profile|EN16931-Profil für elektronische Rechnungen|No|
|[TaxPerformanceLocationType](#TaxPerformanceLocationType)|taxPerformanceLocation|Ort der steuerlichen Leistungserbringung|No|
|_number_|exchangeRate|Wechselkurs|No|
|[DocumentAdditionalInfo](#DocumentAdditionalInfo)|additionalInfo|Zusätzliche Infos zu Entscheidungen im Belegkontext|Yes|
|[ScriptingDate](#ScriptingDate)|orderedOn|Bestelldatum|No|
|_number_|baseCashDiscountableTotalGrossPrice|skontierbarer Rechnungsbetrag Basiswährung|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#ApiObjectReference)|deliveryMethodRef|Referenz auf Liefermethode|No|
|_number_|totalPriceModifier|Rabatt gesamt [BRUTTO, NETTO]|Yes|
|_boolean_|dropShipping|Streckengeschäft|Yes|
|_number_|totalNetPrice|Gesamtpreis netto|Yes|
|[EInvoiceValidationState](#EInvoiceValidationState)|valitoolValidationState|Validierungsstatus bei elektronischen Rechnungen|Yes|
|_boolean_|published|Ist der Beleg veröffentlicht (gedruckt, per Mail versendet)?|Yes|
|[ApiObjectReference](#ApiObjectReference)|afterPickingTargetDocumentTypeRef|Ziel-Belegtyp nach Kommissionierung|No|
|_number_|depositPaymentAmount|Vereinbarter Anzahlungsbetrag|No|
|_number_|totalDocumentPriceModifier|Belegrabatt gesamt [BRUTTO, NETTO]|Yes|
|_string_|documentType|Belegtyp (intern)|Yes|
|_number_|totalGrossVolumeInCubicMeters|total gross Volume in cubic meters|Yes|
|_number_|documentTypeId|ID des Belegtyps|Yes|
|[DocumentCategory](#DocumentCategory)|documentTypeCategory|Kategorie des Belegs|Yes|
|_boolean_|userDefinedWeight|Gesamtgewicht wurde manuell gesetzt|No|
|[DocumentImportType](#DocumentImportType)|importType|Importmodus des Belegs|Yes|
|[ApiObjectReference](#ApiObjectReference)|salesChannelRef|Referenz zum zugeordneten Vertriebskanal|No|
|[BillingType](#BillingType)|billingType|Abrechnungstyp|No|
|_number_|baseTotalGrossPrice|Gesamtpreis - Brutto Basiswährung|No|
|_string_|externalIdentifier|Externe Kennung|No|
|[UnitTypeReference](#UnitTypeReference)|grossWeightUnit|Einheit für das Gesamtgewicht|No|
|Array<[DocumentLine](#DocumentLine)>|lines|Liste der Belegpositionen|No|
|_boolean_|forwardEmailToShipper|E-Mail an Versender übergeben|No|
|_string_|deliveryText|Zusätzlicher Liefertext|No|
|[EavDocument](#EavDocument)|custom|Benutzerdefinierte Felder|No|
|[ScriptingDate](#ScriptingDate)|valueDate|Valutadatum|No|
|_string_|customerNumber|Kundennummer|Yes|
|[DocumentTypeState](#DocumentTypeState)|documentState|Statusinstanz des Belegs|Yes|
|_string_|taxIdentificationNumber|Umsatzsteuer-Identifikationsnummer|No|
|Array<[DocumentShippingCost](#DocumentShippingCost)>|shippingCosts|Versandkostenpositionen|No|
|_number_|posReceiptChangeAmount|Rückgeld|No|
|_boolean_|posReceiptBalanced|Ist die Quittung ausbalanciert, also bezahlt und kein Rückgeld
true wenn die Quittung ausbalanciert ist
|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryTermRef|Referenz auf Lieferbedingung|No|
|_number_|grossWeight|Gesamtbruttogewicht|No|
|_string_|baseCurrencyCode|Basiswährung des Belegs|No|
|[ExchangeRateOrigin](#ExchangeRateOrigin)|exchangeRateOrigin|Ursprung für Währungskursermittlung|No|
|Array<[DocumentPriceModifier](#DocumentPriceModifier)>|priceModifiers|Preisänderungen (z.B. Rabatte)|No|
|[DocumentAddress](#DocumentAddress)|billingAddress|Rechnungsadresse|No|
|[TaxIdVerificationState](#TaxIdVerificationState)|taxIdVerificationState|Status der USt-ID-Prüfung|Yes|
|[ApiObjectReference](#ApiObjectReference)|reportGroupRef|Report-Gruppe, falls vom Standard abweichend|No|
|[ApiObjectReference](#ApiObjectReference)|orderedByPersonRef|Bestellt durch Ansprechpartner|No|



## DocumentAdditionalInfo

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[TaxSituationOrigin](#TaxSituationOrigin)|taxSituationOrigin|Steuersachverhalt Herkunft|No|
|[LanguageCodeOrigin](#LanguageCodeOrigin)|languageCodeOrigin|Herkunft der Sprache|No|
|Array<[AdditionalParameter](#AdditionalParameter)>|contextParameters|Parameter, welche im {@link DocumentContext} verwendet wurden|No|
|[BuyerReferenceOrigin](#BuyerReferenceOrigin)|buyerReferenceOrigin|Herkunft der Käufer-Referenz|Yes|
|[CalculationModeOrigin](#CalculationModeOrigin)|calculationModeOrigin|Herkunft des Berechnungsmodus|Yes|
|[DocumentAdditionalInfo$IncomingGoodsTarget](#DocumentAdditionalInfoIncomingGoodsTarget)|incomingGoodsTarget|Ziele für den Wareneingang für den gesamten Beleg|No|
|[EN16931Origin](#EN16931Origin)|en16931Origin|Herkunft des E-Rechnungs-Profils|Yes|
|Array<[DocumentAdditionalInfo$PrintedTranslatedField](#DocumentAdditionalInfoPrintedTranslatedField)>|translations|Übersetzungen|No|
|_string_|previousDecisions|Enthält die Ergebnisse von vorherigen Entscheidungen des Benutzers zu diesem Document|Yes|
|Array<[DocumentAdditionalInfo$IncomingGoodsTargetOfLine](#DocumentAdditionalInfoIncomingGoodsTargetOfLine)>|incomingGoodsTargetsPerLine|Ziele für den Wareneingang je Belegposition|No|
|Array<[DocumentAdditionalInfo$OrderIntoPickingConvertResult](#DocumentAdditionalInfoOrderIntoPickingConvertResult)>|orderIntoPickingConvertResults|Ergebnisse zu Übernahme "Auftrag in Kommissionierung"|No|



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



## DocumentAdditionalInfo$OrderIntoPickingConvertResult

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|success|War die Übernahme erfolgreich?|No|
|_boolean_|testRun|War es eine Testübernahme?|No|
|_string_|logText|Protokoll der Übernahme|No|



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
|[ApiObjectReference](#ApiObjectReference)|regionRef|Region|No|
|_string_|postOfficeBox|Post office box|No|
|_string_|countryCode|country code IsoAlpha3|No|
|_string_|street|Street|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|mailContact|Mail contact|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|_string_|globalLocationNumber|GLN|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryMethodRef|Lieferart|No|
|_string_|postcode|Postcode|No|
|_string_|languageCode|Language Code|No|
|[ApiObjectReference](#ApiObjectReference)|paymentTermRef|Zahlungsbedingungen|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|additionalAddressLine1|Additional address line1|No|
|_string_|additionalAddressLine2|Additional address line2|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryTermRef|Lieferbedingungen|No|
|_string_|streetAddressNumber|Street address number|No|
|_string_|name3|address line 3|No|
|_string_|phoneContact|Phone contact|No|
|[ApiObjectReference](#ApiObjectReference)|paymentMethodRef|Zahlungsart|No|
|[ApiObjectReference](#ApiObjectReference)|accountRef|Referenz zum Account|No|
|_string_|salutation|salutation for this address|No|
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
|CUSTOMER_PARTIAL_INVOICE||
|CUSTOMER_FINAL_INVOICE||
|CUSTOMER_INVOICE_CANCELLATION||
|CUSTOMER_DELIVERY_INVOICE_CANCELLATION||
|CUSTOMER_PARTIAL_INVOICE_CANCELLATION||
|CUSTOMER_FINAL_INVOICE_CANCELLATION||
|CUSTOMER_DEPOSIT_INVOICE||
|CUSTOMER_DEPOSIT_INVOICE_CANCELLATION||
|CUSTOMER_CREDIT_NOTE_WITH_STOCK||
|CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK||
|CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION||
|CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION||
|SUPPLIER_PRICE_REQUEST||
|SUPPLIER_ORDER||
|SUPPLIER_DELIVERY_DOCUMENT||
|SUPPLIER_INVOICE||
|SUPPLIER_DELIVERY_INVOICE||
|SUPPLIER_CREDIT_NOTE_WITH_STOCK||
|SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK||
|COMMISSION_SETTLEMENT||
|COMMISSION_SETTLEMENT_CANCELLATION||
|SUPPLIER_COMMISSION_CREDIT_NOTE||
|SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION||
|CUSTOMER_SUBSCRIPTION_CONTRACT||
|POS_CASH_JOURNAL_OPENING||
|POS_CASH_RECEIPT||
|POS_CASH_RECEIPT_CANCELLATION||
|POS_CASH_JOURNAL_DEPOSIT||
|POS_CASH_JOURNAL_EXPENSE||
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
|[ScriptingDate](#ScriptingDate)|runtimeFromDate|Laufzeit von|No|
|[ScriptingDate](#ScriptingDate)|endDate|Vertragsende (nur Kopf)|No|
|_boolean_|publishInPortal|Portal anzeigen?|No|
|[ScriptingDate](#ScriptingDate)|dueDate|Fälligkeit|No|
|_boolean_|active|Vertrag aktiv?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|calculateDirectly|Direkt abrechnen?|No|
|[ScriptingDate](#ScriptingDate)|runtimeToDate|Laufzeit bis|No|
|[ScriptingDate](#ScriptingDate)|lastProviderCancellationDate|Letztmöglicher kündigungstermin des Anbieters|No|
|[ScriptingDate](#ScriptingDate)|nextDueDate|Nächste Fälligkeit|No|
|[ScriptingDate](#ScriptingDate)|lastCustomerCancellationDate|Letztmöglicher kündigungstermin des Kunden|No|
|_number_|id|Unique identifier of the Object|No|
|[ScriptingDate](#ScriptingDate)|startDate|Vertragsstart (nur Kopf)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|targetStorageRef|Ziel-Lager|No|
|[ApiObjectReference](#ApiObjectReference)|componentsStorageRef|Material-Lager|No|
|_string_|note|Notiz|No|
|[ApiObjectReference](#ApiObjectReference)|qualityAssuranceStorageRef|QS-Lager|No|
|[ApiObjectReference](#ApiObjectReference)|workbenchStorageRef|Werkbank-Lager|No|
|[EavFabrication](#EavFabrication)|custom|Freifeld|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#ApiObjectReference)|defectiveStorageBinRef|Defekt-Lagerplatz (wenn das Lager mit Lagerplätzen ist)|No|
|[ApiObjectReference](#ApiObjectReference)|qualityAssuranceStorageBinRef|QS-Lagerplatz (wenn das Lager mit Lagerplätzen ist)|No|
|[ApiObjectReference](#ApiObjectReference)|defectiveStorageRef|Defekt-Lager|No|
|[ApiObjectReference](#ApiObjectReference)|targetStorageBinRef|Ziel-Lagerplatz (wenn das Lager mit Lagerplätzen ist)|No|
|[ApiObjectReference](#ApiObjectReference)|workbenchStorageBinRef|Werkbank-Lagerplatz (wenn das Lager mit Lagerplätzen ist)|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|minimumDegreeOfFulfillment|Minimaler Erfüllungsgrad|No|
|[ScriptingDate](#ScriptingDate)|startDate|Startdatum|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentFinanceBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|costCenter1|Kostenstelle|No|
|_string_|ledgerNumber|FiBu-Kontonummer|No|
|_number_|documentLineId|Id der Dokumentzeile|No|
|_string_|description|Buchungstext|No|
|_string_|transactionKey|Buchungsschlüssel|No|
|_string_|comment|Kommentar|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentImportType

| Value | Description |
| :---- | :---------- |
|NOT_IMPORTED||
|TRANSFERABLE||
|TRANSFERABLE_AND_EDITABLE||
|HISTORICAL_DATA||
|E_INVOICE||


## DocumentLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDate](#ScriptingDate)|performanceDate|Leistungsdatum|No|
|_string_|customsTariffNumber|Zolltarifnummer|No|
|[CountryReference](#CountryReference)|country|Land der Herkunft|No|
|[ScriptingDate](#ScriptingDate)|confirmedDeliveryDateEnd|bestätigtes Ende des Lieferzeitraums (nur notwendig für Lieferrzeiträume, wenn Lieferdatum gesetzt)|No|
|[ApiObjectReference](#ApiObjectReference)|convertedIntoBundleArticleRef|wurde aufgelöst in Gebindeartikel|Yes|
|_number_|quantityCommitted|verarbeitete Menge|Yes|
|Array<[DocumentTax](#DocumentTax)>|taxes|Steuern|No|
|[DocumentLinePosDetail](#DocumentLinePosDetail)|posDetail|Kasseninformationen|No|
|_string_|internalVatInfo|Interne Steuerinformationen|No|
|_number_|warrantyInMonths|Garantie in Monaten|No|
|[ScriptingDate](#ScriptingDate)|confirmedDeliveryDate|bestätigtes Lieferdatum|No|
|_string_|packageOptions|Versenderspezifische Informationen|No|
|_string_|number|Artikelnummer|No|
|_number_|totalGrossWeight|Gesamtbruttogewicht|No|
|[DocumentLineRef](#DocumentLineRef)|customerOrderLineRef|Referenz zur Kundenauftragszeile|No|
|_boolean_|cashDiscountable|skontierbare Position?|No|
|Array<[DocumentLineCommission](#DocumentLineCommission)>|commissions|Provisionen|No|
|_number_|price|Preis pro Menge [Brutto, Netto]|No|
|_number_|baseTotalLinePrice|Gesamtpreis Position in Basiswährung|No|
|[DocumentFinanceBooking](#DocumentFinanceBooking)|financeBooking|FiBu-Buchung|No|
|[DocumentLineType](#DocumentLineType)|lineType|Positionstyp|No|
|_number_|preOrderPickedQuantity|vorgeorderte Menge in Pickvorgang|Yes|
|_Array<number>_|supplierOrderLineIds|Referenz zur Lieferantenbestellungszeile|No|
|_number_|totalLinePriceModifier|Summe Positionspreisänderungen [Brutto, Netto]|Yes|
|[DropShippingPolicy](#DropShippingPolicy)|dropShippingPolicy|Vorgabe zu Streckengeschäft|No|
|_boolean_|articleTaxLiabilityReversed|Vorgabe §13b UStG Artikel|Yes|
|_number_|id|Unique identifier of the Object|No|
|[ArticleSerialType](#ArticleSerialType)|serialType|Serientyp|Yes|
|_number_|positionOfArticleLine|Positionsnummer über alle Artikelpositionen hinweg|Yes|
|_string_|externalReferenceVds|Externe Referenz zum VDS-Paket|No|
|_number_|basePrice|Preis pro Einheit in Basiswährung|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#ApiObjectReference)|taxSchemaRef|Steuerschema|No|
|_number_|priceUnit|Preiseinheit|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryMethodRef|Lieferart|No|
|_number_|baseTotalLinePriceModifier|Preisanpassungen - Position Basiswährung|No|
|[ApiObjectReference](#ApiObjectReference)|countryRegion|Region der Bezahlung wenn aus Inland kommt|No|
|_number_|vat|Steuerbetrag|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[DocumentCommissionOrigin](#DocumentCommissionOrigin)|commissionOrigin|Provisionsursprung|No|
|_number_|netWeight|Nettogewicht|No|
|_number_|salesValueNet|Netto-Gesamtpreis (nach Preisänderungen)|Yes|
|_string_|name|Name des Artikels|No|
|_number_|totalNetWeight|Gesamtnettogewicht|No|
|_number_|position|Positions-Nummer|Yes|
|Array<[DocumentLineBooking](#DocumentLineBooking)>|bookings|Buchungen|No|
|_number_|unitGrossVolumeInCubicMeters|unit gross Volume in cubic meters|No|
|_boolean_|taxLiabilityReversed|wird §13b UStG angewendet?|Yes|
|Array<[DocumentLineComponent](#DocumentLineComponent)>|components|Komponenten|No|
|_number_|totalDocumentPriceModifier|Summe Dokumentpreisänderungen [Brutto, Netto]|Yes|
|[ScriptingDate](#ScriptingDate)|shippingDate|Versanddatum|No|
|_number_|pickingQuantity|Menge in Pick-Vorgang|Yes|
|_number_|totalGrossVolumeInCubicMeters|unit gross Volume in cubic meters|Yes|
|_string_|calculationData|Kalkulationsstruktur|No|
|_string_|description|Beschreibung des Artikels|No|
|[DocumentLineRef](#DocumentLineRef)|sourceLineRef|Referenz zur Vorbelegzeile|No|
|[ProductPriceOrigin](#ProductPriceOrigin)|priceOrigin|Preisherkunft|Yes|
|[ApiObjectReference](#ApiObjectReference)|storage|Referenz zum Lager|No|
|[PriceSelectionCriteria](#PriceSelectionCriteria)|priceSelectionCriteria|Preisermittlungskriterien|Yes|
|[RevenueCalculation](#RevenueCalculation)|revenueCalculation|Rohertragsermittlung|Yes|
|[UnitTypeReference](#UnitTypeReference)|unitType|Einheitentyp|No|
|_number_|totalLinePrice|Positionssumme [Brutto, Netto], also Preis*Menge ./. Positionsrabatte|Yes|
|[AccessoryInsertTerm](#AccessoryInsertTerm)|insertTerm|Zubehör Einfügeart|No|
|_number_|baseLineId|Referenz zur Basiszeile|No|
|[UnitTypeReference](#UnitTypeReference)|grossWeightUnit|Einheit Bruttogewicht|No|
|_boolean_|discountable|rabattierbare Position?|No|
|[ScriptingDate](#ScriptingDate)|deliveryDate|Lieferdatum|No|
|[ScriptingDate](#ScriptingDate)|deliveryDateEnd|vorr. Ende des Lieferzeitraums (nur notwendig für Lieferzeiträume, wenn Lieferdatum gesetzt)|No|
|[ProductType](#ProductType)|productType|Produkttyp|No|
|[DocumentContractDetail](#DocumentContractDetail)|contractDetail|Vertragsinformationen|No|
|_number_|baseSalesValueNet|Nettoverkaufswert der Position in Basiswährung|No|
|[UnitTypeReference](#UnitTypeReference)|netWeightUnit|Einheit Nettogewicht|No|
|_number_|quantity|Menge|No|
|_string_|deliveryText|Liefertext|No|
|_number_|presetPrice|Vorgabewert für die Preiskalkulation|Yes|
|[DocumentLineFabricationDetail](#DocumentLineFabricationDetail)|fabricationDetail|Produktionsdetails|No|
|[EavDocumentline](#EavDocumentline)|custom|Freifelder|No|
|_number_|articleId|Artikel|No|
|_boolean_|partialInvoice|Abschlagsposition?|No|
|_string_|internalPriceModifierInfo|Interne Preisänderungsinformationen|No|
|_number_|baseTotalDocumentPriceModifier|Preisanpassungen - anteilig durch Beleg Basiswährung|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryTermRef|Lieferbedingung|No|
|_number_|grossWeight|Bruttogewicht|No|
|Array<[DocumentText](#DocumentText)>|texts|Positionstexte|No|
|_boolean_|commissionable|provisionierbare Position?|No|
|Array<[DocumentPriceModifier](#DocumentPriceModifier)>|priceModifiers|angewendete Preisänderungen|No|
|[JsonNode](#JsonNode)|previousDecisions|Enthält die Ergebnisse von vorherigen Entscheidungen des Benutzers zu dieser DocumentLine|Yes|
|_boolean_|hasAccessories|Hat der Artikel Zubehör?|No|
|_boolean_|complete|ist diese Position komplett verarbeitet?|Yes|
|Array<[ApiObjectReference](#ApiObjectReference)>|variantValues|Produktvariantenwerte|Yes|



## DocumentLineBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Notiz|No|
|[ApiObjectReference](#ApiObjectReference)|serialNumberRef|Seriennummer (Objekt)|No|
|_number_|quantity|Gebuchte Menge|No|
|_string_|serialNumber2|Seriennummer 2|No|
|_string_|serialNumber1|Seriennummer 1|No|
|[ApiObjectReference](#ApiObjectReference)|storageBinRef|Bebuchter Lagerplatz|No|
|[ApiObjectReference](#ApiObjectReference)|articleRef|Bebuchter Artikel|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ScriptingDate](#ScriptingDate)|expiryDate|Haltbarkeitsdatum|No|
|_string_|udi|Unique Device Identifier (UDI)|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentLineCommission

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|valueCurrencyCode|the currency-code IsoAlpha3|No|
|[ValueType](#ValueType)|valueType|Provisionstyp|No|
|[DocumentCommissionOrigin](#DocumentCommissionOrigin)|origin|Herkunft|No|
|_string_|description|Beschreibung|No|
|_string_|comment|Kommentar|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#ApiObjectReference)|salesAgentAccountRef|Vertreter|No|
|_number_|value|Provision Prozent/Wert|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentLineComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Menge|No|
|_number_|pickingQuantity|Menge in Kommissionierung|No|
|[DocumentLineComponentFabricationDetail](#DocumentLineComponentFabricationDetail)|fabricationDetail|Produktionsdetails|No|
|[EavDocumentlinecomponent](#EavDocumentlinecomponent)|custom|Freifelder|No|
|_number_|articleId|Referenz auf den Artikel der Komponente|No|
|_number_|quantityCommitted|Gelieferte Menge|No|
|_string_|description|Beschreibung des Artikels|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|sourceDocumentLineComponentId|Referenz auf die Komponente im Quell-Document|No|
|Array<[DocumentText](#DocumentText)>|texts|Texte zu dieser Komponente|No|
|_string_|name|Name des Artikels|No|
|_number_|quantityPerAssemblyGroup|Menge pro Baugruppe|No|
|_number_|position|Position der Komponente in der Baugruppe|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[DocumentLineBooking](#DocumentLineBooking)>|bookings|Buchungen zu dieser Komponente|No|
|[ArticleSerialType](#ArticleSerialType)|serialType|Serientyp|Yes|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentLineComponentFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[EavFabricationlinecomponent](#EavFabricationlinecomponent)|custom|Freifeld|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|serialInheritanceComponent|Für S/N-Vererbung verwenden|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentLineFabricationBookedComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Nummer des Artikels|No|
|[ApiObjectReference](#ApiObjectReference)|serialNumberRef|Seriennummer|No|
|_number_|quantity|Verwendete Menge|No|
|_number_|articleId|ID des Artikels|No|
|_string_|name|Name des Artikels|No|
|_string_|description|Beschreibung des Artikels|No|



## DocumentLineFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantityFinished|Menge abgeschlossen|No|
|Array<[DocumentLineFabricationDetailSerialNumber](#DocumentLineFabricationDetailSerialNumber)>|serialNumbers|Produzierte Seriennummern|No|
|_number_|quantityDefective|Menge defekt|No|
|[EavFabricationline](#EavFabricationline)|custom|Freifeld|No|
|_number_|quantityCommitted|Menge produziert|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|quantityInQA|Menge in QS|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentLineFabricationDetailSerialNumber

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantityFinished|Menge abgeschlossen|No|
|_number_|quantity|Produzierte/geplante Menge|No|
|[ArticleSerialNumber](#ArticleSerialNumber)|serialNumber|Produzierte Seriennummer|No|
|Array<[DocumentLineFabricationBookedComponent](#DocumentLineFabricationBookedComponent)>|bookedComponents|Gebuchte Komponenten|No|
|_number_|quantityDefective|Menge defekt|No|
|_number_|quantityCommitted|Tatsächlich produzierte Menge|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|quantityInQA|Menge in QS|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentLinePosDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|paymentMethodId|Zahlungsart|No|
|_number_|depositExpenseTypeId|Typ der Einlage/Ausgabe|No|
|[PosLineType](#PosLineType)|posLineType|Typ der Position|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentLineRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Belegnummer|No|
|_number_|quantity|quantity|No|
|_string_|documentType|Belegart|No|
|_string_|articleNumber|Artikelnummer|No|
|_number_|price|price per quantity [GROSS, NET]|No|
|_string_|displayName|Kurzbezeichnung des Kunden|No|
|_string_|name|Artikelbezeichnung|No|
|_number_|documentId|Id des Dokuments|No|
|_number_|id|Id der Dokumentzeile|No|
|_number_|position|Positions-Nummer|No|
|[DocumentCategory](#DocumentCategory)|category|Belegtyp|No|
|_string_|documentState|Belegstatus|No|



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


## DocumentPosDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|cashJournalRef|Kassenbuch|No|
|[ApiObjectReference](#ApiObjectReference)|posRegisterRef|Kasse|No|
|_number_|id|Unique identifier of the Object|No|
|[TssSignature](#TssSignature)|tssSignature|TSS Signatur|No|
|[ApiObjectReference](#ApiObjectReference)|cashDrawerRef|Kassenschublade|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentPosPayment

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|amount|Betrag|No|
|[ApiObjectReference](#ApiObjectReference)|depositExpenseTypeRef|Typ der Einlage/Ausgabe|No|
|[ApiObjectReference](#ApiObjectReference)|posPaymentMethodRef|Zahlungsart|No|
|[PosLineType](#PosLineType)|posLineType|Typ der Position|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentPriceModifier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sourceId|ID of Source entity of price modifier|No|
|_number_|baseCalculatedValue|Berechneter Wert des Modifiers in Basiswährung|No|
|_number_|calculatedValue|calculated discount/surcharge|No|
|[PriceModifierType](#PriceModifierType)|modifierType|modifierType|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseValue|Wert des Modifiers in Basiswährung|No|
|[DocumentPriceModifier$PriceModifierSourceType](#DocumentPriceModifierPriceModifierSourceType)|sourceType|Source of price modifier|No|
|[ValueType](#ValueType)|valueType|Type of value|No|
|_string_|name|Name of modifier|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|value|Value|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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


## DocumentRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Belegnummer|No|
|_string_|documentType|Belegart|No|
|_number_|id|ID|No|
|[DocumentCategory](#DocumentCategory)|category|Belegtyp|No|
|_string_|documentState|Belegstatus|No|



## DocumentShippingCost

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|costs|Die Versandkosten|No|
|_boolean_|manualCosts|Wurden die Versandkosten manuell eingetragen?|No|
|_boolean_|freeShipping|Keine Versandkosten (freier Versand)|No|
|Array<[DocumentText](#DocumentText)>|texts|Texte|No|
|_string_|name|Artikelname|No|
|Array<[DocumentTax](#DocumentTax)>|taxes|Steuern|No|
|_string_|description|Artikelbeschreibung|No|
|_number_|purchasePrice|Einkaufspreis|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[ApiObjectReference](#ApiObjectReference)|taxRateRef|reference to tax rate|No|
|_number_|baseTaxableAmount|Besteuerbarer Betrag in Basiswährung|No|
|_number_|taxValue|tax value|No|
|_number_|id|Unique identifier of the Object|No|
|[DocumentTaxType](#DocumentTaxType)|taxType|tax type|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentTaxType

| Value | Description |
| :---- | :---------- |
|VAT||


## DocumentText

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|transferableIntoSubsequentDocuments|Does this text remain after transfer into a subsequent document|No|
|[TextPosition](#TextPosition)|textPosition|position relative to the product line OR Document. For usage within text-line, this position is irrelevant|No|
|_boolean_|deleted|Wurde entfernt und soll deshalb nicht mehr angezeigt werden.|No|
|[ApiObjectReference](#ApiObjectReference)|textTemplateRef|textBaustein Vorlage|No|
|_boolean_|initialized|ist der content befüllt?|Yes|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|content|if this attribute is used, the text is used as free-text|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentTransferToStateRequest
### Description
Transfer-to-State-Request für Belege

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[DocumentType](#DocumentType)|copyTargetDocumentType||No|
|_number_|documentId|ID eines Belegs|No|
|Array<[AdditionalParameter](#AdditionalParameter)>|parameters|Zusätzliche Parameter|No|
|[EDocumentTransition](#EDocumentTransition)|transition|Transition zum gewünschten Ziel-Status|No|



## DocumentTransferToTypeRequest
### Description
Transfer-to-Type-Request für Belege

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|targetDocumentType|Gewünschte Ziel-Belegart|No|
|_number_|documentId|ID eines Belegs|No|
|_boolean_|copyDocument|Soll der Beleg kopiert werden? (Standard: nein)|No|
|Array<[AdditionalParameter](#AdditionalParameter)>|parameters|Zusätzliche Parameter|No|



## DocumentType

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|showForManualDocumentCreation|Darf dieser Typ zur Neuanlage von Belegen verwendet werden?|No|
|_boolean_|active|ist diese Belegart aktiv|No|
|[ApiObjectReference](#ApiObjectReference)|shelfDocumentTypeRef|Referenz auf die Dokumentenart im DMS|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[DocumentTypeLabel](#DocumentTypeLabel)>|labels|label/name of this type|No|
|[SequencerConfiguration](#SequencerConfiguration)|sequencerConfiguration|Zählerkreis|No|
|_string_|nextNumber|nächste Belegnummer|Yes|
|_number_|sortOrder|Sortierung|No|
|Array<[DocumentTypeFollowUp](#DocumentTypeFollowUp)>|followUpDocumentTypes|follow up document types|Yes|
|[PublishingPolicy](#PublishingPolicy)|publishingPolicy|Verhalten zugeordnetem DMS-Dokument|No|
|_boolean_|requiresBusinessRelationship|Geschäftsbeziehung verpflichtend|No|
|_number_|id|Unique identifier of the Object|No|
|[DocumentCategory](#DocumentCategory)|category|associated category|No|
|_boolean_|defaultTypeOfCategory|ist diese Belegart die Standard-Belegart für ihre Kategorie?|No|
|_string_|key|unique key for this type (internal representation)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentTypeFollowUp

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|ist diese Folge-Belegart aktiv|Yes|
|[ApiObjectReference](#ApiObjectReference)|targetDocumentTypeRef|target type|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#ApiObjectReference)|sourceDocumentTypeRef|source type|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentTypeLabel

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|labelPrintout|label/name of this type (for printout)|No|
|_string_|label|label/name of this type (for display)|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|Language code|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DocumentTypeState

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[DocumentTypeState$StateDefinition](#DocumentTypeStateStateDefinition)|definition|additional state information|No|
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
|[ApiObjectReference](#ApiObjectReference)|documentType|documentType|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|sprache|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|content|content|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## DropShippingPolicy

| Value | Description |
| :---- | :---------- |
|ANY||
|DROP_SHIPPING||
|STORAGE||
|STORAGE_WITH_FALLBACK_TO_DROP_SHIPPING||


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
|SUPPLIER_PRICE_REQUEST||
|SUPPLIER_ORDER||
|SUPPLIER_DELIVERY_DOCUMENT||
|SUPPLIER_INVOICE||
|SUPPLIER_DELIVERY_INVOICE||
|SUPPLIER_CREDIT_NOTE_WITH_STOCK||
|SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK||
|COMMISSION_SETTLEMENT||
|COMMISSION_SETTLEMENT_CANCELLATION||
|SUPPLIER_COMMISSION_CREDIT_NOTE||
|SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION||
|CUSTOMER_SUBSCRIPTION_CONTRACT||
|POS_CASH_JOURNAL_OPENING||
|POS_CASH_RECEIPT||
|POS_CASH_RECEIPT_CANCELLATION||
|POS_CASH_JOURNAL_DEPOSIT||
|POS_CASH_JOURNAL_EXPENSE||
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


## EDocumentTransition

| Value | Description |
| :---- | :---------- |
|BEGIN_EDITING|Bearbeitung beginnen|
|END_EDITING|Speichern|
|CANCEL_EDITING|Bearbeitung abbrechen|
|EDIT_ACCEPTED|Bearbeiten (für übernommenen Beleg)|
|CANCEL_EDITING_ACCEPTED|Bearbeitung abbrechen (für übernommenen Beleg)|
|SAVE_ACCEPTED|Speichern (für übernommenen Beleg)|
|ORDER_IN_PICKING|Auftrag in Kommissionierung übernehmen|
|ORDER_RESET_FROM_PICKING|Auftrags aus Kommissionierung stornieren|
|DISSOLVE|Beleg auflösen|
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


## EInvoiceValidationState

| Value | Description |
| :---- | :---------- |
|NOT_VALIDATED||
|VALID||
|NOT_VALID||


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
|Array<[SerialNumberWithQuantityApi](#SerialNumberWithQuantityApi)>|serialNumberIdsWithQuantity|(Nicht mehr) defekte Seriennummern|No|
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
|Array<[FabricationComponentForProduction](#FabricationComponentForProduction)>|componentsForProduction|Für die Produktion zu verwendendes Material|No|
|_number_|documentLineId|ID der zu produzierenden Position|No|
|Array<[FabricationSerialNumber](#FabricationSerialNumber)>|serialNumbers|Zu produzierende Seriennummern|No|



## FabricationRemainingComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ArticleSerialNumber](#ArticleSerialNumber)|lineSerialNumber|Zu produzierende Seriennummer, zu der die Komponente gehört|No|
|_number_|quantity|Offene Menge|No|
|_number_|documentLineComponentId|ID der Komponente|No|
|[ApiObjectReference](#ApiObjectReference)|articleRef|Artikel|No|
|[ArticleSerialType](#ArticleSerialType)|serialType|Serientyp|No|



## FabricationRevertRequest

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Zu stornierende Menge|No|
|_boolean_|autoRevertComponents|Material automatisch stornieren|No|
|_number_|documentLineId|ID der zu stornierenden Position|No|
|Array<[FabricationSerialNumber](#FabricationSerialNumber)>|serialNumbers|Zu stornierende Seriennummern|No|
|Array<[FabricationComponentForProduction](#FabricationComponentForProduction)>|componentsToRevert|Zu stornierendes Material|No|



## FabricationSerialNumber

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|serialNumberId|ID der zu produzierenden Seriennummer (nur zur gezielten Produktion von bereits definierten Seriennummern)|No|
|[ScriptingDate](#ScriptingDate)|expiryDate|MHD / Verfallsdatum|No|
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
|Array<[ApiObjectReference](#ApiObjectReference)>|roles|roles associated with this group|No|
|_boolean_|active|Is the group active?|No|
|_string_|description|Description of this Group|No|
|_string_|label|Label of this Group|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|users|users associated with this group|Yes|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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


## MetaInfo

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDateTime](#ScriptingDateTime)|createdAt|Created At Timestamp|Yes|
|_number_|createdFrom|TenantUser-Identifier of the creator|Yes|
|_number_|updatedFrom|TenantUser-Identifier of most recent updater|Yes|
|[ScriptingDateTime](#ScriptingDateTime)|updatedAt|Last Updated AT Timestamp|Yes|



## NotificationDataprovider

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[Referenceable](#Referenceable)|referenceable||No|
|Set<[Referenceable](#Referenceable)>|links||No|
|_NotificationEventConfig<Object>_|event||No|



## NotificationEventConfig<Object>


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
|[BankPaymentType](#BankPaymentType)|paymentType|Payment Type|No|
|_boolean_|dunnable|dunnable|No|
|Array<[DocumentTypeTerm](#DocumentTypeTerm)>|translations|translations|No|
|_number_|daysToAddForFollowup|+Tage für Folgelastschrift|No|
|_string_|externalPaymentId|external Payment Id|No|
|[ApiObjectReference](#ApiObjectReference)|businessTransaction|Die Business Transaction|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|closeReceivable|Forderungs-OP abschließen?|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## PaymentTerm

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|paymentDiscount2|Percent for Discount 2 |No|
|_number_|paymentDiscount1|Percent for Discount 1 |No|
|_string_|printDescription|printDescription|No|
|[ApiObjectReference](#ApiObjectReference)|remainingTermRef|for deposit: remaining term|No|
|_number_|paymentDays1|Days for Discount 1 |No|
|_number_|paymentDays2|Days for Discount 2 |No|
|_boolean_|active|Aktiv?|No|
|_string_|description|description|No|
|_string_|label|label for this payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[PaymentType](#PaymentType)|paymentType|payment type|No|
|Array<[DocumentTypeTerm](#DocumentTypeTerm)>|translations|translations|No|
|_boolean_|considerForCreditLimit|Für Kreditlimit berücksichtigen?|No|
|_string_|externalPaymentId|external Payment Id|No|
|_number_|paymentDaysNet|Days for net payment |No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|dunningBlock|Mahnsperre|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## PaymentTermRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Activ|Yes|
|_string_|description|a short description|Yes|
|_string_|label|a label|Yes|
|_number_|id|Identifier|No|
|[PaymentType](#PaymentType)|paymentType|payment type|No|



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
|Array<[PickTrolleyBox](#PickTrolleyBox)>|pickTrolleyBoxes|Zu diesem Wagen gehörende Boxen|No|
|[ApiObjectReference](#ApiObjectReference)|processedByUserRef|Bearbeiter der Pickliste|Yes|
|[StorageBinRef](#StorageBinRef)|storageBinRef|Lagerplatz, dem dieser Pickwagen zugeordnet ist|No|
|_string_|description|Beschreibung des Wagens|No|
|_number_|currentPicklistId|Wagen gehört aktuell zu dieser Pickliste|Yes|
|_string_|label|Bezeichnung des Wagens|No|
|[PickTrolleyType](#PickTrolleyType)|type|Typ des Wagens|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|picklistTemplateRefs|Picklistenvorlagen, welche genutzt werden können, um in der MDE Picklisten zu dem Wagen zu erzeugen|No|
|[ApiObjectReference](#ApiObjectReference)|pickTrolleyGroupRef|Wagen gehört zu dieser Pickwagen-Gruppe|No|
|[PickTrolleyState](#PickTrolleyState)|state|Status des Wagens|Yes|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## PickTrolleyBox

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|pickTrolleyId|Box gehört zu diesem Pickwagen|No|
|_string_|identifier|Barcode zur Selektion der Box|No|
|_number_|currentDocumentId|Aktuell kommissionierter Beleg|No|
|_string_|description|Beschreibung der Box|No|
|_string_|label|Bezeichnung der Box|No|
|[PickTrolleyBoxState](#PickTrolleyBoxState)|state|Status der Box|Yes|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|MISSING_GOODS_PICKING||


## Picklist

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[PicklistTemplate](#PicklistTemplate)|usedTemplate|Zur Erstellung der Pickliste verwendete Vorlage|No|
|[ApiObjectReference](#ApiObjectReference)|targetStorageRef|Ziellager für Nachschub|Yes|
|_string_|number|Nummer der Pickliste|No|
|[PicklistState](#PicklistState)|state|Status der Pickliste|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[PicklistLine](#PicklistLine)>|lines|Positionen der Pickliste |No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## PicklistLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|pickTrolleyBoxRef|Pickbox, mit der diese Position gesammelt werden soll|No|
|_number_|quantityCollected|Gesammelte Menge der Position|No|
|Array<[PicklistLineComponent](#PicklistLineComponent)>|components|Komponenten dieser Position, falls es sich bei dieser Position um eine Baugruppe handelt|No|
|_string_|articleName|Artikelbezeichnung|Yes|
|_number_|quantity|Menge der Position|No|
|_string_|articleDescription|Artikelbeschreibung|Yes|
|_number_|articleId|ID des Artikels|No|
|_number_|targetDocumentId|ID des Ziel-Dokuments|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|sourceDocumentLineId|ID der Quell-Dokumentposition|No|
|_string_|storageDisplayName|Lageranzeigename|Yes|
|_string_|articleNumber|Artikelnummer|Yes|
|_string_|storageNumber|Lagernummer|Yes|
|[PicklistLineType](#PicklistLineType)|lineType|Art der Position|No|
|_number_|targetDocumentLineId|ID der Ziel-Dokumentposition|No|
|_string_|articleAlternativeName|abweichende Artikelbezeichnung|Yes|
|_number_|quantityPacked|Verpackte Menge der Position|No|
|[PicklistLineState](#PicklistLineState)|state|Status der Position|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[PicklistLineBooking](#PicklistLineBooking)>|bookings|Buchungen zu dieser Position|No|
|_number_|sourceDocumentId|ID des Quell-Dokuments|No|
|_number_|storageId|ID des Lagers, aus dem gepickt werden soll|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## PicklistLineBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Zu buchende Menge (gesammelt)|No|
|[ArticleSerialNumber](#ArticleSerialNumber)|serialNumber|Seriennummer|No|
|_string_|storageBinDisplayName|Anzeigename vom Lagerplatz|Yes|
|_number_|storageBinId|ID vom bebuchten Lagerplatz|No|
|_number_|quantityPacked|Zu buchende Menge (verpackt)|No|
|[PicklistLineBookingState](#PicklistLineBookingState)|state|Status der Buchung|No|



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
|_number_|quantityPerAssemblyGroup|Menge pro Baugruppe (falls die Picklist-Line eine Baugruppe ist)|No|
|_string_|articleAlternativeName|abweichende Artikelbezeichnung|Yes|
|_number_|quantityPacked|Verpackte Menge der Position|No|
|_number_|position|Position der Komponente in der Baugruppe|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[PicklistLineBooking](#PicklistLineBooking)>|bookings|Buchungen zu dieser Komponente|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## PicklistLineState

| Value | Description |
| :---- | :---------- |
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
|[PickingType](#PickingType)|pickingType|Art der Kommissionierung|No|
|[PicklistTemplate$OrderSelectionOptions](#PicklistTemplateOrderSelectionOptions)|orderSelectionOptions|Optionen zur Selektion von Aufträgen für die Pickliste|No|
|Map<[PicklistScriptType](#PicklistScriptType),[PicklistTemplate$PicklistScript](#PicklistTemplatePicklistScript)>|picklistScripts|Skripte für die Erstellung und Verarbeitung von Picklisten|No|
|_boolean_|defaultTemplate|Handelt es sich um eine Standard-Vorlage?|Yes|
|_boolean_|active|Is Template active?|Yes|
|_string_|description|Beschreibung der Vorlage|No|
|_string_|label|Name der Vorlage|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[PicklistTemplate$PicklistCreationOptions](#PicklistTemplatePicklistCreationOptions)|picklistCreationOptions|Optionen zur Erstellung der Pickliste|No|
|_number_|id|Unique identifier of the Object|No|
|[PicklistTemplate$PicklistProcessingOptions](#PicklistTemplatePicklistProcessingOptions)|picklistProcessingOptions|Optionen zur Verarbeitung von Picklisten|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[PicklistTemplate$DateRange](#PicklistTemplateDateRange)|confirmedDeliveryDateRange|Selektion über den Bereich vom bestätigten Lieferdatum|No|
|_number_|minArticleCountPerOrder|Minimale Anzahl Artikel pro Auftrag|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|documentTypeRefs|Liste der Belegarten vom Belegtyp "Auftrag"|No|
|_number_|maxArticleCountPerOrder|Maximale Anzahl Artikel pro Auftrag|No|
|_number_|maxOrderValue|Maximaler Auftragswert|No|
|_string_|alternativeSelectionInVql|Alternative Selektion in VQL|No|
|_number_|maxOrderCount|Nur für Einzelkommissionierung und Konsolidierung: maximale Anzahl zu übernehmender Aufträge|No|
|_boolean_|onlyFullDeliverableOrderLines|Nur vollständig lieferbare Positionen|No|
|[PicklistTemplate$DateRange](#PicklistTemplateDateRange)|deliveryDateRange|Selektion über den Bereich vom Lieferdatum|No|
|[PicklistTemplate$DateRange](#PicklistTemplateDateRange)|documentDateRange|Selektion über den Bereich vom Belegdatum|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|storageAreaRefs|Liste von gültigen Lagerbereichen|No|
|_boolean_|onlyFullDeliverableOrders|Nur vollständig lieferbare Aufträge|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|deliveryMethodRefs|Liste der gültigen Lieferarten|No|
|_number_|maxTotalVolumePerOrderInCCM|Maximales Gesamtvolumen pro Auftrag (in ccm)|No|
|_Array<string>_|additionalExistsStatementsInVql|Zusätzliche Exists-Statements in VQL|No|



## PicklistTemplate$PicklistCreationOptions

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|specifySerialWithOldestExpiryDate|Für Serien-Artikel mit Verfallsdatum/MHD: älteste Serie in Pickliste vorgeben|No|
|_string_|cycleToCreatePicklistsCronExpression|Zyklus zur Erstellung von Picklisten (für Background-Jobs, als Quartz-Cron-Expression) (https://www.freeformatter.com/cron-expression-generator-quartz.html)|No|
|[ApiObjectReference](#ApiObjectReference)|fastOrderPickingTemplateToUseRef|Die zu verwendende Vorlage zur Erzeugung von Picklisten für die Schnellkommissionierung|No|
|_number_|maxQuantityOfOrderLineForFastOrderPicking|Maximale Menge einer Auftragsposition für Schnellkommissionierungs-Picklisten|No|
|_boolean_|printPicklist|Soll die Pickliste gedruckt werden?|No|
|_number_|maxPicklistLineCount|Maximale Anzahl an Positionen einer Pickliste|No|
|[ApiObjectReference](#ApiObjectReference)|orderPickingTrolleyGroupRef|Die zu verwendende Pickwagengruppe|No|
|[ApiObjectReference](#ApiObjectReference)|orderPickingTrolleyRef|Der zu verwendende Pickwagen|No|
|[ApiObjectReference](#ApiObjectReference)|picklistOutputReportGroupRef|Mit welcher Reportgruppe soll die Pickliste gedruckt werden?|No|
|_boolean_|specifyStorageBins|Lagerplätze vorgeben|No|
|_boolean_|useAllAvailOrderPickingTrolleys|Sollen alle verfügbaren Pickwagen verwendet werden?|No|
|_boolean_|sortByRoutePosition|Positionen der Pickliste nach Laufwegposition sortieren|No|
|_boolean_|firstCreateFastOrderPickingPicklists|Sollen zuerst noch Picklisten für die Schnellkommissionierung erzeugt werden?|No|



## PicklistTemplate$PicklistProcessingOptions

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|assemblyGroupAtOnce|Baugruppen als Ganzes kommissionieren|No|
|_boolean_|autoPrintShippingLabel|Sollen die Paketlabel automatisch nach Abschluss der Kommissionierung gedruckt werden?|No|
|_boolean_|autoPickingFinishAfterLastArticleInOrder|Automatischer Abschluss nach letztem Artikel vom aktuellen Auftrag|No|
|_boolean_|allowOnlyScanOfArticles|Dürfen Artikel nur per Scan (oder z.B. auch Eingabe der Artikelnummer) erfasst werden|No|
|_boolean_|usePickNPack|Pick'n'Pack verwenden|No|
|[PickingDeviatingQuantity](#PickingDeviatingQuantity)|deviatingQuantity|Kommissionierung von abweichenden Mengen|No|
|_boolean_|alwaysShowDeliveryMethod|Immer die Lieferbedingung in Masken zeigen|No|
|_boolean_|blockIfMaximumPackageWeightIsExceeded|Überschreitung vom maximalen Paketgewicht blockieren?|No|
|_boolean_|autoPrintDeliveryDocument|Soll die Lieferbelege automatisch nach Abschluss der Kommissionierung gedruckt werden?|No|
|_boolean_|showShippingFormOnPickingFinish|Versand-Dialog beim Abschluss zeigen|No|
|_boolean_|allowPickingOfServiceArticles|Sollen Dienstleistungen kommissioniert werden?|No|
|_boolean_|useDigitalPicklist|Digitale Pickliste verwenden: dabei werden nur die Positionen im Frontend gezeigt und durch Tippen oder Wischen bestätigt|No|
|_boolean_|allowFullConfirmation|Sammelbestätigung erlauben|No|
|_boolean_|scanDeliveryDocumentAndShippingLabelOnFinish|Nur für Konsolidierung: Lieferbeleg und Versandlabel zum Abschluss scannen|No|
|_boolean_|scanPickTrolleyBoxToConfirmPickedArticle|Rollende Kommissionierung/Konsolidierung: beim Sammeln muss die Box nach dem Scan eines Artikels per Scan bestätigt werden|No|
|_boolean_|allowPickingOfNonInventoryManagedArticles|Sollen nicht-bestandsgeführte Artikel kommissioniert werden?|No|
|_boolean_|hideTargetQuantityInViews|Zielmengen in Masken verstecken?|No|



## PicklistTemplate$PicklistScript

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Ist das Skript aktiv?|No|
|_string_|source|Der Quelltext vom Skript|No|



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
|[ScriptingDate](#ScriptingDate)|date|Ein Datum|No|
|_number_|priceGroupId|Die Preisgruppe|No|
|_number_|quantity|Eine Menge|No|
|_Array<number>_|articleIds|Liste von Artikel-IDs|No|
|_Array<number>_|accountIds|Liste von Account-IDs|No|
|[ProductPriceQualifier](#ProductPriceQualifier)|qualifier|ein qualifier|No|
|_number_|productGroupId|Die Warengruppe|No|
|_boolean_|selectOnlyDefaultPrice|soll nur der Standardpreis selektiert werden?|No|
|_boolean_|noteSpecialOfferPrice|Aktionspreis beachten?|No|



## Product

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|mainVariantProductRef|Variantenhauptartikel|No|
|_string_|customsTariffNumber|Zolltarifnummer|No|
|[ApiObjectReference](#ApiObjectReference)|variantSchemaRef|Variantenschema|No|
|[SequencerConfiguration](#SequencerConfiguration)|serialSequencerConfiguration|Eigener Zählerkreis für Seriennummern|No|
|[ApiObjectReference](#ApiObjectReference)|bundleSchemaRef|Gebindeschema dieses Produkts|Yes|
|[ArticleSerialNumberLabelingType](#ArticleSerialNumberLabelingType)|serialNumberLabelingType|Seriennummern Auszeichnungsart|No|
|[ArticleSerialExpiryDateType](#ArticleSerialExpiryDateType)|expiryDateType|Art des Haltbarkeitsdatums|No|
|[ApiObjectReference](#ApiObjectReference)|regionOfOrigin|Ursprungsregion|No|
|[ProductType](#ProductType)|type|Produkt-Art|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|warrantyInMonths|Garantie in Monaten|No|
|[ArticleAvailabilityDetermination](#ArticleAvailabilityDetermination)|availabilityDetermination|Optionen zur Berechnung der Verfügbarkeit|No|
|Array<[ProductArticleRef](#ProductArticleRef)>|articleRefs|alle artikel, die zu diesem Produkt gehören|Yes|
|_boolean_|useSerialSequencerConfiguration|Soll ein eigener Zählerkreis für Seriennummern verwendet werden?|No|
|[FabricationSerialNumberLabelingType](#FabricationSerialNumberLabelingType)|fabricationSerialNumberLabelingType|Produktions-S/N-Auszeichnungsart|No|
|[CountryReference](#CountryReference)|countryOfOrigin|Country code|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|bundle|Handelt es sich um ein Gebinde?|No|
|[ArticleSerialType](#ArticleSerialType)|serialType|Serientyp|No|
|Array<[VariantValueReference](#VariantValueReference)>|variantValues|Variantenwerte|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ProductArticleRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Article number|No|
|[UnitTypeReference](#UnitTypeReference)|unit|named unit of this article (piece, palette, container)|No|
|_number_|id|Article ID|No|



## ProductDiscount

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|customerGroupRef|Kundengruppe|No|
|[ApiObjectReference](#ApiObjectReference)|supplierGroupRef|Lieferantengruppe|No|
|_number_|fromQuantity|Bestimmt ab welcher Menge dieser Rabatt gültig ist|No|
|[ApiObjectReference](#ApiObjectReference)|articleRef|Produkt, für welches dieser Rabatt gültig ist|No|
|[ScriptingDate](#ScriptingDate)|validFrom|Gültig von|No|
|[ApiObjectReference](#ApiObjectReference)|productGroupRef|Warengruppe|No|
|[PriceModifierType](#PriceModifierType)|modifierType|Bestimmt die Art des Rabatts|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#ApiObjectReference)|salesChannelRef|Verkaufskanal|No|
|[CurrencyReference](#CurrencyReference)|currencyRef|Währung|No|
|[ApiObjectReference](#ApiObjectReference)|priceGroupRef|Preisgruppe|No|
|_number_|modifierValue|Wert des Rabatts|No|
|[ValueType](#ValueType)|valueType|Bestimmt die Art des Rabattwerts (fest oder prozentual)|No|
|[ProductPriceQualifier](#ProductPriceQualifier)|qualifier|Bestimmt, ob es sich um einen Verkaufs- oder Einkaufsrabatt handelt|Yes|
|_boolean_|specialOfferPrice|Aktionpreis|No|
|[ScriptingDate](#ScriptingDate)|validUntil|Gültig bis|No|
|_string_|modifierName|Name des Rabatts|No|
|[ApiObjectReference](#ApiObjectReference)|accountRef|Account, für den der Rabatt gültig ist|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ProductGroup

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|externalReference|needed for data migration from third party applications|No|
|_string_|customsTariffNumber|Zolltarifnummer|No|
|_number_|targetTradingMargin|Soll-Handelsspanne|No|
|[ApiObjectReference](#ApiObjectReference)|mainGroupRef|main product group|No|
|[EavProductgroup](#EavProductgroup)|custom|Freifeld|No|
|_boolean_|active|warengruppe aktiv ja/nein|Yes|
|_string_|description|product group description|No|
|_string_|label|product group name|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ProductMainGroup

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|targetTradingMargin|Soll-Handelsspanne|No|
|[EavProductmaingroup](#EavProductmaingroup)|custom|Freifeld|No|
|_boolean_|active|Hauptwarengruppe aktiv ja/nein|Yes|
|_string_|description|Beschreibung der Hauptwarengruppe|No|
|_string_|label|Hauptwarengruppe|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ProductPrice

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|customerGroupRef|Kundengruppe|No|
|[TaxRate](#TaxRate)|usedTaxRate|Verwendete Umsatzsteuer zur Umrechnung Netto <-> Brutto|Yes|
|[ApiObjectReference](#ApiObjectReference)|supplierGroupRef|Lieferantengruppe|No|
|_number_|fromQuantity|Bestimmt ab welcher Menge dieser Preis gültig ist|No|
|[ApiObjectReference](#ApiObjectReference)|articleRef|Produkt, für welches dieser Preis gültig ist|No|
|_number_|netPrice|Netto-Preis|No|
|_number_|grossPrice|Brutto-Preis|No|
|[ScriptingDate](#ScriptingDate)|validFrom|Gültig von|No|
|[ApiObjectReference](#ApiObjectReference)|productGroupRef|Warengruppe|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#ApiObjectReference)|salesChannelRef|Verkaufskanal|No|
|[CurrencyReference](#CurrencyReference)|currencyRef|Währung|No|
|[ApiObjectReference](#ApiObjectReference)|priceGroupRef|Preisgruppe|No|
|[ProductPriceQualifier](#ProductPriceQualifier)|qualifier|Bestimmt, ob es sich um einen Verkaufs- oder Einkaufspreis handelt|Yes|
|_boolean_|specialOfferPrice|Aktionpreis|No|
|[ArticlePriceBase](#ArticlePriceBase)|priceBase|Preisbasis|No|
|[ScriptingDate](#ScriptingDate)|validUntil|Gültig bis|No|
|[ApiObjectReference](#ApiObjectReference)|accountRef|Account, für den der Preis gültig ist|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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


## Referenceable


## RequestDocument

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|incomingGoodsStorageBinId|ID vom Lagerplatz für den Wareneingang (wenn incomingGoodsPickTrolleyId = null)|No|
|[ScriptingDate](#ScriptingDate)|documentDate|Belegdatum|No|
|_number_|cashDrawerId|ID der Kassenschublade (bei POS)|No|
|[ScriptingDate](#ScriptingDate)|performanceDate|Leistungsdatum|No|
|_number_|depositPaymentAmount|Der Anzahlungsbetrag|No|
|_number_|deliveryMethodId|Für interne Zwecke: Liefermethode für das Document|No|
|_string_|externalNumber|externe Belegnummer|No|
|_number_|performanceCountryId|Für interne Zwecke: Leistungsland für das Document|No|
|Array<[DocumentPosPayment](#DocumentPosPayment)>|posPayments|Eine oder mehr Kassenzahlungen|No|
|[DocumentPosDetail](#DocumentPosDetail)|posDetail|Die Quittungsdetails|No|
|_number_|salesChannelId|sales-channel-id to create a new Document|No|
|[BillingType](#BillingType)|billingType|billing type|No|
|_number_|paymentMethodId|Für interne Zwecke: Zahlungsmethode für das Document|No|
|_number_|deliveryTermId|Für interne Zwecke: Lieferbedingung für das Document|No|
|_number_|currencyId|Für interne Zwecke: Währung für das Document|No|
|Array<[RequestDocumentLine](#RequestDocumentLine)>|lines|Dokumentzeilen|No|
|_number_|posRegisterId|ID der Kasse (bei POS)|No|
|[DocumentContractDetail](#DocumentContractDetail)|contractDetail|Die Vertragsdetails|No|
|_number_|supplierAccountId|Vorgabelieferant bei Übernahme von Auftrag zu Bestellung(en)|No|
|_number_|paymentTermId|Für interne Zwecke: Zahlungsbedingung für das Document|No|
|_boolean_|dropShipping|Für interne Zwecke: Vorgabe Streckengeschäft|No|
|[EavDocument](#EavDocument)|custom|Schema Freifelder|No|
|[DocumentType](#DocumentType)|targetDocumentType|target document type for document copy|No|
|_string_|externalId|reference to the corresponding document in an external system|No|
|_number_|incomingGoodsPickTrolleyId|ID vom Pickwagen für den Wareneingang (wenn incomingGoodsStorageBinId = null)|No|
|[CalculationMode](#CalculationMode)|calculationMode|calculation mode|No|
|_boolean_|eInvoice|Für interne Zwecke: Markiert den Beleg als E-Rechnung|No|
|_number_|accountId|account-id to create a new Document|No|
|_boolean_|processedByPicklistProcessing|Wird dieser Beleg durch die Picklistenverarbeitung verarbeitet?|No|
|Array<[PicklistLine](#PicklistLine)>|picklistLinesToAddOnTransfer|Nur für interne Zwecke: neue Positionen, die bei Übernahme aus einer Pickliste angelegt werden sollen|No|
|Array<[RequestDocumentPriceModifier](#RequestDocumentPriceModifier)>|priceModifiers|Die Rabatte des Beleges|No|



## RequestDocumentLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|incomingGoodsStorageBinId|ID des Lagerplatzes für den Wareneingang (wenn `incomingGoodsPickTrolleyId` = null)|No|
|[ScriptingDate](#ScriptingDate)|performanceDate|Leistungsdatum|No|
|_boolean_|markCompleted|Soll die Quellposition nach erfolgreicher Verarbeitung als abgeschlossen markiert werden?|No|
|_string_|description|Artikelbeschreibung|No|
|[ProductPriceOrigin](#ProductPriceOrigin)|priceOrigin|Herkunft des Preises|No|
|[DocumentLinePosDetail](#DocumentLinePosDetail)|posDetail|Quittungsdetails zur Belegposition|No|
|_number_|totalLinePrice|(optional) Gesamtpreis dieser Position|No|
|_number_|refLineId|(optional) ID der referenzierten Belegposition|No|
|Array<[RequestDocumentLineCommission](#RequestDocumentLineCommission)>|commissions|Provisionen zu dieser Belegposition|No|
|[DocumentFinanceBooking](#DocumentFinanceBooking)|financeBooking|FiBu-Angaben|No|
|[DocumentLineType](#DocumentLineType)|lineType|Typ dieser Position|No|
|_number_|taxPercent|Für interne Zwecke: Steuersatz in Prozent|No|
|[DropShippingPolicy](#DropShippingPolicy)|dropShippingPolicy|Streckengeschäft?|No|
|_number_|storageId|(optional) Lager-ID|No|
|[DocumentContractDetail](#DocumentContractDetail)|contractDetail|Vertragsdetails zur Belegposition|No|
|_number_|supplierAccountId|Wird für die Umwandlung von Kundenauftrag in Lieferantenauftrag benötigt|No|
|_number_|quantity|Menge, die in dieser Transaktion verarbeitet werden soll|No|
|[RequestDocumentLineFabricationDetail](#RequestDocumentLineFabricationDetail)|fabricationDetail|Details Produktionsbelegen|No|
|_string_|custom|Für interne Zwecke: Freifelder|No|
|_number_|articleId|(optional) ID des Artikels dieser Position|No|
|_number_|lineId|ID der Belegposition im aktuellen Beleg|No|
|_string_|externalId|Referenz auf die zugehörige Position in einem externen System|No|
|_number_|incomingGoodsPickTrolleyId|ID des Pickwagens für den Wareneingang (wenn `incomingGoodsStorageBinId` = null)|No|
|[DocumentCommissionOrigin](#DocumentCommissionOrigin)|commissionOrigin|Provisionsherkunft dieser Belegposition|No|
|Array<[RequestDocumentText](#RequestDocumentText)>|texts|(optional) Liste von Texten für diese Position|No|
|Array<[RequestDocumentPriceModifier](#RequestDocumentPriceModifier)>|priceModifiers|(optional) Liste von Preismodifikatoren für diese Position|No|
|_string_|name|Artikelname|No|
|_number_|sourceLineId|ID der Quell-Belegposition|No|
|_string_|externalArticleNumber|Für interne Zwecke: Externe Artikelnummer|No|
|Array<[RequestDocumentLineBooking](#RequestDocumentLineBooking)>|bookings|Buchungen zu dieser Belegposition|No|
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
|[ValueType](#ValueType)|valueType|Provisionstyp|No|
|[DocumentCommissionOrigin](#DocumentCommissionOrigin)|origin|Herkunft|No|
|_string_|description|Beschreibung|No|
|_string_|comment|Kommentar|No|
|[Account](#Account)|salesAgentAccountRef|Vertreter|No|
|_number_|value|Provision Prozent/Wert|No|



## RequestDocumentLineFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[FabricationSerialNumber](#FabricationSerialNumber)>|fabricationSerialNumbers|Nur füllen, wenn die Seriennummern vor der Start der Produktion manuell bestimmt werden sollen|No|



## RequestDocumentPriceModifier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[DocumentPriceModifier$PriceModifierSourceType](#DocumentPriceModifierPriceModifierSourceType)|sourceType|Source of price modifier|No|
|_number_|modifierValue|modifierValue of this line|No|
|[ValueType](#ValueType)|valueType|value-type of modifier of this line|No|
|_string_|modifierName|modifierName of this line|No|
|[PriceModifierType](#PriceModifierType)|modifierType|type of this price modifier (discount/surcharge)|No|



## RequestDocumentText

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[TextPosition](#TextPosition)|textPosition|header or footer text|No|
|_string_|content|text content|No|



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
|[ApiObjectReference](#ApiObjectReference)|deliveryMethodRef|reference to the delivery method|No|
|[EavSalesagent](#EavSalesagent)|custom|Freifelder|No|
|_boolean_|active|active true/false|Yes|
|[ApiObjectReference](#ApiObjectReference)|paymentTermRef|reference to the payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[SalesAgentCommissionType](#SalesAgentCommissionType)|commissionType|commission type of sales agent|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryTermRef|reference to the delivery term|No|
|[ApiObjectReference](#ApiObjectReference)|taxRateRef|reference to the tax rate|No|
|_string_|number|number of sales agent|No|
|_string_|performanceCountryCode|country code performance country IsoAlpha3|No|
|[AccountBillingType](#AccountBillingType)|billingType|billing type|No|
|[ApiObjectReference](#ApiObjectReference)|paymentMethodRef|reference to the payment method|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|accountingNumber|accounting number|No|
|_string_|currencyCode|currency code  IsoAlpha3|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|Array<[ScenarioDimension](#ScenarioDimension)>|dimDefinitions|Dimensions Definition|No|
|Array<[ScenarioFactDef](#ScenarioFactDef)>|factDefinitions|Fakten/Daten Definition|No|
|_string_|description|die beschreibung für dieses Scenario|No|
|_string_|label|die beschreibung für dieses Scenario|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ScriptingDate](#ScriptingDate)|startDate|Start-Datum für die Berechnung (optional)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ScenarioActualValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|scenarioDimRef|Referenz auf ein ScenarioDimDef|No|
|_number_|weight|gewichtung|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|referenceId|Referenz auf die LookupReferenz|No|
|[ApiObjectReference](#ApiObjectReference)|dimValueRef|Referenz auf eine Scenario-Dimension-Ausprägung|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ScenarioDimension

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[ScenarioDimensionValue](#ScenarioDimensionValue)>|definedValues|Verteilschlüssel Ausprägungen|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|key|Verteilschlüssel - Key/Gruppe|No|
|_boolean_|multiSelect|können mehrere Schlüssel bei der Verteilung verwendet werden|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ScenarioFactDef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|factAttribute|Attribut Name|No|
|[ScenarioFactDef$FactType](#ScenarioFactDefFactType)|attributeType|Attribut Typ|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[SequencerConfigurationDetail](#SequencerConfigurationDetail)|configurationDetail|Contains details about the sequencer configuration|No|
|[ApiObjectReference](#ApiObjectReference)|alternativeConfiguration|Alternative configuration used to generate sequences instead of this configuration|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## SequencerConfigurationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|numberUnique|Eindeutigkeitsprüfung|No|
|_string_|expression|Präfix-Ausdruck|No|
|[SequenceAssignmentMode](#SequenceAssignmentMode)|assignmentMode|Vergabeverfahren|No|
|_string_|padChar|Auffüllzeichen|No|
|_number_|length|Länge|No|
|_string_|postExpression|Postfix-Ausdruck|No|
|[SequenceType](#SequenceType)|type|Typ der Sequenz|No|
|_number_|initialValue|Initialer Wert|No|



## SerialNumberWithQuantityApi

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Menge|No|
|[ArticleSerialNumber](#ArticleSerialNumber)|serialNumber|Seriennummer|No|



## ShelfDocument

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Notiz|No|
|[ScriptingDate](#ScriptingDate)|entryDate|Date of this Entry/Document|No|
|[EavShelfdocument](#EavShelfdocument)|custom|Custom data|No|
|[UUID](#UUID)|externalId|Externe Id|Yes|
|_string_|description|description of this document|No|
|[ShelfDocumentDeletionState](#ShelfDocumentDeletionState)|deletionState|Löschungsstatus|Yes|
|[ShelfDocumentType](#ShelfDocumentType)|type|Dokumentenart|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#TagDto)>|tags|List of tags|No|
|Array<[ShelfTranslatableText](#ShelfTranslatableText)>|translatableTexts|Mehrsprachige Bezeichnungen|No|
|Array<[ShelfShare](#ShelfShare)>|shares|share informations|Yes|
|[ScriptingDate](#ScriptingDate)|plannedRemovalDate|Automatische Löschung ab|Yes|
|[ShelfFile](#ShelfFile)|file|file data|Yes|
|_string_|alias|Alias|No|
|[ShelfDocumentState](#ShelfDocumentState)|state|Status|Yes|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|_Array<string>_|transformationKeys|Verfügbare Transformationen zum Bild|Yes|
|_number_|refId|id of the referenced object|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|mainAttribution|Hauptverknüpfung dieser DMS-Ressource|Yes|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|_number_|accessLevelRead|access level or reading|No|
|_string_|label|label of type|No|
|_number_|revisionStorageRule|storage rule for revisions|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|duration|duration of storage (years)|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|accessLevelDelete|access level for deleting|No|
|_string_|key|unique key of type|Yes|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ShelfFile

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[SubFileInfo](#SubFileInfo)>|subFiles|subFiles for this file|Yes|
|_number_|revisionNumber|revision number of this file|Yes|
|_number_|fileSize|fileSize|Yes|
|_string_|publicFileExtension|file-extension of this entry|Yes|
|_number_|id|Unique identifier of the Object|No|
|_string_|publicFileName|file-name (without extension) of this entry|Yes|
|_string_|contentType|detected content type|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[ShelfFileMetaData](#ShelfFileMetaData)>|metaDataEntries|meta data|Yes|
|_string_|storageHandle|current reference of this file in our storage |Yes|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ShelfFileMetaData

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|metaValue|metadaten wert|No|
|_string_|metaKey|metadaten key|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ShelfShare

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ShelfSharePublishState](#ShelfSharePublishState)|publishState|Veröffentlichungsstatus|No|
|_number_|publicUrlDurationInMinutes|wie viele Minuten bleibt dieser resource-pfad zugreifbar (null = unlimited)|No|
|[EavShelfshare](#EavShelfshare)|custom|Freifelder|No|
|_string_|publicUrlPath|der url-pfadanteil, der öffentlichen zugriff auf diese resource gibt|Yes|
|[ShelfShareAvailability](#ShelfShareAvailability)|availability|Verfügbarkeit|No|
|_string_|sharedByExternalRef|Externer Verweis auf dieses Share|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|revision|Revision|Yes|
|Array<[ShelfTranslatableText](#ShelfTranslatableText)>|translatableTexts|Mehrsprachige Bezeichnungen|No|
|[UUID](#UUID)|appId|App-ID|No|
|_number_|timesUsed|Anzahl der Nutzungen|Yes|
|[ScriptingDate](#ScriptingDate)|publicUrlCreatedAt|wann die öffentliche resource erstellt wurde|Yes|
|_string_|eTag|Hash der Revision|Yes|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## StorageBinRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|storageRef|Referenz auf das Lager|No|
|_string_|color|Anzeigefarbe|No|
|_string_|displayName|Anzeigename|No|
|_number_|id|ID|No|



## SubFileInfo

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|fullPath|Full-Path|No|
|[ApiObjectReference](#ApiObjectReference)|shelfFile|dazugehörige FileEntity|No|
|[ScriptingDateTime](#ScriptingDateTime)|modifiedAt|file last modified|No|
|_string_|parentPath|Parent-Path|No|
|_string_|name|fileName|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|contentType|Inhaltstyp|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## Supplier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|createCustomerDeliveryWhenDropShipping|Erzeugung Ausgangs-Lieferschein bei Streckengeschäft-Bestellung|No|
|_number_|minimumOrderValue|Mindestbestellwert|No|
|_string_|number|number of supplier|No|
|_boolean_|permissibleForOrderProposal|zulässig für Aufnahme in Bestellvorschläge|No|
|[AccountBillingType](#AccountBillingType)|billingType|Fakturisierungsart Netto oder Brutto|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|accountingNumber|finance account-number of supplier|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#ApiObjectReference)|supplierGroupRef|Lieferantengruppe|No|
|_boolean_|taxable|tax able or tax free|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryMethodRef|reference to the delivery method|No|
|_boolean_|dunning|Mahnen?|No|
|_number_|freeShippingValue|Frachtkostenfrei ab|No|
|_boolean_|active|active true/false|Yes|
|[ApiObjectReference](#ApiObjectReference)|responsibleUserRef|reference to responsible user|No|
|_string_|ourNumber|suppliers number for us|No|
|[ApiObjectReference](#ApiObjectReference)|paymentTermRef|reference to the payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|dropShippingAllowed|Kennzeichen, ob Streckengeschäft erlaubt|No|
|[ApiObjectReference](#ApiObjectReference)|deliveryTermRef|reference to the delivery term|No|
|_string_|performanceCountryCode|country code performance country IsoAlpha3|No|
|_number_|defaultDeliveryTime|Lieferzeit in (Werk-)Tagen|No|
|[ApiObjectReference](#ApiObjectReference)|paymentMethodRef|reference to the payment method|No|
|_string_|currencyCode|currency code  IsoAlpha3|No|



## TagDto

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiCreatableReference](#ApiCreatableReference)|tagGroup|Tag-Gruppe|No|
|_string_|editColor|Farbe in Verwaltungs-GUI|No|
|_string_|color|Farbe für die Anzeige des Tags|No|
|_string_|searchColor|Farbe in Such-GUI|No|
|_string_|label|Beschriftung des Tags|No|
|_number_|id|Unique identifier of the Object|No|
|[TagType](#TagType)|type|Typ des Tags|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|_string_|countryCode|ISO 2 Code of the country this tax ID is used for|No|
|_string_|taxId|Tax ID of the company in the associated country|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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
|[ScriptingDate](#ScriptingDate)|validFrom|the date, this entry is valid from|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiCreatableReference](#ApiCreatableReference)|typeRef|a type lable, this tax-rate is associated with. this label is used as a selector in the TaxSchema resource|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



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


## TextEnumCreate

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[EavTextenumeration](#EavTextenumeration)|custom|Custom data|No|
|_boolean_|active|active|Yes|
|_string_|label|Wert der Aufzählung|No|
|_string_|groupKey|Gruppe der Text-Aufzählung|No|



## TextEnumGet

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[EavTextenumeration](#EavTextenumeration)|custom|Custom data|No|
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


## TssSignature

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|externalReference|Externe Referenz|Yes|
|_string_|responseData|Antwortdaten der TSS|Yes|
|_number_|revision|Revision|Yes|
|[TssSignature$TssSignatureStatus](#TssSignatureTssSignatureStatus)|status|Status der Signierung|Yes|



## TssSignature$TssSignatureStatus

| Value | Description |
| :---- | :---------- |
|FINISHED||
|ACTIVE||
|CANCELLED||
|ERROR||


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
|[Document](#Document)|document|Der Beleg|No|
|Array<[AdditionalParameter](#AdditionalParameter)>|parameters|Zusätzliche Parameter|No|



## User

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|owner|Is owner user?|Yes|
|_string_|lastName|last-name|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|roles|Rollen|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|groups|Gruppen|No|
|_boolean_|active|Is the user active?|Yes|
|[UUID](#UUID)|appIdentifier|App-Identifier|Yes|
|[CommonUserType](#CommonUserType)|type|User type|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|emailVerified|is the email verified|Yes|
|_string_|firstName|first-name|No|
|_string_|emailAddress|email-address|No|
|_number_|id|Unique identifier of the Object|No|
|[ScriptingDateTime](#ScriptingDateTime)|validTo|Valid to|No|
|_string_|username|username|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## ValueType

| Value | Description |
| :---- | :---------- |
|PERCENT||
|FIX||


## VariantAttribute

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Aktiv?|Yes|
|_string_|description|Beschreibung|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[VariantDescription](#VariantDescription)>|labels|Bezeichnung (mehrsprachig)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## VariantAttributeListing

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|salesChannelRef|Verkaufskanal|No|
|[ApiObjectReference](#ApiObjectReference)|variantAttributeRef|Variantenattribut|No|
|[EavVariantattributelisting](#EavVariantattributelisting)|custom|Freifelder|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## VariantDescription

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|label|Bezeichnung|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|Sprache|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## VariantSchema

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[ApiObjectReference](#ApiObjectReference)>|eligibleValueRefs|Wählbare Werte|No|
|Array<[ApiObjectReference](#ApiObjectReference)>|attributeRefs|Zugeordnete Attribute|No|
|_boolean_|active|Aktiv?|Yes|
|_string_|description|Beschreibung|No|
|_string_|label|Bezeichnung|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## VariantValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sortierung|No|
|_boolean_|active|Aktiv?|Yes|
|_number_|id|Unique identifier of the Object|No|
|_string_|abbreviation|Abkürzung|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#ApiObjectReference)|attributeRef|Variantenattribut|Yes|
|Array<[VariantDescription](#VariantDescription)>|labels|Mehrsprachige Bezeichnungen|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## VariantValueListing

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|variantValueRef|Variantenattributwert|No|
|[ApiObjectReference](#ApiObjectReference)|salesChannelRef|Verkaufskanal|No|
|[EavVariantvaluelisting](#EavVariantvaluelisting)|custom|Freifelder|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#MetaInfo)|info|MetaInformations for this Object|Yes|



## VariantValueReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#ApiObjectReference)|variantAttributeRef|Variantenattribut|Yes|
|_string_|description|Beschreibung|Yes|
|_string_|label|Bezeichnung|Yes|
|_number_|id|Identifier|No|



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
|[EWorkflowInstanceState](#EWorkflowInstanceState)|state||No|


