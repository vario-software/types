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
|_string_|note|Note.|No|
|_boolean_|taxLiabilityReversed|Is the tax liability reversed under §13b UStG?|No|
|Array<[AccountAddress](#accountaddress)>|addresses|All addresses except the default address.|No|
|_string_|receivablesSumCurrencyCode|Total receivables currency (ISO Alpha-3).|Yes|
|_string_|displayName|Display name.|Yes|
|_boolean_|anonymized|Is the account anonymized?|Yes|
|_string_|localCourt|Competent local court.|No|
|_string_|remark|Remark.|No|
|_string_|companyRegister|Commercial register identifier.|No|
|Array<[TaxIdForeignCountry](#taxidforeigncountry)>|taxIds|Tax numbers.|No|
|[AccountManufacturer](#accountmanufacturer)|manufacturer|Manufacturer of this account|No|
|_string_|number|Address number.|No|
|[BusinessRelationType](#businessrelationtype)|businessRelationType|Business relation type.|No|
|[ApiCreatableReference](#apicreatablereference)|initialContactTypeRef|first contact type for this account|No|
|[AccountZoneId](#accountzoneid)|accountZoneId|Account time zone (or time zone offset).|No|
|[Supplier](#supplier)|supplier|Supplier of this account|No|
|[SalesAgent](#salesagent)|salesAgent|Sales Agent of this account|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|dunningBlock|Dunning block.|No|
|_string_|payablesSumCurrencyCode|Total payables currency (ISO Alpha-3).|Yes|
|_string_|loanCurrencyCode|Credit limit currency (ISO Alpha-3).|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|Array<[AccountType](#accounttype)>|types|list of types, this account is used for (e.g. CUSTOMER, SUPPLIER, |No|
|[AccountAddress](#accountaddress)|defaultAddress|Default address of account|No|
|_number_|payablesSum|Total payables.|Yes|
|_number_|receivablesSum|Total receivables.|Yes|
|_string_|costCenter|Cost center.|No|
|[ApiCreatableReference](#apicreatablereference)|companyLegalRef|companyLegal for this account|No|
|[EavAccount](#eavaccount)|custom|Custom account data|No|
|_string_|taxNumber|Tax number.|No|
|_boolean_|active|Is account active?|Yes|
|[ApiObjectReference](#apiobjectreference)|responsibleUserRef|Responsible user.|No|
|_string_|languageCode|Account language.|No|
|[ScriptingDate](#scriptingdate)|initialContactAt|Initial contact at.|No|
|[CalculationMode](#calculationmode)|calculationMode|calculation mode of this document|No|
|_boolean_|hasActiveDuplicates|Has this Account a possible duplicate|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#tagdto)>|tags|List of tags|No|
|Array<[AccountPerson](#accountperson)>|persons|Contact person.|No|
|[ApiObjectReference](#apiobjectreference)|afterPickingTargetDocumentTypeRef|Reference to the target document category after the picking.|No|
|[AccountPerson](#accountperson)|defaultPerson|Default contact person.|No|
|Array<[AccountRelation](#accountrelation)>|relations|Account relations.|No|
|_string_|currencyCode|currency code  IsoAlpha3|No|
|[AccountLoanValue](#accountloanvalue)|loanValue|Currently calculated values for the account credit limit.|Yes|
|[ApiObjectReference](#apiobjectreference)|reportGroupRef|Report group, if it deviates from the default.|No|
|[Customer](#customer)|customer|Customer of this account|No|



## AccountAddress

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|salutationRef|salutation for this address|No|
|_string_|city|City|No|
|[ApiObjectReference](#apiobjectreference)|deviatingDeliveryMethodRef|Deviating delivery method.|No|
|_number_|latitude|latitude|No|
|[EN16931Profile](#en16931profile)|en16931Profile|EN16931 profile.|No|
|_string_|remark|Special remark.|No|
|_string_|parcelProvider|Parcel provider|No|
|[ApiObjectReference](#apiobjectreference)|regionRef|Region|No|
|[ApiCreatableReference](#apicreatablereference)|titleRef|Title|No|
|_string_|postOfficeBox|Post office box|No|
|_string_|street|Street|No|
|_string_|countryCode|Country code|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|eoriNumber|EORI number.|No|
|_number_|longitude|Longitude|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|Array<[ApiCreatableReference](#apicreatablereference)>|types|the kind of usages for this address|No|
|_string_|globalLocationNumber|GLN/ILN as location identifier for this address|No|
|_string_|buyerReference|Leitweg-ID|No|
|[ApiObjectReference](#apiobjectreference)|deviatingPaymentMethodRef|Deviating payment method.|No|
|[EavAccountaddress](#eavaccountaddress)|custom|Custom data.|No|
|_string_|postcode|Postcode|No|
|[ApiObjectReference](#apiobjectreference)|manufacturerRef|Associated manufacturer.|No|
|_boolean_|defaultForType|Default for the account type.|No|
|_string_|languageCode|Address language.|No|
|[CalculationMode](#calculationmode)|calculationMode|calculation mode of this address|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|additionalAddressLine1|Additional address line1|No|
|_string_|taxIdentificationNumber|Tax identification number (VAT ID).|No|
|_string_|parcelStation|Parcel station|No|
|_string_|additionalAddressLine2|Additional address line2|No|
|_string_|streetAddressNumber|Street address number|No|
|_string_|parcelStationCustomerNumber|Parcel station customer number|No|
|Map<[ContactTypeType](#contacttypetype),[Contact](#contact)>|defaultContacts|Default contacts|Yes|
|_string_|name3|Name3|No|
|_string_|homepageUrl|Homepage URL|No|
|[ApiObjectReference](#apiobjectreference)|deviatingDeliveryTermRef|Deviating delivery terms.|No|
|[TaxIdVerificationState](#taxidverificationstate)|taxIdVerificationState|State of the last validation of the tax id number/ UST-ID-Nr.?|Yes|
|_string_|name2|Name2|No|
|_string_|name1|Name1|No|
|[ApiObjectReference](#apiobjectreference)|deviatingPaymentTermRef|Deviating payment terms.|No|
|Array<[Contact](#contact)>|contacts|Contacts|No|
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
|[TaxPerformanceLocationType](#taxperformancelocationtype)|mainBankAccountType|Tax performance location type for which this is the main bank account.|No|
|[AccountBankdetail$OriginType](#accountbankdetailorigintype)|originType|origin type|No|
|_boolean_|defaultBank|Is default bank?|No|
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
|_boolean_|customerListed|Is the customer listed?|No|
|_boolean_|manufacturerListed|Is the manufacturer listed?|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Sales channel.|No|
|[EavAccountlisting](#eavaccountlisting)|custom|Custom field.|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Address.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## AccountLoanValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|unconsideredAmount|Amount not taken into account.|No|
|_number_|accountId|Account.|No|
|_number_|nonInvoicedDocumentLoan|Amount from orders.|No|
|_number_|payablesSum|Amount from payables (negative).|No|
|_number_|maximalLoan|Credit limit.|No|
|_number_|exceededLoan|Credit amount exceeded.|No|
|_number_|currentDocumentLoan|Current document amount.|No|
|_number_|currentLoan|Current loan.|No|
|_number_|receivableLoan|Amount from receivables.|No|
|_number_|remainingLoan|Remaining amount until the credit limit is reached.|No|



## AccountManufacturer

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|active true/false|Yes|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|forcedRecommendedRetailPrice|Is the recommended retail price mandatory?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[AccountManufacturerDescription](#accountmanufacturerdescription)>|labels|Descriptions.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## AccountManufacturerDescription

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|manufacturerUrl|Manufacturer URL.|No|
|_string_|description|Description.|No|
|_string_|label|Label.|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|Description language.|No|
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
|_string_|remark|Special remark.|No|
|_string_|locale|Locale|No|
|[ApiCreatableReference](#apicreatablereference)|titleRef|Title|No|
|[ApiCreatableReference](#apicreatablereference)|initialContactTypeRef|First contact type for this account person|No|
|[ApiCreatableReference](#apicreatablereference)|jobTypeRef|jobType|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[EavAccountperson](#eavaccountperson)|custom|Custom data.|No|
|_string_|jobArea|Job area|No|
|_boolean_|active|Is this active?|Yes|
|[ScriptingDate](#scriptingdate)|dateOfBirth|Date of birth|No|
|_string_|label|Label.|No|
|[ScriptingDate](#scriptingdate)|initialContactAt|Initial contact at.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|defaultPerson|Default contact person.|Yes|
|Array<[TagDto](#tagdto)>|tags|List of tags|No|
|Map<[ContactTypeType](#contacttypetype),[Contact](#contact)>|defaultContacts|Default contacts|Yes|
|_string_|firstName|First name|No|
|[ApiObjectReference](#apiobjectreference)|userRef|Assigned user (for the own account).|No|
|_number_|sortOrder|Sort order.|No|
|_string_|comment|Comment.|No|
|_string_|middleName|Middle name|No|
|Array<[Contact](#contact)>|contacts|List of contacts|No|



## AccountRelation

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiCreatableReference](#apicreatablereference)|relationTypeRef|Relation type|No|
|[ApiObjectReference](#apiobjectreference)|relatedAccountRef|Related account|No|
|_string_|comment|Comment.|No|
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
|_boolean_|active|Active.|Yes|
|_string_|description|a short description|Yes|
|_number_|id|Identifier|No|
|_string_|label|a label|Yes|



## Article

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[FabricationOfComponents](#fabricationofcomponents)|fabricationOfComponents|Component fabrication.|No|
|[ArticlePrintLabelSettings](#articleprintlabelsettings)|printLabelSettings|Label printing settings.|No|
|_string_|customsTariffNumber|Customs tariff number.|Yes|
|[DangerousGoodInformation](#dangerousgoodinformation)|dangerousGoodInformation|Dangerous goods information.|No|
|_boolean_|purchasable|is this product purchasable|No|
|[EavArticleListing](#eavarticlelisting)|listingCustom|Product custom data|No|
|[UnitTypeReference](#unittypereference)|baseCapacityUnit|base capacity unit|No|
|[ArticleSerialNumberLabelingType](#articleserialnumberlabelingtype)|serialNumberLabelingType|Serial number labeling type.|No|
|_boolean_|sellableWithoutStock|is this product sellable without any quantity at the stock|No|
|_number_|initialAvgPurchasePrice|Average purchase price (initial value).|No|
|_number_|grossVolumeInCubicMeters|gross Volume in cubic meters|No|
|_boolean_|deliverable|Is the article still deliverable?|No|
|[UnitTypeReference](#unittypereference)|productUnit|unit-type of this product|No|
|_boolean_|forcedRecommendedRetailPrice|Is the recommended retail price mandatory?|No|
|_number_|warrantyInMonths|Warranty in months.|No|
|_string_|number|unique product number|No|
|[Article$Metric](#articlemetric)|netMetric|weight and size w.o. packaging|No|
|[ArticleAvailabilityDetermination](#articleavailabilitydetermination)|availabilityDetermination|Options for calculating the availability.|No|
|_boolean_|mergeable|is this product mergeable to another package-variant|No|
|_boolean_|cashDiscountable|Is this article eligible for the payment discount?|No|
|_boolean_|determineAvgPurchasePrice|Should the average purchase price be calculated?|No|
|[ApiObjectReference](#apiobjectreference)|onGoodsArrivalConvertIntoBundleArticleRef|Dissolution into container articles on incoming goods.|No|
|[ApiObjectReference](#apiobjectreference)|discountGroupRef|Discount group.|No|
|[DropShippingPolicy](#dropshippingpolicy)|dropShippingPolicy|Drop shipping policy.|No|
|[ArticleAssetInformation](#articleassetinformation)|articleAssetInformation|Information about the connection between the asset and the Article.|No|
|_number_|id|Unique identifier of the Object|No|
|[ArticleSerialType](#articleserialtype)|serialType|serial-type of this article|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#apiobjectreference)|taxSchemaRef|reference to TaxSchema|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|reference to DeliveryMethod|No|
|_boolean_|fabrication|Fabrication.|No|
|_number_|targetTradingMargin|Target trading margin.|No|
|_boolean_|active|active|Yes|
|[ApiObjectReference](#apiobjectreference)|responsibleUserRef|Responsible user.|No|
|_number_|listingId|Listing identifier.|No|
|_string_|languageCode|Restriction to a country.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#tagdto)>|tags|Product tags.|No|
|_boolean_|solvable|is this product solvable to another package-variant|No|
|_boolean_|returnable|Is this returnable?|No|
|[Article$Metric](#articlemetric)|grossMetric|weight and size inc. packaging|No|
|_number_|salesUnit|Sales unit.|No|
|_string_|name|name of this product|No|
|[ScriptingDateTime](#scriptingdatetime)|listingStateChangeTime|Last listingState update.|Yes|
|[CountryReference](#countryreference)|countryOfOriginRef|Country code|No|
|_number_|workUnitInMinutes|Work unit in minutes.|No|
|[EavArticleListingDescription](#eavarticlelistingdescription)|listingDescriptionCustom|description custom data|No|
|_boolean_|freelyPickable|Freely pickable.|No|
|_boolean_|taxLiabilityReversed|Is the tax liability reversed under §13b UStG?|No|
|_boolean_|lotOnlyRequiredWhenBookedToSalesStorage|A lot must be assigned when booking into a sales storage (for serial types LOT and BEST_BEFORE).|No|
|_string_|note|Note.|No|
|[ArticlePickingType](#articlepickingtype)|pickingType|Allowed types of picking.|No|
|_boolean_|printWarningIfNoContingentAvailable|Only for quota articles: should the billing print a note that no quota is available?|No|
|_string_|description|description of this product|No|
|_string_|remark|Special remark.|No|
|_boolean_|sellable|is this product sellable|No|
|[ApiObjectReference](#apiobjectreference)|productGroupRef|reference to Product Group|No|
|_number_|capacity|capacity|No|
|_number_|grossSalesPrice|gross sales prices|No|
|_number_|minimumRemainingDaysBeforeExpiryDateOnGoodsReceipt|Minimum remaining shelf life incoming (days): minimum remaining shelf life in days an article must still have when booked into a sales storage.|No|
|_number_|defaultFabricationCost|Predefined production costs.|No|
|_number_|initialLastPurchasePrice|Last purchase price (initial value).|No|
|_boolean_|permissibleForOrderProposal|Eligible for inclusion in order proposals.|No|
|[ApiObjectReference](#apiobjectreference)|productRef|reference to Product|No|
|_boolean_|shippingLabelPrinting|Shipping label printing.|No|
|_string_|alternativeName|alternative name of this product|No|
|[ApiObjectReference](#apiobjectreference)|contingentArticleRef|Quota article.|No|
|_boolean_|discountable|Is this article eligible for discount?|No|
|_number_|baseCapacity|base capacity|No|
|[ProductType](#producttype)|productType|type of this article|No|
|_string_|manufacturerArticleNumber|Article number.|No|
|_boolean_|baseArticle|Is this the product's base article?|No|
|_boolean_|dangerousGoods|The article is dangerous goods.|No|
|Array<[ArticleIdentifier](#articleidentifier)>|identifiers|all (external) product numbers (SKU, EAN, ...)|No|
|[EavArticle](#eavarticle)|custom|Product custom data|No|
|[ArticleSerialExpiryDateType](#articleserialexpirydatetype)|expiryDateType|Expiry date type.|No|
|_boolean_|needsAssessmentOnlyOnReservationBasis|Demand determination based on reservations only.|No|
|[ApiObjectReference](#apiobjectreference)|manufacturerRef|Manufacturer.|No|
|_number_|netSalesPrice|net sales prices|No|
|[UnitTypeReference](#unittypereference)|capacityUnit|capacity unit|No|
|_string_|storageInfo|Kommissionierungshinweis|No|
|_number_|basePriceUnit|Base price unit.|No|
|_boolean_|listed|Should the article be listed?|No|
|_boolean_|commissionable|Is this article eligible for commission?|No|
|_boolean_|onlyManualFabrication|Manual fabrication only.|No|
|_number_|minimumRemainingDaysBeforeExpiryDateForGoodsIssued|Minimum remaining shelf life outgoing (days): minimum remaining shelf life in days an article must still have when sold.|No|
|[ArticlePriceBase](#articlepricebase)|priceBase|Price base.|No|
|_boolean_|availableAlone|Is the article deliverable on its own?|No|
|[ListingState](#listingstate)|listingState|Current listing state.|Yes|



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
|_boolean_|createAssetOnStorageEntry|Create assets automatically on stock receipt.|No|
|_boolean_|createAssetOnSale|Create the asset automatically on sale.|No|
|[AssetCreateOnDocumentCategory](#assetcreateondocumentcategory)|createAssetOnDocumentCategory|Create the asset for this document category.|No|
|[AssetType](#assettype)|createWithAssetType|Asset type to create.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ArticleAvailabilityDetermination

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ArticleAvailabilityDetermination$Operation](#articleavailabilitydeterminationoperation)|ordered|How ordered quantities are handled.|No|
|[ArticleAvailabilityDetermination$Operation](#articleavailabilitydeterminationoperation)|reserved|How reserved quantities are handled.|No|
|[ArticleAvailabilityDetermination$Operation](#articleavailabilitydeterminationoperation)|inStock|How the stock is handled.|No|
|[ArticleAvailabilityDetermination$Operation](#articleavailabilitydeterminationoperation)|inPicking|How quantities in picking are handled.|No|
|[ArticleAvailabilityDetermination$Operation](#articleavailabilitydeterminationoperation)|reporting|How reorder levels are handled.|No|



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
|Array<[ArticleConversionRatio](#articleconversionratio)>|dissolveRatios|Possible targets for the dissolution.|No|
|[ProductArticleRef](#productarticleref)|articleRef|Article the information here belongs to.|No|
|Array<[ArticleConversionRatio](#articleconversionratio)>|mergeRatios|Possible targets for the merging.|No|



## ArticleConversionRatio

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[UnitTypeReference](#unittypereference)|sourceUnitTypeRef|Source unit.|No|
|[ProductArticleRef](#productarticleref)|articleRef|Article.|No|
|_number_|factor|Factor.|No|



## ArticleCustomer

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|accountDisplayName|Account display name.|Yes|
|_string_|articleName|Referenced Article name|No|
|[ArticlePrintLabelSettings](#articleprintlabelsettings)|customerPrintLabelSettings|Label printing settings.|No|
|_boolean_|useDeviatingArticleIdentifier|Should the deviating product identifier be used (e.g. when scanning)?|No|
|Array<[ProductPrice](#productprice)>|productPrices|Customer prices.|Yes|
|_number_|articleId|Referenced Article|No|
|_boolean_|useDeviatingArticleDescription|Should the deviating product description be used (e.g. in documents)?|No|
|_boolean_|active|Is this active?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|deviatingArticleDescription|Deviating product description.|No|
|_number_|defaultNetPrice|Default net price.|No|
|_number_|accountId|Referenced Customer-Account|No|
|_string_|deviatingArticleName|Deviating product name.|No|
|_number_|defaultGrossPrice|Default gross price.|No|
|_string_|deviatingArticleNumber|Deviating product number.|No|
|_string_|articleNumber|Article number.|Yes|
|[ArticleCustomerPriceDetermination](#articlecustomerpricedetermination)|priceDetermination|Price determination type.|No|
|_string_|deviatingArticleIdentifier|Deviating product identifier (e.g. barcode).|No|
|_boolean_|useDeviatingArticleNumber|Should the deviating product number be used (e.g. in documents)?|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|useDeviatingArticleName|Should the deviating product name be used (e.g. in documents)?|No|
|_boolean_|lockedForCustomer|Is the product blocked for the customer?|No|
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
|_boolean_|defaultArticleIdentifier|Is this the default article identifier?|No|
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
|_number_|proposedLowestPriceGross|Lowest gross price of the last 30 days (determined by the system).|Yes|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Sales channel.|No|
|_number_|customLowestPriceGross|Lowest gross price of the last 30 days (user-defined input).|No|
|_boolean_|listed|Should the article be listed?|No|
|_WithDefaults<String>_|name|name of this article|No|
|Array<[ApiObjectReference](#apiobjectreference)>|categoryRefs|Categories this listing is assigned to.|No|
|[ScriptingDateTime](#scriptingdatetime)|listingStateChangeTime|Last listingState update.|Yes|
|_number_|id|Unique identifier of the Object|No|
|_WithDefaults<String>_|alternativeName|alternative name of this article|No|
|_number_|proposedLowestPriceNet|Lowest net price of the last 30 days (determined by the system).|Yes|
|_number_|customLowestPriceNet|Lowest net price of the last 30 days (user-defined input).|No|
|[ListingState](#listingstate)|listingState|Current listing state.|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ArticleListing$CustomFieldWithDefaults

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[EavArticleListingDescription](#eavarticlelistingdescription)|defaultValue|Default sales channel value.|Yes|
|[EavArticleListingDescription](#eavarticlelistingdescription)|value|Sales channel value.|No|



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
|_number_|outgoingPrintQuantity|Outgoing goods: print quantity.|No|
|[ArticlePrintLabelCalculationMode](#articleprintlabelcalculationmode)|outgoingCalculationMode|Outgoing goods: print quantity determination.|No|
|[ArticlePrintLabelCalculationMode](#articleprintlabelcalculationmode)|incomingCalculationMode|Incoming goods: print quantity determination.|No|
|_number_|incomingPrintQuantity|Incoming goods: print quantity.|No|
|[ApiObjectReference](#apiobjectreference)|report|Label report.|No|
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
|[ScriptingDate](#scriptingdate)|expiryDate|Expiry date.|No|
|_string_|note|Note.|No|
|_boolean_|ignoreExpiryDateOnStockBooking|Ignore expiry date on stock booking|Yes|
|_string_|serialNumber2|Serial number 2.|No|
|_string_|serialNumber1|Serial number 1.|No|
|[EavArticleserialnumber](#eavarticleserialnumber)|custom|Serial number custom field.|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Article.|No|
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
|_number_|quantityInStock|Stock in the storage.|Yes|
|_number_|replenishmentFrom|Replenish from.|No|
|_number_|orderedQuantity|Ordered quantity.|Yes|
|_number_|reorderPoint|Reorder level.|No|
|_number_|quantityInPicking|Current quantity in picking.|Yes|
|_number_|replenishmentOn|Replenish to.|No|
|_number_|virtualStockAmount|Current "virtual" stock (if larger containers were dissolved into this one).|Yes|
|_number_|reservedQuantity|Reserved quantity.|Yes|
|_number_|virtualStockAvailable|Current "virtual" available quantity (if larger containers were dissolved into this one).|Yes|
|_number_|articleId|Product whose storage information is returned here.|No|
|_string_|storageLocation|Storage location.|No|
|_number_|stockAvailable|Available quantity in the storage according to the configured availability determination.|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|storageInfo|Picking remark.|No|
|_boolean_|withStorageBins|Does this storage use storage bins?|Yes|
|[ApiObjectReference](#apiobjectreference)|storageRef|Storage whose information is returned here.|No|
|Array<[StorageBinRef](#storagebinref)>|presetStorageBinRefs|Predefined storage bins.|No|
|_number_|targetStock|Target stock.|No|
|_number_|quantityInFabrication|Current quantity in fabrication.|Yes|
|_number_|minimumStock|Minimum stock.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ArticleSupplier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|useSupplierArticleDescription|Should the deviating product description be used (e.g. in documents)?|No|
|_string_|accountDisplayName|Account display name.|Yes|
|_number_|supplierReportingStock|Supplier reorder level.|No|
|_boolean_|useSupplierArticleIdentifier|Should the deviating product identifier be used (e.g. when scanning)?|No|
|_number_|deliveryTime|Delivery time in (working) days.|No|
|_boolean_|useSupplierArticleNumber|Should the deviating product number be used (e.g. in documents)?|No|
|_number_|minimumOrderQuantity|Minimum order quantity.|No|
|[UnitTypeReference](#unittypereference)|productUnit|Unit type.|No|
|_boolean_|useSupplierArticleName|Should the deviating product name be used (e.g. in documents)?|No|
|_number_|defaultGrossPrice|Default gross price.|No|
|_string_|articleNumber|Article number.|Yes|
|[ApiObjectReference](#apiobjectreference)|discountGroupRef|Discount group.|No|
|[UnitTypeReference](#unittypereference)|orderUnit|Order unit type.|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_number_|packagingUnit|Packaging unit.|No|
|_string_|articleName|Referenced Article name|No|
|Array<[ProductPrice](#productprice)>|productPrices|Supplier prices.|Yes|
|_number_|articleId|Referenced Article|No|
|_boolean_|active|Is this active?|No|
|_boolean_|mainSupplier|Main supplier.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|dropShippingAllowed|Indicates whether drop shipping is allowed.|No|
|_string_|supplierArticleName|Deviating product name.|No|
|_string_|supplierArticleDescription|Deviating product description.|No|
|_number_|defaultNetPrice|Default net price.|No|
|_number_|purchaseUnit|Purchase unit.|No|
|_number_|accountId|Referenced Supplier-Account|No|
|_boolean_|orderOnComponentBase|Should assemblies be ordered on a component basis?|No|
|_string_|supplierArticleIdentifier|Deviating product identifier (e.g. barcode).|No|
|_string_|supplierArticleNumber|Deviating product number.|No|
|[ArticlePrintLabelSettings](#articleprintlabelsettings)|supplierPrintLabelSettings|Label printing settings.|No|



## AssemblyComponentReturnLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Returned quantity.|No|
|_number_|sourceLineId|Assembly source line identifier.|No|
|Array<[RequestDocumentLineBooking](#requestdocumentlinebooking)>|bookings|Bookings for the component.|No|
|_number_|sourceComponentId|Component identifier in the assembly source line.|No|
|_number_|returnCauseId|Return cause identifier.|No|



## Asset

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Note.|No|
|[ArticleSerialNumber](#articleserialnumber)|serialNumber|Serial number.|No|
|_string_|freeSerialNumber|Freely enterable serial number or best-before date.|No|
|[EavAsset](#eavasset)|custom|Asset custom fields.|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Article.|No|
|_boolean_|active|active|Yes|
|[ScriptingDate](#scriptingdate)|warrantyEndDate|Warranty end.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|childAssetRefs|Associated assets.|Yes|
|_string_|label|Asset label.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|billingAddressRef|Billing address.|No|
|[ApiObjectReference](#apiobjectreference)|contractRef|Contract.|No|
|[ApiObjectReference](#apiobjectreference)|accountAddressRef|Additional address.|No|
|Array<[TagDto](#tagdto)>|tags|Asset tags.|No|
|_string_|number|Asset number.|No|
|[ScriptingDate](#scriptingdate)|warrantyStartDate|Warranty start.|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Asset holder.|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|parentAssetRef|Parent asset.|No|
|[ApiObjectReference](#apiobjectreference)|typeRef|Asset type.|No|
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
|_boolean_|active|Is this active?|Yes|
|_string_|label|Label.|No|
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
|FACTORING||
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
|_boolean_|createReportAfterTransfer|Should a report be created after the transfer?|No|
|Array<[StockTransferApi](#stocktransferapi)>|stockTransfers|Contains the instructions for the transfers.|No|



## BulkTransferResult

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ScriptingDate](#scriptingdate)|date|Booking date.|No|
|_number_|reportId|When the report was requested in the request, the identifier from the DMS is returned here.|No|
|Array<[StockTransferResult](#stocktransferresult)>|stocks|Storage bin stocks changed by the stock booking.|No|



## BundleSchema

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|productId|Product this schema belongs to.|Yes|
|_string_|label|Name.|No|
|_number_|id|Unique identifier of the Object|No|
|[UnitTypeReference](#unittypereference)|baseTypeRef|Schema base unit.|No|
|Array<[BundleUnitTypeRatio](#bundleunittyperatio)>|ratios|Conversions for the associated product articles.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## BundleUnitTypeRatio

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[UnitTypeReference](#unittypereference)|baseUnitTypeRef|Unit type.|No|
|[UnitTypeReference](#unittypereference)|relationUnitTypeRef|Relation unit type.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|factor|Factor.|No|
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


## CommissionAssignment

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|articleRef|Article.|No|
|_string_|description|Description|No|
|[ScriptingDate](#scriptingdate)|validFrom|Valid From|No|
|[ApiObjectReference](#apiobjectreference)|productGroupRef|Product Group|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|commissionValue|Commission Value|No|
|_string_|valueCurrencyCode|the currency-code IsoAlpha3|No|
|[ValueType](#valuetype)|commissionValueType|Commission Value type|No|
|[CommissionQualifier](#commissionqualifier)|qualifier|Qualifier|No|
|[ScriptingDate](#scriptingdate)|validUntil|Valid Until|No|
|_string_|comment|User comment|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Account.|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|salesAgentAccountRef|Sales Agent|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CommissionQualifier

| Value | Description |
| :---- | :---------- |
|SALES||


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
|[EavContact](#eavcontact)|custom|Custom field.|No|
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
|_string_|isoAlpha2|Country ISO Alpha-2 code.|No|
|_string_|isoAlpha3|Country ISO Alpha-3 code.|No|
|_number_|id|Country identifier.|No|
|_string_|label|Country label.|Yes|



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
|_string_|notes|Notes.|No|
|_number_|durationInSeconds|Activity duration in seconds.|No|
|[CrmActivityType](#crmactivitytype)|type|Activity type.|No|
|[CrmActivityBillingType](#crmactivitybillingtype)|billingType|Activity billing type.|No|
|_number_|durationToBillInSeconds|Actual duration.|No|
|[ScriptingDateTime](#scriptingdatetime)|plannedStartDateTime|Planned start time.|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|billingDocumentLineRef|Billing document line.|Yes|
|_boolean_|email|Is the activity an email?|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_boolean_|internalBilled|Was the activity billed internally?|Yes|
|_number_|plannedDurationInSeconds|Planned duration.|No|
|[EavCrmactivity](#eavcrmactivity)|custom|CRM activity custom fields.|No|
|_number_|billingDiscount|Discount for the billing.|No|
|_boolean_|published|Is the activity published?|No|
|[ApiObjectReference](#apiobjectreference)|accountPersonRef|Contact person.|No|
|_boolean_|billable|Is this billable?|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|userRef|Which user this activity belongs to; when NULL it is a system activity.|No|
|_boolean_|system|Is this a system activity?|Yes|
|[ScriptingDateTime](#scriptingdatetime)|startDateTime|Actual start time.|No|
|_string_|comment|Activity content.|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Which address this activity belongs to.|No|
|[CrmObjectRef](#crmobjectref)|crmParent|Which CRM object this activity belongs to.|No|



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
|_string_|descriptionTemplate|Text for the activity type that is entered in the editor.|No|
|Array<[PossibleUsingType](#possibleusingtype)>|possibleUsingTypes|Possible types where this activity type can be used.|No|
|_boolean_|active|Is this active?|Yes|
|_string_|description|Description.|No|
|_string_|label|Label.|No|
|_boolean_|emailArchiving|Is this for "archive email"?|No|
|_boolean_|billable|Is this billable?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|defaultForComments|Is this the default for comments?|No|
|_boolean_|emailProcessing|Is this for "edit email"?|No|
|_number_|sortOrder|Sort order.|No|
|[CrmActivityBillingType](#crmactivitybillingtype)|defaultBillingType|Default billing type.|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|canBePublished|May the activity be published?|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmChecklistItem

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|memo|Checklist item text.|No|
|_boolean_|checked|Is the item "checked"?|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmDeal

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|plannedInvestmentSum|Planned investment amount.|No|
|[ApiObjectReference](#apiobjectreference)|closingReasonRef|Closing reason.|No|
|_string_|notes|Notes.|No|
|[ScriptingDate](#scriptingdate)|plannedPerformanceDate|Planned performance date.|No|
|_string_|detailedClosingReason|Free or detailed closing reason.|No|
|_string_|description|Note or description.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|observerRefs|Observers.|No|
|[ApiObjectReference](#apiobjectreference)|responsibleCustomerPersonRef|Main responsible customer contact person.|No|
|[ApiObjectReference](#apiobjectreference)|priorityRef|Task priority.|No|
|_string_|number|Task number.|Yes|
|[ApiObjectReference](#apiobjectreference)|mainResponsibleUserRef|Responsible user.|No|
|[ApiObjectReference](#apiobjectreference)|stateRef|Task status.|No|
|[ApiObjectReference](#apiobjectreference)|topicRef|Topic.|No|
|[ScriptingDate](#scriptingdate)|plannedClosingDate|Planned closing date.|No|
|Array<[DocumentRef](#documentref)>|salesDocumentRefs|Sales documents.|No|
|Array<[DocumentRef](#documentref)>|contractRefs|Contract.|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|typeRef|Task type.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|Array<[CrmParticipant](#crmparticipant)>|additionalParticipantsOfCustomer|Additional client participants.|No|
|[ApiObjectReference](#apiobjectreference)|assignedUserRef|To be done by the user (assigned user).|No|
|_number_|chance|Chance (in percent).|No|
|Array<[CrmObjectRef](#crmobjectref)>|parentRefs|Parent CRM objects.|No|
|[ApiObjectReference](#apiobjectreference)|healthRef|Health status.|No|
|[ApiObjectReference](#apiobjectreference)|assignedByUserRef|Assigned by.|No|
|_string_|label|Task title.|No|
|_boolean_|processedByWorkflow|Is this in workflow processing?|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[EavCrmdeal](#eavcrmdeal)|customField|CRM deal custom fields.|No|
|Array<[CrmObjectRef](#crmobjectref)>|childRefs|Child CRM objects.|No|
|Array<[TagDto](#tagdto)>|tags|Tags|No|
|[ApiObjectReference](#apiobjectreference)|assignedGroupRef|To be done by the user group (assigned user group).|No|
|Array<[CrmParticipant](#crmparticipant)>|additionalParticipantsOfContractor|Additional contractor participants.|No|
|[CrmDealClosingType](#crmdealclosingtype)|closingType|Closing type.|No|
|[ApiObjectReference](#apiobjectreference)|mainResponsibleGroupRef|Responsible user.|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Address the task belongs to.|No|
|[ScriptingDateTime](#scriptingdatetime)|nextPlannedContactDate|Next planned contact.|No|
|[ApiObjectReference](#apiobjectreference)|salesAgentAccountRef|Sales agent information.|No|



## CrmDealClosingType

| Value | Description |
| :---- | :---------- |
|POSITIVE||
|NEGATIVE||


## CrmDealTopic

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sort order.|No|
|_boolean_|active|Active.|Yes|
|_string_|description|Description.|No|
|_string_|label|Label.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmObjectRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Number.|No|
|_string_|description|Description.|No|
|[CrmSubType](#crmsubtype)|subType|Sub-Type|No|
|_number_|id|Unique identifier.|No|
|[CrmState](#crmstate)|state|Status.|No|
|_string_|label|Label.|No|
|[CrmType](#crmtype)|type|CRM type.|No|



## CrmParticipant

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|description|Description.|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|accountPersonRef|Contact person.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmPriority

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sort order.|No|
|[CrmPriorityType](#crmprioritytype)|crmPriorityType|Priority type.|No|
|_string_|label|Label.|No|
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
|_string_|notes|Notes.|No|
|_number_|recordedTimes|Recorded times in seconds.|Yes|
|[ScriptingDate](#scriptingdate)|actualProjectPeriodTo|Actual project period (to).|No|
|[ScriptingDate](#scriptingdate)|actualProjectPeriodFrom|Actual project period (from).|No|
|_string_|description|Note or description.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|observerRefs|Observers.|No|
|[ApiObjectReference](#apiobjectreference)|priorityRef|Task priority.|No|
|[ApiObjectReference](#apiobjectreference)|phaseRef|Phase|No|
|[CrmParticipant](#crmparticipant)|projectManagerOfContractor|Contractor project manager.|No|
|_string_|number|Task number.|Yes|
|[ApiObjectReference](#apiobjectreference)|stateRef|Task status.|No|
|_number_|billedTimes|Billed times in seconds.|Yes|
|[ScriptingDate](#scriptingdate)|plannedProjectPeriodFrom|Planned project period (from).|No|
|Array<[DocumentRef](#documentref)>|purchaseDocumentRefs|Purchase documents.|No|
|Array<[DocumentRef](#documentref)>|salesDocumentRefs|Sales documents.|No|
|Array<[DocumentRef](#documentref)>|contractRefs|Contract.|No|
|_number_|id|Unique identifier of the Object|No|
|[ScriptingDate](#scriptingdate)|contractConclusionDate|Contract conclusion date.|No|
|[ApiObjectReference](#apiobjectreference)|typeRef|Task type.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|Array<[CrmParticipant](#crmparticipant)>|additionalParticipantsOfCustomer|Additional client participants.|No|
|[CrmParticipant](#crmparticipant)|projectManagerOfCustomer|Client project manager.|No|
|Array<[CrmObjectRef](#crmobjectref)>|parentRefs|Parent CRM objects.|No|
|_number_|effortCommissioned|Total commissioned time in seconds.|No|
|_number_|effortEstimation|Total effort estimation in seconds.|No|
|Array<[CrmChecklistItem](#crmchecklistitem)>|checklist|Checklist: memo and checked.|No|
|_string_|label|Task title.|No|
|_boolean_|processedByWorkflow|Is this in workflow processing?|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[EavCrmproject](#eavcrmproject)|customField|CRM project custom fields.|No|
|Array<[CrmObjectRef](#crmobjectref)>|childRefs|Child CRM objects.|No|
|Array<[TagDto](#tagdto)>|tags|Tags|No|
|Array<[CrmParticipant](#crmparticipant)>|additionalParticipantsOfContractor|Additional contractor participants.|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Address the task belongs to.|No|
|[ScriptingDate](#scriptingdate)|plannedProjectPeriodTo|Planned project period (to).|No|



## CrmReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|reference|Reference.|No|
|[CrmReferenceType](#crmreferencetype)|referenceType|Reference type.|No|



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
|_number_|crmId|CRM object identifier.|No|
|_string_|note|Note on the reminder.|No|
|[ApiObjectReference](#apiobjectreference)|userRef|Who is to be reminded?|No|
|_boolean_|critical|Is this a critical reminder?|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ScriptingDateTime](#scriptingdatetime)|remindAt|Reminder time.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmState

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[CrmSubType](#crmsubtype)>|crmSubTypes|Type this state belongs to.|No|
|_boolean_|active|active|Yes|
|_string_|description|Description.|No|
|_boolean_|needsCommentOnPositiveFinish|A comment is required on a positive closing.|No|
|_string_|label|Label.|No|
|[ApiCreatableReference](#apicreatablereference)|portalEnumRef|portalEnum for this state|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|finishState|Is this an end state?|No|
|_number_|sortOrder|Sort order.|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|readyToBill|Is this a "ready for billing" state?|No|
|_boolean_|startState|Is this a start state?|No|
|_boolean_|needsCommentOnNegativeFinish|A comment is required on a negative closing.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmSubType

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sort order.|No|
|_boolean_|active|Active.|Yes|
|_string_|description|Description.|No|
|_string_|label|Label.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## CrmTask

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|mainResponsibleParticipantRef|Responsible participant (contact person).|No|
|Array<[CrmReminder](#crmreminder)>|reminders|Reminders.|No|
|[DocumentRef](#documentref)|customerOfferRef|Customer offer.|No|
|_string_|notes|Notes.|No|
|Array<[CrmReference](#crmreference)>|references|References.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|observerRefs|Observers.|No|
|[ApiObjectReference](#apiobjectreference)|responsibleCustomerPersonRef|Main responsible customer contact person.|No|
|[ApiObjectReference](#apiobjectreference)|priorityRef|Task priority.|No|
|_string_|number|Task number.|Yes|
|[ApiObjectReference](#apiobjectreference)|mainResponsibleUserRef|Responsible user.|No|
|[DocumentRef](#documentref)|customerOrderRef|Customer order.|No|
|_number_|internalRecordedTimes|Recorded times in seconds (internal).|Yes|
|Array<[DocumentRef](#documentref)>|purchaseDocumentRefs|Purchase documents.|No|
|Array<[DocumentRef](#documentref)>|contractRefs|Contract.|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|Array<[CrmTaskParticipant](#crmtaskparticipant)>|additionalParticipantsOfCustomer|Additional client participants.|No|
|[ApiObjectReference](#apiobjectreference)|assignedByUserRef|Assigned by.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[EavCrmtask](#eavcrmtask)|customField|CRM task custom fields.|No|
|Array<[CrmObjectRef](#crmobjectref)>|childRefs|Child CRM objects.|No|
|Array<[TagDto](#tagdto)>|tags|Tags|No|
|Array<[ApiObjectReference](#apiobjectreference)>|duplicatedByTaskRefs|Duplicated by these tasks.|No|
|[ApiObjectReference](#apiobjectreference)|assignedGroupRef|To be done by the user group (assigned user group).|No|
|[ScriptingDateTime](#scriptingdatetime)|dueDateTime|To be done.|No|
|[ApiObjectReference](#apiobjectreference)|mainResponsibleGroupRef|Responsible user.|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Address the task belongs to.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|blockedByTaskRefs|Blocked by these tasks.|No|
|[ApiObjectReference](#apiobjectreference)|assignedParticipantRef|To be done by the participant (contact person).|No|
|_number_|externalBilledTimes|Billed times in seconds (external).|Yes|
|_number_|kanbanSortOrder|Kanban sort order.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|relatedToTaskRefs|Related to these tasks.|No|
|_string_|description|Note or description.|No|
|[ApiObjectReference](#apiobjectreference)|stateRef|Task status.|No|
|[CrmTaskBillingType](#crmtaskbillingtype)|billingType|Billing type.|No|
|Array<[DocumentRef](#documentref)>|billingDocumentRefs|Billings.|No|
|Array<[DocumentRef](#documentref)>|salesDocumentRefs|Sales documents.|No|
|[ScriptingDateTime](#scriptingdatetime)|toBeDoneStartingFrom|To be done from.|No|
|[ApiObjectReference](#apiobjectreference)|typeRef|Task type.|No|
|[ApiObjectReference](#apiobjectreference)|assignedUserRef|To be done by the user (assigned user).|No|
|Array<[CrmObjectRef](#crmobjectref)>|parentRefs|Parent CRM objects.|No|
|_number_|effortCommissioned|Commissioned time in seconds.|No|
|_number_|externalRecordedTimes|Recorded times in seconds (external).|Yes|
|_number_|effortEstimation|Effort estimation in seconds.|No|
|[CrmTaskBillingRule](#crmtaskbillingrule)|billingRule|Billing rule.|No|
|Array<[CrmChecklistItem](#crmchecklistitem)>|checklist|Checklist: memo and checked.|No|
|_string_|label|Task title.|No|
|_boolean_|processedByWorkflow|Is this in workflow processing?|Yes|
|_number_|internalBilledTimes|Billed times in seconds (internal).|Yes|
|Array<[ApiObjectReference](#apiobjectreference)>|blocksTaskRefs|Blocks these tasks.|No|
|Array<[CrmTaskParticipant](#crmtaskparticipant)>|additionalParticipantsOfContractor|Additional contractor participants.|No|
|_boolean_|publish|Should the task be published?|No|
|_number_|progress|Progress in percent.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|duplicatesTaskRefs|Duplicated tasks.|No|



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
|_boolean_|observer|Observers.|No|
|_string_|description|Description.|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|voteComment|Comment on the vote.|No|
|[ApiObjectReference](#apiobjectreference)|accountPersonRef|Contact person.|No|
|_boolean_|vote|Vote.|No|
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
|_string_|symbol|Currency symbol.|Yes|
|_string_|isoAlpha3|Currency ISO Alpha-3 code.|No|
|_number_|id|Currency identifier.|No|
|_string_|label|Currency label.|Yes|



## Customer

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|customerGroupRef|reference to customer group|No|
|[AccountOrderStackProcessingType](#accountorderstackprocessingtype)|stackProcessingType|Option for the batch processing.|No|
|_string_|dueDateCalculation|Cron expression for calculating the collective billing.|No|
|_number_|maximalLoan|Credit limit.|No|
|[ScriptingDate](#scriptingdate)|dueDate|Next collective billing due date.|No|
|_boolean_|collectiveBillable|collective billable|No|
|_number_|maxDeliveries|Maximum possible deliveries.|No|
|_boolean_|deliveryBlocked|Does the customer have a delivery block?|No|
|_string_|number|number of customer|No|
|[AccountBillingType](#accountbillingtype)|billingType|presetting of billing type|No|
|[ScriptingDate](#scriptingdate)|nextDueDate|Next due date after the current one.|No|
|_number_|stackProcessingPriority|Priority for the batch processing.|No|
|[ApiObjectReference](#apiobjectreference)|productPriceGroupRef|reference to product price group|No|
|_boolean_|collectiveInvoiceManually|Trigger the collective billing manually only?|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|accountingNumber|finance account-number of customer|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|reference to the delivery method|No|
|_boolean_|taxable|Taxable or tax free.|No|
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
|_boolean_|splitIntoNewDocument|Should a line with this delivery method be transferred into a delivery document with this method?|No|
|_boolean_|forwardEmailToShipper|Pass the email to the shipper.|No|
|_string_|identifier|Barcode.|No|
|_number_|minWeightPerParcel|Minimum weight per parcel.|No|
|_number_|deliveryTime|Shipping duration in days.|No|
|_string_|printDescription|printDescription|No|
|_number_|maxWeightPerParcel|Maximum weight per parcel.|No|
|_boolean_|active|Is this active?|Yes|
|_string_|description|description|No|
|_string_|label|label for this delivery method|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|forwardPhoneToShipper|Pass the phone number to the shipper.|No|
|[UnitTypeReference](#unittypereference)|defaultSizeUnit|Default length unit.|No|
|Array<[DocumentTypeTerm](#documenttypeterm)>|translations|translations|No|
|[DeliveryMethodParcelWeightSource](#deliverymethodparcelweightsource)|parcelWeightSource|Parcel weight source.|No|
|_number_|vdsCarrierId|Shipping provider.|No|
|_Array<string>_|validCountryCodes|Valid country codes.|No|
|[UnitTypeReference](#unittypereference)|defaultWeightUnit|Default weight unit.|No|
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
|_boolean_|active|Is this active?|No|
|_string_|description|description|No|
|_string_|label|label for this delivery term|No|
|[CalculateFreightChargesWithType](#calculatefreightchargeswithtype)|calculateFreightChargesWithType|information, when the shipping charges should be calculated|No|
|_string_|languageCode|Account language.|No|
|_boolean_|freightChargesPerParcel|calculate shipping charges per parcel|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[CalculateFreightChargesFromType](#calculatefreightchargesfromtype)|calculateFreightChargesFromType|information, how the shipping charges should be calculated|No|
|Array<[DocumentTypeTerm](#documenttypeterm)>|translations|translations|No|
|Array<[ApiObjectReference](#apiobjectreference)>|deliveryMethodRefs|Delivery methods.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|freeShippingNetValue|free shipping net value|No|
|[ApiObjectReference](#apiobjectreference)|shippingCostArticleRef|Shipping cost article.|No|
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


### Methods

_**getProducedFile**_

Nach Ende des Schreibvorgangs: Gibt die erzeugte Datei zurück

_Return type:_ [ShelfFile](#shelffile)


## Document

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|billingAccountRef|Reference to the billing account.|No|
|[ScriptingDate](#scriptingdate)|confirmedDeliveryDateEnd|Confirmed delivery end (only when the confirmed delivery date is set).|No|
|_string_|externalNumber|External document number.|No|
|Array<[DocumentTax](#documenttax)>|taxes|Document tax summary.|Yes|
|_number_|baseTotalNetPrice|Total price - net in base currency.|No|
|[DocumentPosDetail](#documentposdetail)|posDetail|Receipt details.|No|
|[ScriptingDate](#scriptingdate)|confirmedDeliveryDate|Confirmed delivery date.|No|
|_string_|number|Document number.|No|
|_number_|totalVat|Total VAT.|Yes|
|[ApiObjectReference](#apiobjectreference)|defaultStorageRef|Default storage for new lines.|No|
|_string_|orderedBy|Name of the ordering person.|No|
|[DocumentAddress](#documentaddress)|deliveryAddress|Delivery address.|No|
|_number_|stackProcessingPriority|Priority in the batch processing.|No|
|_number_|totalLinePriceModifier|Total line discount [gross, net].|Yes|
|_number_|id|Unique identifier of the Object|No|
|_number_|posReceiptBalance|Receipt: balance.
A positive value is the amount still to be paid.
A negative value is the overpaid amount or change.
|No|
|_number_|deliveryQuantityPackages|Expected number of parcels (information only).|No|
|[DocumentAddress](#documentaddress)|returnDeliveryAddress|Return delivery address.|No|
|_boolean_|taxable|Taxable or tax free.|No|
|_string_|buyerReference|Leitweg-ID|No|
|_string_|referencedOrderNumber|Order number from the predecessor document.|Yes|
|_number_|baseTotalLinePriceModifier|Price adjustments - document line total, in base currency.|No|
|_number_|baseDepositPaymentAmount|Prepayment amount in base currency.|No|
|_number_|totalBeforeModifier|Total price before discount [gross, net].|Yes|
|_boolean_|frozen|Is the document frozen?|Yes|
|[ApiObjectReference](#apiobjectreference)|responsibleUserRef|Reference to the responsible user.|No|
|_string_|salesAgentNumber|Sales agent number.|Yes|
|_string_|languageCode|Language.|No|
|[ApiCreatableReference](#apicreatablereference)|cancellationReasonRef|Reason why the document has been cancelled|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#tagdto)>|tags|Document tags.|No|
|_number_|accountId|Organizational unit identifier.|No|
|_string_|sourceCountryCode|Country code of the country of origin (ISO Alpha-3).|No|
|_string_|performanceCountryCode|Country code of the performance country (ISO Alpha-3).|No|
|[ScriptingDate](#scriptingdate)|depositPaymentDate|Agreed deposit date.|Yes|
|_number_|shippingCostSum|Total of the shipping costs (net and gross).|Yes|
|[DocumentQualifier](#documentqualifier)|qualifier|Document qualifier.|Yes|
|[ApiObjectReference](#apiobjectreference)|paymentMethodRef|Reference to the payment method.|No|
|[ScriptingDate](#scriptingdate)|documentDate|Document date.|No|
|_number_|roundingAmount|Final amount rounding: difference between the rounded gross amount and (net + VAT).|Yes|
|_boolean_|taxLiabilityReversed|Is the reverse charge procedure under §13b UStG applied?|No|
|[ScriptingDate](#scriptingdate)|shippingDate|Shipping date.|No|
|_string_|supplierNumber|Supplier number.|Yes|
|_number_|totalGrossPrice|Total price gross.|Yes|
|_boolean_|deliveryApproved|Is the document released for delivery?|No|
|Array<[DocumentPosPayment](#documentpospayment)>|posPayments|POS payment lines.|No|
|_boolean_|posReceiptPayed|Is the receipt paid?
True when the receipt is paid.
|No|
|_string_|ourCustomerNumber|Customer number at the supplier.|Yes|
|_number_|maxDeliveries|Maximum possible deliveries.|No|
|_number_|posReceiptPaymentSum|Receipt: total payment amount.|No|
|[ScriptingDate](#scriptingdate)|deliveryDate|Expected delivery date.|No|
|[ScriptingDate](#scriptingdate)|deliveryDateEnd|Expected delivery end (only when the delivery date is set).|No|
|[DocumentContractDetail](#documentcontractdetail)|contractDetail|Contract details.|No|
|_number_|cashDiscountableTotalGrossPrice|Total gross amount eligible for the payment discount.|Yes|
|_boolean_|paymentPlan|Is a payment plan present?|No|
|[DocumentFabricationDetail](#documentfabricationdetail)|fabricationDetail|Fabrication details.|No|
|_string_|accountNumber|Account number of the associated organizational unit.|Yes|
|[CalculationMode](#calculationmode)|calculationMode|Calculation mode.|No|
|[PaymentTermRef](#paymenttermref)|paymentTermRef|Reference to the payment term.|No|
|_boolean_|processedByWorkflow|Is this processed by the workflow?|Yes|
|_number_|baseTotalDocumentPriceModifier|Price adjustments - document, in base currency.|No|
|_boolean_|forwardPhoneToShipper|Pass the phone number to the shipper.|No|
|Array<[DocumentText](#documenttext)>|texts|Document texts.|No|
|[ApiObjectReference](#apiobjectreference)|locationRef|Location (for fabrication orders).|No|
|_boolean_|collectiveInvoice|Is this a collective invoice?|No|
|_string_|currencyCode|Currency (ISO code, Alpha-3).|No|
|[DocumentAddress](#documentaddress)|defaultAddress|Default address.|No|
|[ScriptingDate](#scriptingdate)|performanceDate|Performance date.|No|
|[OrderStackProcessingType](#orderstackprocessingtype)|stackProcessingType|Processing option for the batch.|No|
|_boolean_|dropShippingInvoiceApproved|Is the drop shipping document released for invoicing?|Yes|
|[EN16931Profile](#en16931profile)|en16931Profile|EN16931 profile for electronic invoices.|No|
|_number_|exchangeRate|Exchange rate.|No|
|[TaxPerformanceLocationType](#taxperformancelocationtype)|taxPerformanceLocation|Place of the taxable performance.|No|
|[DocumentAdditionalInfo](#documentadditionalinfo)|additionalInfo|Additional information about decisions in the document context.|Yes|
|_number_|baseCashDiscountableTotalGrossPrice|Invoice amount eligible for the payment discount in base currency.|No|
|[ScriptingDate](#scriptingdate)|orderedOn|Order date.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|Reference to the delivery method.|No|
|_number_|totalPriceModifier|Total discount [gross, net].|Yes|
|_boolean_|dropShipping|Drop shipping.|Yes|
|_number_|totalNetPrice|Total price net.|Yes|
|[EInvoiceValidationState](#einvoicevalidationstate)|valitoolValidationState|Validation status for electronic invoices.|Yes|
|_boolean_|published|Is the document published (printed, sent by email)?|Yes|
|[ApiObjectReference](#apiobjectreference)|afterPickingTargetDocumentTypeRef|Target document category after the picking.|No|
|_number_|depositPaymentAmount|Agreed deposit amount.|No|
|_number_|totalDocumentPriceModifier|Total document discount [gross, net].|Yes|
|_string_|documentType|Document type (internal).|Yes|
|_number_|totalGrossVolumeInCubicMeters|total gross Volume in cubic meters|Yes|
|_number_|documentTypeId|Document type identifier.|Yes|
|[DocumentCategory](#documentcategory)|documentTypeCategory|Document category.|Yes|
|[DocumentImportType](#documentimporttype)|importType|Document import mode.|Yes|
|_boolean_|userDefinedWeight|The total weight was set manually.|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Reference to the assigned sales channel.|No|
|[BillingType](#billingtype)|billingType|Billing type.|No|
|_number_|baseTotalGrossPrice|Total price - gross in base currency.|No|
|_string_|externalIdentifier|External identifier.|No|
|[UnitTypeReference](#unittypereference)|grossWeightUnit|Total weight unit.|No|
|Array<[DocumentLine](#documentline)>|lines|Document lines.|No|
|_boolean_|forwardEmailToShipper|Pass the email to the shipper.|No|
|_string_|deliveryText|Additional delivery text.|No|
|[EavDocument](#eavdocument)|custom|Custom fields.|No|
|[ScriptingDate](#scriptingdate)|valueDate|Value date.|No|
|_string_|customerNumber|Customer number.|Yes|
|Array<[DocumentShippingCost](#documentshippingcost)>|shippingCosts|Shipping cost lines.|No|
|[DocumentTypeState](#documenttypestate)|documentState|Document state instance.|Yes|
|_string_|taxIdentificationNumber|VAT identification number.|No|
|_number_|posReceiptChangeAmount|Change.|No|
|_boolean_|posReceiptBalanced|Is the receipt balanced, i.e. paid with no change?
True when the receipt is balanced.
|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|Reference to the delivery term.|No|
|_number_|grossWeight|Total gross weight.|No|
|_string_|baseCurrencyCode|Document base currency.|No|
|[ExchangeRateOrigin](#exchangerateorigin)|exchangeRateOrigin|Exchange rate determination origin.|No|
|Array<[DocumentPriceModifier](#documentpricemodifier)>|priceModifiers|Price changes (e.g. discounts).|No|
|[DocumentAddress](#documentaddress)|billingAddress|Billing address.|No|
|[TaxIdVerificationState](#taxidverificationstate)|taxIdVerificationState|VAT ID validation status.|Yes|
|[ApiObjectReference](#apiobjectreference)|orderedByPersonRef|Ordered by the contact person.|No|
|[ApiObjectReference](#apiobjectreference)|reportGroupRef|Report group, if it deviates from the default.|No|



## DocumentAdditionalInfo

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[TaxSituationOrigin](#taxsituationorigin)|taxSituationOrigin|Tax situation origin.|No|
|[DocumentRounding](#documentrounding)|roundingMode|Active rounding mode for this document (frozen from the SalesChannel).|Yes|
|[LanguageCodeOrigin](#languagecodeorigin)|languageCodeOrigin|Language origin.|No|
|Array<[AdditionalParameter](#additionalparameter)>|contextParameters|Parameters used in the {@link DocumentContext}.|No|
|[BuyerReferenceOrigin](#buyerreferenceorigin)|buyerReferenceOrigin|Buyer reference origin.|Yes|
|[CalculationModeOrigin](#calculationmodeorigin)|calculationModeOrigin|Calculation mode origin.|Yes|
|[DocumentAdditionalInfo$IncomingGoodsTarget](#documentadditionalinfoincominggoodstarget)|incomingGoodsTarget|Targets for the incoming goods for the whole document.|No|
|[EN16931Origin](#en16931origin)|en16931Origin|Electronic invoice profile origin.|Yes|
|Array<[DocumentAdditionalInfo$PrintedTranslatedField](#documentadditionalinfoprintedtranslatedfield)>|translations|Translations.|No|
|_string_|previousDecisions|Contains the results of previous user decisions on this Document.|Yes|
|Array<[DocumentAdditionalInfo$IncomingGoodsTargetOfLine](#documentadditionalinfoincominggoodstargetofline)>|incomingGoodsTargetsPerLine|Targets for the incoming goods per document line.|No|



## DocumentAdditionalInfo$IncomingGoodsTarget

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|pickTrolleyId|Pick trolley for the incoming goods.|No|
|_number_|storageBinId|Storage bin for the incoming goods.|No|



## DocumentAdditionalInfo$IncomingGoodsTargetOfLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|pickTrolleyId|Pick trolley for the incoming goods.|No|
|_number_|storageBinId|Storage bin for the incoming goods.|No|
|_number_|lineId|Document line identifier.|No|
|_number_|sourceLineId|Predecessor document line identifier.|No|



## DocumentAdditionalInfo$PrintedTranslatedField

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|fieldName|Field name.|No|
|_string_|entityName|For which entity?|No|
|_string_|content|Translation.|No|



## DocumentAddress

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|city|city|No|
|_string_|title|Title.|No|
|[ApiObjectReference](#apiobjectreference)|regionRef|Region|No|
|_string_|postOfficeBox|Post office box|No|
|_string_|street|Street|No|
|_string_|countryCode|country code IsoAlpha3|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|mailContact|Mail contact|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_string_|globalLocationNumber|GLN|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|Delivery method.|No|
|_string_|postcode|Postcode|No|
|_string_|languageCode|Language Code|No|
|[ApiObjectReference](#apiobjectreference)|paymentTermRef|Payment terms.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|additionalAddressLine1|Additional address line1|No|
|_string_|additionalAddressLine2|Additional address line2|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|Delivery terms.|No|
|_string_|streetAddressNumber|Street address number|No|
|_string_|name3|address line 3|No|
|_string_|phoneContact|Phone contact|No|
|[ApiObjectReference](#apiobjectreference)|paymentMethodRef|Payment method.|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Reference to the account.|No|
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
|POS_CASH_JOURNAL_DEPOSIT_CANCELLATION||
|POS_CASH_JOURNAL_EXPENSE_CANCELLATION||
|POS_CASH_JOURNAL_WITHDRAWAL_CANCELLATION||
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
|_string_|dueDateCalculation|Cron expression for calculating the due date.|No|
|[ScriptingDate](#scriptingdate)|runtimeFromDate|Term from.|No|
|[ScriptingDate](#scriptingdate)|endDate|Contract end (header only).|No|
|_boolean_|publishInPortal|Show in the portal?|No|
|[ScriptingDate](#scriptingdate)|dueDate|Due date.|No|
|_boolean_|active|Is the contract active?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|calculateDirectly|Bill immediately?|No|
|[ScriptingDate](#scriptingdate)|runtimeToDate|Term until.|No|
|[ScriptingDate](#scriptingdate)|lastProviderCancellationDate|Latest possible termination date for the provider.|No|
|[ScriptingDate](#scriptingdate)|nextDueDate|Next due date.|No|
|[ScriptingDate](#scriptingdate)|lastCustomerCancellationDate|Latest possible termination date for the customer.|No|
|_number_|id|Unique identifier of the Object|No|
|[ScriptingDate](#scriptingdate)|startDate|Contract start (header only).|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|targetStorageRef|Target storage.|No|
|[ApiObjectReference](#apiobjectreference)|componentsStorageRef|Material storage.|No|
|_string_|note|Note.|No|
|[ApiObjectReference](#apiobjectreference)|qualityAssuranceStorageRef|Quality assurance storage.|No|
|[ApiObjectReference](#apiobjectreference)|workbenchStorageRef|Workbench storage.|No|
|[EavFabrication](#eavfabrication)|custom|Custom field.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|defectiveStorageBinRef|Defect storage bin (when the storage uses storage bins).|No|
|[ApiObjectReference](#apiobjectreference)|qualityAssuranceStorageBinRef|Quality assurance storage bin (when the storage uses storage bins).|No|
|[ApiObjectReference](#apiobjectreference)|defectiveStorageRef|Defect storage.|No|
|[ApiObjectReference](#apiobjectreference)|targetStorageBinRef|Target storage bin (when the storage uses storage bins).|No|
|[ApiObjectReference](#apiobjectreference)|workbenchStorageBinRef|Workbench storage bin (when the storage uses storage bins).|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|minimumDegreeOfFulfillment|Minimum degree of fulfillment.|No|
|[ScriptingDate](#scriptingdate)|startDate|Start date.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentFinanceBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|costCenter1|Cost center.|No|
|_string_|ledgerNumber|Finance account number.|No|
|_number_|documentLineId|Document line identifier.|No|
|_string_|description|Booking text.|No|
|_string_|comment|Comment.|No|
|_string_|transactionKey|Transaction key.|No|
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
|[ScriptingDate](#scriptingdate)|confirmedDeliveryDateEnd|Confirmed delivery period end (only required for delivery periods when the delivery date is set).|No|
|[UnitTypeReference](#unittypereference)|baseCapacityUnit|Base unit.|No|
|_number_|quantityCommitted|Processed quantity.|Yes|
|Array<[DocumentTax](#documenttax)>|taxes|Taxes.|No|
|[DocumentLinePosDetail](#documentlineposdetail)|posDetail|POS information.|No|
|[ScriptingDate](#scriptingdate)|confirmedDeliveryDate|Confirmed delivery date.|No|
|_string_|number|Article number.|No|
|_number_|totalGrossWeight|Total gross weight.|No|
|[DocumentLineRef](#documentlineref)|customerOrderLineRef|Reference to the customer order line.|No|
|[ApiObjectReference](#apiobjectreference)|settledOpenItemRef|Reference to the open item to settle (only for OPEN_ITEM_SETTLEMENT).|No|
|_boolean_|cashDiscountable|Is this line eligible for the payment discount?|No|
|_number_|price|Price per quantity [gross, net].|No|
|[DocumentFinanceBooking](#documentfinancebooking)|financeBooking|Finance booking.|No|
|[ApiObjectReference](#apiobjectreference)|onGoodsArrivalConvertIntoBundleArticleRef|Bundle article the received goods of this line are converted into.|Yes|
|_number_|totalLinePriceModifier|Total of the line price changes [gross, net].|Yes|
|[DropShippingPolicy](#dropshippingpolicy)|dropShippingPolicy|Drop shipping policy.|No|
|_boolean_|articleTaxLiabilityReversed|§13b UStG preset of the article.|Yes|
|_number_|id|Unique identifier of the Object|No|
|_number_|positionOfArticleLine|Position number across all article lines.|Yes|
|_number_|basePrice|Price per unit in base currency.|No|
|[ArticleSerialType](#articleserialtype)|serialType|Serial type.|Yes|
|[ApiObjectReference](#apiobjectreference)|taxSchemaRef|Tax schema.|No|
|_number_|priceUnit|Price unit.|No|
|_number_|baseTotalLinePriceModifier|Price adjustments - line, in base currency.|No|
|_number_|vat|Tax amount.|Yes|
|[ApiObjectReference](#apiobjectreference)|mainArticleLineRef|Reference to the accessory's main article line.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|externalArticleName|External article name.|Yes|
|_number_|totalNetWeight|Total net weight.|No|
|_boolean_|taxLiabilityReversed|Is §13b UStG applied?|Yes|
|Array<[DocumentLineComponent](#documentlinecomponent)>|components|Components.|No|
|[ScriptingDate](#scriptingdate)|shippingDate|Shipping date.|No|
|_number_|settledOpenItemBalance|Open remaining amount of the open item to settle (only in the response).|No|
|[DocumentLineReturnDetail](#documentlinereturndetail)|returnDetail|Return details.|No|
|_string_|calculationData|Calculation structure.|No|
|[DocumentLineRef](#documentlineref)|sourceLineRef|Reference to the predecessor document line.|No|
|[ApiObjectReference](#apiobjectreference)|voucherTypeRef|Voucher type to issue (VOUCHER_SALE only)|No|
|[PriceSelectionCriteria](#priceselectioncriteria)|priceSelectionCriteria|Price determination criteria.|Yes|
|_number_|capacity|Unit of measure content.|No|
|[UnitTypeReference](#unittypereference)|unitType|Unit type.|No|
|[AccessoryInsertTerm](#accessoryinsertterm)|insertTerm|Accessory insert term.|No|
|[ScriptingDate](#scriptingdate)|deliveryDate|Delivery date.|No|
|[ScriptingDate](#scriptingdate)|deliveryDateEnd|Expected delivery period end (only required for delivery periods when the delivery date is set).|No|
|_string_|voucherCode|Scanned code of the preprinted voucher card (VOUCHER_SALE of a voucher type with scanned codes only)|No|
|_number_|settledOpenItemDiscountAmount|Payment discount of the open item to settle that is applicable at the document date (only in the response).|No|
|_number_|baseSalesValueNet|Line net sales value in base currency.|No|
|[UnitTypeReference](#unittypereference)|netWeightUnit|Net weight unit.|No|
|[DocumentContractDetail](#documentcontractdetail)|contractDetail|Contract information.|No|
|[RequestDocumentLineShippingCostDetail](#requestdocumentlineshippingcostdetail)|shippingCostDetail|Shipping cost details; only set for shipping cost lines that are kept as a numbered document line (e.g. in a collective invoice).|No|
|[DocumentLineFabricationDetail](#documentlinefabricationdetail)|fabricationDetail|Fabrication details.|No|
|_number_|baseTotalDocumentPriceModifier|Price adjustments - proportionally from the document, in base currency.|No|
|_string_|storageInfo|picking hint|No|
|Array<[DocumentText](#documenttext)>|texts|Line texts.|No|
|_boolean_|commissionable|Is this line eligible for commission?|No|
|_boolean_|hasAccessories|Does the article have accessories?|No|
|_boolean_|complete|Is this line completely processed?|Yes|
|[ScriptingDate](#scriptingdate)|settledOpenItemPaymentDueDate|Due date of the open item to settle (only in the response).|No|
|[CountryReference](#countryreference)|country|Country of origin.|No|
|_string_|customsTariffNumber|Customs tariff number.|No|
|[ScriptingDate](#scriptingdate)|performanceDate|Performance date.|No|
|[ApiObjectReference](#apiobjectreference)|convertedIntoBundleArticleRef|Dissolved into container articles.|Yes|
|_string_|internalVatInfo|Internal tax information.|No|
|_number_|warrantyInMonths|Warranty in months.|No|
|_boolean_|progressInvoice|Is this a progress invoice line?|No|
|_string_|packageOptions|Shipper-specific information.|No|
|Array<[DocumentLineCommission](#documentlinecommission)>|commissions|Commissions.|No|
|_number_|baseTotalLinePrice|Total line price in base currency.|No|
|[DocumentLineType](#documentlinetype)|lineType|Line type.|No|
|_number_|preOrderPickedQuantity|Pre-ordered quantity in the picking process.|Yes|
|_Array<number>_|supplierOrderLineIds|Reference to the supplier order line.|No|
|_string_|externalReferenceVds|External reference to the VDS parcel.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_boolean_|doPrintLabel|Should labels be printed for this line?|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|Delivery method.|No|
|[ApiObjectReference](#apiobjectreference)|countryRegion|Region of the payment when it comes from within the country.|No|
|[ApiObjectReference](#apiobjectreference)|voucherRef|The affected voucher: for VOUCHER_REDEMPTION the one to redeem, for VOUCHER_SALE the issued one, or on return, credit note or cancellation the returned one|No|
|[DocumentCommissionOrigin](#documentcommissionorigin)|commissionOrigin|Commission origin.|No|
|_number_|netWeight|Net weight.|No|
|_number_|salesValueNet|Net total price (after the price changes).|Yes|
|_string_|name|Article name.|No|
|_number_|position|Position number.|Yes|
|_boolean_|recalcLinePriceViaComponents|Should the DocumentLine be recalculated from the components?|No|
|Array<[DocumentLineBooking](#documentlinebooking)>|bookings|Bookings.|No|
|_number_|unitGrossVolumeInCubicMeters|unit gross Volume in cubic meters|No|
|_number_|totalDocumentPriceModifier|Total of the document price changes [gross, net].|Yes|
|_number_|pickingQuantity|Quantity in the picking process.|Yes|
|_number_|totalGrossVolumeInCubicMeters|unit gross Volume in cubic meters|Yes|
|_string_|description|Article description.|No|
|[ProductPriceOrigin](#productpriceorigin)|priceOrigin|Price origin.|Yes|
|[ApiObjectReference](#apiobjectreference)|storage|Reference to the storage.|No|
|[RevenueCalculation](#revenuecalculation)|revenueCalculation|Gross profit determination.|Yes|
|_number_|totalLinePrice|Line total [gross, net], i.e. price * quantity less the line discounts.|Yes|
|_number_|baseLineId|Reference to the base line.|No|
|[UnitTypeReference](#unittypereference)|grossWeightUnit|Gross weight unit.|No|
|_boolean_|discountable|Is this line eligible for discount?|No|
|_number_|baseCapacity|Base unit content.|No|
|[ProductType](#producttype)|productType|Product type.|No|
|_number_|quantity|Quantity.|No|
|_string_|deliveryText|Delivery text.|No|
|_number_|presetPrice|Preset value for the price calculation.|Yes|
|[EavDocumentline](#eavdocumentline)|custom|Custom fields.|No|
|_number_|articleId|Article.|No|
|_string_|settledOpenItemComment|Note on the open item line - transferred into the open item comment on closing.|No|
|_string_|internalPriceModifierInfo|Internal price change information.|No|
|[UnitTypeReference](#unittypereference)|capacityUnit|Unit of measure.|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|Delivery term.|No|
|_number_|grossWeight|Gross weight.|No|
|_string_|externalArticleDescription|External article description.|Yes|
|Array<[DocumentPriceModifier](#documentpricemodifier)>|priceModifiers|Applied price changes.|No|
|[JsonNode](#jsonnode)|previousDecisions|Contains the results of previous user decisions on this DocumentLine.|Yes|
|_string_|externalArticleNumber|External article number.|Yes|
|Array<[DocumentLineFabricationComponent](#documentlinefabricationcomponent)>|fabricationComponents|Components.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|variantValues|Product variant values.|Yes|



## DocumentLineBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Note.|No|
|[ApiObjectReference](#apiobjectreference)|serialNumberRef|Serial number (object).|No|
|_number_|quantity|Booked quantity.|No|
|_string_|serialNumber2|Serial number 2.|No|
|_string_|serialNumber1|Serial number 1.|No|
|[ApiObjectReference](#apiobjectreference)|storageBinRef|Booked storage bin.|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Booked article.|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ScriptingDate](#scriptingdate)|expiryDate|Expiry date.|No|
|_boolean_|batchSelectedAutomatically|Was the batch selected automatically at the POS by the earliest best before date?|Yes|
|_string_|udi|Unique Device Identifier (UDI)|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineCommission

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|valueCurrencyCode|the currency-code IsoAlpha3|No|
|[ValueType](#valuetype)|valueType|Commission type.|No|
|[DocumentCommissionOrigin](#documentcommissionorigin)|origin|Origin.|No|
|_string_|description|Description.|No|
|_string_|comment|Comment.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|value|Commission percentage or value.|No|
|[ApiObjectReference](#apiobjectreference)|salesAgentAccountRef|Sales agent.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Quantity.|No|
|_number_|pickingQuantity|Quantity in picking.|No|
|[EavDocumentlinecomponent](#eavdocumentlinecomponent)|custom|Custom fields.|No|
|[DocumentLineComponentFabricationDetail](#documentlinecomponentfabricationdetail)|fabricationDetail|Fabrication details.|No|
|_number_|articleId|Reference to the component article.|No|
|_number_|quantityCommitted|Delivered quantity.|No|
|_string_|description|Article description.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|sourceDocumentLineComponentId|Reference to the component in the source Document.|No|
|Array<[DocumentText](#documenttext)>|texts|Component texts.|No|
|_number_|price|Unit price.|No|
|_string_|name|Article name.|No|
|_number_|quantityPerAssemblyGroup|Quantity per assembly.|No|
|_number_|position|Component position in the assembly.|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[DocumentLineBooking](#documentlinebooking)>|bookings|Bookings for this component.|No|
|[ArticleSerialType](#articleserialtype)|serialType|Serial type.|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineComponentFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ProductArticleRef](#productarticleref)|sourceBundleArticleRef|Source container article for the material transfer.|No|
|_number_|deviatingUnitPrice|Deviating production costs.|No|
|[EavFabricationlinecomponent](#eavfabricationlinecomponent)|custom|Custom field.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|serialInheritanceComponent|Use for the serial number inheritance.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineFabricationBookedComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Article number.|No|
|[ApiObjectReference](#apiobjectreference)|serialNumberRef|Serial number.|No|
|_number_|quantity|Quantity used.|No|
|_string_|name|Article name.|No|
|_number_|articleId|Article identifier.|No|
|_string_|description|Article description.|No|



## DocumentLineFabricationComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ProductArticleRef](#productarticleref)|sourceBundleArticleRef|Source container article for the material transfer.|No|
|_number_|quantity|Quantity.|No|
|_number_|deviatingUnitPrice|Deviating production costs.|No|
|_string_|description|Description.|No|
|[UnitTypeReference](#unittypereference)|deviatingUnitRef|Deviating product unit.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|forSerialInheritance|Basis for inheriting the serial number.|No|
|_string_|name|Label.|No|
|_number_|position|Position.|No|
|_number_|id|Unique identifier of the Object|No|
|[ProductArticleRef](#productarticleref)|componentArticleRef|Component article.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantityFinished|Quantity completed.|No|
|_number_|quantityDefective|Quantity defective.|No|
|Array<[DocumentLineFabricationDetailSerialNumber](#documentlinefabricationdetailserialnumber)>|serialNumbers|Produced serial numbers.|No|
|[EavFabricationline](#eavfabricationline)|custom|Custom field.|No|
|_number_|quantityCommitted|Quantity produced.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|quantityInQA|Quantity in quality assurance.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineFabricationDetailSerialNumber

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantityFinished|Quantity completed.|No|
|_number_|quantity|Produced or planned quantity.|No|
|[ArticleSerialNumber](#articleserialnumber)|serialNumber|Produced serial number.|No|
|Array<[DocumentLineFabricationBookedComponent](#documentlinefabricationbookedcomponent)>|bookedComponents|Booked components.|No|
|_number_|quantityDefective|Quantity defective.|No|
|_number_|quantityCommitted|Actually produced quantity.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|quantityInQA|Quantity in quality assurance.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLinePosDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[PosPaymentOperation](#pospaymentoperation)|paymentOperation|Payment operation type (PAYMENT, CANCEL, REFUND).|No|
|[CashJournalWithdrawalMode](#cashjournalwithdrawalmode)|withdrawalMode|Mode for the withdrawal at the cash closing.|Yes|
|_boolean_|deletable|Can this payment line be removed from the document? False while the payment is still running or has already been executed successfully.|Yes|
|_number_|depositExpenseTypeId|Deposit or expense type.|No|
|[PosPaymentStatus](#pospaymentstatus)|externalPaymentStatus|External payment status.|No|
|_number_|withdrawToBalance|Withdrawal to amount (mode BALANCE) — remaining amount that stays in the POS register.|Yes|
|_string_|cancelledExternalPaymentId|External payment identifier of the payment to cancel (only for CANCEL).|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|withdrawalAmount|Withdrawal amount (mode MANUAL).|Yes|
|_number_|paymentMethodId|Payment method.|No|
|_string_|externalPaymentErrorMessage|Error message from the payment backend (only for a failed payment).|No|
|_number_|balanceBeforeWithdrawal|Payment method balance before the withdrawal.|Yes|
|_string_|externalPaymentId|External payment identifier for the connection to the payment backend.|No|
|[PosLineType](#poslinetype)|posLineType|Line type.|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentLineRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Document number.|No|
|_number_|quantity|quantity|No|
|_string_|articleNumber|Article number.|No|
|_string_|documentType|Document type.|No|
|_string_|displayName|Customer short label.|No|
|_number_|price|price per quantity [GROSS, NET]|No|
|_string_|name|Article name.|No|
|_number_|documentId|Document identifier.|No|
|_number_|id|Document line identifier.|No|
|_number_|position|Position number.|No|
|[DocumentCategory](#documentcategory)|category|Document category.|No|
|_string_|documentState|Document state.|No|



## DocumentLineReturnDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|replacementDeliveryTermRef|Delivery term for the replacement shipment when transferred into a shipment or customer order.|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|Delivery method for the return (how the customer sends it back).|No|
|[ApiObjectReference](#apiobjectreference)|goodsExchangeArticleRef|Reference to the replacement article (only for GOODS_EXCHANGE_*; default: the same article as in the document line).|No|
|_boolean_|repairRequested|Is a repair requested (only for GOODS_EXCHANGE_ITEM_GETS_SEND_BACK)?|No|
|_boolean_|warrantyExchange|Is this a warranty exchange (only for *_ITEM_GETS_SEND_BACK)?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|customerShareOnReduction|Customer share of a price reduction in percent (0-100). How much % of the saving is credited to the customer?|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|Delivery term for the return (how the customer sends it back).|No|
|_boolean_|waitForReturnBeforeExchange|Wait for the return before the goods replacement (only for GOODS_EXCHANGE_ITEM_GETS_SEND_BACK)?|No|
|[ApiObjectReference](#apiobjectreference)|returnCauseRef|Reference to the return cause.|No|
|_number_|customerShareOnSurcharge|Customer share of a surcharge in percent (0-100). How much % of the surcharge does the customer pay?|No|
|[ApiObjectReference](#apiobjectreference)|replacementDeliveryMethodRef|Delivery method for the replacement shipment when transferred into a shipment or customer order.|No|
|_number_|id|Unique identifier of the Object|No|
|[ReturnCategory](#returncategory)|returnCategory|Return category.|No|
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
|VOUCHER_SALE||
|VOUCHER_REDEMPTION||


## DocumentPosDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|timeEnd|Transaction end time.|No|
|_string_|tssSerialNumber|TSS serial number.|No|
|[ApiObjectReference](#apiobjectreference)|fiscalizationBackendRef|Fiscalization backend the document was created with.|Yes|
|_string_|signature|Signature.|No|
|_string_|clientSerialNumber|Client serial number.|No|
|_number_|transactionNumber|Transaction number.|No|
|_boolean_|withdrawalFromClosing|Was this cash withdrawal created by the cash closing? Such a withdrawal cannot be cancelled on its own.|Yes|
|_number_|signatureCounter|Signature counter.|No|
|[TssSignature](#tsssignature)|tssSignature|TSS signature.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|revision|Revision|No|
|_string_|externalReference|External reference.|Yes|
|_number_|timeStart|Transaction start time.|No|
|[ApiObjectReference](#apiobjectreference)|cashJournalRef|Cash book.|No|
|[ApiObjectReference](#apiobjectreference)|posRegisterRef|POS register.|No|
|_number_|id|Unique identifier of the Object|No|
|[ApiObjectReference](#apiobjectreference)|cashDrawerRef|Cash drawer.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentPosPayment

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[PosPaymentOperation](#pospaymentoperation)|paymentOperation|Payment operation type (PAYMENT, CANCEL, REFUND).|Yes|
|_number_|amount|Amount.|No|
|[CashJournalWithdrawalMode](#cashjournalwithdrawalmode)|withdrawalMode|Mode for the withdrawal at the cash closing (only relevant for a CASH_FINAL_BALANCE line).|No|
|[ApiObjectReference](#apiobjectreference)|depositExpenseTypeRef|Deposit or expense type.|No|
|_boolean_|deletable|Can this payment line be removed from the document? False while the payment is still running or has already been executed successfully.|Yes|
|[PosPaymentStatus](#pospaymentstatus)|externalPaymentStatus|External payment status.|Yes|
|_number_|withdrawToBalance|Withdrawal to amount (mode BALANCE) — remaining amount that stays in the POS register.|No|
|[ApiObjectReference](#apiobjectreference)|voucherTypeRef|Voucher type of a voucher balance (final balance and withdrawal lines)|No|
|_string_|cancelledExternalPaymentId|External payment identifier of the payment to cancel (only for CANCEL).|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|voucherRef|Redeemed voucher, voucher payments only|No|
|_number_|withdrawalAmount|Withdrawal amount; in mode MANUAL provided by the user, in modes FULL/BALANCE/NONE calculated by the backend from the current balance.|No|
|[ApiObjectReference](#apiobjectreference)|posPaymentMethodRef|Payment method.|No|
|_string_|externalPaymentErrorMessage|Error message from the payment backend (only for a failed payment).|Yes|
|_number_|balanceBeforeWithdrawal|Payment method balance before the withdrawal (set by the backend).|Yes|
|_string_|externalPaymentId|External payment identifier for the connection to the payment backend.|Yes|
|[PosLineType](#poslinetype)|posLineType|Line type.|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentPriceModifier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sourceId|ID of Source entity of price modifier|No|
|_number_|baseCalculatedValue|Calculated modifier value in base currency.|No|
|_number_|calculatedValue|calculated discount/surcharge|No|
|[PriceModifierType](#pricemodifiertype)|modifierType|modifierType|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseValue|Modifier value in base currency.|No|
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
|PREDECESSOR_DOCUMENT||


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
|_string_|number|Document number.|No|
|_string_|documentType|Document type.|No|
|_number_|id|Unique identifier.|No|
|[DocumentCategory](#documentcategory)|category|Document category.|No|
|_string_|documentState|Document state.|No|



## DocumentRounding

| Value | Description |
| :---- | :---------- |
|NONE||
|SWITZERLAND||


## DocumentShippingCost

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|costs|Shipping costs.|No|
|Array<[DocumentTax](#documenttax)>|taxes|Taxes.|No|
|_string_|description|Article description.|No|
|_number_|purchasePrice|Purchase price.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|manualCosts|Were the shipping costs entered manually?|No|
|_boolean_|freeShipping|No shipping costs (free shipping).|No|
|Array<[DocumentText](#documenttext)>|texts|Texts.|No|
|_boolean_|cashDiscountable|Is this eligible for the payment discount?|No|
|_string_|name|Article name.|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|discountable|Is this eligible for discount?|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentTax

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|taxableAmount|taxable amount|No|
|_boolean_|taxFree|Is this tax free?|No|
|_number_|baseTaxValue|Tax amount in base currency.|No|
|_string_|internalCalculationInfo|internal calculation infos|No|
|_number_|grossAmount|gross amount|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseGrossAmount|Gross amount in base currency.|No|
|[ApiObjectReference](#apiobjectreference)|taxRateRef|reference to tax rate|No|
|_number_|baseTaxableAmount|Taxable amount in base currency.|No|
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
|_boolean_|deleted|Removed and should therefore no longer be shown.|No|
|[TextPosition](#textposition)|textPosition|position relative to the product line OR Document. For usage within text-line, this position is irrelevant|No|
|[ApiObjectReference](#apiobjectreference)|textTemplateRef|Text template.|No|
|_boolean_|initialized|Is the content filled?|Yes|
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
|_boolean_|showForManualDocumentCreation|May this type be used to create new documents?|No|
|_boolean_|active|Is this document type active?|No|
|[ApiObjectReference](#apiobjectreference)|shelfDocumentTypeRef|Reference to the document type in the DMS.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[DocumentTypeLabel](#documenttypelabel)>|labels|label/name of this type|No|
|[SequencerConfiguration](#sequencerconfiguration)|sequencerConfiguration|Number range.|No|
|_string_|nextNumber|Next document number.|Yes|
|_number_|sortOrder|Sort order.|No|
|Array<[DocumentTypeFollowUp](#documenttypefollowup)>|followUpDocumentTypes|follow up document types|Yes|
|[PublishingPolicy](#publishingpolicy)|publishingPolicy|Assigned DMS document behavior.|No|
|_boolean_|requiresBusinessRelationship|The business relation is mandatory.|No|
|_number_|id|Unique identifier of the Object|No|
|[DocumentCategory](#documentcategory)|category|associated category|No|
|_boolean_|defaultTypeOfCategory|Is this document type the default document type of its category?|No|
|_string_|key|unique key for this type (internal representation)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## DocumentTypeFollowUp

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Is this successor document type active?|Yes|
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
|_string_|languageCode|Language.|No|
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
|_number_|serialNumberId|Serial number.|No|
|_number_|targetStorageId|Target storage.|No|
|_string_|note|Note.|No|
|[ScriptingDate](#scriptingdate)|bookDate|Booking date.|No|
|[ScriptingDate](#scriptingdate)|targetExpiryDate|Best-before or expiry date, if the article requires one.|No|
|_number_|quantity|Quantity.|No|
|_number_|sourceStorageId|Source storage.|No|
|_number_|targetStorageBinId|Target storage bin.|No|
|_number_|articleId|Article.|No|
|_string_|targetSerialNumber|Valid serial number.|No|
|_boolean_|ignoreExpiryDateOnStockBooking|Ignore expiry date on stock booking|No|
|_number_|sourceStorageBinId|Source storage bin.|No|
|_number_|picklistLineComponentId|Picklist line component, if the booking takes place for it.|No|



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
|POS_CASH_JOURNAL_DEPOSIT_CANCELLATION||
|POS_CASH_JOURNAL_EXPENSE_CANCELLATION||
|POS_CASH_JOURNAL_WITHDRAWAL||
|POS_CASH_JOURNAL_WITHDRAWAL_CANCELLATION||
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


## EOutputType

| Value | Description |
| :---- | :---------- |
|PREVIEW|Preview output|
|PRINT|Output to the printer|
|FILE_EXPORT|File export in a selectable format|
|MAIL|Output as e-mail|
|USER_MESSAGE|Output as user message|
|DMS_ONLY|Stored in DMS only|
|SYSTEM|Triggers priority-based rule selection|


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
|_number_|serialNumberId|Serial number to produce the component is used for.|No|
|_number_|quantity|Quantity to use.|No|
|_number_|documentLineComponentId|Component identifier.|No|
|_number_|articleSerialNumberId|Serial number identifier.|No|



## FabricationDefectiveRequest

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Quantity that is (no longer) defective.|No|
|Array<[SerialNumberWithQuantityApi](#serialnumberwithquantityapi)>|serialNumberIdsWithQuantity|Serial numbers that are (no longer) defective.|No|
|_boolean_|createLineForReproduction|Should a new line be created for reproducing the defective articles?|No|



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
|_number_|quantity|Quantity to produce.|No|
|_boolean_|autoCommitComponents|Confirm the material automatically.|No|
|Array<[FabricationComponentForProduction](#fabricationcomponentforproduction)>|componentsForProduction|Material to use for the fabrication.|No|
|_number_|documentLineId|Identifier of the line to produce.|No|
|Array<[FabricationSerialNumber](#fabricationserialnumber)>|serialNumbers|Serial numbers to produce.|No|



## FabricationRemainingComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ArticleSerialNumber](#articleserialnumber)|lineSerialNumber|Serial number to produce the component belongs to.|No|
|_number_|quantity|Open quantity.|No|
|_number_|documentLineComponentId|Component identifier.|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Article.|No|
|[ArticleSerialType](#articleserialtype)|serialType|Serial type.|No|



## FabricationRevertRequest

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Quantity to cancel.|No|
|_boolean_|autoRevertComponents|Cancel the material automatically.|No|
|_number_|documentLineId|Identifier of the line to cancel.|No|
|Array<[FabricationSerialNumber](#fabricationserialnumber)>|serialNumbers|Serial numbers to cancel.|No|
|Array<[FabricationComponentForProduction](#fabricationcomponentforproduction)>|componentsToRevert|Material to cancel.|No|



## FabricationSerialNumber

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|serialNumberId|Identifier of the serial number to produce (only for the targeted production of serial numbers that are already defined).|No|
|[ScriptingDate](#scriptingdate)|expiryDate|Best-before or expiry date.|No|
|_string_|note|Note.|No|
|_number_|quantity|Deviating quantity for lots.|No|
|_string_|serialNumber2|Serial number 2.|No|
|_string_|serialNumber1|Serial number 1.|No|



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
|_string_|languageCodeIsoAlpha2|Text language.|No|
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
|[ScriptingDate](#scriptingdate)|performanceDate|Performance date (settable externally when no document is present).|No|
|[ScriptingDate](#scriptingdate)|paymentDiscount2DueDate|Due date (payment discount 2).|Yes|
|_string_|externalNumber|External open item number.|Yes|
|_number_|paymentDays1|How many days are given for using the first discount rule|Yes|
|_number_|paymentDays2|How many days are given for using the second discount rule|Yes|
|[ScriptingDate](#scriptingdate)|paymentDiscount1DueDate|Due date (payment discount 1).|Yes|
|[PaymentDiscountOrigin](#paymentdiscountorigin)|paymentDiscountOrigin|Origin of the payment discount values (days and percentages).|No|
|_number_|dunningCount|Number of dunning lines or dunnings for this open item.|Yes|
|[ScriptingDate](#scriptingdate)|balancedDate|balanced date of this open item (calculated)|Yes|
|_number_|baseSumTotalAmount|Total sum of the invoice amounts in base currency.|No|
|_string_|number|Open item number.|Yes|
|[OpenItem$OpenItemPaymentKind](#openitemopenitempaymentkind)|paymentKind|The kind of payment|Yes|
|_number_|balance|Balance.|Yes|
|_number_|exchangeRate|Currency exchange rate against the base currency.|No|
|[TaxPerformanceLocationType](#taxperformancelocationtype)|taxPerformanceLocation|Performance tax situation (settable externally when no document is present).|No|
|_number_|dunningLevel|Dunning level.|Yes|
|_number_|paymentDaysNet|Due period in days.|No|
|_number_|id|Unique identifier of the Object|No|
|[OpenItemPaymentState](#openitempaymentstate)|paymentState|Payment state.|No|
|_boolean_|dunningBlock|Dunning block.|No|
|_number_|baseSumPayments|Total of the payments in base currency.|No|
|[ApiObjectReference](#apiobjectreference)|order|order|Yes|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_number_|sumDunnings|Total of the dunning fees and interest.|Yes|
|_number_|baseSumFee|General fees in base currency.|No|
|_number_|baseDepositPaymentAmount|Agreed deposit amount in base currency.|No|
|_number_|sumPayments|Total of the booked payments.|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseSumDiscountableAmount|Total of the invoice amounts eligible for the payment discount in base currency.|No|
|Array<[TagDto](#tagdto)>|tags|List of tags|No|
|[ScriptingDate](#scriptingdate)|paymentDueDate|Due date.|No|
|_string_|sourceCountryCode|Country code of the country of origin (ISO Alpha-3, settable externally when no document is present).|No|
|_string_|performanceCountryCode|Country code of the performance country (ISO Alpha-3, settable externally when no document is present).|No|
|_boolean_|valueDateReadOnly|Value date, read-only.|No|
|[ScriptingDate](#scriptingdate)|depositPaymentDate|agreed Deposit payment date|Yes|
|[OpenItem$OpenItemQualifier](#openitemopenitemqualifier)|qualifier|Does this open item belong to accounts payable or accounts receivable|Yes|
|[ApiObjectReference](#apiobjectreference)|basisPaymentTermRef|Original payment term.|No|
|_boolean_|blockedByDocument|Is the open item blocked by a document?|No|
|[ApiObjectReference](#apiobjectreference)|paymentMethodRef|Payment method.|No|
|_number_|baseBalance|Open amount (balance) in base currency.|No|
|_boolean_|depositPayed|is the agreed deposit payed?|Yes|
|_number_|depositPaymentAmount|agreed Deposit payment amount|Yes|
|Array<[OpenItemRecord](#openitemrecord)>|records|free payments|Yes|
|_string_|purpose|Payment purpose.|No|
|_number_|paymentDiscount2|How much discount can be given for speedy payment, rule 2|Yes|
|_boolean_|canBeReopened|Can this open item be reopened?|No|
|_number_|paymentDiscount1|How much discount can be given for speedy payment, rule 1|Yes|
|_number_|paymentAmount|Currently valid amount to be paid.|Yes|
|[OpenItem$OpenItemRefundType](#openitemopenitemrefundtype)|refundType|how should a refund be done?|No|
|[ApiObjectReference](#apiobjectreference)|creditNote|Credit note.|Yes|
|[OpenItem$BookingAccountType](#openitembookingaccounttype)|bookingAccountType|Booking to a supplier or a customer for manual open items.|Yes|
|[OpenItemDunningState](#openitemdunningstate)|dunningState|Dunning state.|No|
|_number_|paymentDiscount2Amount|Payment discount amount 2.|No|
|_number_|sumFee|General fees.|Yes|
|_number_|fullPaymentAmount|The full amount of the payment|Yes|
|[OpenItemPaymentPlan](#openitempaymentplan)|paymentPlan|Payment plan.|No|
|_boolean_|paymentBlock|Payment block.|No|
|[ScriptingDate](#scriptingdate)|originalPaymentDueDate|Original due date.|Yes|
|[OpenItemBalanceState](#openitembalancestate)|balanceState|whether this open item is balanced, partially paid or open|Yes|
|[ScriptingDate](#scriptingdate)|valueDate|Value date.|No|
|_number_|paymentDiscount1Amount|Payment discount amount 1.|No|
|_number_|baseSumDiscount|Total of the deductions (payment discount etc.) in base currency.|No|
|_number_|baseSumDunnings|Total of the dunning fees and interest in base currency.|No|
|[ApiObjectReference](#apiobjectreference)|paymentTemplateRef|Payment template.|No|
|_number_|sumTotalAmount|Invoice amount.|Yes|
|[ApiObjectReference](#apiobjectreference)|taxRateRef|Tax rate (settable externally when no document is present).|No|
|[ApiObjectReference](#apiobjectreference)|depositInvoice|Deposit invoice.|Yes|
|_string_|baseCurrencyCode|Open item base currency (ISO-A3).|No|
|[TaxStateType](#taxstatetype)|taxState|Tax state (settable externally when no document is present).|No|
|_string_|comment|Comment.|No|
|[ApiObjectReference](#apiobjectreference)|invoice|invoice|Yes|
|_number_|sumDiscountableAmount|Invoice amount eligible for the payment discount.|Yes|
|_string_|currencyCode|Open item currency (ISO-A3).|No|
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
|_string_|dueDateCalculation|Due date rule.|No|
|_number_|amount|Amount.|No|
|[ScriptingDate](#scriptingdate)|endDate|End date.|No|
|[ScriptingDate](#scriptingdate)|dueDate|Due date.|No|
|[OpenItemPaymentPlan$PaymentPlanType](#openitempaymentplanpaymentplantype)|paymentPlanType|Payment plan type.|No|
|_boolean_|active|Active.|No|
|_string_|description|Description.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseAmount|Amount in base currency.|No|
|_string_|baseCurrencyCode|Payment plan base currency (ISO-A3).|No|
|_number_|exchangeRate|Currency exchange rate against the base currency.|No|
|Array<[PaymentPlanManualRule](#paymentplanmanualrule)>|manualRuleEntries|Manual booking presets.|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|currencyCode|Payment plan currency (ISO-A3).|No|
|[ScriptingDate](#scriptingdate)|startDate|Start date.|No|
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
|_number_|baseDunningInterest|Dunning interest in base currency.|No|
|_string_|recordReferenceNumber|record reference number|Yes|
|_string_|number|Process number that led to the booking.|Yes|
|_number_|bookingRecordId|ref to the financialBookingRecord|Yes|
|_boolean_|revertable|revertable|Yes|
|_number_|exchangeRate|Currency exchange rate against the base currency.|No|
|[OpenItemRecord$BookingType](#openitemrecordbookingtype)|bookingType|Booking type of the open item record (derived from the origin and the booking type).|Yes|
|_number_|discountableAmount|record discountable amount|Yes|
|[ScriptingDate](#scriptingdate)|recordDate|record date|Yes|
|_number_|baseTotalAmount|Total amount in base currency.|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|locked|locked|Yes|
|_number_|baseDiscountableAmount|Total amount eligible for the payment discount in base currency.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|_number_|dunningLvl|Dunning level.|Yes|
|_number_|amount|record amount|Yes|
|[ApiObjectReference](#apiobjectreference)|transactionRef|bank transaction details|Yes|
|[ApiObjectReference](#apiobjectreference)|bankAccountRef|Bank account of the transaction.|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseAmount|Booking amount in base currency.|No|
|_number_|transactionId|Identifier of the transaction that caused this record.|Yes|
|_number_|baseDiscountAmount|Deduction amount in base currency.|No|
|_number_|baseDunningFee|Dunning fees in base currency.|No|
|_number_|totalAmount|record total amount|Yes|
|_string_|baseCurrencyCode|Open item base currency (ISO-A3).|No|
|_number_|revertedByRecordId|Identifier of the record that cancelled this one.|Yes|
|[OpenItemRecord$RecordQualifier](#openitemrecordrecordqualifier)|qualifier|qualifier of open item|Yes|
|[ApiObjectReference](#apiobjectreference)|paymentMethod|payment-method |Yes|
|_string_|comment|comment|Yes|
|[ApiObjectReference](#apiobjectreference)|businessTransaction|Business transaction.|Yes|
|_string_|currencyCode|Open item currency (ISO-A3).|No|



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
|IMPORT_DUNNING||
|CLEARING||
|CLEARING_DISSOLVED||
|DEPOSIT||
|CREDIT_NOTE||
|BALANCE_ADJUSTMENT||
|FEE||
|DUNNING_PAYMENT||
|DUNNING_PAYMENT_DISSOLVED||
|POS_PAYMENT||
|VOUCHER_PAYMENT||
|VOUCHER_PAYMENT_DISSOLVED||


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


## OutputModuleScriptingResponse
### Description
Response used by the script to override the resolved output behaviour

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|outputLocale|Overrides the output locale as a language tag (e.g. "de" or "de-DE")|No|
|_number_|outputQuantity|Number of copies to output, overrides output quantity from output rules|No|
|[EOutputType](#eoutputtype)|outputType|Overrides the requested output type|No|
|[OutputTargetFormat](#outputtargetformat)|exportFormat|Export format, required for outputType = FILE_EXPORT|No|



## OutputTargetFormat

| Value | Description |
| :---- | :---------- |
|XLSX||
|PDF||
|HTML||
|JSON_RAW||
|REPORT_TEMPLATE||
|INVOICE||


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
|_boolean_|closePayable|Close the payable open item?|No|
|_number_|daysToAddForDirectDebit|Additional days for the first direct debit.|No|
|_string_|printDescription|printDescription|No|
|_boolean_|active|Is this active?|No|
|_string_|description|description|No|
|[ApiObjectReference](#apiobjectreference)|factoringAccount|Account used for factoring. Only allowed when the payment type is FACTORING.|No|
|_string_|label|label for this payment method|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[BankPaymentType](#bankpaymenttype)|paymentType|Payment Type|No|
|_boolean_|dunnable|dunnable|No|
|_boolean_|closeCustomerAccountType|Close the debtor open item?|No|
|Array<[DocumentTypeTerm](#documenttypeterm)>|translations|translations|No|
|_number_|daysToAddForFollowup|Additional days for the recurring direct debit.|No|
|_string_|externalPaymentId|external Payment Id|No|
|[ApiObjectReference](#apiobjectreference)|businessTransaction|Business transaction.|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|closeSupplierAccountType|Close the creditor open item?|No|
|_boolean_|closeReceivable|Close the receivable open item?|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PaymentPlanManualRule

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|processed|Already processed.|Yes|
|_number_|amount|Amount.|No|
|_string_|baseCurrencyCode|Base currency (ISO-A3).|No|
|_number_|exchangeRate|Currency exchange rate against the base currency.|No|
|[ScriptingDate](#scriptingdate)|dueDate|Due date.|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|currencyCode|Currency (ISO-A3).|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|baseAmount|Amount in base currency.|No|
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
|_boolean_|active|Is this active?|No|
|_string_|description|description|No|
|_string_|label|label for this payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[PaymentType](#paymenttype)|paymentType|payment type|No|
|Array<[DocumentTypeTerm](#documenttypeterm)>|translations|translations|No|
|_boolean_|considerForCreditLimit|Is this considered for the credit limit?|No|
|_string_|externalPaymentId|external Payment Id|No|
|_number_|paymentDaysNet|Days for net payment |No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|dunningBlock|Dunning block.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PaymentTermRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Active.|Yes|
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
|_string_|identifier|Barcode for selecting the trolley.|No|
|Array<[PickTrolleyBox](#picktrolleybox)>|pickTrolleyBoxes|Boxes belonging to this trolley.|No|
|[StorageBinRef](#storagebinref)|storageBinRef|Storage bin this pick trolley is assigned to.|No|
|[ApiObjectReference](#apiobjectreference)|processedByUserRef|User processing the picklist.|Yes|
|_string_|description|Trolley description.|No|
|_number_|currentPicklistId|The trolley currently belongs to this picklist.|Yes|
|_string_|label|Trolley label.|No|
|[PickTrolleyType](#picktrolleytype)|type|Trolley type.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[ApiObjectReference](#apiobjectreference)>|picklistTemplateRefs|Picklist templates that can be used to create picklists for the trolley on the mobile device.|No|
|[PickTrolleyState](#picktrolleystate)|state|Trolley status.|Yes|
|[ApiObjectReference](#apiobjectreference)|pickTrolleyGroupRef|The trolley belongs to this pick trolley group.|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PickTrolleyBox

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|pickTrolleyId|The box belongs to this pick trolley.|No|
|_string_|identifier|Barcode for selecting the box.|No|
|_number_|currentDocumentId|Document currently being picked.|No|
|_string_|description|Box description.|No|
|[PickTrolleyBoxState](#picktrolleyboxstate)|state|Box status.|Yes|
|_string_|label|Box label.|No|
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
|[ApiObjectReference](#apiobjectreference)|targetStorageRef|Target storage for the replenishment.|Yes|
|[PicklistTemplate](#picklisttemplate)|usedTemplate|Template used to create the picklist.|No|
|_string_|number|Picklist number.|No|
|[ScriptingDateTime](#scriptingdatetime)|pickingFinishedAt|Time the picking process was finished.|No|
|[ApiObjectReference](#apiobjectreference)|pickingUserRef|User performing the picking process.|No|
|[ScriptingDateTime](#scriptingdatetime)|pickingStartedAt|Time the picking process was started.|No|
|[PicklistState](#pickliststate)|state|Picklist status.|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[PicklistLine](#picklistline)>|lines|Picklist lines.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PicklistLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|pickTrolleyBoxRef|Pick box this line is to be picked with.|No|
|_number_|quantityCollected|Picked line quantity.|No|
|Array<[PicklistLineComponent](#picklistlinecomponent)>|components|Line components, if this line is an assembly.|No|
|_number_|quantity|Line quantity.|No|
|[ProductArticleRef](#productarticleref)|articleRef|Article.|No|
|_number_|targetDocumentId|Target document identifier.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|sourceDocumentLineId|Source document line identifier.|No|
|[ApiObjectReference](#apiobjectreference)|storageRef|Storage.|No|
|[PicklistLineType](#picklistlinetype)|lineType|Line type.|No|
|_number_|targetDocumentLineId|Target document line identifier.|No|
|[PicklistLineState](#picklistlinestate)|state|Line status.|No|
|_number_|quantityPacked|Packed line quantity.|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[PicklistLineBooking](#picklistlinebooking)>|bookings|Bookings for this line.|No|
|_number_|sourceDocumentId|Source document identifier.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PicklistLineBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Quantity to book (picked).|No|
|[ArticleSerialNumber](#articleserialnumber)|serialNumber|Serial number.|No|
|_string_|storageBinDisplayName|Storage bin display name.|Yes|
|_number_|storageBinId|Identifier of the storage bin booked to.|No|
|_boolean_|preset|Booking preset?|No|
|_number_|quantityPacked|Quantity to book (packed).|No|



## PicklistLineComponent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantityCollected|Picked line quantity.|No|
|_string_|articleName|Article name.|Yes|
|_number_|quantity|Line quantity.|No|
|_string_|articleDescription|Article description.|Yes|
|_number_|articleId|Article identifier.|No|
|_number_|picklistLineId|Picklist line identifier.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|sourceDocumentLineComponentId|Component identifier of the source document line.|No|
|_string_|articleNumber|Article number.|Yes|
|_number_|targetDocumentLineComponentId|Component identifier of the target document line.|No|
|_string_|articleAlternativeName|Deviating article name.|Yes|
|_number_|quantityPerAssemblyGroup|Quantity per assembly (if the picklist line is an assembly).|No|
|_number_|position|Component position in the assembly.|No|
|_number_|quantityPacked|Packed line quantity.|No|
|_number_|id|Unique identifier of the Object|No|
|Array<[PicklistLineBooking](#picklistlinebooking)>|bookings|Bookings for this component.|No|
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
|[PickingType](#pickingtype)|pickingType|Picking type.|No|
|[PicklistTemplate$OrderSelectionOptions](#picklisttemplateorderselectionoptions)|orderSelectionOptions|Options for selecting orders for the picklist.|No|
|Map<[PicklistScriptType](#picklistscripttype),[PicklistTemplate$PicklistScript](#picklisttemplatepicklistscript)>|picklistScripts|Scripts for creating and processing picklists.|No|
|_boolean_|defaultTemplate|Is this a default template?|No|
|_boolean_|active|Is Template active?|Yes|
|_string_|description|Template description.|No|
|_string_|label|Template name.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[PicklistTemplate$PicklistCreationOptions](#picklisttemplatepicklistcreationoptions)|picklistCreationOptions|Options for creating the picklist.|No|
|_number_|id|Unique identifier of the Object|No|
|[PicklistTemplate$PicklistProcessingOptions](#picklisttemplatepicklistprocessingoptions)|picklistProcessingOptions|Options for processing picklists.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## PicklistTemplate$DateRange

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|allowEmpty|The date range may be empty.|No|
|_string_|from|Date from (optionally as a relative date).|No|
|_string_|to|Date to (optionally as a relative date).|No|



## PicklistTemplate$OrderSelectionOptions

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|maxShippingWeightPerOrder|Maximum shipping weight per order.|No|
|[PicklistTemplate$DateRange](#picklisttemplatedaterange)|confirmedDeliveryDateRange|Selection by the confirmed delivery date range.|No|
|_boolean_|allowOnlyDefinedDeliveryMethods|May only valid delivery methods be used?|No|
|_number_|minArticleCountPerOrder|Minimum number of articles per order.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|documentTypeRefs|Document types of the document category "customer order".|No|
|_number_|maxArticleCountPerOrder|Maximum number of articles per order.|No|
|_string_|alternativeSelectionInVql|Alternative selection in VQL.|No|
|_number_|maxOrderValue|Maximum order value.|No|
|_boolean_|onlyFullDeliverableOrderLines|Only fully deliverable lines.|No|
|_number_|maxOrderCount|Only for single picking and consolidation: maximum number of orders to transfer.|No|
|[PicklistTemplate$DateRange](#picklisttemplatedaterange)|deliveryDateRange|Selection by the delivery date range.|No|
|[PicklistTemplate$DateRange](#picklisttemplatedaterange)|documentDateRange|Selection by the document date range.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|storageAreaRefs|Valid storage areas.|No|
|_number_|salesChannelId|Identifier of the salesChannel considered in the selection.|No|
|_boolean_|onlyFullDeliverableOrders|Only fully deliverable orders.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|deliveryMethodRefs|Valid delivery methods.|No|
|_number_|maxTotalVolumePerOrderInCCM|Maximum total volume per order (in cubic centimeters).|No|
|_Array<string>_|additionalExistsStatementsInVql|Additional exists statements in VQL.|No|



## PicklistTemplate$PicklistCreationOptions

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|specifySerialWithOldestExpiryDate|For serial articles with an expiry or best-before date: predefine the oldest series in the picklist.|No|
|_string_|cycleToCreatePicklistsCronExpression|Cycle for creating picklists (for background jobs, as a Quartz cron expression) (https://www.freeformatter.com/cron-expression-generator-quartz.html).|No|
|[ApiObjectReference](#apiobjectreference)|fastOrderPickingTemplateToUseRef|Template to use for creating picklists for quick picking.|No|
|_boolean_|printLabelsOnCreation|Should the labels be printed automatically after the creation?|No|
|_number_|maxQuantityOfOrderLineForFastOrderPicking|Maximum order line quantity for quick-picking picklists.|No|
|_boolean_|printPicklist|Should the picklist be printed?|No|
|_number_|maxPicklistLineCount|Maximum number of picklist lines.|No|
|[ApiObjectReference](#apiobjectreference)|orderPickingTrolleyGroupRef|Pick trolley group to use.|No|
|[ApiObjectReference](#apiobjectreference)|picklistOutputReportGroupRef|Which report group the picklist is printed with.|No|
|_boolean_|specifyStorageBins|Predefine the storage bins.|No|
|[ApiObjectReference](#apiobjectreference)|orderPickingTrolleyRef|Pick trolley to use.|No|
|_boolean_|useAllAvailOrderPickingTrolleys|Should all available pick trolleys be used?|No|
|_boolean_|sortByRoutePosition|Sort the picklist lines by route position.|No|
|_boolean_|firstCreateFastOrderPickingPicklists|Should picklists for the quick picking be created first?|No|



## PicklistTemplate$PicklistProcessingOptions

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|assemblyGroupAtOnce|Pick assemblies as a whole.|No|
|_boolean_|autoPrintShippingLabel|Should the parcel labels be printed automatically after the picking is completed?|No|
|[PickingArticleProcessing](#pickingarticleprocessing)|articleScanRequirement|May articles be recorded only by scanning (or also by entering the article number)?|No|
|_boolean_|allowSkipPosition|Is skipping lines allowed?|No|
|_boolean_|autoPickingFinishAfterLastArticleInOrder|Automatic completion after the last article of the current order.|No|
|_boolean_|usePickNPack|Use pick and pack.|No|
|[PickingDeviatingQuantity](#pickingdeviatingquantity)|deviatingQuantity|Picking of deviating quantities.|No|
|_boolean_|alwaysShowDeliveryMethod|Always show the delivery term in the dialogs.|No|
|_boolean_|autoPrintDeliveryDocument|Should the delivery documents be printed automatically after the picking is completed?|No|
|_boolean_|blockIfMaximumPackageWeightIsExceeded|Block exceeding the maximum parcel weight?|No|
|_boolean_|showShippingFormOnPickingFinish|Show the shipping dialog on completion.|No|
|_boolean_|printLabelOnScan|Should the labels be printed automatically during the recording?|No|
|_boolean_|useDigitalPicklist|Use the digital picklist: only the lines are shown in the frontend and confirmed by tapping or swiping.|No|
|_boolean_|allowFullConfirmation|Allow collective confirmation.|No|
|_boolean_|allowPickingOfServiceArticles|Should services be picked?|No|
|_boolean_|useSalesUnit|Use the sales unit as the default quantity.|No|
|_boolean_|scanDeliveryDocumentAndShippingLabelOnFinish|Only for consolidation: scan the delivery document and the shipping label to complete.|No|
|_boolean_|printLabelOnCompleteOrder|Should the labels be printed automatically when the order is completed?|No|
|_boolean_|scanPickTrolleyBoxToConfirmPickedArticle|Rolling picking and consolidation: during picking the box has to be confirmed by scanning after an article is scanned.|No|
|_boolean_|printLabelAfterPicking|Should the labels be printed automatically when the picking is completed?|No|
|_boolean_|autoDeterminationOfLots|Confirm lots automatically when they are predefined or were already recorded during picking.|No|
|_boolean_|allowPickingOfNonInventoryManagedArticles|Should articles without stock management be picked?|No|
|_boolean_|hideTargetQuantityInViews|Hide the target quantities in the dialogs?|No|
|_boolean_|alwaysRequireScanOfStorageBin|Storage bins must be recorded despite a predefined value.|No|



## PicklistTemplate$PicklistScript

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|active|Is the script active?|No|
|_string_|source|Script source code.|No|



## PlainScriptingWriter
### Description
Writer für einfache Texte ohne besondere Formatierung

### Methods

_**write**_

Hängt den Inhalt an den bisher geschriebenen Inhalt an.

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|content|Text, der in die Datei geschrieben wird|Yes|


_**writeLine**_

Hängt den Inhalt an den bisher geschriebenen Inhalt an und schreibt anschließend einen Zeilenumbruch.

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|content|Text, der in die Datei geschrieben wird|Yes|


_**close**_

Schließt den Writer und die damit verbundene Datenquelle


## PosLineType

| Value | Description |
| :---- | :---------- |
|CASH_PAYMENT||
|CASH_CHANGE||
|CARD_PAYMENT||
|VOUCHER_PAYMENT||
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
|[ScriptingDate](#scriptingdate)|date|Date.|No|
|_number_|priceGroupId|Price group.|No|
|_number_|quantity|Quantity.|No|
|_Array<number>_|articleIds|Article identifiers.|No|
|_Array<number>_|accountIds|Account identifiers.|No|
|[ProductPriceQualifier](#productpricequalifier)|qualifier|Qualifier.|No|
|_number_|productGroupId|Product group.|No|
|_boolean_|selectOnlyDefaultPrice|Should only the default price be selected?|No|
|_boolean_|noteSpecialOfferPrice|Consider the special offer price?|No|



## Product

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|customsTariffNumber|Customs tariff number.|No|
|_boolean_|lotOnlyRequiredWhenBookedToSalesStorage|A lot must be assigned when booking into a sales storage (for serial types LOT and BEST_BEFORE).|No|
|[ApiObjectReference](#apiobjectreference)|bundleSchemaRef|Product container schema.|Yes|
|[ArticleSerialNumberLabelingType](#articleserialnumberlabelingtype)|serialNumberLabelingType|Serial number labeling type.|No|
|[ApiObjectReference](#apiobjectreference)|regionOfOrigin|Region of origin.|No|
|[ProductType](#producttype)|type|Product type.|No|
|_number_|warrantyInMonths|Warranty in months.|No|
|_number_|minimumRemainingDaysBeforeExpiryDateOnGoodsReceipt|Minimum remaining shelf life incoming (days): minimum remaining shelf life in days an article must still have when booked into a sales storage.|No|
|[ArticleAvailabilityDetermination](#articleavailabilitydetermination)|availabilityDetermination|Options for calculating the availability.|No|
|Array<[ProductArticleRef](#productarticleref)>|articleRefs|All articles belonging to this product.|Yes|
|_boolean_|useSerialSequencerConfiguration|Should an own number range be used for the serial numbers?|No|
|[FabricationSerialNumberLabelingType](#fabricationserialnumberlabelingtype)|fabricationSerialNumberLabelingType|Fabrication serial number labeling type.|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|bundle|Is this a container?|No|
|[ArticleSerialType](#articleserialtype)|serialType|Serial type.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#apiobjectreference)|mainVariantProductRef|Main variant article.|No|
|[ApiObjectReference](#apiobjectreference)|variantSchemaRef|Variant schema.|No|
|[SequencerConfiguration](#sequencerconfiguration)|serialSequencerConfiguration|Own number range for serial numbers.|No|
|[ArticleSerialExpiryDateType](#articleserialexpirydatetype)|expiryDateType|Expiry date type.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|minimumRemainingDaysBeforeExpiryDateForGoodsIssued|Minimum remaining shelf life outgoing (days): minimum remaining shelf life in days an article must still have when sold.|No|
|[CountryReference](#countryreference)|countryOfOrigin|Country code|No|
|Array<[VariantValueReference](#variantvaluereference)>|variantValues|Variant values.|No|



## ProductArticleRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|number|Article number|No|
|[UnitTypeReference](#unittypereference)|unit|named unit of this article (piece, palette, container)|No|
|_string_|name|Label.|No|
|_string_|description|Description.|No|
|_number_|id|Article identifier.|No|
|[ArticleSerialType](#articleserialtype)|serialType|Serial type.|No|



## ProductDiscount

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|customerGroupRef|Customer group.|No|
|[ApiObjectReference](#apiobjectreference)|accessoryMainArticleRef|Main article this discount is valid for.|No|
|[ApiObjectReference](#apiobjectreference)|supplierGroupRef|Supplier group.|No|
|_number_|fromQuantity|Determines from which quantity this discount is valid.|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Product this discount is valid for.|No|
|[ApiObjectReference](#apiobjectreference)|manufacturerRef|Manufacturer.|No|
|[ScriptingDate](#scriptingdate)|validFrom|Valid from.|No|
|[ApiObjectReference](#apiobjectreference)|productGroupRef|Product group.|No|
|[PriceModifierType](#pricemodifiertype)|modifierType|Determines the discount type.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Sales channel.|No|
|[CurrencyReference](#currencyreference)|currencyRef|Currency.|No|
|_number_|modifierValue|Discount value.|No|
|[ApiObjectReference](#apiobjectreference)|priceGroupRef|Price group.|No|
|[ProductPriceQualifier](#productpricequalifier)|qualifier|Determines whether this is a sales or a purchase discount.|Yes|
|_boolean_|specialOfferPrice|Special offer price.|No|
|[ScriptingDate](#scriptingdate)|validUntil|Valid until.|No|
|[ValueType](#valuetype)|modifierValueType|Determines the discount value type (fixed or percentage).|No|
|_string_|modifierName|Discount name.|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Account the discount is valid for.|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ProductGroup

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|externalReference|needed for data migration from third party applications|No|
|_string_|customsTariffNumber|Customs tariff number.|No|
|_number_|targetTradingMargin|Target trading margin.|No|
|[ApiObjectReference](#apiobjectreference)|mainGroupRef|main product group|No|
|[EavProductgroup](#eavproductgroup)|custom|Custom field.|No|
|_boolean_|active|Is the product group active?|Yes|
|_string_|description|product group description|No|
|_string_|label|product group name|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ProductMainGroup

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|targetTradingMargin|Target trading margin.|No|
|[EavProductmaingroup](#eavproductmaingroup)|custom|Custom field.|No|
|_boolean_|active|Is the main product group active?|Yes|
|_string_|description|Main product group description.|No|
|_string_|label|Main product group.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ProductPrice

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|customerGroupRef|Customer group.|No|
|[ApiObjectReference](#apiobjectreference)|accessoryMainArticleRef|Main article this price is valid for.|No|
|[PurchasePriceSource](#purchasepricesource)|purchasePriceSource|Purchase price for the calculation.|No|
|_number_|fromQuantity|Determines from which quantity this price is valid.|No|
|_number_|netPrice|Net price.|No|
|_number_|grossPrice|Gross price.|No|
|[ScriptingDate](#scriptingdate)|validFrom|Valid from.|No|
|[ApiObjectReference](#apiobjectreference)|productGroupRef|Product group.|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Sales channel.|No|
|[ApiObjectReference](#apiobjectreference)|priceGroupRef|Price group.|No|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[TaxRate](#taxrate)|usedTaxRate|VAT used for converting between net and gross.|Yes|
|[ApiObjectReference](#apiobjectreference)|supplierGroupRef|Supplier group.|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Product this price is valid for.|No|
|[ApiObjectReference](#apiobjectreference)|manufacturerRef|Manufacturer.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[CurrencyReference](#currencyreference)|currencyRef|Currency.|No|
|_number_|modifierValue|Surcharge value in the purchase price calculation.|No|
|[ProductPriceQualifier](#productpricequalifier)|qualifier|Determines whether this is a sales or a purchase price.|Yes|
|_boolean_|specialOfferPrice|Special offer price.|No|
|[ScriptingDate](#scriptingdate)|validUntil|Valid until.|No|
|[ArticlePriceBase](#articlepricebase)|priceBase|Price base.|No|
|[ValueType](#valuetype)|modifierValueType|Determines the surcharge type (fixed or percentage) in the purchase price calculation.|No|
|[ApiObjectReference](#apiobjectreference)|accountRef|Account the price is valid for.|No|



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
|[CountryReference](#countryreference)|countryCode|Country (ISO Alpha-2).|No|
|[ApiObjectReference](#apiobjectreference)|articleRef|Reference to the article.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|value|Price.|No|
|[CurrencyReference](#currencyreference)|currencyCode|Currency (ISO Alpha-3).|No|
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
|_number_|incomingGoodsStorageBinId|Storage bin identifier for the incoming goods (when incomingGoodsPickTrolleyId is null).|No|
|[ScriptingDate](#scriptingdate)|documentDate|Document date.|No|
|[ScriptingDate](#scriptingdate)|performanceDate|Performance date.|No|
|_number_|depositPaymentAmount|Deposit amount.|No|
|_number_|cashDrawerId|Cash drawer identifier (for POS).|No|
|_number_|deliveryMethodId|For internal use: the Document delivery method.|No|
|_string_|externalNumber|External document number.|No|
|_boolean_|externallyCreated|For internal use: marks the document as externally created (e.g. a marketplace invoice; the original is held in the external system).|No|
|_number_|performanceCountryId|For internal use: the Document performance country.|No|
|Array<[DocumentPosPayment](#documentpospayment)>|posPayments|One or more POS payments.|No|
|[DocumentPosDetail](#documentposdetail)|posDetail|Receipt details.|No|
|_number_|salesChannelId|sales-channel-id to create a new Document|No|
|[BillingType](#billingtype)|billingType|billing type|No|
|_number_|paymentMethodId|For internal use: the Document payment method.|No|
|_number_|deliveryTermId|For internal use: the Document delivery term.|No|
|_number_|currencyId|For internal use: the Document currency.|No|
|Array<[RequestDocumentLine](#requestdocumentline)>|lines|Document lines.|No|
|Array<[AssemblyComponentReturnLine](#assemblycomponentreturnline)>|assemblyComponentReturnsToAddOnTransfer|For internal use only: new lines for individually returned assembly components.|No|
|_number_|posRegisterId|POS register identifier (for POS).|No|
|[DocumentContractDetail](#documentcontractdetail)|contractDetail|Contract details.|No|
|_number_|supplierAccountId|Default supplier when transferring from an order to supplier orders.|No|
|_number_|paymentTermId|For internal use: the Document payment term.|No|
|[EavDocument](#eavdocument)|custom|Schema custom fields.|No|
|_boolean_|dropShipping|For internal use: the drop shipping policy.|No|
|[DocumentType](#documenttype)|targetDocumentType|target document type for document copy|No|
|_string_|externalId|reference to the corresponding document in an external system|No|
|_number_|incomingGoodsPickTrolleyId|Pick trolley identifier for the incoming goods (when incomingGoodsStorageBinId is null).|No|
|[CalculationMode](#calculationmode)|calculationMode|calculation mode|No|
|[ApiCreatableReference](#apicreatablereference)|cancellationReasonRef|Reason for the cancellation when creating a cash journal cancellation document.|No|
|_boolean_|eInvoice|For internal use: marks the document as an electronic invoice.|No|
|_number_|accountId|account-id to create a new Document|No|
|Array<[DocumentText](#documenttext)>|texts|Document header and footer texts.|No|
|_boolean_|processedByPicklistProcessing|Is this document processed by the picklist processing?|No|
|Array<[PicklistLine](#picklistline)>|picklistLinesToAddOnTransfer|For internal use only: new lines to be created when transferring from a picklist.|No|
|Array<[RequestDocumentPriceModifier](#requestdocumentpricemodifier)>|priceModifiers|Document discounts.|No|



## RequestDocumentLine

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|incomingGoodsStorageBinId|Storage bin identifier for the incoming goods (when `incomingGoodsPickTrolleyId` is null).|No|
|[ScriptingDate](#scriptingdate)|performanceDate|Performance date.|No|
|[DocumentLineReturnDetail](#documentlinereturndetail)|returnDetail|Document line return details.|No|
|_boolean_|markCompleted|Should the source line be marked as completed after a successful processing?|No|
|_string_|description|Article description.|No|
|[ProductPriceOrigin](#productpriceorigin)|priceOrigin|Price origin.|No|
|[DocumentLinePosDetail](#documentlineposdetail)|posDetail|Document line receipt details.|No|
|_Consumer<Long>_|createdLineIdConsumer||No|
|_number_|totalLinePrice|Total line price (optional).|No|
|_number_|refLineId|Referenced document line identifier (optional).|No|
|Array<[RequestDocumentLineCommission](#requestdocumentlinecommission)>|commissions|Commissions for this document line.|No|
|_number_|voucherId|The affected voucher: for VOUCHER_REDEMPTION the one to redeem, for VOUCHER_SALE on return, credit note or cancellation the returned one|No|
|[DocumentFinanceBooking](#documentfinancebooking)|financeBooking|Finance details.|No|
|[DocumentLineType](#documentlinetype)|lineType|Line type.|No|
|_number_|taxPercent|For internal use: the tax rate in percent.|No|
|[DropShippingPolicy](#dropshippingpolicy)|dropShippingPolicy|Is this drop shipping?|No|
|_string_|voucherCode|Scanned code of the preprinted voucher card (VOUCHER_SALE of a voucher type with scanned codes only)|No|
|_number_|storageId|Storage identifier (optional).|No|
|_number_|positionOfArticleLine|Article position number.|No|
|[DocumentContractDetail](#documentcontractdetail)|contractDetail|Document line contract details.|No|
|_number_|supplierAccountId|Required for converting a customer order into a supplier order.|No|
|_number_|quantity|Quantity to process in this transaction.|No|
|_number_|mainArticleLinePosition||No|
|[RequestDocumentLineShippingCostDetail](#requestdocumentlineshippingcostdetail)|shippingCostDetail|Shipping costs with conditions.|No|
|[EavDocumentline](#eavdocumentline)|custom|For internal use: the custom fields.|No|
|[RequestDocumentLineFabricationDetail](#requestdocumentlinefabricationdetail)|fabricationDetail|Fabrication document details.|No|
|_number_|articleId|Article identifier of this line (optional).|No|
|_string_|settledOpenItemComment|Note on the open item line - transferred into the open item comment on closing.|No|
|_number_|lineId|Document line identifier in the current document.|No|
|_string_|externalId|Reference to the corresponding line in an external system.|No|
|_number_|incomingGoodsPickTrolleyId|Pick trolley identifier for the incoming goods (when `incomingGoodsStorageBinId` is null).|No|
|_number_|onGoodsArrivalConvertIntoBundleArticleId|Bundle article the received goods of this line are converted into (optional).|No|
|_number_|settledOpenItemId|Identifier of the open item to settle (only for OPEN_ITEM_SETTLEMENT).|No|
|[DocumentCommissionOrigin](#documentcommissionorigin)|commissionOrigin|Document line commission origin.|No|
|Array<[RequestDocumentText](#requestdocumenttext)>|texts|Texts for this line (optional).|No|
|_number_|voucherTypeId|Voucher type of the sales line (VOUCHER_SALE only)|No|
|_string_|name|Article name.|No|
|Array<[RequestDocumentPriceModifier](#requestdocumentpricemodifier)>|priceModifiers|Price modifiers for this line (optional).|No|
|_string_|externalArticleNumber|For internal use: the external article number.|No|
|_number_|sourceLineId|Source document line identifier.|No|
|Array<[RequestDocumentLineBooking](#requestdocumentlinebooking)>|bookings|Bookings for this document line.|No|
|_boolean_|doLabelPrint|Trigger the label printing for this line.|No|
|_number_|productPrice|Article price of this line (optional).|No|



## RequestDocumentLineBooking

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|serialNumberId|Identifier of a serial number to book, if any.|No|
|_number_|quantity|Booked quantity.|No|
|_number_|storageBinId|Identifier of the storage bin booked to.|No|
|_number_|sourceComponentId|Booked source DocumentLineComponent identifier.|No|



## RequestDocumentLineCommission

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ValueType](#valuetype)|valueType|Commission type.|No|
|[DocumentCommissionOrigin](#documentcommissionorigin)|origin|Origin.|No|
|_string_|description|Description.|No|
|_string_|comment|Comment.|No|
|_number_|value|Commission percentage or value.|No|
|[Account](#account)|salesAgentAccountRef|Sales agent.|No|



## RequestDocumentLineFabricationDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[FabricationSerialNumber](#fabricationserialnumber)>|fabricationSerialNumbers|Fill this only when the serial numbers are to be determined manually before the fabrication starts.|No|



## RequestDocumentLineShippingCostDetail

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|manualCosts|Were the shipping costs entered manually?|No|
|_boolean_|freeShipping|No shipping costs (free shipping).|No|
|_number_|purchasePrice|Purchase price in base currency.|No|



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
|_number_|revenue|Contribution margin (absolute).|Yes|
|_number_|salesValue|Net revenue.|Yes|
|_number_|productPurchasePrice|Purchase price.|Yes|
|_number_|revenueInPercent|Contribution margin (percent).|Yes|



## SalesAgent

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Note.|No|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|reference to the delivery method|No|
|_boolean_|taxable|is sales agent taxable|No|
|[EavSalesagent](#eavsalesagent)|custom|Custom fields.|No|
|_boolean_|active|active true/false|Yes|
|[ApiObjectReference](#apiobjectreference)|paymentTermRef|reference to the payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[SalesAgentCommissionType](#salesagentcommissiontype)|commissionType|commission type of sales agent|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|reference to the delivery term|No|
|_string_|number|number of sales agent|No|
|[ApiObjectReference](#apiobjectreference)|taxRateRef|reference to the tax rate|No|
|_string_|performanceCountryCode|country code performance country IsoAlpha3|No|
|[ApiObjectReference](#apiobjectreference)|userRef|reference to the assigned user|No|
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
|_string_|identifier|Scenario identifier.|Yes|
|Array<[ScenarioDimension](#scenariodimension)>|dimDefinitions|Dimension definition.|No|
|Array<[ScenarioFactDef](#scenariofactdef)>|factDefinitions|Fact and data definition.|No|
|_string_|description|Scenario description.|No|
|_string_|label|Scenario description.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ScriptingDate](#scriptingdate)|startDate|Start date for the calculation (optional).|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ScenarioActualValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|scenarioDimRef|Reference to a ScenarioDimDef.|No|
|_number_|weight|Weighting.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|referenceId|Reference to the LookupReference.|No|
|[ApiObjectReference](#apiobjectreference)|dimValueRef|Reference to a scenario dimension value.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ScenarioDimension

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[ScenarioDimensionValue](#scenariodimensionvalue)>|definedValues|Distribution key values.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|key|Distribution key - key or group.|No|
|_boolean_|multiSelect|Can several keys be used in the distribution?|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ScenarioDimensionValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sort order.|Yes|
|_boolean_|active|Is the value still active and selectable?|No|
|_string_|label|Value.|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|fallback|Is this the fallback value?|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ScenarioFactDef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|factAttribute|Attribute name.|No|
|[ScenarioFactDef$FactType](#scenariofactdeffacttype)|attributeType|Attribute type.|No|
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

### Methods

_**arg**_

setzt einen freien Platzhalter-Parameter, im Template als [(${arg$.<key>})] nutzbar

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|key|Name des Platzhalters|Yes|
|_object_|value|Wert des Platzhalters|No|


_**outputUserMessage**_

setzt den Ausgabetyp auf User-Message

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

_**outputFileExport**_

setzt den Ausgabetyp auf File-Export

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

_**outputDmsOnly**_

setzt den Ausgabetyp auf reine DMS-Ablage

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

_**userRecipient**_

fügt emailadresse und alias einer ausgabe hinzu

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|userId|setzt die Userid|Yes|
|_string_|emailAddress|setzt die emailAddress|No|
|_string_|alias|setzt den Alias|No|


_**attachDocument**_

fügt ein DMS-Dokument (per ID) als Mail-Anhang hinzu

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|shelfDocumentId|ID des DMS-Dokuments|Yes|


_**outputMail**_

setzt den Ausgabetyp auf Mail

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

_**outputPrint**_

setzt den Ausgabetyp auf Drucken

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

_**exportFilename**_

setzt den export-filename

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|exportFilename||No|


_**outputType**_

setzt den Ausgabetyp

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|outputType||No|


_**mailRecipient**_

fügt emailadresse und alias einer ausgabe hinzu

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|emailAddress|setzt die EmailAddress|Yes|
|_string_|alias|setzt den Alias|No|


_**groupIdentifier**_

setzt den report-group-identifier

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|groupIdentifier||No|


_**setUserId**_

setzt den user-id

_Return type:_ [ScriptOutputRequest](#scriptoutputrequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|userId||No|



## ScriptingDate
### Description
Datentyp für Datumswerte

### Methods

_**isEqual**_

Ist dieser Datumswert zeitlich gleich dem anderen Datumswert?

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScriptingDate](#scriptingdate)|other|The other date value|Yes|


_**getYear**_

Liefert das Jahr aus dem Datumswert

_Return type:_ _number_

_**getMonthValue**_

Liefert den Monat (1-12) aus dem Datumswert

_Return type:_ _number_

_**getDayOfMonth**_

Liefert den Tag des Monats (1-31) aus dem Datumswert

_Return type:_ _number_

_**plusDays**_

Neuer Datumswert aus diesem Datumswert und addierte Tage zum Datumswert

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|days||No|


_**minusDays**_

Neuer Datumswert aus diesem Datumswert und subtrahiert Tage vom Datumswert

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|days||No|


_**isAfter**_

Ist dieser Datumswert zeitlich hinter dem anderen Datumswert?

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScriptingDate](#scriptingdate)|other|The other date value|Yes|


_**isBefore**_

Ist dieser Datumswert zeitlich vor dem anderen Datumswert?

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScriptingDate](#scriptingdate)|other|The other date value|Yes|


_**isLeapYear**_

Liegt das Datum in einem Schaltjahr?

_Return type:_ _boolean_

_**lengthOfMonth**_

Anzahl Tage im Monat des Datumswerts

_Return type:_ _number_

_**lengthOfYear**_

Anzahl Tage im Jahr des Datumswerts

_Return type:_ _number_

_**getDayOfWeek**_

Liefert den Wochentag (1-7 = Mo-So) aus dem Datumswert

_Return type:_ _number_

_**getDayOfYear**_

Liefert den Tag des Jahres (1-365/366) aus dem Datumswert

_Return type:_ _number_

_**withDayOfMonth**_

Neuer Datumswert aus diesem Datumswert und ersetzt den Tag des Monats (1-31)

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|dayOfMonth||No|


_**withDayOfYear**_

Neuer Datumswert aus diesem Datumswert und ersetzt den Tag des Jahres (1-365/366)

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|dayOfYear||No|


_**plusWeeks**_

Neuer Datumswert aus diesem Datumswert und addierte Wochen zum Datumswert

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|weeks||No|


_**withMonth**_

Neuer Datumswert aus diesem Datumswert und ersetzt den Monat (1-12)

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|month||No|


_**plusMonths**_

Neuer Datumswert aus diesem Datumswert und addierte Monate zum Datumswert

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|months||No|


_**withYear**_

Neuer Datumswert aus diesem Datumswert und ersetzt das Jahr

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|year||No|


_**plusYears**_

Neuer Datumswert aus diesem Datumswert und addierte Jahre zum Datumswert

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|years||No|


_**minusMonths**_

Neuer Datumswert aus diesem Datumswert und subtrahiert Monate vom Datumswert

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|months||No|


_**atTime**_

Erstellt einen Datum-Zeit-Wert auf Basis dieses Datumswerts

_Return type:_ [ScriptingDateTime](#scriptingdatetime)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|hour||No|
|_number_|minute||No|
|_number_|second||No|


_**minusYears**_

Neuer Datumswert aus diesem Datumswert und subtrahiert Jahre vom Datumswert

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|years||No|


_**minusWeeks**_

Neuer Datumswert aus diesem Datumswert und subtrahiert Wochen vom Datumswert

_Return type:_ [ScriptingDate](#scriptingdate)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|weeks||No|


_**atStartOfDay**_

Erstellt einen Datum-Zeit-Wert zu Beginn des Tages auf Basis dieses Datumswerts

_Return type:_ [ScriptingDateTime](#scriptingdatetime)


## ScriptingDateTime
### Description
Datentyp für Datum-Zeit-Werte

### Methods

_**isEqual**_

Ist dieser Datum-Zeit-Wert zeitlich gleich dem anderen Datum-Zeit-Wert?

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScriptingDateTime](#scriptingdatetime)|other|The other date-time value|Yes|


_**getYear**_

Liefert das Jahr aus dem Datumswert

_Return type:_ _number_

_**getMonthValue**_

Liefert den Monat (1-12) aus dem Datumswert

_Return type:_ _number_

_**getDayOfMonth**_

Liefert den Tag des Monats (1-31) aus dem Datumswert

_Return type:_ _number_

_**getHour**_

Liefert die Stunde (0-23) aus diesem Datum-Zeit-Werts

_Return type:_ _number_

_**getMinute**_

Liefert die Minute (0-59) aus diesem Datum-Zeit-Werts

_Return type:_ _number_

_**getSecond**_

Liefert die Sekunde (0-59) aus diesem Datum-Zeit-Werts

_Return type:_ _number_

_**plusSeconds**_

Neuer Datum-Zeit-Wert aus diesem Wert und addiert Sekunden

_Return type:_ [ScriptingDateTime](#scriptingdatetime)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|seconds||No|


_**plusHours**_

Neuer Datum-Zeit-Wert aus diesem Wert und addiert Stunden

_Return type:_ [ScriptingDateTime](#scriptingdatetime)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|hours||No|


_**plusMinutes**_

Neuer Datum-Zeit-Wert aus diesem Wert und addiert Minuten

_Return type:_ [ScriptingDateTime](#scriptingdatetime)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|minutes||No|


_**minusHours**_

Neuer Datum-Zeit-Wert aus diesem Wert und subtrahiert Stunden

_Return type:_ [ScriptingDateTime](#scriptingdatetime)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|hours||No|


_**minusMinutes**_

Neuer Datum-Zeit-Wert aus diesem Wert und subtrahiert Minuten

_Return type:_ [ScriptingDateTime](#scriptingdatetime)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|minutes||No|


_**minusSeconds**_

Neuer Datum-Zeit-Wert aus diesem Wert und subtrahiert Sekunden

_Return type:_ [ScriptingDateTime](#scriptingdatetime)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|seconds||No|


_**isAfter**_

Ist dieser Datum-Zeit-Wert zeitlich hinter dem anderen Datum-Zeit-Wert?

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScriptingDateTime](#scriptingdatetime)|other|The other date-time value|Yes|


_**isBefore**_

Ist dieser Datum-Zeit-Wert zeitlich vor dem anderen Datum-Zeit-Wert?

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|[ScriptingDateTime](#scriptingdatetime)|other|The other date-time value|Yes|


_**getDayOfWeek**_

Liefert den Wochentag (1-7 = Mo-So) aus dem Datumswert

_Return type:_ _number_

_**getDayOfYear**_

Liefert den Tag des Jahres (1-365/366) aus dem Datumswert

_Return type:_ _number_

_**withHour**_

Neuer Datum-Zeit-Wert aus diesem Wert und ersetzt die Stunde (0-23)

_Return type:_ [ScriptingDateTime](#scriptingdatetime)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|hour||No|


_**withMinute**_

Neuer Datum-Zeit-Wert aus diesem Wert und ersetzt die Minute (0-59)

_Return type:_ [ScriptingDateTime](#scriptingdatetime)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|minute||No|


_**withSecond**_

Neuer Datum-Zeit-Wert aus diesem Wert und ersetzt die Sekunde (0-59)

_Return type:_ [ScriptingDateTime](#scriptingdatetime)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|second||No|


_**toDate**_

Liefert nur den Datumswert aus diesem Datum-Zeit-Werts

_Return type:_ [ScriptingDate](#scriptingdate)


## ScriptingOutputStream


## ScriptingXmlWriter
### Description
Zum einfachen Schreiben von Daten im XML-Format

### Methods

_**writeAttribute**_

Schreibt ein Attribut auf das aktuelle Element.

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|name|Attribut-Name|Yes|
|_string_|value|Attribut-Wert|Yes|


_**closeAllOpenElements**_

Beendet das XML-Dokument (schließt noch offene Elemente).

_**writeProlog**_

Schreibt den XML-Prolog (<?xml ...?>).

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|encoding|Encoding, z.B. UTF-8|Yes|
|_string_|version|XML-Version, z.B. 1.0|Yes|


_**openElement**_

Öffnet ein Element.

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|name|Element-Name|Yes|


_**closeElement**_

Schließt das aktuelle Element.

_**writeComment**_

Schreibt einen XML-Kommentar.

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|comment|Kommentar-Text|Yes|


_**writeCData**_

Schreibt einen CDATA-Block.

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|data|CDATA-Inhalt|Yes|


_**writeCharacters**_

Schreibt eine Zeichenkette (z.B. innerhalb eines XML-Tags).

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|data|Zeichenkette|Yes|


_**writeEmptyElement**_

Schreibt ein leeres (self-closing) Element.

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|name|Element-Name|Yes|


_**close**_

Schließt den Writer und die damit verbundene Datenquelle


## SecureHttpClient
### Description
HTTP-Client fürs Scripting

### Methods

_**createPutRequest**_

Erstellt einen PUT-Request

_Return type:_ [SecureHttpRequest](#securehttprequest)

_**createPostRequest**_

Erstellt einen POST-Request

_Return type:_ [SecureHttpRequest](#securehttprequest)

_**createGetRequest**_

Erstellt einen GET-Request

_Return type:_ [SecureHttpRequest](#securehttprequest)


## SecureHttpRequest
### Description
Request vom SecureHttpClient

### Methods

_**execute**_

Führt den Request aus

_Return type:_ [SecureHttpResponse](#securehttpresponse)

_**uri**_

Setzt die URI für den Request

_Return type:_ [SecureHttpRequest](#securehttprequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|uri|URI|Yes|


_**body**_

Setzt den Body für den Request

_Return type:_ [SecureHttpRequest](#securehttprequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|body|Request-Body|Yes|


_**header**_

Fügt einen Header zum Request hinzu

_Return type:_ [SecureHttpRequest](#securehttprequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|name|Name des Headers|Yes|
|_object_|value|Werte des Headers (optional)|No|


_**uriParameter**_

Fügt eine URI-Parameter zum Request hinzu

_Return type:_ [SecureHttpRequest](#securehttprequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|name|Name des Parameters|Yes|
|_object_|value|Wert des Parameters|No|


_**timeoutInSeconds**_

Setzt den Timeout in Sekunden für den Request

_Return type:_ [SecureHttpRequest](#securehttprequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_number_|timeoutInSeconds|Timeout in Sekunden|Yes|


_**contentType**_

Setzt den Content-Type für den Request

_Return type:_ [SecureHttpRequest](#securehttprequest)

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|contentType|Content-Type|Yes|



## SecureHttpResponse
### Description
Response auf einen Request vom SecureHttpClient

### Methods

_**hasHeader**_

Prüft, ob ein Header vorhanden ist

_Return type:_ _boolean_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|name|Name eines Header|Yes|


_**getHeaderValueAsList**_

Liefert den Wert eines Header als Liste

_Return type:_ _Array<string>_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|name|Name eines Header|Yes|


_**getHttpStatus**_

HTTP-Statuscode der Response

_Return type:_ _number_

_**getBodyAsBytes**_

Liefert den Body aus der Response als Byte-Array

_Return type:_ _object_

_**getHeaderValue**_

Liefert den Wert eines Header als Liste

_Return type:_ _string_

| Datatype | Name | Description | Required |
| :------- | :--: | :---------- | :------- |
|_string_|name|Name eines Header|Yes|


_**getBody**_

Liefert den Body aus der Response

_Return type:_ _string_

_**getContentType**_

Liefert den Content-Type vom Body aus der Response

_Return type:_ _string_

_**getHeaders**_

Liefert die Header vom Response als Name-Wert-Liste

_Return type:_ _Array<string>_


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
|_boolean_|active|Is the sequencer active?|No|
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
|_boolean_|numberUnique|Uniqueness check.|No|
|_string_|expression|Prefix expression.|No|
|[SequenceAssignmentMode](#sequenceassignmentmode)|assignmentMode|Assignment procedure.|No|
|_number_|length|Length.|No|
|_string_|padChar|Padding character.|No|
|_string_|postExpression|Postfix expression.|No|
|[SequenceType](#sequencetype)|type|Sequence type.|No|
|_number_|initialValue|Initial value.|No|



## SerialNumberWithQuantityApi

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|quantity|Quantity.|No|
|[ArticleSerialNumber](#articleserialnumber)|serialNumber|Serial number.|No|



## ShelfCommonMapper


## ShelfDocument

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|note|Note.|No|
|[ScriptingDate](#scriptingdate)|entryDate|Date of this Entry/Document|No|
|[EavShelfdocument](#eavshelfdocument)|custom|Custom data.|No|
|[UUID](#uuid)|externalId|External identifier.|Yes|
|_string_|description|description of this document|No|
|[ShelfDocumentDeletionState](#shelfdocumentdeletionstate)|deletionState|Deletion status.|Yes|
|[ShelfDocumentType](#shelfdocumenttype)|type|Document type.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[TagDto](#tagdto)>|tags|List of tags|No|
|Array<[ShelfTranslatableText](#shelftranslatabletext)>|translatableTexts|Multilingual labels.|No|
|Array<[ShelfShare](#shelfshare)>|shares|Share information.|Yes|
|[ScriptingDate](#scriptingdate)|plannedRemovalDate|Automatic deletion from.|Yes|
|[ShelfFile](#shelffile)|file|file data|Yes|
|_string_|alias|Alias|No|
|[ShelfDocumentState](#shelfdocumentstate)|state|Status.|Yes|
|_number_|id|Unique identifier of the Object|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ShelfDocumentAttribution

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|uiSort|Field managed by the UI.|No|
|_string_|purpose|Relation type or purpose.|No|
|_string_|refType|type of the referenced object|No|
|_string_|uiComment|Field managed by the UI.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|uiFavorite|Field managed by the UI.|No|
|_boolean_|publish|Should the document be published?|No|
|_number_|shelfResourceId|Linked DMS resource identifier.|No|
|_Array<string>_|transformationKeys|Available image transformations.|Yes|
|_number_|refId|id of the referenced object|No|
|_number_|id|Unique identifier of the Object|No|
|_boolean_|mainAttribution|Main DMS resource link.|Yes|
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
|_boolean_|active|Is the document type active?|No|
|_string_|label|label of type|No|
|_number_|accessLevelRead|Access level for reading.|No|
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
|_string_|metaValue|Metadata value.|No|
|_string_|metaKey|Metadata key.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## ShelfFileUploadSession


## ShelfShare

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ShelfSharePublishState](#shelfsharepublishstate)|publishState|Publication status.|No|
|_number_|publicUrlDurationInMinutes|For how many minutes this resource path stays accessible (null means unlimited).|No|
|[EavShelfshare](#eavshelfshare)|custom|Custom fields.|No|
|_string_|publicUrlPath|URL path segment that gives public access to this resource.|Yes|
|[ShelfShareAvailability](#shelfshareavailability)|availability|Availability.|No|
|_string_|sharedByExternalRef|External reference to this share.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_number_|revision|Revision|Yes|
|Array<[ShelfTranslatableText](#shelftranslatabletext)>|translatableTexts|Multilingual labels.|No|
|[UUID](#uuid)|appId|App identifier.|No|
|_number_|timesUsed|Number of uses.|Yes|
|[ScriptingDate](#scriptingdate)|publicUrlCreatedAt|When the public resource was created.|Yes|
|_string_|eTag|Revision hash.|Yes|
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
|_string_|metaTitle|Meta title.|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|Language.|No|
|_string_|alternativeText|Alternative text.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## Stock

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|amount|Stock.|No|
|[ArticleSerialNumber](#articleserialnumber)|serialNumber|Serial number.|No|
|_string_|storageBinDisplayName|Storage bin display name.|Yes|
|_number_|storageBinId|Storage bin.|No|
|_number_|articleId|Article.|No|



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
|_number_|priceUnit|Price unit the purchase price refers to.|No|
|_string_|note|Note.|No|
|_number_|quantity|Quantity.|No|
|_string_|serialNumber2|Serial number 2 to book.|No|
|_string_|serialNumber1|Serial number 1 to book.|No|
|_number_|storageBinId|Storage bin.|No|
|_number_|articleId|Article.|No|
|_string_|storageLocation|Storage location (only relevant for receipts).|No|
|_number_|purchasePrice|Purchase price per price unit (see priceUnit); only relevant for receipts.|No|
|[ScriptingDate](#scriptingdate)|expiryDate|Expiry date.|No|
|_boolean_|ignoreExpiryDateOnStockBooking|Ignore expiry date on stock booking|No|
|_string_|serialNumberNote|Note on the serial number.|No|
|[StockJournalFactor](#stockjournalfactor)|factor|Receipt or issue.|No|
|_number_|storageId|Storage.|No|



## StockTransferApi

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|serialNumberId|Serial number.|No|
|_number_|targetStorageId|Target storage.|No|
|_string_|note|Note.|No|
|[ScriptingDate](#scriptingdate)|bookDate|Booking date.|No|
|_boolean_|ignoreExpiryDateOnStockBooking|Ignore expiry date on stock booking|No|
|_number_|sourceStorageBinId|Source storage bin.|No|
|_number_|quantity|Quantity.|No|
|_number_|sourceStorageId|Source storage.|No|
|_number_|targetStorageBinId|Target storage bin.|No|
|_number_|articleId|Article.|No|
|_number_|picklistLineComponentId|Picklist line component, if the booking takes place for it.|No|



## StockTransferResult

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sourceOldStock|Previous stock of the source storage bin.|No|
|[ApiObjectReference](#apiobjectreference)|sourceStorage|Source storage.|No|
|[ApiObjectReference](#apiobjectreference)|serialNumber|Transferred serial number.|No|
|[ApiObjectReference](#apiobjectreference)|targetStorageBin|Target storage bin.|No|
|_number_|sourceNewStock|New stock of the source storage bin.|No|
|[ApiObjectReference](#apiobjectreference)|targetStorage|Target storage.|No|
|_number_|targetOldStock|Previous stock of the target storage bin.|No|
|_number_|targetNewStock|New stock of the target storage bin.|No|
|[ApiObjectReference](#apiobjectreference)|article|Transferred article.|No|
|[ApiObjectReference](#apiobjectreference)|sourceStorageBin|Source storage bin.|No|



## StorageBinRef

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|storageRef|Reference to the storage.|No|
|_string_|color|Display color.|No|
|_string_|displayName|Display name.|No|
|_number_|id|Unique identifier.|No|
|_number_|routePosition|Route position.|No|



## StringCollectorOutputStream
### Description
Speichert die geschriebenen Daten als String.

### Methods

_**getContent**_

Gibt den bisher gesammelten Inhalt aus

_Return type:_ _string_


## SubFileInfo

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|fullPath|Full-Path|No|
|[ApiObjectReference](#apiobjectreference)|shelfFile|Associated FileEntity.|No|
|[ScriptingDateTime](#scriptingdatetime)|modifiedAt|file last modified|No|
|_string_|parentPath|Parent-Path|No|
|_string_|name|fileName|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|contentType|Content type.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## Supplier

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|createCustomerDeliveryWhenDropShipping|Creation of an outgoing delivery document for a drop shipping supplier order.|No|
|_number_|minimumOrderValue|Minimum order value.|No|
|_string_|number|number of supplier|No|
|_boolean_|permissibleForOrderProposal|Eligible for inclusion in order proposals.|No|
|[AccountBillingType](#accountbillingtype)|billingType|Billing type, net or gross.|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|accountingNumber|finance account-number of supplier|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|
|[ApiObjectReference](#apiobjectreference)|deliveryMethodRef|reference to the delivery method|No|
|[ApiObjectReference](#apiobjectreference)|supplierGroupRef|Supplier group.|No|
|_boolean_|taxable|Taxable or tax free.|No|
|_boolean_|dunning|Should this be dunned?|No|
|_number_|freeShippingValue|Free of freight costs from.|No|
|_boolean_|active|active true/false|Yes|
|[ApiObjectReference](#apiobjectreference)|responsibleUserRef|reference to responsible user|No|
|_string_|ourNumber|suppliers number for us|No|
|[ApiObjectReference](#apiobjectreference)|paymentTermRef|reference to the payment term|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|dropShippingAllowed|Indicates whether drop shipping is allowed.|No|
|[ApiObjectReference](#apiobjectreference)|deliveryTermRef|reference to the delivery term|No|
|_string_|performanceCountryCode|country code performance country IsoAlpha3|No|
|[ApiObjectReference](#apiobjectreference)|paymentMethodRef|reference to the payment method|No|
|_number_|defaultDeliveryTime|Delivery time in (working) days.|No|
|_boolean_|orderBlocked|Order block.|No|
|_string_|currencyCode|currency code  IsoAlpha3|No|



## TagDto

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiCreatableReference](#apicreatablereference)|tagGroup|Tag group.|No|
|_string_|editColor|Color in the management UI.|No|
|_string_|color|Color for displaying the tag.|No|
|_string_|searchColor|Color in the search UI.|No|
|_string_|label|Tag label.|No|
|_number_|id|Unique identifier of the Object|No|
|[TagType](#tagtype)|type|Tag type.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## TagType

| Value | Description |
| :---- | :---------- |
|COMMON||
|ACCOUNT||
|PRODUCT||
|ASSET||
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
|_boolean_|visible|Visible.|No|
|[EavTextenumeration](#eavtextenumeration)|custom|Custom data.|No|
|_boolean_|active|active|Yes|
|_string_|label|Enumeration value.|No|
|_string_|groupKey|Text enumeration group.|No|



## TextEnumGet

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_boolean_|visible|Visible.|No|
|[EavTextenumeration](#eavtextenumeration)|custom|Custom data.|No|
|_boolean_|systemPresetting|System presetting.|Yes|
|_boolean_|active|active|Yes|
|_number_|id|Unique identifier.|Yes|
|_string_|label|Enumeration value.|No|
|_string_|groupKey|Text enumeration group.|Yes|



## TextPosition

| Value | Description |
| :---- | :---------- |
|HEADER_TEXT||
|FOOTER_TEXT||


## TextTemplate

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[TextTemplate$TextTemplateType](#texttemplatetexttemplatetype)|templateType|Template purpose.|No|
|_boolean_|resolveContentInFollowUpDocument|Should the text template content only be resolved when the document is transferred?|No|
|Array<[ApiObjectReference](#apiobjectreference)>|targetDocumentTypes|Target document types; together with the predecessor document types they define the transitions this template applies to.|No|
|Array<[LocalizedTextTemplateContent](#localizedtexttemplatecontent)>|languageSpecificContents|Texts in the offered languages.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|sourceDocumentTypes|Predecessor document types; together with the target document types they define the transitions this template applies to.|No|
|_number_|articleId|Article these templates apply to.|No|
|_boolean_|separateLine|Is a separate DocumentLine created for the text template?|No|
|Array<[TextTemplate$UiHintType](#texttemplateuihinttype)>|uiHintTypes|When a UI hint is shown.|No|
|_boolean_|active|Is this text template active?|Yes|
|_string_|label|Text template label.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_boolean_|transferableIntoSubsequentDocuments|Transfer the generated DocumentTexts when moving to successor documents?|No|
|_number_|accountId|Account these templates apply to.|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Sales channel.|No|
|[TextPosition](#textposition)|position|Generated DocumentText position.|No|
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
|_string_|externalReference|External reference.|Yes|
|_string_|responseData|TSS response data.|Yes|
|_number_|revision|Revision|Yes|
|[TssSignature$TssSignatureStatus](#tsssignaturetsssignaturestatus)|status|Signing status.|Yes|



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
|Array<[ApiObjectReference](#apiobjectreference)>|roles|Roles.|No|
|_number_|referencedCustomerUserId|Referenced customer user identifier (CustomerUserEntity.id from vab-manager).|Yes|
|Array<[ApiObjectReference](#apiobjectreference)>|groups|Groups.|No|
|_boolean_|active|Is the user active?|Yes|
|[CommonUserType](#commonusertype)|type|User type|No|
|[UUID](#uuid)|appIdentifier|App-Identifier|Yes|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|_string_|firstName|first-name|No|
|_boolean_|emailVerified|is the email verified|Yes|
|_string_|emailAddress|email-address|No|
|_number_|id|Unique identifier of the Object|No|
|[ScriptingDateTime](#scriptingdatetime)|validTo|Valid to|No|
|_string_|username|username|No|
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
|_string_|identifier|Unique identifier.|No|
|_boolean_|active|Is this active?|Yes|
|_string_|description|Description.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|Array<[VariantDescription](#variantdescription)>|labels|Label (multilingual).|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantAttributeListing

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Sales channel.|No|
|[EavVariantattributelisting](#eavvariantattributelisting)|custom|Custom fields.|No|
|[ApiObjectReference](#apiobjectreference)|variantAttributeRef|Variant attribute.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantDescription

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_string_|label|Label.|No|
|_number_|id|Unique identifier of the Object|No|
|_string_|languageCode|Language.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantSchema

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|Array<[ApiObjectReference](#apiobjectreference)>|eligibleValueRefs|Eligible values.|No|
|Array<[ApiObjectReference](#apiobjectreference)>|attributeRefs|Assigned attributes.|No|
|_boolean_|active|Is this active?|Yes|
|_string_|description|Description.|No|
|_string_|label|Label.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantValue

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|sortOrder|Sort order.|No|
|[UnitTypeReference](#unittypereference)|unitTypeRef|Reference to a unit type.|No|
|_boolean_|active|Is this active?|Yes|
|_number_|id|Unique identifier of the Object|No|
|_string_|abbreviation|Abbreviation.|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[ApiObjectReference](#apiobjectreference)|attributeRef|Variant attribute.|Yes|
|Array<[VariantDescription](#variantdescription)>|labels|Multilingual labels.|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantValueListing

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|variantValueRef|Variant attribute value.|No|
|[ApiObjectReference](#apiobjectreference)|salesChannelRef|Sales channel.|No|
|[EavVariantvaluelisting](#eavvariantvaluelisting)|custom|Custom fields.|No|
|_number_|id|Unique identifier of the Object|No|
|_number_|version|Version Identifier for this Object (for PUT)|No|
|[MetaInfo](#metainfo)|info|MetaInformations for this Object|Yes|



## VariantValueReference

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|[ApiObjectReference](#apiobjectreference)|variantAttributeRef|Variant attribute.|Yes|
|_string_|description|Description.|Yes|
|_number_|id|Identifier|No|
|_string_|label|Label.|Yes|



## WithDefaults<List<ArticleIdentifier>>

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_object_|defaultValue|Default sales channel value.|Yes|
|_object_|value|Sales channel value.|No|



## WithDefaults<String>

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_object_|defaultValue|Default sales channel value.|Yes|
|_object_|value|Sales channel value.|No|



## WorkflowInstanceDetails

### Attributes:
| Datatype | Name | Description | Read-only |
| :------- | :--- | :---------- | :-------- |
|_number_|id||No|
|[EWorkflowInstanceState](#eworkflowinstancestate)|state||No|


