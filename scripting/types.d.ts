import {
    EavAccount, EavAccountaddress, EavAccountperson, EavArticle, 
    EavArticleListing, EavArticleListingDescription, EavContact, 
    EavCrmactivity, EavCrmdeal, EavCrmproject, EavCrmtask, EavDocument, 
    EavDocumentline, EavDocumentlinecomponent, EavFabrication, 
    EavFabricationline, EavFabricationlinecomponent, EavProductgroup, 
    EavProductmaingroup, EavSalesagent, EavShelfdocument, EavShelfshare, 
    EavTextenumeration
} from "./eav_types"

export const enum AccessoryInsertTerm {
    MANUAL = 'MANUAL',
    AUTOMATIC_QUANTITY_IF_ACCESSORY_INSERTED = 'AUTOMATIC_QUANTITY_IF_ACCESSORY_INSERTED',
    AUTOMATIC_PROPORTIONAL_QUANTITY = 'AUTOMATIC_PROPORTIONAL_QUANTITY',
    AUTOMATIC_FIXED_QUANTITY = 'AUTOMATIC_FIXED_QUANTITY'
}

export interface Account {

    /**
     * Umkehrung der Steuerschuld nach §13b UStG?
     */
    taxLiabilityReversed: boolean;

    /**
     * Notiz
     */
    note: string;

    /**
     * Alle Adressen außer der Standard-Adresse
     */
    addresses: Array<AccountAddress>;

    /**
     * Währung Summe Forderungen IsoAlpha3
     */
    receivablesSumCurrencyCode: string;

    /**
     * Kurzbezeichnung zur Darstellung
     */
    displayName: string;

    /**
     * ist der Account anonymisiert?
     */
    anonymized: boolean;

    /**
     * Zuständiges Amtsgericht
     */
    localCourt: string;

    /**
     * Sonderbemerkung
     */
    remark: string;

    /**
     * Handelsregister-Kennung
     */
    companyRegister: string;

    /**
     * Eine List von Steuernummern
     */
    taxIds: Array<TaxIdForeignCountry>;

    /**
     * Address-Number
     */
    number: string;

    /**
     * Art der Geschäftsbeziehung
     */
    businessRelationType: BusinessRelationType;

    /**
     * first contact type for this account
     */
    initialContactTypeRef: ApiCreatableReference;

    /**
     * Zeitzone (bzw. Zeitzonen-Offset) des Accounts
     */
    accountZoneId: AccountZoneId;

    /**
     * Supplier of this account
     */
    supplier: Supplier;

    /**
     * Sales Agent of this account
     */
    salesAgent: SalesAgent;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Mahnsperre
     */
    dunningBlock: boolean;

    /**
     * Währung Summe Verbindlichkeiten IsoAlpha3
     */
    payablesSumCurrencyCode: string;

    /**
     * Währung Kreditlimit IsoAlpha3
     */
    loanCurrencyCode: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * list of types, this account is used for (e.g. CUSTOMER, SUPPLIER, 
     */
    types: Array<AccountType>;

    /**
     * Default address of account
     */
    defaultAddress: AccountAddress;

    /**
     * Summe Verbindlichkeiten
     */
    payablesSum: number;

    /**
     * Kostenstelle
     */
    costCenter: string;

    /**
     * Summe Forderungen
     */
    receivablesSum: number;

    /**
     * companyLegal for this account
     */
    companyLegalRef: ApiCreatableReference;

    /**
     * Custom account data
     */
    custom: EavAccount;

    /**
     * tax number/ Steuernummer
     */
    taxNumber: string;

    /**
     * Is account active?
     */
    active: boolean;

    /**
     * verantwortlicher Benutzer
     */
    responsibleUserRef: ApiObjectReference;

    /**
     * calculation mode of this document
     */
    calculationMode: CalculationMode;

    /**
     * Erstkontakt am
     */
    initialContactAt: ScriptingDate;

    /**
     * Sprache des Accounts
     */
    languageCode: string;

    /**
     * Has this Account a possible duplicate
     */
    hasActiveDuplicates: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * List of tags
     */
    tags: Array<TagDto>;

    /**
     * Ansprechpartner
     */
    persons: Array<AccountPerson>;

    /**
     * Standard-Ansprechpartner
     */
    defaultPerson: AccountPerson;

    /**
     * Referenz auf den Ziel-Belegtyp nach der Kommissionierung
     */
    afterPickingTargetDocumentTypeRef: ApiObjectReference;

    /**
     * Account-Beziehungen
     */
    relations: Array<AccountRelation>;

    /**
     * Aktuell berechnete Werte zum Kreditlimit des Accounts
     */
    loanValue: AccountLoanValue;

    /**
     * currency code  IsoAlpha3
     */
    currencyCode: string;

    /**
     * Report-Gruppe, falls vom Standard abweichend
     */
    reportGroupRef: ApiObjectReference;

    /**
     * Customer of this account
     */
    customer: Customer;
}

export interface AccountAddress {

    /**
     * salutation for this address
     */
    salutationRef: ApiObjectReference;

    /**
     * City
     */
    city: string;

    /**
     * abweichende Lieferart
     */
    deviatingDeliveryMethodRef: ApiObjectReference;

    /**
     * latitude
     */
    latitude: number;

    /**
     * EN16931 Profil
     */
    en16931Profile: EN16931Profile;

    /**
     * Sonderbemerkung
     */
    remark: string;

    /**
     * Parcel provider
     */
    parcelProvider: string;

    /**
     * Region
     */
    regionRef: ApiObjectReference;

    /**
     * Title
     */
    titleRef: ApiCreatableReference;

    /**
     * Post office box
     */
    postOfficeBox: string;

    /**
     * Country code
     */
    countryCode: string;

    /**
     * Street
     */
    street: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Longitude
     */
    longitude: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * the kind of usages for this address
     */
    types: Array<AccountAddressType>;

    /**
     * GLN/ILN as location identifier for this address
     */
    globalLocationNumber: string;

    /**
     * Leitweg-ID
     */
    buyerReference: string;

    /**
     * abweichende Zahlungsart
     */
    deviatingPaymentMethodRef: ApiObjectReference;

    /**
     * Custom data
     */
    custom: EavAccountaddress;

    /**
     * Postcode
     */
    postcode: string;

    /**
     * calculation mode of this address
     */
    calculationMode: CalculationMode;

    /**
     * Sprache der Adresse
     */
    languageCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * tax identification number/ UST-ID-Nr.
     */
    taxIdentificationNumber: string;

    /**
     * Additional address line1
     */
    additionalAddressLine1: string;

    /**
     * Parcel station
     */
    parcelStation: string;

    /**
     * Additional address line2
     */
    additionalAddressLine2: string;

    /**
     * Street address number
     */
    streetAddressNumber: string;

    /**
     * Parcel station customer number
     */
    parcelStationCustomerNumber: string;

    /**
     * Default contacts
     */
    defaultContacts: Map<ContactTypeType,Contact>;

    /**
     * Name3
     */
    name3: string;

    /**
     * Homepage URL
     */
    homepageUrl: string;

    /**
     * abweichende Lieferbedingungen
     */
    deviatingDeliveryTermRef: ApiObjectReference;

    /**
     * State of the last validation of the tax id number/ UST-ID-Nr.?
     */
    taxIdVerificationState: TaxIdVerificationState;

    /**
     * Name2
     */
    name2: string;

    /**
     * Name1
     */
    name1: string;

    /**
     * abweichende Zahlungsbedingungen
     */
    deviatingPaymentTermRef: ApiObjectReference;

    /**
     * Contacts
     */
    contacts: Array<Contact>;

    /**
     * is this the default address of the account
     */
    defaultAddress: boolean;
}

export const enum AccountAddressType {
    DELIVERY_ADDRESS = 'DELIVERY_ADDRESS',
    BRANCH_ADDRESS = 'BRANCH_ADDRESS',
    RETURNED_ITEM_ADDRESS = 'RETURNED_ITEM_ADDRESS',
    BILLING_ADDRESS = 'BILLING_ADDRESS',
    OTHER = 'OTHER'
}

export const enum AccountBillingType {
    GROSS = 'GROSS',
    NET = 'NET'
}

export interface AccountLoanValue {

    /**
     * Nicht berücksichtigter Betrag
     */
    unconsideredAmount: number;

    /**
     * Account
     */
    accountId: number;

    /**
     * Betrag aus Aufträgen
     */
    nonInvoicedDocumentLoan: number;

    /**
     * Kreditlimit
     */
    maximalLoan: number;

    /**
     * Betrag aus Verbindlichkeiten(negativ)
     */
    payablesSum: number;

    /**
     * Überschrittener Kreditbetrag
     */
    exceededLoan: number;

    /**
     * Betrag des momentanen Dokuments
     */
    currentDocumentLoan: number;

    /**
     * Aktueller Kredit
     */
    currentLoan: number;

    /**
     * Betrag aus Forderungen
     */
    receivableLoan: number;

    /**
     * Übriger Betrag bis zum Erreichen des Kreditlimits
     */
    remainingLoan: number;
}

export const enum AccountOrderStackProcessingType {
    ACCORDING_TO_CRITERIA = 'ACCORDING_TO_CRITERIA',
    ONLY_FULL_ORDER = 'ONLY_FULL_ORDER',
    ONLY_FULL_ORDER_LINES = 'ONLY_FULL_ORDER_LINES',
    AVAILABLE_QUANTITIES = 'AVAILABLE_QUANTITIES',
    NO_PROCESSING = 'NO_PROCESSING',
    FULL_ORDER_LINES_MAX_TWO_PARTIAL_DELIVERIES = 'FULL_ORDER_LINES_MAX_TWO_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_MAX_TWO_PARTIAL_DELIVERIES = 'AVAILABLE_QUANTITIES_MAX_TWO_PARTIAL_DELIVERIES',
    FULL_ORDER_LINES_MAX_THREE_PARTIAL_DELIVERIES = 'FULL_ORDER_LINES_MAX_THREE_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_MAX_THREE_PARTIAL_DELIVERIES = 'AVAILABLE_QUANTITIES_MAX_THREE_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_FINISH_ORDER = 'AVAILABLE_QUANTITIES_FINISH_ORDER'
}

export interface AccountPerson {

    /**
     * salutation for this person
     */
    salutationRef: ApiObjectReference;

    /**
     * Lastname
     */
    lastName: string;

    /**
     * Gender
     */
    gender: PersonGenderType;

    /**
     * Sonderbemerkung
     */
    remark: string;

    /**
     * Locale
     */
    locale: string;

    /**
     * Title
     */
    titleRef: ApiCreatableReference;

    /**
     * First contact type for this account person
     */
    initialContactTypeRef: ApiCreatableReference;

    /**
     * jobType
     */
    jobTypeRef: ApiCreatableReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Custom data
     */
    custom: EavAccountperson;

    /**
     * Job area
     */
    jobArea: string;

    /**
     * Aktiv?
     */
    active: boolean;

    /**
     * Date of birth
     */
    dateOfBirth: ScriptingDate;

    /**
     * Label
     */
    label: string;

    /**
     * Erstkontakt am
     */
    initialContactAt: ScriptingDate;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Standard-Ansprechpartner
     */
    defaultPerson: boolean;

    /**
     * List of tags
     */
    tags: Array<TagDto>;

    /**
     * Default contacts
     */
    defaultContacts: Map<ContactTypeType,Contact>;

    /**
     * First name
     */
    firstName: string;

    /**
     * zugeordneter Benutzer (für eigenen Account)
     */
    userRef: ApiObjectReference;

    /**
     * sortierreihenfolge
     */
    sortOrder: number;

    /**
     * Middle name
     */
    middleName: string;

    /**
     * Comment
     */
    comment: string;

    /**
     * List of contacts
     */
    contacts: Array<Contact>;
}

export interface AccountRelation {

    /**
     * Relation type
     */
    relationTypeRef: ApiCreatableReference;

    /**
     * Related account
     */
    relatedAccountRef: ApiObjectReference;

    /**
     * Comment
     */
    comment: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum AccountType {
    CUSTOMER = 'CUSTOMER',
    SUPPLIER = 'SUPPLIER',
    SERVICE_PROVIDER = 'SERVICE_PROVIDER',
    MERCHANT = 'MERCHANT',
    SALES_AGENT = 'SALES_AGENT',
    COMPANY = 'COMPANY',
    PROSPECTIVE = 'PROSPECTIVE'
}

export const enum AccountZoneId {
    ACT = 'ACT',
    AET = 'AET',
    AGT = 'AGT',
    ART = 'ART',
    AST = 'AST',
    BET = 'BET',
    BST = 'BST',
    CAT = 'CAT',
    CNT = 'CNT',
    CST = 'CST',
    CTT = 'CTT',
    EAT = 'EAT',
    ECT = 'ECT',
    IET = 'IET',
    IST = 'IST',
    JST = 'JST',
    MIT = 'MIT',
    NET = 'NET',
    NST = 'NST',
    PLT = 'PLT',
    PNT = 'PNT',
    PRT = 'PRT',
    PST = 'PST',
    SST = 'SST',
    VST = 'VST',
    EST = 'EST',
    MST = 'MST',
    HST = 'HST'
}

export interface AdditionalParameter {

    /**
     * value for this parameter
     */
    value: object;

    /**
     * key for this parameter
     */
    key: string;
}

export interface ApiCreatableReference {

    /**
     * a short description
     */
    description: string;

    /**
     * a label
     */
    label: string;

    /**
     * Identifier
     */
    id: number;
}

export interface ApiObjectReference {

    /**
     * Activ
     */
    active: boolean;

    /**
     * a short description
     */
    description: string;

    /**
     * a label
     */
    label: string;

    /**
     * Identifier
     */
    id: number;
}

export interface Article {

    /**
     * Produktion von Komponenten
     */
    fabricationOfComponents: FabricationOfComponents;

    /**
     * Etikettdruck-Einstellungen
     */
    printLabelSettings: ArticlePrintLabelSettings;

    /**
     * Zolltarifnummer
     */
    customsTariffNumber: string;

    /**
     * is this product purchasable
     */
    purchasable: boolean;

    /**
     * Product custom data
     */
    listingCustom: EavArticleListing;

    /**
     * base capacity unit
     */
    baseCapacityUnit: UnitTypeReference;

    /**
     * Seriennummern Auszeichnungsart
     */
    serialNumberLabelingType: ArticleSerialNumberLabelingType;

    /**
     * Durchschnittl. EKP (Startwert)
     */
    initialAvgPurchasePrice: number;

    /**
     * is this product sellable without any quantity at the stock
     */
    sellableWithoutStock: boolean;

    /**
     * gross Volume in cubic meters
     */
    grossVolumeInCubicMeters: number;

    /**
     * Ist der Artikel noch lieferbar?
     */
    deliverable: boolean;

    /**
     * unit-type of this product
     */
    productUnit: UnitTypeReference;

    /**
     * Garantie in Monaten
     */
    warrantyInMonths: number;

    /**
     * weight and size w.o. packaging
     */
    netMetric: Article$Metric;

    /**
     * Optionen zur Berechnung der Verfügbarkeit
     */
    availabilityDetermination: ArticleAvailabilityDetermination;

    /**
     * unique product number
     */
    number: string;

    /**
     * is this product mergeable to another package-variant
     */
    mergeable: boolean;

    /**
     * Gefahrgut Informationen
     */
    dangerousGoodInformationRef: ApiObjectReference;

    /**
     * skontierbarer Artikel?
     */
    cashDiscountable: boolean;

    /**
     * dEK berechnen?
     */
    determineAvgPurchasePrice: boolean;

    /**
     * Auflösung in Gebindeartikel bei Wareneingang
     */
    onGoodsArrivalConvertIntoBundleArticleRef: ApiObjectReference;

    /**
     * Rabattgruppe
     */
    discountGroupRef: ApiObjectReference;

    /**
     * Vorgabe zu Streckengeschäft
     */
    dropShippingPolicy: DropShippingPolicy;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * serial-type of this article
     */
    serialType: ArticleSerialType;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * reference to TaxSchema
     */
    taxSchemaRef: ApiObjectReference;

    /**
     * reference to DeliveryMethod
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Soll-Handelsspanne
     */
    targetTradingMargin: number;

    /**
     * Produktion
     */
    fabrication: boolean;

    /**
     * active
     */
    active: boolean;

    /**
     * die id des Listings
     */
    listingId: number;

    /**
     * Einschränkung auf Land
     */
    languageCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Tags zum Produkt
     */
    tags: Array<TagDto>;

    /**
     * is this product solvable to another package-variant
     */
    solvable: boolean;

    /**
     * Verkaufseinheit
     */
    salesUnit: number;

    /**
     * weight and size inc. packaging
     */
    grossMetric: Article$Metric;

    /**
     * name of this product
     */
    name: string;

    /**
     * die letzte Aktualisierung des listingStates
     */
    listingStateChangeTime: ScriptingDateTime;

    /**
     * Arbeitseinheit in Minuten
     */
    workUnitInMinutes: number;

    /**
     * Country code
     */
    countryOfOriginRef: CountryReference;

    /**
     * description custom data
     */
    listingDescriptionCustom: EavArticleListingDescription;

    /**
     * Frei kommissionierbar
     */
    freelyPickable: boolean;

    /**
     * Umkehrung der Steuerschuld nach §13b UStG?
     */
    taxLiabilityReversed: boolean;

    /**
     * Notiz
     */
    note: string;

    /**
     * Erlaubte Arten der Kommissionierung
     */
    pickingType: ArticlePickingType;

    /**
     * Nur für Kontingentartikel: soll bei der Abrechnung angedruckt werden, dass kein Kontingent vorhanden ist?
     */
    printWarningIfNoContingentAvailable: boolean;

    /**
     * description of this product
     */
    description: string;

    /**
     * Sonderbemerkung
     */
    remark: string;

    /**
     * is this product sellable
     */
    sellable: boolean;

    /**
     * reference to Product Group
     */
    productGroupRef: ApiObjectReference;

    /**
     * capacity
     */
    capacity: number;

    /**
     * gross sales prices
     */
    grossSalesPrice: number;

    /**
     * Letzter EKP (Startwert)
     */
    initialLastPurchasePrice: number;

    /**
     * zulässig für Aufnahme in Bestellvorschläge
     */
    permissibleForOrderProposal: boolean;

    /**
     * Artikel ist Gefahrgut
     */
    isDangerousGood: boolean;

    /**
     * Versandlabeldruck
     */
    shippingLabelPrinting: boolean;

    /**
     * reference to Product
     */
    productRef: ApiObjectReference;

    /**
     * rabattierbarer Artikel?
     */
    discountable: boolean;

    /**
     * Kontingentartikel
     */
    contingentArticleRef: ApiObjectReference;

    /**
     * alternative name of this product
     */
    alternativeName: string;

    /**
     * base capacity
     */
    baseCapacity: number;

    /**
     * type of this article
     */
    productType: ProductType;

    /**
     * Ist das der Basis-Artikel des Produkts?
     */
    baseArticle: boolean;

    /**
     * all (external) product numbers (SKU, EAN, ...)
     */
    identifiers: Array<ArticleIdentifier>;

    /**
     * Product custom data
     */
    custom: EavArticle;

    /**
     * Bedarfsermittlung nur über Reservierungen
     */
    needsAssessmentOnlyOnReservationBasis: boolean;

    /**
     * Art des Haltbarkeitsdatums
     */
    expiryDateType: ArticleSerialExpiryDateType;

    /**
     * Hersteller des Produkts
     */
    manufacturerId: number;

    /**
     * net sales prices
     */
    netSalesPrice: number;

    /**
     * capacity unit
     */
    capacityUnit: UnitTypeReference;

    /**
     * Basispreiseinheit
     */
    basePriceUnit: number;

    /**
     * soll der Artikel gelistet werden
     */
    listed: boolean;

    /**
     * provisionsberechtiger Artikel?
     */
    commissionable: boolean;

    /**
     * Nur manuelle Produktion
     */
    onlyManualFabrication: boolean;

    /**
     * Preisbasis
     */
    priceBase: ArticlePriceBase;

    /**
     * alleine lieferbarer Artikel?
     */
    availableAlone: boolean;

    /**
     * der aktuelle listing stand
     */
    listingState: ListingState;
}

export interface Article$Metric {

    /**
     * size
     */
    sizeX: number;

    /**
     * size unit
     */
    sizeUnit: UnitTypeReference;

    /**
     * weight
     */
    weight: number;

    /**
     * size
     */
    sizeY: number;

    /**
     * weight unit
     */
    weightUnit: UnitTypeReference;

    /**
     * size
     */
    sizeZ: number;
}

export interface ArticleAvailabilityDetermination {

    /**
     * wie werden Bestellt-Mengen behandelt
     */
    ordered: ArticleAvailabilityDetermination$Operation;

    /**
     * wie werden Reserviert-Mengen behandelt
     */
    reserved: ArticleAvailabilityDetermination$Operation;

    /**
     * wie wird der Bestand behandelt
     */
    inStock: ArticleAvailabilityDetermination$Operation;

    /**
     * wie werden Mengen in Kommissionierung behandelt
     */
    inPicking: ArticleAvailabilityDetermination$Operation;

    /**
     * wie werden Meldebestände behandelt
     */
    reporting: ArticleAvailabilityDetermination$Operation;
}

export const enum ArticleAvailabilityDetermination$Operation {
    IGNORE = 'IGNORE',
    ADD = 'ADD',
    SUBTRACT = 'SUBTRACT'
}

export interface ArticleIdentifier {

    /**
     * identifier type
     */
    name: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * identifier
     */
    value: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ArticleListing {

    /**
     * all (external) article numbers (SKU, EAN, ...)
     */
    identifiers: WithDefaults<List<ArticleIdentifier>>;

    /**
     * is this product sellable without any quantity at the stock
     */
    sellableWithoutStock: boolean;

    /**
     * custom data
     */
    custom: EavArticleListing;

    /**
     * description custom data
     */
    descriptionCustom: ArticleListing$CustomFieldWithDefaults;

    /**
     * description of this article
     */
    description: WithDefaults<String>;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Niedrigster Brutto-Preis der letzten 30 Tage (vom System ermittelt)
     */
    proposedLowestPriceGross: number;

    /**
     * der Sales Channel
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Niedrigster Brutto-Preis der letzten 30 Tage (benutzerdefinierte Eingabe)
     */
    customLowestPriceGross: number;

    /**
     * soll der Artikel gelistet werden
     */
    listed: boolean;

    /**
     * Kategorien, denen dieses Listing zugeordnet ist
     */
    categoryRefs: Array<ApiObjectReference>;

    /**
     * name of this article
     */
    name: WithDefaults<String>;

    /**
     * die letzte aktualisierung des listingStates
     */
    listingStateChangeTime: ScriptingDateTime;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * alternative name of this article
     */
    alternativeName: WithDefaults<String>;

    /**
     * Niedrigster Netto-Preis der letzten 30 Tage (vom System ermittelt)
     */
    proposedLowestPriceNet: number;

    /**
     * Niedrigster Netto-Preis der letzten 30 Tage (benutzerdefinierte Eingabe)
     */
    customLowestPriceNet: number;

    /**
     * der aktuelle listing stand
     */
    listingState: ListingState;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ArticleListing$CustomFieldWithDefaults {

    /**
     * Wert des Default-Sales-Channel
     */
    defaultValue: EavArticleListingDescription;

    /**
     * Wert dieses Sales-Channel
     */
    value: EavArticleListingDescription;
}

export const enum ArticlePickingType {
    ACCORDING_TO_TEMPLATE = 'ACCORDING_TO_TEMPLATE',
    PICKING_ALLOWED = 'PICKING_ALLOWED',
    PICKING_NOT_ALLOWED = 'PICKING_NOT_ALLOWED',
    ONLY_SINGLE_ORDER_PICKING_ALLOWED = 'ONLY_SINGLE_ORDER_PICKING_ALLOWED',
    ONLY_COLLECTIVE_ORDER_PICKING_ALLOWED = 'ONLY_COLLECTIVE_ORDER_PICKING_ALLOWED'
}

export const enum ArticlePriceBase {
    NET_PRICE = 'NET_PRICE',
    GROSS_PRICE = 'GROSS_PRICE'
}

export const enum ArticlePrintLabelCalculationMode {
    NO_LABEL = 'NO_LABEL',
    FIXED_AMOUNT = 'FIXED_AMOUNT',
    QUANTITY_TIMES_AMOUNT = 'QUANTITY_TIMES_AMOUNT',
    QUANTITY_PER_PACKAGING_UNIT = 'QUANTITY_PER_PACKAGING_UNIT',
    QUANTITY_TIMES_AMOUNT_AND_PACKAGING_QUANTITY = 'QUANTITY_TIMES_AMOUNT_AND_PACKAGING_QUANTITY'
}

export interface ArticlePrintLabelSettings {

    /**
     * Warenausgang: Druckmenge
     */
    outgoingPrintQuantity: number;

    /**
     * Warenausgang: Bestimmung der Druckmenge
     */
    outgoingCalculationMode: ArticlePrintLabelCalculationMode;

    /**
     * Wareneingang: Bestimmung der Druckmenge
     */
    incomingCalculationMode: ArticlePrintLabelCalculationMode;

    /**
     * Wareneingang: Druckmenge
     */
    incomingPrintQuantity: number;

    /**
     * Der Report zum Etikett
     */
    report: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ArticleSerialExpiryDateType {
    NONE = 'NONE',
    BEST_BEFORE_DATE = 'BEST_BEFORE_DATE',
    EXPIRATION_DATE = 'EXPIRATION_DATE'
}

export interface ArticleSerialNumber {

    /**
     * Haltbarkeitsdatum
     */
    expiryDate: ScriptingDate;

    /**
     * Notiz
     */
    note: string;

    /**
     * Seriennummer 2
     */
    serialNumber2: string;

    /**
     * Seriennummer 1
     */
    serialNumber1: string;

    /**
     * Artikel
     */
    articleRef: ApiObjectReference;

    /**
     * Unique Device Identifier (UDI)
     */
    udi: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ArticleSerialNumberLabelingType {
    MANUAL = 'MANUAL',
    AUTOMATIC_ON_SUPPLIER_ORDER = 'AUTOMATIC_ON_SUPPLIER_ORDER',
    AUTOMATIC_ON_SUPPLIER_DELIVERY = 'AUTOMATIC_ON_SUPPLIER_DELIVERY'
}

export const enum ArticleSerialType {
    NONE = 'NONE',
    SERIAL_NUMBER = 'SERIAL_NUMBER',
    LOT = 'LOT',
    DOUBLE_SERIAL_NUMBER = 'DOUBLE_SERIAL_NUMBER'
}

export interface ArticleSupplier {

    /**
     * Soll die abweichende Produktbeschreibung verwendet werden (z.B. in Belegen)
     */
    useSupplierArticleDescription: boolean;

    /**
     * Anzeigename des Accounts
     */
    accountDisplayName: string;

    /**
     * Lieferanten-Meldebestand
     */
    supplierReportingStock: number;

    /**
     * Lieferzeit in (Werk-)Tagen
     */
    deliveryTime: number;

    /**
     * Soll der abweichende Produktidentifier verwendet werden (z.B. in einer Scanner-Erfassung)
     */
    useSupplierArticleIdentifier: boolean;

    /**
     * Soll die abweichende Produktnummer verwendet werden (z.B. in Belegen)
     */
    useSupplierArticleNumber: boolean;

    /**
     * Mindestbestellmenge
     */
    minimumOrderQuantity: number;

    /**
     * Mengeneinheit
     */
    productUnit: UnitTypeReference;

    /**
     * Soll die abweichende Produktbezeichnung verwendet werden (z.B. in Belegen)
     */
    useSupplierArticleName: boolean;

    /**
     * Standardpreis Brutto
     */
    defaultGrossPrice: number;

    /**
     * Artikelnummer
     */
    articleNumber: string;

    /**
     * Rabattgruppe
     */
    discountGroupRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Referenced Article name
     */
    articleName: string;

    /**
     * Verpackungseinheit
     */
    packagingUnit: number;

    /**
     * Lieferanten-Preise
     */
    productPrices: Array<ProductPrice>;

    /**
     * Referenced Article
     */
    articleId: number;

    /**
     * Aktiv?
     */
    active: boolean;

    /**
     * Hauptlieferant
     */
    mainSupplier: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Kennzeichen, ob Streckengeschäft erlaubt
     */
    dropShippingAllowed: boolean;

    /**
     * Abweichende Produktbeschreibung
     */
    supplierArticleDescription: string;

    /**
     * Abweichende Produktbezeichnung
     */
    supplierArticleName: string;

    /**
     * Standardpreis Netto
     */
    defaultNetPrice: number;

    /**
     * Sollen Baugruppen auf Komponenten-Basis bestellt werden?)
     */
    orderOnComponentBase: boolean;

    /**
     * Referenced Supplier-Account
     */
    accountId: number;

    /**
     * Einkaufseinheit
     */
    purchaseUnit: number;

    /**
     * Abweichender Produktidentifer (z.B. Barcode)
     */
    supplierArticleIdentifier: string;

    /**
     * Abweichende Produktnummer
     */
    supplierArticleNumber: string;

    /**
     * Etikettdruck-Einstellungen
     */
    supplierPrintLabelSettings: ArticlePrintLabelSettings;
}

export const enum BankPaymentType {
    MONEY_TRANSFER = 'MONEY_TRANSFER',
    REALTIME_MONEY_TRANSFER = 'REALTIME_MONEY_TRANSFER',
    SEPA_CORE_DIRECT_DEBIT = 'SEPA_CORE_DIRECT_DEBIT',
    SEPA_B2B_DIRECT_DEBIT = 'SEPA_B2B_DIRECT_DEBIT',
    CLEARING = 'CLEARING',
    CLEARING_WITH_PREDECESSOR_DOCUMENT = 'CLEARING_WITH_PREDECESSOR_DOCUMENT',
    OTHER = 'OTHER'
}

export interface BatchScriptingContext$BatchScriptImportSession {
}

export const enum BillingType {
    GROSS = 'GROSS',
    NET = 'NET'
}

export const enum BusinessRelationType {
    B2B = 'B2B',
    B2C = 'B2C',
    B2G = 'B2G'
}

export const enum BuyerReferenceOrigin {
    FROM_BILLING_ADDRESS = 'FROM_BILLING_ADDRESS',
    FROM_DEFAULT_ADDRESS = 'FROM_DEFAULT_ADDRESS',
    USER_DEFINED = 'USER_DEFINED'
}

export const enum CalculateFreightChargesFromType {
    CHARGES_FROM_ORDER = 'CHARGES_FROM_ORDER',
    RECALCULATE = 'RECALCULATE'
}

export const enum CalculateFreightChargesWithType {
    EVERY_SHIPPING = 'EVERY_SHIPPING',
    FIRST_SHIPPING = 'FIRST_SHIPPING'
}

export const enum CalculationMode {
    HORIZONTAL = 'HORIZONTAL',
    VERTICAL = 'VERTICAL'
}

export const enum CalculationModeOrigin {
    FROM_BILLING_ADDRESS = 'FROM_BILLING_ADDRESS',
    FROM_DEFAULT_ADDRESS = 'FROM_DEFAULT_ADDRESS',
    FROM_ACCOUNT = 'FROM_ACCOUNT',
    FROM_SALES_CHANNEL = 'FROM_SALES_CHANNEL',
    FROM_DOCUMENT_PARAMS = 'FROM_DOCUMENT_PARAMS',
    USER_DEFINED = 'USER_DEFINED'
}

export const enum CollectiveInvoicePeriodicity {
    MANUAL = 'MANUAL'
}

export const enum CommonUserType {
    REGULAR = 'REGULAR',
    SUPPORT = 'SUPPORT',
    SYSTEM = 'SYSTEM',
    LIMITED_WMS = 'LIMITED_WMS',
    LIMITED_POS = 'LIMITED_POS',
    LIMITED_DASHBOARD = 'LIMITED_DASHBOARD',
    LIMITED_AGENT = 'LIMITED_AGENT',
    APP_BUILTIN_USER = 'APP_BUILTIN_USER'
}

export interface Contact {

    /**
     * Is default contact?
     */
    defaultContact: boolean;

    /**
     * Freifeld
     */
    custom: EavContact;

    /**
     * Type identifier
     */
    ctId: number;

    /**
     * Contact label
     */
    ctLabel: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Contact type
     */
    ctType: ContactTypeType;

    /**
     * A Value
     */
    value: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ContactTypeType {
    PHONE = 'PHONE',
    SOCIAL = 'SOCIAL',
    EMAIL = 'EMAIL',
    FAX = 'FAX',
    SKYPE = 'SKYPE',
    MS_TEAMS = 'MS_TEAMS',
    CUSTOM = 'CUSTOM',
    MOBILE = 'MOBILE'
}

export interface CountryReference {

    /**
     * IsoAlpha2-Code des Landes
     */
    isoAlpha2: string;

    /**
     * Bezeichnung des Landes
     */
    label: string;

    /**
     * ID des Landes
     */
    id: number;
}

/**
 * Details zur Erstellung eines neuen Belegs
 */
export interface CreateNewDocumentRequest {

    /**
     * Belegart
     */
    documentTypeLabel: string;

    /**
     * Standard-Belegart der Kategorie verwenden
     */
    defaultDocumentTypeByCategory: EDocumentCategory;

    /**
     * Details zum Beleg
     */
    document: RequestDocument;

    /**
     * Zusätzliche Parameter
     */
    parameters: Array<AdditionalParameter>;
}

export interface CrmActivity {

    /**
     * Notizen
     */
    notes: string;

    /**
     * Dauer der Aktivität in Sekunden
     */
    durationInSeconds: number;

    /**
     * Aktivitätsart
     */
    type: CrmActivityType;

    /**
     * Art der Abrechnung dieser Aktivität
     */
    billingType: CrmActivityBillingType;

    /**
     * tatsächliche Dauer
     */
    durationToBillInSeconds: number;

    /**
     * geplante Startzeit
     */
    plannedStartDateTime: ScriptingDateTime;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Abrechnungsbelegposition
     */
    billingDocumentLineRef: ApiObjectReference;

    /**
     * Handelt es sich bei der Aktivität um eine E-Mail
     */
    email: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Aktivität intern abgerechnet?
     */
    internalBilled: boolean;

    /**
     * geplante Dauer
     */
    plannedDurationInSeconds: number;

    /**
     * Freie Felder der CRM-Aktivität
     */
    custom: EavCrmactivity;

    /**
     * Rabatt zur Abrechnung
     */
    billingDiscount: number;

    /**
     * Ist die Aktivität veröffentlicht
     */
    published: boolean;

    /**
     * Ansprechpartner
     */
    accountPersonRef: ApiObjectReference;

    /**
     * Abrechenbar?
     */
    billable: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Von welchem User ist diese Aktivität? Wenn NULL dann handelt es sich um eine System-Aktivität
     */
    userRef: ApiObjectReference;

    /**
     * tatsächliche Startzeit
     */
    startDateTime: ScriptingDateTime;

    /**
     * Handelt es sich um eine System-Aktivität?
     */
    system: boolean;

    /**
     * Inhalt dieser Aktivität
     */
    comment: string;

    /**
     * Zu welcher Adresse gehört diese Aktivität
     */
    accountRef: ApiObjectReference;

    /**
     * Zu welchem CRM-Objekt gehört diese Aktivität
     */
    crmParent: CrmObjectRef;
}

export const enum CrmActivityBillingType {
    LIKE_TASK = 'LIKE_TASK',
    UNCLEAR = 'UNCLEAR',
    CUSTOMER = 'CUSTOMER',
    INTERNAL = 'INTERNAL',
    PLANNED = 'PLANNED'
}

export interface CrmActivityType {

    /**
     * Text für Aktivitätstyp der im Editor eingetragen wird
     */
    descriptionTemplate: string;

    /**
     * Mögliche Typen, wo diese Aktivitätsart verwendet werden kann
     */
    possibleUsingTypes: Array<PossibleUsingType>;

    /**
     * Aktiv?
     */
    active: boolean;

    /**
     * Beschreibung
     */
    description: string;

    /**
     * Bezeichnung
     */
    label: string;

    /**
     * Für "E-Mail-Archivieren"?
     */
    emailArchiving: boolean;

    /**
     * Abrechenbar?
     */
    billable: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Standard für Kommentare?
     */
    defaultForComments: boolean;

    /**
     * Für "E-Mail-Bearbeitung"?
     */
    emailProcessing: boolean;

    /**
     * Sortierreihenfolge
     */
    sortOrder: number;

    /**
     * Standard-Abrechnungsart
     */
    defaultBillingType: CrmActivityBillingType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Darf die Aktivität veröffentlicht werden?
     */
    canBePublished: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmChecklistItem {

    /**
     * Text des Checklisten-Elements
     */
    memo: string;

    /**
     * Ist das Element "angehakt"?
     */
    checked: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmDeal {

    /**
     * Geplante Investitionssumme
     */
    plannedInvestmentSum: number;

    /**
     * Abschlußgrund
     */
    closingReasonRef: ApiObjectReference;

    /**
     * Notizen
     */
    notes: string;

    /**
     * Geplantes Leistungs-Datum
     */
    plannedPerformanceDate: ScriptingDate;

    /**
     * Freier/Detaillierter Abschlußgrund
     */
    detailedClosingReason: string;

    /**
     * Notiz/Beschreibung
     */
    description: string;

    /**
     * Beobachter
     */
    observerRefs: Array<ApiObjectReference>;

    /**
     * Hauptverantwortlicher Ansprechpartner Kunde
     */
    responsibleCustomerPersonRef: ApiObjectReference;

    /**
     * Priorität der Aufgabe
     */
    priorityRef: ApiObjectReference;

    /**
     * Aufgaben-Nummer
     */
    number: string;

    /**
     * Verantwortlicher Benutzer
     */
    mainResponsibleUserRef: ApiObjectReference;

    /**
     * Status der Aufgabe
     */
    stateRef: ApiObjectReference;

    /**
     * Thema
     */
    topicRef: ApiObjectReference;

    /**
     * Geplantes Abschluss-Datum
     */
    plannedClosingDate: ScriptingDate;

    /**
     * Verkaufsbelege
     */
    salesDocumentRefs: Array<DocumentRef>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Typ der Aufgabe
     */
    typeRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Zu Erledigen von Benutzer (zugeordneter Benutzer)
     */
    assignedUserRef: ApiObjectReference;

    /**
     * Weitere Teilnehmer vom Auftraggeber
     */
    additionalParticipantsOfCustomer: Array<CrmParticipant>;

    /**
     * Chance (in Prozent)
     */
    chance: number;

    /**
     * Zugewiesen von
     */
    assignedByUserRef: ApiObjectReference;

    /**
     * Aufgabentitel
     */
    label: string;

    /**
     * In Workflow-Verarbeitung?
     */
    processedByWorkflow: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Freie Felder des CRM-Deals
     */
    customField: EavCrmdeal;

    /**
     * Untergeordnete CRM-Objekt
     */
    childRefs: Array<CrmObjectRef>;

    /**
     * Tags
     */
    tags: Array<TagDto>;

    /**
     * Übergeordnetes CRM-Objekt
     */
    parentRef: CrmObjectRef;

    /**
     * Zu Erledigen von Benutzergruppe (zugeordnete Benutzergruppe)
     */
    assignedGroupRef: ApiObjectReference;

    /**
     * Weitere Teilnehmer vom Auftragnehmer
     */
    additionalParticipantsOfContractor: Array<CrmParticipant>;

    /**
     * Art des Abschluß
     */
    closingType: CrmDealClosingType;

    /**
     * Verantwortlicher Benutzer
     */
    mainResponsibleGroupRef: ApiObjectReference;

    /**
     * Adresse, zu welcher die Aufgabe gehört
     */
    accountRef: ApiObjectReference;

    /**
     * Nächster geplanter Kontakt
     */
    nextPlannedContactDate: ScriptingDateTime;

    /**
     * Vertreterinformationen
     */
    salesAgentAccountRef: ApiObjectReference;
}

export const enum CrmDealClosingType {
    POSITIVE = 'POSITIVE',
    NEGATIVE = 'NEGATIVE'
}

export interface CrmDealTopic {

    /**
     * Sortierreihenfolge
     */
    sortOrder: number;

    /**
     * aktiv
     */
    active: boolean;

    /**
     * Beschreibung
     */
    description: string;

    /**
     * Bezeichnung
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmObjectRef {

    /**
     * Nummer
     */
    number: string;

    /**
     * Beschreibung
     */
    description: string;

    /**
     * Sub-Type
     */
    subType: CrmSubType;

    /**
     * Bezeichung
     */
    label: string;

    /**
     * ID
     */
    id: number;

    /**
     * Status
     */
    state: CrmState;

    /**
     * CRM-Typ
     */
    type: CrmType;
}

export interface CrmParticipant {

    /**
     * Beschreibung
     */
    description: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Ansprechpartner
     */
    accountPersonRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmPriority {

    /**
     * Sortierreihenfolge
     */
    sortOrder: number;

    /**
     * Prioritäten-Typ
     */
    crmPriorityType: CrmPriorityType;

    /**
     * Bezeichnung
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * portalEnum for this priority
     */
    portalEnumRef: ApiCreatableReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum CrmPriorityType {
    CRITICAL = 'CRITICAL',
    NORMAL = 'NORMAL',
    LOW = 'LOW'
}

export interface CrmProject {

    /**
     * Notizen
     */
    notes: string;

    /**
     * Erfasste Zeiten in Sekunden
     */
    recordedTimes: number;

    /**
     * Tatsächlicher Projektzeitraum (bis)
     */
    actualProjectPeriodTo: ScriptingDate;

    /**
     * Tatsächlicher Projektzeitraum (von)
     */
    actualProjectPeriodFrom: ScriptingDate;

    /**
     * Notiz/Beschreibung
     */
    description: string;

    /**
     * Beobachter
     */
    observerRefs: Array<ApiObjectReference>;

    /**
     * Priorität der Aufgabe
     */
    priorityRef: ApiObjectReference;

    /**
     * Phase
     */
    phaseRef: ApiObjectReference;

    /**
     * Projektleiter vom Auftragnehmer
     */
    projectManagerOfContractor: CrmParticipant;

    /**
     * Aufgaben-Nummer
     */
    number: string;

    /**
     * Status der Aufgabe
     */
    stateRef: ApiObjectReference;

    /**
     * Abgerechnete Zeiten in Sekunden
     */
    billedTimes: number;

    /**
     * Geplanter Projektzeitraum (von)
     */
    plannedProjectPeriodFrom: ScriptingDate;

    /**
     * Einkaufsbelege
     */
    purchaseDocumentRefs: Array<DocumentRef>;

    /**
     * Verkaufsbelege
     */
    salesDocumentRefs: Array<DocumentRef>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Datum Vertragsabschluss
     */
    contractConclusionDate: ScriptingDate;

    /**
     * Typ der Aufgabe
     */
    typeRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Projektleiter vom Auftraggeber
     */
    projectManagerOfCustomer: CrmParticipant;

    /**
     * Weitere Teilnehmer vom Auftraggeber
     */
    additionalParticipantsOfCustomer: Array<CrmParticipant>;

    /**
     * Gesamt beauftragte Zeit in Sekunden
     */
    effortCommissioned: number;

    /**
     * Gesamt Aufwandsschätzung in Sekunden
     */
    effortEstimation: number;

    /**
     * Checkliste: Memo + Checked
     */
    checklist: Array<CrmChecklistItem>;

    /**
     * Aufgabentitel
     */
    label: string;

    /**
     * In Workflow-Verarbeitung?
     */
    processedByWorkflow: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Freie Felder des CRM-Projekten
     */
    customField: EavCrmproject;

    /**
     * Untergeordnete CRM-Objekt
     */
    childRefs: Array<CrmObjectRef>;

    /**
     * Tags
     */
    tags: Array<TagDto>;

    /**
     * Übergeordnetes CRM-Objekt
     */
    parentRef: CrmObjectRef;

    /**
     * Weitere Teilnehmer vom Auftragnehmer
     */
    additionalParticipantsOfContractor: Array<CrmParticipant>;

    /**
     * Adresse, zu welcher die Aufgabe gehört
     */
    accountRef: ApiObjectReference;

    /**
     * Geplanter Projektzeitraum (bis)
     */
    plannedProjectPeriodTo: ScriptingDate;
}

export interface CrmReference {

    /**
     * Referenz
     */
    reference: ApiObjectReference;

    /**
     * Typ der Referenz
     */
    referenceType: CrmReferenceType;
}

export const enum CrmReferenceType {
    ARTICLE = 'ARTICLE',
    DOCUMENT_LINE = 'DOCUMENT_LINE',
    OPEN_ITEM = 'OPEN_ITEM'
}

export interface CrmReminder {

    /**
     * Notiz zur Erinnerung
     */
    note: string;

    /**
     * ID des CRM Objekts
     */
    crmId: number;

    /**
     * Wer soll erinnert werden
     */
    userRef: ApiObjectReference;

    /**
     * Kritische Erinnerung?
     */
    critical: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Erinnerungszeitpunkt
     */
    remindAt: ScriptingDateTime;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmState {

    /**
     * active
     */
    active: boolean;

    /**
     * Beschreibung
     */
    description: string;

    /**
     * Kommentar bei positivem Abschluß erforderlich
     */
    needsCommentOnPositiveFinish: boolean;

    /**
     * Bezeichnung
     */
    label: string;

    /**
     * portalEnum for this state
     */
    portalEnumRef: ApiCreatableReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Handelt es sich um einen End-Status
     */
    finishState: boolean;

    /**
     * Sortierreihenfolge
     */
    sortOrder: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Handelt es sich um einen "Bereit zur Abrechnung"-Status
     */
    readyToBill: boolean;

    /**
     * Handelt es sich um einen Anfang-Status
     */
    startState: boolean;

    /**
     * Kommentar bei negativem Abschluß erforderlich
     */
    needsCommentOnNegativeFinish: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmSubType {

    /**
     * Sortierreihenfolge
     */
    sortOrder: number;

    /**
     * aktiv
     */
    active: boolean;

    /**
     * Beschreibung
     */
    description: string;

    /**
     * Bezeichnung
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface CrmTask {

    /**
     * Liste von Erinnerungen
     */
    reminders: Array<CrmReminder>;

    /**
     * Angebot
     */
    customerOfferRef: DocumentRef;

    /**
     * Notizen
     */
    notes: string;

    /**
     * Referenzen
     */
    references: Array<CrmReference>;

    /**
     * Beobachter
     */
    observerRefs: Array<ApiObjectReference>;

    /**
     * Hauptverantwortlicher Ansprechpartner Kunde
     */
    responsibleCustomerPersonRef: ApiObjectReference;

    /**
     * Priorität der Aufgabe
     */
    priorityRef: ApiObjectReference;

    /**
     * Aufgaben-Nummer
     */
    number: string;

    /**
     * Verantwortlicher Benutzer
     */
    mainResponsibleUserRef: ApiObjectReference;

    /**
     * Auftrag
     */
    customerOrderRef: DocumentRef;

    /**
     * Erfasste Zeiten in Sekunden (intern)
     */
    internalRecordedTimes: number;

    /**
     * Einkaufsbelege
     */
    purchaseDocumentRefs: Array<DocumentRef>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Weitere Teilnehmer vom Auftraggeber
     */
    additionalParticipantsOfCustomer: Array<CrmParticipant>;

    /**
     * Zugewiesen von
     */
    assignedByUserRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Freie Felder der CRM-Aufgabe
     */
    customField: EavCrmtask;

    /**
     * Untergeordnete CRM-Objekt
     */
    childRefs: Array<CrmObjectRef>;

    /**
     * Tags
     */
    tags: Array<TagDto>;

    /**
     * Wird von diesen Aufgaben dupliziert
     */
    duplicatedByTaskRefs: Array<ApiObjectReference>;

    /**
     * Zu Erledigen von Benutzergruppe (zugeordnete Benutzergruppe)
     */
    assignedGroupRef: ApiObjectReference;

    /**
     * Fälligkeit
     */
    dueDateTime: ScriptingDateTime;

    /**
     * Verantwortlicher Benutzer
     */
    mainResponsibleGroupRef: ApiObjectReference;

    /**
     * Adresse, zu welcher die Aufgabe gehört
     */
    accountRef: ApiObjectReference;

    /**
     * Wird von diesen Aufgaben blockiert
     */
    blockedByTaskRefs: Array<ApiObjectReference>;

    /**
     * Abgerechnete Zeiten in Sekunden (extern)
     */
    externalBilledTimes: number;

    /**
     * Steht mit diesen Aufgaben im Zusammenhang
     */
    relatedToTaskRefs: Array<ApiObjectReference>;

    /**
     * Notiz/Beschreibung
     */
    description: string;

    /**
     * Status der Aufgabe
     */
    stateRef: ApiObjectReference;

    /**
     * Abrechnungsart
     */
    billingType: CrmTaskBillingType;

    /**
     * Abrechnungen
     */
    billingDocumentRefs: Array<DocumentRef>;

    /**
     * Verkaufsbelege
     */
    salesDocumentRefs: Array<DocumentRef>;

    /**
     * Typ der Aufgabe
     */
    typeRef: ApiObjectReference;

    /**
     * Zu Erledigen von Benutzer (zugeordneter Benutzer)
     */
    assignedUserRef: ApiObjectReference;

    /**
     * Erfasste Zeiten in Sekunden (extern)
     */
    externalRecordedTimes: number;

    /**
     * Beauftragte Zeit in Sekunden
     */
    effortCommissioned: number;

    /**
     * Aufwandsschätzung in Sekunden
     */
    effortEstimation: number;

    /**
     * Abrechnungsregel
     */
    billingRule: CrmTaskBillingRule;

    /**
     * Checkliste: Memo + Checked
     */
    checklist: Array<CrmChecklistItem>;

    /**
     * Aufgabentitel
     */
    label: string;

    /**
     * In Workflow-Verarbeitung?
     */
    processedByWorkflow: boolean;

    /**
     * Abgerechnete Zeiten in Sekunden (intern)
     */
    internalBilledTimes: number;

    /**
     * Übergeordnetes CRM-Objekt
     */
    parentRef: CrmObjectRef;

    /**
     * Blockiert diese Aufgaben
     */
    blocksTaskRefs: Array<ApiObjectReference>;

    /**
     * Soll die Aufgabe veröffentlicht werden?
     */
    publish: boolean;

    /**
     * Weitere Teilnehmer vom Auftragnehmer
     */
    additionalParticipantsOfContractor: Array<CrmParticipant>;

    /**
     * Fortschritt in Prozent
     */
    progress: number;

    /**
     * Duplizierte Aufgaben
     */
    duplicatesTaskRefs: Array<ApiObjectReference>;
}

export const enum CrmTaskBillingRule {
    ONLY_COMPLETE = 'ONLY_COMPLETE',
    ONLY_BILL_WITH_PARENT_TASK = 'ONLY_BILL_WITH_PARENT_TASK',
    ALLOW_ACTIVITIES_INDIVIDUALLY = 'ALLOW_ACTIVITIES_INDIVIDUALLY'
}

export const enum CrmTaskBillingType {
    UNCLEAR = 'UNCLEAR',
    CUSTOMER = 'CUSTOMER',
    INTERNAL = 'INTERNAL'
}

export const enum CrmType {
    TASK = 'TASK',
    DEAL = 'DEAL',
    PROJECT = 'PROJECT'
}

/**
 * CRM-Belegreferenz
 */
export interface CrmTypedDocumentRef {

    /**
     * Typ der Belegreferenz
     */
    specialRefType: ECrmSpecialDocumentRefType;

    /**
     * Beleg-Qualifizierer
     */
    documentQualifier: EDocumentQualifier;

    /**
     * Belegreferenz
     */
    documentRef: DocumentRef;
}

/**
 * Liste von CRM-Belegreferenzen
 */
export interface CrmTypedDocumentRefList {
}

export interface CurrencyReference {

    /**
     * Symbol der Währung
     */
    symbol: string;

    /**
     * IsoAlpha3-Code der Währung
     */
    isoAlpha3: string;

    /**
     * Bezeichnung der Währung
     */
    label: string;

    /**
     * ID der Währung
     */
    id: number;
}

export interface Customer {

    /**
     * Option für die Stapelverarbeitung
     */
    stackProcessingType: AccountOrderStackProcessingType;

    /**
     * reference to customer group
     */
    customerGroupRef: ApiObjectReference;

    /**
     * Kreditlimit
     */
    maximalLoan: number;

    /**
     * collective billable
     */
    collectiveBillable: boolean;

    /**
     * Maximal mögliche Lieferungen
     */
    maxDeliveries: number;

    /**
     * Hat der Kunde eine Liefersperre?
     */
    deliveryBlocked: boolean;

    /**
     * number of customer
     */
    number: string;

    /**
     * presetting of billing type
     */
    billingType: AccountBillingType;

    /**
     * Priorität für die Stapelverarbeitung
     */
    stackProcessingPriority: number;

    /**
     * reference to product price group
     */
    productPriceGroupRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * finance account-number of customer
     */
    accountingNumber: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * reference to the delivery method
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * tax able or tax free
     */
    taxable: boolean;

    /**
     * active true/false
     */
    active: boolean;

    /**
     * reference to responsible user
     */
    responsibleUserRef: ApiObjectReference;

    /**
     * customers number for us
     */
    ourNumber: string;

    /**
     * reference to the payment term
     */
    paymentTermRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * reference to the delivery term
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * country code performance country IsoAlpha3
     */
    performanceCountryCode: string;

    /**
     * periodicity of collective invoice
     */
    collectiveInvoicePeriodicity: CollectiveInvoicePeriodicity;

    /**
     * reference to the payment method
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * currency code  IsoAlpha3
     */
    currencyCode: string;
}

export const enum DealNotificationEventConfig {
    DEAL_CHANGED = 'DEAL_CHANGED',
    DEAL_COMMENT_MENTIONED = 'DEAL_COMMENT_MENTIONED',
    DEAL_CLOSED_LOOSE = 'DEAL_CLOSED_LOOSE',
    DEAL_CLOSED_WON = 'DEAL_CLOSED_WON'
}

export interface DeliveryMethod {

    /**
     * E-Mail an Versender übergeben
     */
    forwardEmailToShipper: boolean;

    /**
     * Soll eine Position mit dieser Liefermethode in einen Lieferbeleg mit dieser Methode übernommen werden
     */
    splitIntoNewDocument: boolean;

    /**
     * Min. Gewicht pro Paket
     */
    minWeightPerParcel: number;

    /**
     * Versanddauer in Tagen
     */
    deliveryTime: number;

    /**
     * printDescription
     */
    printDescription: string;

    /**
     * Max. Gewicht pro Paket
     */
    maxWeightPerParcel: number;

    /**
     * Aktiv?
     */
    active: boolean;

    /**
     * description
     */
    description: string;

    /**
     * label for this delivery method
     */
    label: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Telefon an Versender übergeben
     */
    forwardPhoneToShipper: boolean;

    /**
     * Standardlängeneinheit
     */
    defaultSizeUnit: UnitTypeReference;

    /**
     * translations
     */
    translations: Array<DocumentTypeTerm>;

    /**
     * Quelle für Paketgewicht
     */
    parcelWeightSource: DeliveryMethodParcelWeightSource;

    /**
     * Gültige Ländercodes
     */
    validCountryCodes: Array<string>;

    /**
     * Versand-Anbieter
     */
    vdsCarrierId: number;

    /**
     * Standardgewichtseinheit
     */
    defaultWeightUnit: UnitTypeReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DeliveryMethodParcelWeightSource {
    AUTOMATIC_VIA_DOCUMENT_LINE = 'AUTOMATIC_VIA_DOCUMENT_LINE',
    MANUAL_RECORDING = 'MANUAL_RECORDING'
}

export interface DeliveryTerm {

    /**
     * free shipping gross value
     */
    freeShippingGrossValue: number;

    /**
     * cod net fee to charge on document
     */
    codNetFee: number;

    /**
     * printDescription
     */
    printDescription: string;

    /**
     * cod gross fee to charge on document
     */
    codGrossFee: number;

    /**
     * Aktiv?
     */
    active: boolean;

    /**
     * description
     */
    description: string;

    /**
     * label for this delivery term
     */
    label: string;

    /**
     * information, when the shipping charges should be calculated
     */
    calculateFreightChargesWithType: CalculateFreightChargesWithType;

    /**
     * Sprache des Accounts
     */
    languageCode: string;

    /**
     * calculate shipping charges per parcel
     */
    freightChargesPerParcel: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * information, how the shipping charges should be calculated
     */
    calculateFreightChargesFromType: CalculateFreightChargesFromType;

    /**
     * translations
     */
    translations: Array<DocumentTypeTerm>;

    /**
     * Lieferarten
     */
    deliveryMethodRefs: Array<ApiObjectReference>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * free shipping net value
     */
    freeShippingNetValue: number;

    /**
     * Versandkostenartikel
     */
    shippingCostArticleRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface Document {

    /**
     * Referenz zum Rechnungskonto
     */
    billingAccountRef: ApiObjectReference;

    /**
     * Bestätigtes Lieferende (nur wenn bestätigtes Lieferdatum gesetzt)
     */
    confirmedDeliveryDateEnd: ScriptingDate;

    /**
     * Externe Belegnummer
     */
    externalNumber: string;

    /**
     * Steuerzusammenfassung für diesen Beleg
     */
    taxes: Array<DocumentTax>;

    /**
     * Gesamtpreis - Netto Basiswährung
     */
    baseTotalNetPrice: number;

    /**
     * Quittungsdetails
     */
    posDetail: DocumentPosDetail;

    /**
     * Bestätigtes Lieferdatum
     */
    confirmedDeliveryDate: ScriptingDate;

    /**
     * Belegnummer
     */
    number: string;

    /**
     * Gesamte Mehrwertsteuer
     */
    totalVat: number;

    /**
     * Standardlager für neue Positionen
     */
    defaultStorageRef: ApiObjectReference;

    /**
     * Name der bestellenden Person
     */
    orderedBy: string;

    /**
     * Lieferadresse
     */
    deliveryAddress: DocumentAddress;

    /**
     * Priorität in der Stapelverarbeitung
     */
    stackProcessingPriority: number;

    /**
     * Positionsrabatt gesamt [BRUTTO, NETTO]
     */
    totalLinePriceModifier: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Quittung: Saldo
positiver Wert: Betrag der noch zu zahlen ist
negativer Wert: überzahlter Betrag / Rückgeld

     */
    posReceiptBalance: number;

    /**
     * Voraussichtliche Paketanzahl (nur Info)
     */
    deliveryQuantityPackages: number;

    /**
     * Steuerpflichtig oder steuerfrei
     */
    taxable: boolean;

    /**
     * Leitweg-ID
     */
    buyerReference: string;

    /**
     * Bestellnummer aus Vorbeleg
     */
    referencedOrderNumber: string;

    /**
     * Preisanpassungen - Belegpositionssumme Basiswährung
     */
    baseTotalLinePriceModifier: number;

    /**
     * Vorkassebetrag Basiswährung
     */
    baseDepositPaymentAmount: number;

    /**
     * Gesamtpreis vor Rabatt [BRUTTO, NETTO]
     */
    totalBeforeModifier: number;

    /**
     * Referenz auf verantwortlichen Benutzer
     */
    responsibleUserRef: ApiObjectReference;

    /**
     * Vertreternummer
     */
    salesAgentNumber: string;

    /**
     * Sprache
     */
    languageCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Tags für diesen Beleg
     */
    tags: Array<TagDto>;

    /**
     * ID der Organisationseinheit
     */
    accountId: number;

    /**
     * Länderkennzeichen Leistungsland (ISO Alpha-3)
     */
    performanceCountryCode: string;

    /**
     * Länderkennzeichen Ursprungsland (ISO Alpha-3)
     */
    sourceCountryCode: string;

    /**
     * Vereinbartes Anzahlungsdatum
     */
    depositPaymentDate: ScriptingDate;

    /**
     * Summe der Versandkosten (netto/brutto)
     */
    shippingCostSum: number;

    /**
     * Art des Belegs
     */
    qualifier: DocumentQualifier;

    /**
     * Referenz auf Zahlungsmethode
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * Belegdatum
     */
    documentDate: ScriptingDate;

    /**
     * Reverse-Charge-Verfahren nach §13b UStG?
     */
    taxLiabilityReversed: boolean;

    /**
     * Versanddatum
     */
    shippingDate: ScriptingDate;

    /**
     * Lieferantennummer
     */
    supplierNumber: string;

    /**
     * Ist der Beleg zur Lieferung freigegeben?
     */
    deliveryApproved: boolean;

    /**
     * Gesamtpreis brutto
     */
    totalGrossPrice: number;

    /**
     * Kassen-Zahlungspositionen
     */
    posPayments: Array<DocumentPosPayment>;

    /**
     * Ist die Quittung bezahlt
true wenn die Quittung bezahlt ist

     */
    posReceiptPayed: boolean;

    /**
     * Kundennummer beim Lieferanten
     */
    ourCustomerNumber: string;

    /**
     * Maximal mögliche Lieferungen
     */
    maxDeliveries: number;

    /**
     * Quittung: Summe Zahlbetrag
     */
    posReceiptPaymentSum: number;

    /**
     * Voraussichtliches Lieferdatum
     */
    deliveryDate: ScriptingDate;

    /**
     * Voraussichtliches Lieferende (nur wenn Lieferdatum gesetzt)
     */
    deliveryDateEnd: ScriptingDate;

    /**
     * Vertragsdetails
     */
    contractDetail: DocumentContractDetail;

    /**
     * Skontofähiger Bruttogesamtbetrag
     */
    cashDiscountableTotalGrossPrice: number;

    /**
     * Zahlungsplan vorhanden?
     */
    paymentPlan: boolean;

    /**
     * Produktionsdetails
     */
    fabricationDetail: DocumentFabricationDetail;

    /**
     * Berechnungsmodus
     */
    calculationMode: CalculationMode;

    /**
     * Kontonummer der zugehörigen Organisationseinheit
     */
    accountNumber: string;

    /**
     * Referenz auf Zahlungsbedingung
     */
    paymentTermRef: PaymentTermRef;

    /**
     * Wird vom Workflow verarbeitet?
     */
    processedByWorkflow: boolean;

    /**
     * Preisanpassungen - Beleg Basiswährung
     */
    baseTotalDocumentPriceModifier: number;

    /**
     * Telefon an Versender übergeben
     */
    forwardPhoneToShipper: boolean;

    /**
     * Liste der Belegtexte
     */
    texts: Array<DocumentText>;

    /**
     * Sammelrechnung?
     */
    collectiveInvoice: boolean;

    /**
     * Währung (ISO-Code, Alpha-3)
     */
    currencyCode: string;

    /**
     * Standardadresse
     */
    defaultAddress: DocumentAddress;

    /**
     * Leistungsdatum
     */
    performanceDate: ScriptingDate;

    /**
     * Verarbeitungsoption für Stapel
     */
    stackProcessingType: OrderStackProcessingType;

    /**
     * Ist der Streckengeschäfts-Beleg zur Rechnung freigegeben?
     */
    dropShippingInvoiceApproved: boolean;

    /**
     * EN16931-Profil für elektronische Rechnungen
     */
    en16931Profile: EN16931Profile;

    /**
     * Ort der steuerlichen Leistungserbringung
     */
    taxPerformanceLocation: TaxPerformanceLocationType;

    /**
     * Wechselkurs
     */
    exchangeRate: number;

    /**
     * Zusätzliche Infos zu Entscheidungen im Belegkontext
     */
    additionalInfo: DocumentAdditionalInfo;

    /**
     * Bestelldatum
     */
    orderedOn: ScriptingDate;

    /**
     * skontierbarer Rechnungsbetrag Basiswährung
     */
    baseCashDiscountableTotalGrossPrice: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Referenz auf Liefermethode
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Rabatt gesamt [BRUTTO, NETTO]
     */
    totalPriceModifier: number;

    /**
     * Streckengeschäft
     */
    dropShipping: boolean;

    /**
     * Validierungsstatus bei elektronischen Rechnungen
     */
    valitoolValidationState: EInvoiceValidationState;

    /**
     * Gesamtpreis netto
     */
    totalNetPrice: number;

    /**
     * Ist der Beleg veröffentlicht (gedruckt, per Mail versendet)?
     */
    published: boolean;

    /**
     * Ziel-Belegtyp nach Kommissionierung
     */
    afterPickingTargetDocumentTypeRef: ApiObjectReference;

    /**
     * Vereinbarter Anzahlungsbetrag
     */
    depositPaymentAmount: number;

    /**
     * Belegrabatt gesamt [BRUTTO, NETTO]
     */
    totalDocumentPriceModifier: number;

    /**
     * Belegtyp (intern)
     */
    documentType: string;

    /**
     * total gross Volume in cubic meters
     */
    totalGrossVolumeInCubicMeters: number;

    /**
     * ID des Belegtyps
     */
    documentTypeId: number;

    /**
     * Kategorie des Belegs
     */
    documentTypeCategory: DocumentCategory;

    /**
     * Gesamtgewicht wurde manuell gesetzt
     */
    userDefinedWeight: boolean;

    /**
     * Importmodus des Belegs
     */
    importType: DocumentImportType;

    /**
     * Referenz zum zugeordneten Vertriebskanal
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Abrechnungstyp
     */
    billingType: BillingType;

    /**
     * Gesamtpreis - Brutto Basiswährung
     */
    baseTotalGrossPrice: number;

    /**
     * Externe Kennung
     */
    externalIdentifier: string;

    /**
     * Einheit für das Gesamtgewicht
     */
    grossWeightUnit: UnitTypeReference;

    /**
     * Liste der Belegpositionen
     */
    lines: Array<DocumentLine>;

    /**
     * E-Mail an Versender übergeben
     */
    forwardEmailToShipper: boolean;

    /**
     * Zusätzlicher Liefertext
     */
    deliveryText: string;

    /**
     * Benutzerdefinierte Felder
     */
    custom: EavDocument;

    /**
     * Valutadatum
     */
    valueDate: ScriptingDate;

    /**
     * Kundennummer
     */
    customerNumber: string;

    /**
     * Versandkostenpositionen
     */
    shippingCosts: Array<DocumentShippingCost>;

    /**
     * Statusinstanz des Belegs
     */
    documentState: DocumentTypeState;

    /**
     * Umsatzsteuer-Identifikationsnummer
     */
    taxIdentificationNumber: string;

    /**
     * Rückgeld
     */
    posReceiptChangeAmount: number;

    /**
     * Referenz auf Lieferbedingung
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * Ist die Quittung ausbalanciert, also bezahlt und kein Rückgeld
true wenn die Quittung ausbalanciert ist

     */
    posReceiptBalanced: boolean;

    /**
     * Gesamtbruttogewicht
     */
    grossWeight: number;

    /**
     * Basiswährung des Belegs
     */
    baseCurrencyCode: string;

    /**
     * Ursprung für Währungskursermittlung
     */
    exchangeRateOrigin: ExchangeRateOrigin;

    /**
     * Preisänderungen (z.B. Rabatte)
     */
    priceModifiers: Array<DocumentPriceModifier>;

    /**
     * Rechnungsadresse
     */
    billingAddress: DocumentAddress;

    /**
     * Status der USt-ID-Prüfung
     */
    taxIdVerificationState: TaxIdVerificationState;

    /**
     * Bestellt durch Ansprechpartner
     */
    orderedByPersonRef: ApiObjectReference;

    /**
     * Report-Gruppe, falls vom Standard abweichend
     */
    reportGroupRef: ApiObjectReference;
}

export interface DocumentAdditionalInfo {

    /**
     * Steuersachverhalt Herkunft
     */
    taxSituationOrigin: TaxSituationOrigin;

    /**
     * Herkunft der Sprache
     */
    languageCodeOrigin: LanguageCodeOrigin;

    /**
     * Parameter, welche im {@link DocumentContext} verwendet wurden
     */
    contextParameters: Array<AdditionalParameter>;

    /**
     * Herkunft der Käufer-Referenz
     */
    buyerReferenceOrigin: BuyerReferenceOrigin;

    /**
     * Herkunft des Berechnungsmodus
     */
    calculationModeOrigin: CalculationModeOrigin;

    /**
     * Ziele für den Wareneingang für den gesamten Beleg
     */
    incomingGoodsTarget: DocumentAdditionalInfo$IncomingGoodsTarget;

    /**
     * Herkunft des E-Rechnungs-Profils
     */
    en16931Origin: EN16931Origin;

    /**
     * Übersetzungen
     */
    translations: Array<DocumentAdditionalInfo$PrintedTranslatedField>;

    /**
     * Enthält die Ergebnisse von vorherigen Entscheidungen des Benutzers zu diesem Document
     */
    previousDecisions: string;

    /**
     * Ziele für den Wareneingang je Belegposition
     */
    incomingGoodsTargetsPerLine: Array<DocumentAdditionalInfo$IncomingGoodsTargetOfLine>;

    /**
     * Ergebnisse zu Übernahme "Auftrag in Kommissionierung"
     */
    orderIntoPickingConvertResults: Array<DocumentAdditionalInfo$OrderIntoPickingConvertResult>;
}

export interface DocumentAdditionalInfo$IncomingGoodsTarget {

    /**
     * Pickwagen für den Wareneingang
     */
    pickTrolleyId: number;

    /**
     * Lagerplatz für den Wareneingang
     */
    storageBinId: number;
}

export interface DocumentAdditionalInfo$IncomingGoodsTargetOfLine {

    /**
     * Pickwagen für den Wareneingang
     */
    pickTrolleyId: number;

    /**
     * Lagerplatz für den Wareneingang
     */
    storageBinId: number;

    /**
     * ID einer Belegposition
     */
    lineId: number;

    /**
     * ID einer Vorbelegposition
     */
    sourceLineId: number;
}

export interface DocumentAdditionalInfo$OrderIntoPickingConvertResult {

    /**
     * War die Übernahme erfolgreich?
     */
    success: boolean;

    /**
     * War es eine Testübernahme?
     */
    testRun: boolean;

    /**
     * Protokoll der Übernahme
     */
    logText: string;
}

export interface DocumentAdditionalInfo$PrintedTranslatedField {

    /**
     * name des Feldes
     */
    fieldName: string;

    /**
     * zur welcher Entity?
     */
    entityName: string;

    /**
     * Übersetzung
     */
    content: string;
}

export interface DocumentAddress {

    /**
     * city
     */
    city: string;

    /**
     * Region
     */
    regionRef: ApiObjectReference;

    /**
     * Post office box
     */
    postOfficeBox: string;

    /**
     * country code IsoAlpha3
     */
    countryCode: string;

    /**
     * Street
     */
    street: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Mail contact
     */
    mailContact: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * GLN
     */
    globalLocationNumber: string;

    /**
     * Lieferart
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Postcode
     */
    postcode: string;

    /**
     * Language Code
     */
    languageCode: string;

    /**
     * Zahlungsbedingungen
     */
    paymentTermRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Additional address line1
     */
    additionalAddressLine1: string;

    /**
     * Additional address line2
     */
    additionalAddressLine2: string;

    /**
     * Lieferbedingungen
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * Street address number
     */
    streetAddressNumber: string;

    /**
     * address line 3
     */
    name3: string;

    /**
     * Phone contact
     */
    phoneContact: string;

    /**
     * Zahlungsart
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * Referenz zum Account
     */
    accountRef: ApiObjectReference;

    /**
     * salutation for this address
     */
    salutation: string;

    /**
     * address line 2
     */
    name2: string;

    /**
     * address line 1
     */
    name1: string;
}

export const enum DocumentCategory {
    CUSTOMER_OFFER = 'CUSTOMER_OFFER',
    CUSTOMER_ORDER = 'CUSTOMER_ORDER',
    CUSTOMER_DELIVERY_DOCUMENT = 'CUSTOMER_DELIVERY_DOCUMENT',
    CUSTOMER_INVOICE = 'CUSTOMER_INVOICE',
    CUSTOMER_PROFORMA_INVOICE = 'CUSTOMER_PROFORMA_INVOICE',
    CUSTOMER_DELIVERY_INVOICE = 'CUSTOMER_DELIVERY_INVOICE',
    CUSTOMER_PARTIAL_INVOICE = 'CUSTOMER_PARTIAL_INVOICE',
    CUSTOMER_FINAL_INVOICE = 'CUSTOMER_FINAL_INVOICE',
    CUSTOMER_INVOICE_CANCELLATION = 'CUSTOMER_INVOICE_CANCELLATION',
    CUSTOMER_DELIVERY_INVOICE_CANCELLATION = 'CUSTOMER_DELIVERY_INVOICE_CANCELLATION',
    CUSTOMER_PARTIAL_INVOICE_CANCELLATION = 'CUSTOMER_PARTIAL_INVOICE_CANCELLATION',
    CUSTOMER_FINAL_INVOICE_CANCELLATION = 'CUSTOMER_FINAL_INVOICE_CANCELLATION',
    CUSTOMER_DEPOSIT_INVOICE = 'CUSTOMER_DEPOSIT_INVOICE',
    CUSTOMER_DEPOSIT_INVOICE_CANCELLATION = 'CUSTOMER_DEPOSIT_INVOICE_CANCELLATION',
    CUSTOMER_CREDIT_NOTE_WITH_STOCK = 'CUSTOMER_CREDIT_NOTE_WITH_STOCK',
    CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK = 'CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK',
    CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION = 'CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION',
    CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION = 'CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION',
    SUPPLIER_PRICE_REQUEST = 'SUPPLIER_PRICE_REQUEST',
    SUPPLIER_ORDER = 'SUPPLIER_ORDER',
    SUPPLIER_DELIVERY_DOCUMENT = 'SUPPLIER_DELIVERY_DOCUMENT',
    SUPPLIER_INVOICE = 'SUPPLIER_INVOICE',
    SUPPLIER_DELIVERY_INVOICE = 'SUPPLIER_DELIVERY_INVOICE',
    SUPPLIER_CREDIT_NOTE_WITH_STOCK = 'SUPPLIER_CREDIT_NOTE_WITH_STOCK',
    SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK = 'SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK',
    COMMISSION_SETTLEMENT = 'COMMISSION_SETTLEMENT',
    COMMISSION_SETTLEMENT_CANCELLATION = 'COMMISSION_SETTLEMENT_CANCELLATION',
    SUPPLIER_COMMISSION_CREDIT_NOTE = 'SUPPLIER_COMMISSION_CREDIT_NOTE',
    SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION = 'SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION',
    CUSTOMER_SUBSCRIPTION_CONTRACT = 'CUSTOMER_SUBSCRIPTION_CONTRACT',
    POS_CASH_JOURNAL_OPENING = 'POS_CASH_JOURNAL_OPENING',
    POS_CASH_RECEIPT = 'POS_CASH_RECEIPT',
    POS_CASH_RECEIPT_CANCELLATION = 'POS_CASH_RECEIPT_CANCELLATION',
    POS_CASH_JOURNAL_DEPOSIT = 'POS_CASH_JOURNAL_DEPOSIT',
    POS_CASH_JOURNAL_EXPENSE = 'POS_CASH_JOURNAL_EXPENSE',
    POS_CASH_JOURNAL_CLOSING = 'POS_CASH_JOURNAL_CLOSING',
    FABRICATION_ORDER = 'FABRICATION_ORDER'
}

export const enum DocumentCommissionOrigin {
    NOT_COMMISSIONABLE = 'NOT_COMMISSIONABLE',
    USER_DEFINED = 'USER_DEFINED',
    AUTOMATIC = 'AUTOMATIC',
    PREDECESSOR = 'PREDECESSOR',
    RECALCULATE = 'RECALCULATE'
}

export interface DocumentContractDetail {

    /**
     * Cron-Ausdruck zur Berechnung der Fälligkeit
     */
    dueDateCalculation: string;

    /**
     * Laufzeit von
     */
    runtimeFromDate: ScriptingDate;

    /**
     * Vertragsende (nur Kopf)
     */
    endDate: ScriptingDate;

    /**
     * Portal anzeigen?
     */
    publishInPortal: boolean;

    /**
     * Fälligkeit
     */
    dueDate: ScriptingDate;

    /**
     * Vertrag aktiv?
     */
    active: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Direkt abrechnen?
     */
    calculateDirectly: boolean;

    /**
     * Laufzeit bis
     */
    runtimeToDate: ScriptingDate;

    /**
     * Nächste Fälligkeit
     */
    nextDueDate: ScriptingDate;

    /**
     * Letztmöglicher kündigungstermin des Anbieters
     */
    lastProviderCancellationDate: ScriptingDate;

    /**
     * Letztmöglicher kündigungstermin des Kunden
     */
    lastCustomerCancellationDate: ScriptingDate;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Vertragsstart (nur Kopf)
     */
    startDate: ScriptingDate;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentFabricationDetail {

    /**
     * Ziel-Lager
     */
    targetStorageRef: ApiObjectReference;

    /**
     * Material-Lager
     */
    componentsStorageRef: ApiObjectReference;

    /**
     * Notiz
     */
    note: string;

    /**
     * QS-Lager
     */
    qualityAssuranceStorageRef: ApiObjectReference;

    /**
     * Werkbank-Lager
     */
    workbenchStorageRef: ApiObjectReference;

    /**
     * Freifeld
     */
    custom: EavFabrication;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Defekt-Lager
     */
    defectiveStorageRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Minimaler Erfüllungsgrad
     */
    minimumDegreeOfFulfillment: number;

    /**
     * Startdatum
     */
    startDate: ScriptingDate;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentFinanceBooking {

    /**
     * Kostenstelle
     */
    costCenter1: string;

    /**
     * FiBu-Kontonummer
     */
    ledgerNumber: string;

    /**
     * Id der Dokumentzeile
     */
    documentLineId: number;

    /**
     * Buchungstext
     */
    description: string;

    /**
     * Buchungsschlüssel
     */
    transactionKey: string;

    /**
     * Kommentar
     */
    comment: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DocumentImportType {
    NOT_IMPORTED = 'NOT_IMPORTED',
    TRANSFERABLE = 'TRANSFERABLE',
    TRANSFERABLE_AND_EDITABLE = 'TRANSFERABLE_AND_EDITABLE',
    HISTORICAL_DATA = 'HISTORICAL_DATA',
    E_INVOICE = 'E_INVOICE'
}

export interface DocumentLine {

    /**
     * Zolltarifnummer
     */
    customsTariffNumber: string;

    /**
     * Leistungsdatum
     */
    performanceDate: ScriptingDate;

    /**
     * Land der Herkunft
     */
    country: CountryReference;

    /**
     * wurde aufgelöst in Gebindeartikel
     */
    convertedIntoBundleArticleRef: ApiObjectReference;

    /**
     * bestätigtes Ende des Lieferzeitraums (nur notwendig für Lieferrzeiträume, wenn Lieferdatum gesetzt)
     */
    confirmedDeliveryDateEnd: ScriptingDate;

    /**
     * verarbeitete Menge
     */
    quantityCommitted: number;

    /**
     * Steuern
     */
    taxes: Array<DocumentTax>;

    /**
     * Kasseninformationen
     */
    posDetail: DocumentLinePosDetail;

    /**
     * Interne Steuerinformationen
     */
    internalVatInfo: string;

    /**
     * Garantie in Monaten
     */
    warrantyInMonths: number;

    /**
     * bestätigtes Lieferdatum
     */
    confirmedDeliveryDate: ScriptingDate;

    /**
     * Versenderspezifische Informationen
     */
    packageOptions: string;

    /**
     * Artikelnummer
     */
    number: string;

    /**
     * Gesamtbruttogewicht
     */
    totalGrossWeight: number;

    /**
     * Referenz zur Kundenauftragszeile
     */
    customerOrderLineRef: DocumentLineRef;

    /**
     * skontierbare Position?
     */
    cashDiscountable: boolean;

    /**
     * Provisionen
     */
    commissions: Array<DocumentLineCommission>;

    /**
     * Preis pro Menge [Brutto, Netto]
     */
    price: number;

    /**
     * Gesamtpreis Position in Basiswährung
     */
    baseTotalLinePrice: number;

    /**
     * FiBu-Buchung
     */
    financeBooking: DocumentFinanceBooking;

    /**
     * Positionstyp
     */
    lineType: DocumentLineType;

    /**
     * vorgeorderte Menge in Pickvorgang
     */
    preOrderPickedQuantity: number;

    /**
     * Referenz zur Lieferantenbestellungszeile
     */
    supplierOrderLineIds: Array<number>;

    /**
     * Summe Positionspreisänderungen [Brutto, Netto]
     */
    totalLinePriceModifier: number;

    /**
     * Vorgabe zu Streckengeschäft
     */
    dropShippingPolicy: DropShippingPolicy;

    /**
     * Vorgabe §13b UStG Artikel
     */
    articleTaxLiabilityReversed: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Serientyp
     */
    serialType: ArticleSerialType;

    /**
     * Positionsnummer über alle Artikelpositionen hinweg
     */
    positionOfArticleLine: number;

    /**
     * Externe Referenz zum VDS-Paket
     */
    externalReferenceVds: string;

    /**
     * Preis pro Einheit in Basiswährung
     */
    basePrice: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * Steuerschema
     */
    taxSchemaRef: ApiObjectReference;

    /**
     * Preiseinheit
     */
    priceUnit: number;

    /**
     * Lieferart
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Preisanpassungen - Position Basiswährung
     */
    baseTotalLinePriceModifier: number;

    /**
     * Region der Bezahlung wenn aus Inland kommt
     */
    countryRegion: ApiObjectReference;

    /**
     * Steuerbetrag
     */
    vat: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Provisionsursprung
     */
    commissionOrigin: DocumentCommissionOrigin;

    /**
     * Nettogewicht
     */
    netWeight: number;

    /**
     * Netto-Gesamtpreis (nach Preisänderungen)
     */
    salesValueNet: number;

    /**
     * Name des Artikels
     */
    name: string;

    /**
     * Gesamtnettogewicht
     */
    totalNetWeight: number;

    /**
     * Positions-Nummer
     */
    position: number;

    /**
     * Buchungen
     */
    bookings: Array<DocumentLineBooking>;

    /**
     * unit gross Volume in cubic meters
     */
    unitGrossVolumeInCubicMeters: number;

    /**
     * wird §13b UStG angewendet?
     */
    taxLiabilityReversed: boolean;

    /**
     * Komponenten
     */
    components: Array<DocumentLineComponent>;

    /**
     * Summe Dokumentpreisänderungen [Brutto, Netto]
     */
    totalDocumentPriceModifier: number;

    /**
     * Versanddatum
     */
    shippingDate: ScriptingDate;

    /**
     * Menge in Pick-Vorgang
     */
    pickingQuantity: number;

    /**
     * unit gross Volume in cubic meters
     */
    totalGrossVolumeInCubicMeters: number;

    /**
     * Kalkulationsstruktur
     */
    calculationData: string;

    /**
     * Beschreibung des Artikels
     */
    description: string;

    /**
     * Referenz zur Vorbelegzeile
     */
    sourceLineRef: DocumentLineRef;

    /**
     * Preisherkunft
     */
    priceOrigin: ProductPriceOrigin;

    /**
     * Referenz zum Lager
     */
    storage: ApiObjectReference;

    /**
     * Preisermittlungskriterien
     */
    priceSelectionCriteria: PriceSelectionCriteria;

    /**
     * Rohertragsermittlung
     */
    revenueCalculation: RevenueCalculation;

    /**
     * Einheitentyp
     */
    unitType: UnitTypeReference;

    /**
     * Positionssumme [Brutto, Netto], also Preis*Menge ./. Positionsrabatte
     */
    totalLinePrice: number;

    /**
     * Zubehör Einfügeart
     */
    insertTerm: AccessoryInsertTerm;

    /**
     * Referenz zur Basiszeile
     */
    baseLineId: number;

    /**
     * Einheit Bruttogewicht
     */
    grossWeightUnit: UnitTypeReference;

    /**
     * rabattierbare Position?
     */
    discountable: boolean;

    /**
     * Lieferdatum
     */
    deliveryDate: ScriptingDate;

    /**
     * vorr. Ende des Lieferzeitraums (nur notwendig für Lieferzeiträume, wenn Lieferdatum gesetzt)
     */
    deliveryDateEnd: ScriptingDate;

    /**
     * Produkttyp
     */
    productType: ProductType;

    /**
     * Nettoverkaufswert der Position in Basiswährung
     */
    baseSalesValueNet: number;

    /**
     * Vertragsinformationen
     */
    contractDetail: DocumentContractDetail;

    /**
     * Einheit Nettogewicht
     */
    netWeightUnit: UnitTypeReference;

    /**
     * Menge
     */
    quantity: number;

    /**
     * Liefertext
     */
    deliveryText: string;

    /**
     * Vorgabewert für die Preiskalkulation
     */
    presetPrice: number;

    /**
     * Produktionsdetails
     */
    fabricationDetail: DocumentLineFabricationDetail;

    /**
     * Freifelder
     */
    custom: EavDocumentline;

    /**
     * Artikel
     */
    articleId: number;

    /**
     * Abschlagsposition?
     */
    partialInvoice: boolean;

    /**
     * Interne Preisänderungsinformationen
     */
    internalPriceModifierInfo: string;

    /**
     * Preisanpassungen - anteilig durch Beleg Basiswährung
     */
    baseTotalDocumentPriceModifier: number;

    /**
     * Lieferbedingung
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * Bruttogewicht
     */
    grossWeight: number;

    /**
     * Positionstexte
     */
    texts: Array<DocumentText>;

    /**
     * provisionierbare Position?
     */
    commissionable: boolean;

    /**
     * angewendete Preisänderungen
     */
    priceModifiers: Array<DocumentPriceModifier>;

    /**
     * Enthält die Ergebnisse von vorherigen Entscheidungen des Benutzers zu dieser DocumentLine
     */
    previousDecisions: JsonNode;

    /**
     * Hat der Artikel Zubehör?
     */
    hasAccessories: boolean;

    /**
     * ist diese Position komplett verarbeitet?
     */
    complete: boolean;

    /**
     * Produktvariantenwerte
     */
    variantValues: Array<ApiObjectReference>;
}

export interface DocumentLineBooking {

    /**
     * Notiz
     */
    note: string;

    /**
     * Seriennummer (Objekt)
     */
    serialNumberRef: ApiObjectReference;

    /**
     * Gebuchte Menge
     */
    quantity: number;

    /**
     * Seriennummer 2
     */
    serialNumber2: string;

    /**
     * Seriennummer 1
     */
    serialNumber1: string;

    /**
     * Bebuchter Lagerplatz
     */
    storageBinRef: ApiObjectReference;

    /**
     * Bebuchter Artikel
     */
    articleRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Haltbarkeitsdatum
     */
    expiryDate: ScriptingDate;

    /**
     * Unique Device Identifier (UDI)
     */
    udi: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineCommission {

    /**
     * the currency-code IsoAlpha3
     */
    valueCurrencyCode: string;

    /**
     * Provisionstyp
     */
    valueType: ValueType;

    /**
     * Herkunft
     */
    origin: DocumentCommissionOrigin;

    /**
     * Beschreibung
     */
    description: string;

    /**
     * Kommentar
     */
    comment: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Vertreter
     */
    salesAgentAccountRef: ApiObjectReference;

    /**
     * Provision Prozent/Wert
     */
    value: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineComponent {

    /**
     * Menge
     */
    quantity: number;

    /**
     * Menge in Kommissionierung
     */
    pickingQuantity: number;

    /**
     * Produktionsdetails
     */
    fabricationDetail: DocumentLineComponentFabricationDetail;

    /**
     * Freifelder
     */
    custom: EavDocumentlinecomponent;

    /**
     * Gelieferte Menge
     */
    quantityCommitted: number;

    /**
     * Referenz auf den Artikel der Komponente
     */
    articleId: number;

    /**
     * Beschreibung des Artikels
     */
    description: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Referenz auf die Komponente im Quell-Document
     */
    sourceDocumentLineComponentId: number;

    /**
     * Texte zu dieser Komponente
     */
    texts: Array<DocumentText>;

    /**
     * Name des Artikels
     */
    name: string;

    /**
     * Menge pro Baugruppe
     */
    quantityPerAssemblyGroup: number;

    /**
     * Position der Komponente in der Baugruppe
     */
    position: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Buchungen zu dieser Komponente
     */
    bookings: Array<DocumentLineBooking>;

    /**
     * Serientyp
     */
    serialType: ArticleSerialType;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineComponentFabricationDetail {

    /**
     * Freifeld
     */
    custom: EavFabricationlinecomponent;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Für S/N-Vererbung verwenden
     */
    serialInheritanceComponent: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineFabricationDetail {

    /**
     * Freifeld
     */
    custom: EavFabricationline;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLinePosDetail {

    /**
     * Zahlungsart
     */
    paymentMethodId: number;

    /**
     * Typ der Einlage/Ausgabe
     */
    depositExpenseTypeId: number;

    /**
     * Typ der Position
     */
    posLineType: PosLineType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentLineRef {

    /**
     * Belegnummer
     */
    number: string;

    /**
     * quantity
     */
    quantity: number;

    /**
     * Belegart
     */
    documentType: string;

    /**
     * Artikelnummer
     */
    articleNumber: string;

    /**
     * price per quantity [GROSS, NET]
     */
    price: number;

    /**
     * Kurzbezeichnung des Kunden
     */
    displayName: string;

    /**
     * Artikelbezeichnung
     */
    name: string;

    /**
     * Id des Dokuments
     */
    documentId: number;

    /**
     * Id der Dokumentzeile
     */
    id: number;

    /**
     * Positions-Nummer
     */
    position: number;

    /**
     * Belegtyp
     */
    category: DocumentCategory;

    /**
     * Belegstatus
     */
    documentState: string;
}

export const enum DocumentLineType {
    ARTICLE_LINE = 'ARTICLE_LINE',
    ALTERNATIVE_POSITION = 'ALTERNATIVE_POSITION',
    LINK_POSITION = 'LINK_POSITION',
    OPTIONAL_POSITION = 'OPTIONAL_POSITION',
    TEXT_LINE = 'TEXT_LINE',
    SHIPPING_COST_LINE = 'SHIPPING_COST_LINE',
    SUBTOTAL = 'SUBTOTAL',
    POS = 'POS'
}

export interface DocumentPosDetail {

    /**
     * Kassenbuch
     */
    cashJournalRef: ApiObjectReference;

    /**
     * Kasse
     */
    posRegisterRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * TSS Signatur
     */
    tssSignature: TssSignature;

    /**
     * Kassenschublade
     */
    cashDrawerRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentPosPayment {

    /**
     * Betrag
     */
    amount: number;

    /**
     * Typ der Einlage/Ausgabe
     */
    depositExpenseTypeRef: ApiObjectReference;

    /**
     * Zahlungsart
     */
    posPaymentMethodRef: ApiObjectReference;

    /**
     * Typ der Position
     */
    posLineType: PosLineType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentPriceModifier {

    /**
     * ID of Source entity of price modifier
     */
    sourceId: number;

    /**
     * Berechneter Wert des Modifiers in Basiswährung
     */
    baseCalculatedValue: number;

    /**
     * calculated discount/surcharge
     */
    calculatedValue: number;

    /**
     * modifierType
     */
    modifierType: PriceModifierType;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Wert des Modifiers in Basiswährung
     */
    baseValue: number;

    /**
     * Source of price modifier
     */
    sourceType: DocumentPriceModifier$PriceModifierSourceType;

    /**
     * Type of value
     */
    valueType: ValueType;

    /**
     * Name of modifier
     */
    name: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Value
     */
    value: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DocumentPriceModifier$PriceModifierSourceType {
    CUSTOM = 'CUSTOM',
    PRODUCT = 'PRODUCT',
    DISCOUNT_GROUP = 'DISCOUNT_GROUP'
}

export const enum DocumentQualifier {
    SALE = 'SALE',
    PURCHASE = 'PURCHASE',
    COMMISSION = 'COMMISSION',
    SALES_CONTRACT = 'SALES_CONTRACT',
    PURCHASE_CONTRACT = 'PURCHASE_CONTRACT',
    POINT_OF_SALE = 'POINT_OF_SALE',
    FABRICATION = 'FABRICATION'
}

export interface DocumentRef {

    /**
     * Belegnummer
     */
    number: string;

    /**
     * Belegart
     */
    documentType: string;

    /**
     * ID
     */
    id: number;

    /**
     * Belegtyp
     */
    category: DocumentCategory;

    /**
     * Belegstatus
     */
    documentState: string;
}

export interface DocumentShippingCost {

    /**
     * Wurden die Versandkosten manuell eingetragen?
     */
    manualCosts: boolean;

    /**
     * Die Versandkosten
     */
    costs: number;

    /**
     * Keine Versandkosten (freier Versand)
     */
    freeShipping: boolean;

    /**
     * Texte
     */
    texts: Array<DocumentText>;

    /**
     * Artikelname
     */
    name: string;

    /**
     * Steuern
     */
    taxes: Array<DocumentTax>;

    /**
     * Artikelbeschreibung
     */
    description: string;

    /**
     * Einkaufspreis
     */
    purchasePrice: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentTax {

    /**
     * taxable amount
     */
    taxableAmount: number;

    /**
     * Steuerfrei?
     */
    taxFree: boolean;

    /**
     * Steuerbetrag in Basiswährung
     */
    baseTaxValue: number;

    /**
     * internal calculation infos
     */
    internalCalculationInfo: string;

    /**
     * gross amount
     */
    grossAmount: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Bruttobetrag in Basiswährung
     */
    baseGrossAmount: number;

    /**
     * reference to tax rate
     */
    taxRateRef: ApiObjectReference;

    /**
     * Besteuerbarer Betrag in Basiswährung
     */
    baseTaxableAmount: number;

    /**
     * tax value
     */
    taxValue: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * tax type
     */
    taxType: DocumentTaxType;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DocumentTaxType {
    VAT = 'VAT'
}

export interface DocumentText {

    /**
     * Does this text remain after transfer into a subsequent document
     */
    transferableIntoSubsequentDocuments: boolean;

    textTemplateId: number;

    /**
     * position relative to the product line OR Document. For usage within text-line, this position is irrelevant
     */
    textPosition: TextPosition;

    /**
     * Wurde entfernt und soll deshalb nicht mehr angezeigt werden.
     */
    deleted: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * if this attribute is used, the text is used as free-text
     */
    content: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

/**
 * Transfer-to-State-Request für Belege
 */
export interface DocumentTransferToStateRequest {

    copyTargetDocumentType: DocumentType;

    /**
     * ID eines Belegs
     */
    documentId: number;

    /**
     * Zusätzliche Parameter
     */
    parameters: Array<AdditionalParameter>;

    /**
     * Transition zum gewünschten Ziel-Status
     */
    transition: EDocumentTransition;
}

/**
 * Transfer-to-Type-Request für Belege
 */
export interface DocumentTransferToTypeRequest {

    /**
     * Gewünschte Ziel-Belegart
     */
    targetDocumentType: string;

    /**
     * ID eines Belegs
     */
    documentId: number;

    /**
     * Soll der Beleg kopiert werden? (Standard: nein)
     */
    copyDocument: boolean;

    /**
     * Zusätzliche Parameter
     */
    parameters: Array<AdditionalParameter>;
}

export interface DocumentType {

    /**
     * Darf dieser Typ zur Neuanlage von Belegen verwendet werden?
     */
    showForManualDocumentCreation: boolean;

    /**
     * ist diese Belegart aktiv
     */
    active: boolean;

    /**
     * Referenz auf die Dokumentenart im DMS
     */
    shelfDocumentTypeRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * label/name of this type
     */
    labels: Array<DocumentTypeLabel>;

    /**
     * Zählerkreis
     */
    sequencerConfiguration: SequencerConfiguration;

    /**
     * nächste Belegnummer
     */
    nextNumber: string;

    /**
     * Sortierung
     */
    sortOrder: number;

    /**
     * follow up document types
     */
    followUpDocumentTypes: Array<DocumentTypeFollowUp>;

    /**
     * Verhalten zugeordnetem DMS-Dokument
     */
    publishingPolicy: PublishingPolicy;

    /**
     * Geschäftsbeziehung verpflichtend
     */
    requiresBusinessRelationship: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * associated category
     */
    category: DocumentCategory;

    /**
     * ist diese Belegart die Standard-Belegart für ihre Kategorie?
     */
    defaultTypeOfCategory: boolean;

    /**
     * unique key for this type (internal representation)
     */
    key: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentTypeFollowUp {

    /**
     * ist diese Folge-Belegart aktiv
     */
    active: boolean;

    /**
     * target type
     */
    targetDocumentTypeRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * source type
     */
    sourceDocumentTypeRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentTypeLabel {

    /**
     * label/name of this type (for printout)
     */
    labelPrintout: string;

    /**
     * label/name of this type (for display)
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Language code
     */
    languageCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface DocumentTypeState {

    /**
     * additional state information
     */
    definition: DocumentTypeState$StateDefinition;

    /**
     * label/name of this state
     */
    label: string;

    /**
     * unique key for this state
     */
    key: string;
}

export const enum DocumentTypeState$StateDefinition {
    SELECTABLE_TYPES = 'SELECTABLE_TYPES',
    EDITABLE = 'EDITABLE',
    DELETED = 'DELETED'
}

export interface DocumentTypeTerm {

    /**
     * documentType
     */
    documentType: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * sprache
     */
    languageCode: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * content
     */
    content: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum DropShippingPolicy {
    ANY = 'ANY',
    DROP_SHIPPING = 'DROP_SHIPPING',
    STORAGE = 'STORAGE',
    STORAGE_WITH_FALLBACK_TO_DROP_SHIPPING = 'STORAGE_WITH_FALLBACK_TO_DROP_SHIPPING'
}

export const enum ECrmPriorityType {
    CRITICAL = 'CRITICAL',
    NORMAL = 'NORMAL',
    LOW = 'LOW'
}

export const enum ECrmSpecialDocumentRefType {
    /**Normaler Beleg **/
    NONE = 'NONE',
    /**Angebot **/
    CUSTOMER_OFFER = 'CUSTOMER_OFFER',
    /**Auftrag **/
    CUSTOMER_ORDER = 'CUSTOMER_ORDER',
    /**Abrechnungsbeleg **/
    BILLING_DOCUMENT = 'BILLING_DOCUMENT'
}

export const enum ECrmType {
    /**Aufgaben **/
    TASK = 'TASK',
    /**Deals **/
    DEAL = 'DEAL',
    /**Projekte **/
    PROJECT = 'PROJECT'
}

export const enum EDocumentCategory {
    CUSTOMER_OFFER = 'CUSTOMER_OFFER',
    CUSTOMER_ORDER = 'CUSTOMER_ORDER',
    CUSTOMER_DELIVERY_DOCUMENT = 'CUSTOMER_DELIVERY_DOCUMENT',
    CUSTOMER_INVOICE = 'CUSTOMER_INVOICE',
    CUSTOMER_PROFORMA_INVOICE = 'CUSTOMER_PROFORMA_INVOICE',
    CUSTOMER_DELIVERY_INVOICE = 'CUSTOMER_DELIVERY_INVOICE',
    CUSTOMER_DEPOSIT_INVOICE = 'CUSTOMER_DEPOSIT_INVOICE',
    CUSTOMER_DEPOSIT_INVOICE_CANCELLATION = 'CUSTOMER_DEPOSIT_INVOICE_CANCELLATION',
    CUSTOMER_PARTIAL_INVOICE = 'CUSTOMER_PARTIAL_INVOICE',
    CUSTOMER_PARTIAL_INVOICE_CANCELLATION = 'CUSTOMER_PARTIAL_INVOICE_CANCELLATION',
    CUSTOMER_FINAL_INVOICE = 'CUSTOMER_FINAL_INVOICE',
    CUSTOMER_FINAL_INVOICE_CANCELLATION = 'CUSTOMER_FINAL_INVOICE_CANCELLATION',
    CUSTOMER_CREDIT_NOTE_WITH_STOCK = 'CUSTOMER_CREDIT_NOTE_WITH_STOCK',
    CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK = 'CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK',
    CUSTOMER_INVOICE_CANCELLATION = 'CUSTOMER_INVOICE_CANCELLATION',
    CUSTOMER_DELIVERY_INVOICE_CANCELLATION = 'CUSTOMER_DELIVERY_INVOICE_CANCELLATION',
    CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION = 'CUSTOMER_CREDIT_NOTE_WITHOUT_STOCK_CANCELLATION',
    CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION = 'CUSTOMER_CREDIT_NOTE_WITH_STOCK_CANCELLATION',
    SUPPLIER_PRICE_REQUEST = 'SUPPLIER_PRICE_REQUEST',
    SUPPLIER_ORDER = 'SUPPLIER_ORDER',
    SUPPLIER_DELIVERY_DOCUMENT = 'SUPPLIER_DELIVERY_DOCUMENT',
    SUPPLIER_INVOICE = 'SUPPLIER_INVOICE',
    SUPPLIER_DELIVERY_INVOICE = 'SUPPLIER_DELIVERY_INVOICE',
    SUPPLIER_CREDIT_NOTE_WITH_STOCK = 'SUPPLIER_CREDIT_NOTE_WITH_STOCK',
    SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK = 'SUPPLIER_CREDIT_NOTE_WITHOUT_STOCK',
    COMMISSION_SETTLEMENT = 'COMMISSION_SETTLEMENT',
    COMMISSION_SETTLEMENT_CANCELLATION = 'COMMISSION_SETTLEMENT_CANCELLATION',
    SUPPLIER_COMMISSION_CREDIT_NOTE = 'SUPPLIER_COMMISSION_CREDIT_NOTE',
    SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION = 'SUPPLIER_COMMISSION_CREDIT_NOTE_CANCELLATION',
    CUSTOMER_SUBSCRIPTION_CONTRACT = 'CUSTOMER_SUBSCRIPTION_CONTRACT',
    POS_CASH_JOURNAL_OPENING = 'POS_CASH_JOURNAL_OPENING',
    POS_CASH_RECEIPT = 'POS_CASH_RECEIPT',
    POS_CASH_RECEIPT_CANCELLATION = 'POS_CASH_RECEIPT_CANCELLATION',
    POS_CASH_JOURNAL_DEPOSIT = 'POS_CASH_JOURNAL_DEPOSIT',
    POS_CASH_JOURNAL_EXPENSE = 'POS_CASH_JOURNAL_EXPENSE',
    POS_CASH_JOURNAL_CLOSING = 'POS_CASH_JOURNAL_CLOSING',
    FABRICATION_ORDER = 'FABRICATION_ORDER'
}

export const enum EDocumentQualifier {
    SALE = 'SALE',
    PURCHASE = 'PURCHASE',
    COMMISSION = 'COMMISSION',
    POINT_OF_SALE = 'POINT_OF_SALE',
    SALES_CONTRACT = 'SALES_CONTRACT',
    PURCHASE_CONTRACT = 'PURCHASE_CONTRACT',
    FABRICATION = 'FABRICATION'
}

export const enum EDocumentTransition {
    /**Bearbeitung beginnen **/
    BEGIN_EDITING = 'BEGIN_EDITING',
    /**Speichern **/
    END_EDITING = 'END_EDITING',
    /**Bearbeitung abbrechen **/
    CANCEL_EDITING = 'CANCEL_EDITING',
    /**Bearbeiten (für übernommenen Beleg) **/
    EDIT_ACCEPTED = 'EDIT_ACCEPTED',
    /**Bearbeitung abbrechen (für übernommenen Beleg) **/
    CANCEL_EDITING_ACCEPTED = 'CANCEL_EDITING_ACCEPTED',
    /**Speichern (für übernommenen Beleg) **/
    SAVE_ACCEPTED = 'SAVE_ACCEPTED',
    /**Auftrag in Kommissionierung übernehmen **/
    ORDER_IN_PICKING = 'ORDER_IN_PICKING',
    /**Auftrags aus Kommissionierung stornieren **/
    ORDER_RESET_FROM_PICKING = 'ORDER_RESET_FROM_PICKING',
    /**Beleg auflösen **/
    DISSOLVE = 'DISSOLVE',
    /**Produktion starten **/
    START_FABRICATION = 'START_FABRICATION',
    /**Produktion pausieren **/
    PAUSE_FABRICATION = 'PAUSE_FABRICATION',
    /**Produktion fortsetzen **/
    RESUME_FABRICATION = 'RESUME_FABRICATION',
    /**Produktion beenden **/
    COMPLETE_FABRICATION = 'COMPLETE_FABRICATION',
    /**QS-Prüfung starten **/
    START_FABRICATION_QA = 'START_FABRICATION_QA',
    /**QS-Prüfung abbrechen **/
    CANCEL_FABRICATION_QA = 'CANCEL_FABRICATION_QA',
    /**QS-Prüfung abschließen **/
    FINISH_FABRICATION_QA = 'FINISH_FABRICATION_QA',
    /**Produktion abschließen **/
    FINISH_FABRICATION = 'FINISH_FABRICATION'
}

export const enum EInvoiceValidationState {
    NOT_VALIDATED = 'NOT_VALIDATED',
    VALID = 'VALID',
    NOT_VALID = 'NOT_VALID'
}

export const enum EN16931Origin {
    FROM_BILLING_ADDRESS = 'FROM_BILLING_ADDRESS',
    FROM_DEFAULT_ADDRESS = 'FROM_DEFAULT_ADDRESS',
    FROM_ACCOUNT_PARAMS = 'FROM_ACCOUNT_PARAMS',
    USER_DEFINED = 'USER_DEFINED'
}

export const enum EN16931Profile {
    ZUGFERD = 'ZUGFERD',
    XRECHNUNG = 'XRECHNUNG',
    NO_EN_PROFILE = 'NO_EN_PROFILE'
}

export const enum EWorkflowInstanceState {
    /**Erstellt **/
    CREATED = 'CREATED',
    /**In Verarbeitung **/
    IN_PROCESS = 'IN_PROCESS',
    /**Erfolgreich beendet **/
    COMPLETED_SUCCESSFULLY = 'COMPLETED_SUCCESSFULLY',
    /**Fehlgeschlagen **/
    COMPLETED_WITH_FAILURE = 'COMPLETED_WITH_FAILURE',
    /**Fehlerhaft **/
    ERRONEOUS = 'ERRONEOUS',
    /**Abgestürzt abgebrochen **/
    ABORTED_CRASHED = 'ABORTED_CRASHED',
    /**Manuell abgebrochen **/
    ABORTED_MANUALLY = 'ABORTED_MANUALLY',
    /**Abgestürzt **/
    CRASHED = 'CRASHED',
    /**Wartend **/
    WAITING = 'WAITING',
    /**Unterbrochen **/
    INTERRUPTED = 'INTERRUPTED'
}

export const enum ExchangeRateOrigin {
    AUTOMATIC = 'AUTOMATIC',
    AUTOMATIC_FOR_CURRENT_DATE = 'AUTOMATIC_FOR_CURRENT_DATE',
    USER_DEFINED = 'USER_DEFINED'
}

export const enum FabricationOfComponents {
    NEVER = 'NEVER',
    COMPLETELY_IF_NECESSARY = 'COMPLETELY_IF_NECESSARY',
    REQUIRED_QUANTITY_IF_NECESSARY = 'REQUIRED_QUANTITY_IF_NECESSARY',
    ALWAYS = 'ALWAYS'
}

export interface Group {

    /**
     * roles associated with this group
     */
    roles: Array<ApiObjectReference>;

    /**
     * Is the group active?
     */
    active: boolean;

    /**
     * Description of this Group
     */
    description: string;

    /**
     * Label of this Group
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * users associated with this group
     */
    users: Array<ApiObjectReference>;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

/**
 * Zu importierende Daten
 */
export interface ImportDataMap {
}

export interface JsonNode {
}

export const enum LanguageCodeOrigin {
    FROM_DELIVERY_ADDRESS = 'FROM_DELIVERY_ADDRESS',
    FROM_BILLING_ADDRESS = 'FROM_BILLING_ADDRESS',
    FROM_DEFAULT_ADDRESS = 'FROM_DEFAULT_ADDRESS',
    FROM_MY_COMPANY = 'FROM_MY_COMPANY'
}

export const enum ListingState {
    DISABLED = 'DISABLED',
    NEED_SYNCHRONIZE = 'NEED_SYNCHRONIZE',
    QUEUED_FOR_SYNCHRONIZE = 'QUEUED_FOR_SYNCHRONIZE',
    SYNCHRONIZED = 'SYNCHRONIZED',
    ERRONEOUS = 'ERRONEOUS',
    NEED_DELETION = 'NEED_DELETION',
    QUEUED_FOR_DELETION = 'QUEUED_FOR_DELETION'
}

export interface MetaInfo {

    /**
     * Created At Timestamp
     */
    createdAt: ScriptingDateTime;

    /**
     * TenantUser-Identifier of the creator
     */
    createdFrom: number;

    /**
     * TenantUser-Identifier of most recent updater
     */
    updatedFrom: number;

    /**
     * Last Updated AT Timestamp
     */
    updatedAt: ScriptingDateTime;
}

export interface NotificationDataprovider {

    referenceable: Referenceable;

    links: Set<Referenceable>;

    event: NotificationEventConfig<Object>;
}

export interface NotificationEventConfig<Object> {
}

export const enum OrderStackProcessingType {
    NO_PICKING = 'NO_PICKING',
    ACCORDING_TO_CRITERIA = 'ACCORDING_TO_CRITERIA',
    ONLY_FULL_ORDER = 'ONLY_FULL_ORDER',
    ONLY_FULL_ORDER_LINES = 'ONLY_FULL_ORDER_LINES',
    AVAILABLE_QUANTITIES = 'AVAILABLE_QUANTITIES',
    NO_PROCESSING = 'NO_PROCESSING',
    FULL_ORDER_LINES_MAX_TWO_PARTIAL_DELIVERIES = 'FULL_ORDER_LINES_MAX_TWO_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_MAX_TWO_PARTIAL_DELIVERIES = 'AVAILABLE_QUANTITIES_MAX_TWO_PARTIAL_DELIVERIES',
    FULL_ORDER_LINES_MAX_THREE_PARTIAL_DELIVERIES = 'FULL_ORDER_LINES_MAX_THREE_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_MAX_THREE_PARTIAL_DELIVERIES = 'AVAILABLE_QUANTITIES_MAX_THREE_PARTIAL_DELIVERIES',
    AVAILABLE_QUANTITIES_FINISH_ORDER = 'AVAILABLE_QUANTITIES_FINISH_ORDER'
}

export interface PaymentMethod {

    /**
     * Verbindlichkeiten-OP abschließen?
     */
    closePayable: boolean;

    /**
     * +Tage für Erstlastschrift
     */
    daysToAddForDirectDebit: number;

    /**
     * printDescription
     */
    printDescription: string;

    /**
     * Aktiv?
     */
    active: boolean;

    /**
     * description
     */
    description: string;

    /**
     * label for this payment method
     */
    label: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Payment Type
     */
    paymentType: BankPaymentType;

    /**
     * dunnable
     */
    dunnable: boolean;

    /**
     * translations
     */
    translations: Array<DocumentTypeTerm>;

    /**
     * +Tage für Folgelastschrift
     */
    daysToAddForFollowup: number;

    /**
     * Die Business Transaction
     */
    businessTransaction: ApiObjectReference;

    /**
     * external Payment Id
     */
    externalPaymentId: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Forderungs-OP abschließen?
     */
    closeReceivable: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PaymentTerm {

    /**
     * Percent for Discount 2 
     */
    paymentDiscount2: number;

    /**
     * printDescription
     */
    printDescription: string;

    /**
     * Percent for Discount 1 
     */
    paymentDiscount1: number;

    /**
     * for deposit: remaining term
     */
    remainingTermRef: ApiObjectReference;

    /**
     * Days for Discount 1 
     */
    paymentDays1: number;

    /**
     * Days for Discount 2 
     */
    paymentDays2: number;

    /**
     * Aktiv?
     */
    active: boolean;

    /**
     * description
     */
    description: string;

    /**
     * label for this payment term
     */
    label: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * payment type
     */
    paymentType: PaymentType;

    /**
     * translations
     */
    translations: Array<DocumentTypeTerm>;

    /**
     * Für Kreditlimit berücksichtigen?
     */
    considerForCreditLimit: boolean;

    /**
     * external Payment Id
     */
    externalPaymentId: string;

    /**
     * Days for net payment 
     */
    paymentDaysNet: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Mahnsperre
     */
    dunningBlock: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PaymentTermRef {

    /**
     * Activ
     */
    active: boolean;

    /**
     * a short description
     */
    description: string;

    /**
     * a label
     */
    label: string;

    /**
     * Identifier
     */
    id: number;

    /**
     * payment type
     */
    paymentType: PaymentType;
}

export const enum PaymentType {
    PREPAYMENT = 'PREPAYMENT',
    PAYMENT = 'PAYMENT',
    DEPOSIT = 'DEPOSIT'
}

export const enum PersonGenderType {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    ETC = 'ETC'
}

export interface PickTrolley {

    /**
     * Barcode zur Selektion des Wagens
     */
    identifier: string;

    /**
     * Zu diesem Wagen gehörende Boxen
     */
    pickTrolleyBoxes: Array<PickTrolleyBox>;

    /**
     * Lagerplatz, dem dieser Pickwagen zugeordnet ist
     */
    storageBinRef: StorageBinRef;

    /**
     * Bearbeiter der Pickliste
     */
    processedByUserRef: ApiObjectReference;

    /**
     * Beschreibung des Wagens
     */
    description: string;

    /**
     * Wagen gehört aktuell zu dieser Pickliste
     */
    currentPicklistId: number;

    /**
     * Bezeichnung des Wagens
     */
    label: string;

    /**
     * Typ des Wagens
     */
    type: PickTrolleyType;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Picklistenvorlagen, welche genutzt werden können, um in der MDE Picklisten zu dem Wagen zu erzeugen
     */
    picklistTemplateRefs: Array<ApiObjectReference>;

    /**
     * Wagen gehört zu dieser Pickwagen-Gruppe
     */
    pickTrolleyGroupRef: ApiObjectReference;

    /**
     * Status des Wagens
     */
    state: PickTrolleyState;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PickTrolleyBox {

    /**
     * Box gehört zu diesem Pickwagen
     */
    pickTrolleyId: number;

    /**
     * Barcode zur Selektion der Box
     */
    identifier: string;

    /**
     * Aktuell kommissionierter Beleg
     */
    currentDocumentId: number;

    /**
     * Beschreibung der Box
     */
    description: string;

    /**
     * Bezeichnung der Box
     */
    label: string;

    /**
     * Status der Box
     */
    state: PickTrolleyBoxState;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum PickTrolleyBoxState {
    NOT_ACTIVE = 'NOT_ACTIVE',
    AVAILABLE = 'AVAILABLE',
    RESERVED_FOR_ORDER = 'RESERVED_FOR_ORDER',
    IN_PICKING = 'IN_PICKING',
    READY_FOR_PACKING = 'READY_FOR_PACKING',
    READY_FOR_SHIPPING = 'READY_FOR_SHIPPING',
    WAITING_FOR_DELIVERY_DOCUMENT_AND_SHIPPING_LABEL = 'WAITING_FOR_DELIVERY_DOCUMENT_AND_SHIPPING_LABEL',
    WAITING_FOR_DELIVERY_DOCUMENT = 'WAITING_FOR_DELIVERY_DOCUMENT',
    WAITING_FOR_SHIPPING_LABEL = 'WAITING_FOR_SHIPPING_LABEL'
}

export const enum PickTrolleyState {
    NOT_ACTIVE = 'NOT_ACTIVE',
    AVAILABLE = 'AVAILABLE',
    CONTAINS_GOODS = 'CONTAINS_GOODS',
    RESERVED_FOR_PICKLIST = 'RESERVED_FOR_PICKLIST',
    IN_PICKING = 'IN_PICKING',
    PAUSED_IN_PICKING = 'PAUSED_IN_PICKING',
    READY_FOR_PACKING = 'READY_FOR_PACKING',
    IN_PACKING = 'IN_PACKING',
    PAUSED_IN_PACKING = 'PAUSED_IN_PACKING',
    READY_FOR_SHIPPING = 'READY_FOR_SHIPPING',
    WAITING_FOR_SHIPPING_DOCUMENTS = 'WAITING_FOR_SHIPPING_DOCUMENTS'
}

export const enum PickTrolleyType {
    FREE_COLLECTION = 'FREE_COLLECTION',
    FOR_ROLLING_ORDER_PICKING = 'FOR_ROLLING_ORDER_PICKING',
    FOR_CONSOLIDATION = 'FOR_CONSOLIDATION'
}

export const enum PickingDeviatingQuantity {
    ALLOW_ONLY_ORDERED_QUANTITY = 'ALLOW_ONLY_ORDERED_QUANTITY',
    ALLOW_MINOR_QUANTITY = 'ALLOW_MINOR_QUANTITY',
    ALLOW_OVER_DELIVERY = 'ALLOW_OVER_DELIVERY',
    ALLOW_DEVIATING_QUANTITY = 'ALLOW_DEVIATING_QUANTITY'
}

export const enum PickingType {
    FAST_ORDER_PICKING = 'FAST_ORDER_PICKING',
    SINGLE_ORDER_PICKING = 'SINGLE_ORDER_PICKING',
    COLLECTIVE_ORDER_PICKING = 'COLLECTIVE_ORDER_PICKING',
    ROLLING_ORDER_PICKING = 'ROLLING_ORDER_PICKING',
    CONSOLIDATION = 'CONSOLIDATION',
    REPLENISHMENT = 'REPLENISHMENT',
    MISSING_GOODS_PICKING = 'MISSING_GOODS_PICKING'
}

export interface Picklist {

    /**
     * Ziellager für Nachschub
     */
    targetStorageRef: ApiObjectReference;

    /**
     * Zur Erstellung der Pickliste verwendete Vorlage
     */
    usedTemplate: PicklistTemplate;

    /**
     * Nummer der Pickliste
     */
    number: string;

    /**
     * Status der Pickliste
     */
    state: PicklistState;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Positionen der Pickliste 
     */
    lines: Array<PicklistLine>;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PicklistLine {

    /**
     * Pickbox, mit der diese Position gesammelt werden soll
     */
    pickTrolleyBoxRef: ApiObjectReference;

    /**
     * Gesammelte Menge der Position
     */
    quantityCollected: number;

    /**
     * Komponenten dieser Position, falls es sich bei dieser Position um eine Baugruppe handelt
     */
    components: Array<PicklistLineComponent>;

    /**
     * Artikelbezeichnung
     */
    articleName: string;

    /**
     * Menge der Position
     */
    quantity: number;

    /**
     * Artikelbeschreibung
     */
    articleDescription: string;

    /**
     * ID des Artikels
     */
    articleId: number;

    /**
     * ID des Ziel-Dokuments
     */
    targetDocumentId: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * ID der Quell-Dokumentposition
     */
    sourceDocumentLineId: number;

    /**
     * Lageranzeigename
     */
    storageDisplayName: string;

    /**
     * Artikelnummer
     */
    articleNumber: string;

    /**
     * Art der Position
     */
    lineType: PicklistLineType;

    /**
     * Lagernummer
     */
    storageNumber: string;

    /**
     * ID der Ziel-Dokumentposition
     */
    targetDocumentLineId: number;

    /**
     * abweichende Artikelbezeichnung
     */
    articleAlternativeName: string;

    /**
     * Verpackte Menge der Position
     */
    quantityPacked: number;

    /**
     * Status der Position
     */
    state: PicklistLineState;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Buchungen zu dieser Position
     */
    bookings: Array<PicklistLineBooking>;

    /**
     * ID des Quell-Dokuments
     */
    sourceDocumentId: number;

    /**
     * ID des Lagers, aus dem gepickt werden soll
     */
    storageId: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PicklistLineBooking {

    /**
     * Zu buchende Menge (gesammelt)
     */
    quantity: number;

    /**
     * Seriennummer
     */
    serialNumber: ArticleSerialNumber;

    /**
     * Anzeigename vom Lagerplatz
     */
    storageBinDisplayName: string;

    /**
     * ID vom bebuchten Lagerplatz
     */
    storageBinId: number;

    /**
     * Zu buchende Menge (verpackt)
     */
    quantityPacked: number;

    /**
     * Status der Buchung
     */
    state: PicklistLineBookingState;
}

export const enum PicklistLineBookingState {
    PRESETTING = 'PRESETTING',
    PROCESSED = 'PROCESSED'
}

export interface PicklistLineComponent {

    /**
     * Gesammelte Menge der Position
     */
    quantityCollected: number;

    /**
     * Artikelbezeichnung
     */
    articleName: string;

    /**
     * Menge der Position
     */
    quantity: number;

    /**
     * Artikelbeschreibung
     */
    articleDescription: string;

    /**
     * ID des Artikels
     */
    articleId: number;

    /**
     * ID einer Position einer Pickliste
     */
    picklistLineId: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * ID der Komponente der Quell-Dokumentposition
     */
    sourceDocumentLineComponentId: number;

    /**
     * Artikelnummer
     */
    articleNumber: string;

    /**
     * ID der Komponente der Ziel-Dokumentposition
     */
    targetDocumentLineComponentId: number;

    /**
     * Menge pro Baugruppe (falls die Picklist-Line eine Baugruppe ist)
     */
    quantityPerAssemblyGroup: number;

    /**
     * abweichende Artikelbezeichnung
     */
    articleAlternativeName: string;

    /**
     * Verpackte Menge der Position
     */
    quantityPacked: number;

    /**
     * Position der Komponente in der Baugruppe
     */
    position: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Buchungen zu dieser Komponente
     */
    bookings: Array<PicklistLineBooking>;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum PicklistLineState {
    CREATED = 'CREATED',
    NEWLY_ADDED = 'NEWLY_ADDED',
    PICKED = 'PICKED',
    NEWLY_ADDED_AND_PICKED = 'NEWLY_ADDED_AND_PICKED',
    WAITING_FOR_SHIPPING_DOCUMENTS = 'WAITING_FOR_SHIPPING_DOCUMENTS',
    CANCELLED = 'CANCELLED',
    FINISHED = 'FINISHED'
}

export const enum PicklistLineType {
    ARTICLE = 'ARTICLE',
    ASSEMBLY_GROUP = 'ASSEMBLY_GROUP'
}

export const enum PicklistScriptType {
    CONNECT_PICK_BOXES_TO_PICKLIST_LINE = 'CONNECT_PICK_BOXES_TO_PICKLIST_LINE'
}

export const enum PicklistState {
    CREATED = 'CREATED',
    PAUSED_IN_PICKING = 'PAUSED_IN_PICKING',
    IN_PICKING = 'IN_PICKING',
    PICKED = 'PICKED',
    PAUSED_IN_PACKING = 'PAUSED_IN_PACKING',
    IN_PACKING = 'IN_PACKING',
    CANCELLED = 'CANCELLED',
    FINISHED = 'FINISHED'
}

export interface PicklistTemplate {

    /**
     * Art der Kommissionierung
     */
    pickingType: PickingType;

    /**
     * Optionen zur Selektion von Aufträgen für die Pickliste
     */
    orderSelectionOptions: PicklistTemplate$OrderSelectionOptions;

    /**
     * Skripte für die Erstellung und Verarbeitung von Picklisten
     */
    picklistScripts: Map<PicklistScriptType,PicklistTemplate$PicklistScript>;

    /**
     * Handelt es sich um eine Standard-Vorlage?
     */
    defaultTemplate: boolean;

    /**
     * Is Template active?
     */
    active: boolean;

    /**
     * Beschreibung der Vorlage
     */
    description: string;

    /**
     * Name der Vorlage
     */
    label: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Optionen zur Erstellung der Pickliste
     */
    picklistCreationOptions: PicklistTemplate$PicklistCreationOptions;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Optionen zur Verarbeitung von Picklisten
     */
    picklistProcessingOptions: PicklistTemplate$PicklistProcessingOptions;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface PicklistTemplate$DateRange {

    /**
     * Datumsbereich darf leer sein
     */
    allowEmpty: boolean;

    /**
     * Datum von (ggf. als relatives Datum)
     */
    from: string;

    /**
     * Datum bis (ggf. als relatives Datum)
     */
    to: string;
}

export interface PicklistTemplate$OrderSelectionOptions {

    /**
     * Maximales Versandgewicht pro Auftrag
     */
    maxShippingWeightPerOrder: number;

    /**
     * Selektion über den Bereich vom bestätigten Lieferdatum
     */
    confirmedDeliveryDateRange: PicklistTemplate$DateRange;

    /**
     * Minimale Anzahl Artikel pro Auftrag
     */
    minArticleCountPerOrder: number;

    /**
     * Liste der Belegarten vom Belegtyp "Auftrag"
     */
    documentTypeRefs: Array<ApiObjectReference>;

    /**
     * Maximale Anzahl Artikel pro Auftrag
     */
    maxArticleCountPerOrder: number;

    /**
     * Alternative Selektion in VQL
     */
    alternativeSelectionInVql: string;

    /**
     * Maximaler Auftragswert
     */
    maxOrderValue: number;

    /**
     * Nur für Einzelkommissionierung und Konsolidierung: maximale Anzahl zu übernehmender Aufträge
     */
    maxOrderCount: number;

    /**
     * Nur vollständig lieferbare Positionen
     */
    onlyFullDeliverableOrderLines: boolean;

    /**
     * Selektion über den Bereich vom Lieferdatum
     */
    deliveryDateRange: PicklistTemplate$DateRange;

    /**
     * Selektion über den Bereich vom Belegdatum
     */
    documentDateRange: PicklistTemplate$DateRange;

    /**
     * Liste von gültigen Lagerbereichen
     */
    storageAreaRefs: Array<ApiObjectReference>;

    /**
     * Nur vollständig lieferbare Aufträge
     */
    onlyFullDeliverableOrders: boolean;

    /**
     * Liste der gültigen Lieferarten
     */
    deliveryMethodRefs: Array<ApiObjectReference>;

    /**
     * Maximales Gesamtvolumen pro Auftrag (in ccm)
     */
    maxTotalVolumePerOrderInCCM: number;

    /**
     * Zusätzliche Exists-Statements in VQL
     */
    additionalExistsStatementsInVql: Array<string>;
}

export interface PicklistTemplate$PicklistCreationOptions {

    /**
     * Für Serien-Artikel mit Verfallsdatum/MHD: älteste Serie in Pickliste vorgeben
     */
    specifySerialWithOldestExpiryDate: boolean;

    /**
     * Zyklus zur Erstellung von Picklisten (für Background-Jobs, als Quartz-Cron-Expression) (https://www.freeformatter.com/cron-expression-generator-quartz.html)
     */
    cycleToCreatePicklistsCronExpression: string;

    /**
     * Die zu verwendende Vorlage zur Erzeugung von Picklisten für die Schnellkommissionierung
     */
    fastOrderPickingTemplateToUseRef: ApiObjectReference;

    /**
     * Maximale Menge einer Auftragsposition für Schnellkommissionierungs-Picklisten
     */
    maxQuantityOfOrderLineForFastOrderPicking: number;

    /**
     * Soll die Pickliste gedruckt werden?
     */
    printPicklist: boolean;

    /**
     * Maximale Anzahl an Positionen einer Pickliste
     */
    maxPicklistLineCount: number;

    /**
     * Die zu verwendende Pickwagengruppe
     */
    orderPickingTrolleyGroupRef: ApiObjectReference;

    /**
     * Lagerplätze vorgeben
     */
    specifyStorageBins: boolean;

    /**
     * Mit welcher Reportgruppe soll die Pickliste gedruckt werden?
     */
    picklistOutputReportGroupRef: ApiObjectReference;

    /**
     * Der zu verwendende Pickwagen
     */
    orderPickingTrolleyRef: ApiObjectReference;

    /**
     * Positionen der Pickliste nach Laufwegposition sortieren
     */
    sortByRoutePosition: boolean;

    /**
     * Sollen alle verfügbaren Pickwagen verwendet werden?
     */
    useAllAvailOrderPickingTrolleys: boolean;

    /**
     * Sollen zuerst noch Picklisten für die Schnellkommissionierung erzeugt werden?
     */
    firstCreateFastOrderPickingPicklists: boolean;
}

export interface PicklistTemplate$PicklistProcessingOptions {

    /**
     * Baugruppen als Ganzes kommissionieren
     */
    assemblyGroupAtOnce: boolean;

    /**
     * Sollen die Paketlabel automatisch nach Abschluss der Kommissionierung gedruckt werden?
     */
    autoPrintShippingLabel: boolean;

    /**
     * Automatischer Abschluss nach letztem Artikel vom aktuellen Auftrag
     */
    autoPickingFinishAfterLastArticleInOrder: boolean;

    /**
     * Dürfen Artikel nur per Scan (oder z.B. auch Eingabe der Artikelnummer) erfasst werden
     */
    allowOnlyScanOfArticles: boolean;

    /**
     * Pick'n'Pack verwenden
     */
    usePickNPack: boolean;

    /**
     * Kommissionierung von abweichenden Mengen
     */
    deviatingQuantity: PickingDeviatingQuantity;

    /**
     * Immer die Lieferbedingung in Masken zeigen
     */
    alwaysShowDeliveryMethod: boolean;

    /**
     * Soll die Lieferbelege automatisch nach Abschluss der Kommissionierung gedruckt werden?
     */
    autoPrintDeliveryDocument: boolean;

    /**
     * Überschreitung vom maximalen Paketgewicht blockieren?
     */
    blockIfMaximumPackageWeightIsExceeded: boolean;

    /**
     * Versand-Dialog beim Abschluss zeigen
     */
    showShippingFormOnPickingFinish: boolean;

    /**
     * Sollen Dienstleistungen kommissioniert werden?
     */
    allowPickingOfServiceArticles: boolean;

    /**
     * Digitale Pickliste verwenden: dabei werden nur die Positionen im Frontend gezeigt und durch Tippen oder Wischen bestätigt
     */
    useDigitalPicklist: boolean;

    /**
     * Sammelbestätigung erlauben
     */
    allowFullConfirmation: boolean;

    /**
     * Nur für Konsolidierung: Lieferbeleg und Versandlabel zum Abschluss scannen
     */
    scanDeliveryDocumentAndShippingLabelOnFinish: boolean;

    /**
     * Rollende Kommissionierung/Konsolidierung: beim Sammeln muss die Box nach dem Scan eines Artikels per Scan bestätigt werden
     */
    scanPickTrolleyBoxToConfirmPickedArticle: boolean;

    /**
     * Sollen nicht-bestandsgeführte Artikel kommissioniert werden?
     */
    allowPickingOfNonInventoryManagedArticles: boolean;

    /**
     * Zielmengen in Masken verstecken?
     */
    hideTargetQuantityInViews: boolean;
}

export interface PicklistTemplate$PicklistScript {

    /**
     * Ist das Skript aktiv?
     */
    active: boolean;

    /**
     * Der Quelltext vom Skript
     */
    source: string;
}

export const enum PosLineType {
    CASH_PAYMENT = 'CASH_PAYMENT',
    CASH_CHANGE = 'CASH_CHANGE',
    CARD_PAYMENT = 'CARD_PAYMENT',
    CASH_START_BALANCE = 'CASH_START_BALANCE',
    CASH_FINAL_BALANCE = 'CASH_FINAL_BALANCE',
    CASH_DEPOSIT = 'CASH_DEPOSIT',
    CASH_EXPENSE = 'CASH_EXPENSE'
}

export const enum PossibleUsingType {
    ACCOUNT = 'ACCOUNT',
    CRM_DEAL = 'CRM_DEAL',
    CRM_PROJECT = 'CRM_PROJECT',
    CRM_TASK = 'CRM_TASK'
}

export const enum PriceModifierType {
    DISCOUNT = 'DISCOUNT',
    SURCHARGE = 'SURCHARGE'
}

export interface PriceSelectionCriteria {

    /**
     * Ein Datum
     */
    date: ScriptingDate;

    /**
     * Die Preisgruppe
     */
    priceGroupId: number;

    /**
     * Eine Menge
     */
    quantity: number;

    /**
     * Liste von Artikel-IDs
     */
    articleIds: Array<number>;

    /**
     * Liste von Account-IDs
     */
    accountIds: Array<number>;

    /**
     * ein qualifier
     */
    qualifier: ProductPriceQualifier;

    /**
     * Die Warengruppe
     */
    productGroupId: number;

    /**
     * Ein Herstellet
     */
    manufacturerId: number;

    /**
     * soll nur der Standardpreis selektiert werden?
     */
    selectOnlyDefaultPrice: boolean;

    /**
     * Aktionspreis beachten?
     */
    noteSpecialOfferPrice: boolean;
}

export interface ProductDiscount {

    /**
     * Kundengruppe
     */
    customerGroupRef: ApiObjectReference;

    /**
     * Lieferantengruppe
     */
    supplierGroupRef: ApiObjectReference;

    /**
     * Bestimmt ab welcher Menge dieser Rabatt gültig ist
     */
    fromQuantity: number;

    /**
     * Hersteller
     */
    manufacturerRef: ApiObjectReference;

    /**
     * Produkt, für welches dieser Rabatt gültig ist
     */
    articleRef: ApiObjectReference;

    /**
     * Gültig von
     */
    validFrom: ScriptingDate;

    /**
     * Bestimmt die Art des Rabatts
     */
    modifierType: PriceModifierType;

    /**
     * Warengruppe
     */
    productGroupRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Verkaufskanal
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Währung
     */
    currencyRef: CurrencyReference;

    /**
     * Wert des Rabatts
     */
    modifierValue: number;

    /**
     * Preisgruppe
     */
    priceGroupRef: ApiObjectReference;

    /**
     * Bestimmt die Art des Rabattwerts (fest oder prozentual)
     */
    valueType: ValueType;

    /**
     * Bestimmt, ob es sich um einen Verkaufs- oder Einkaufsrabatt handelt
     */
    qualifier: ProductPriceQualifier;

    /**
     * Aktionpreis
     */
    specialOfferPrice: boolean;

    /**
     * Gültig bis
     */
    validUntil: ScriptingDate;

    /**
     * Name des Rabatts
     */
    modifierName: string;

    /**
     * Account, für den der Rabatt gültig ist
     */
    accountRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ProductGroup {

    /**
     * needed for data migration from third party applications
     */
    externalReference: string;

    /**
     * Zolltarifnummer
     */
    customsTariffNumber: string;

    /**
     * Soll-Handelsspanne
     */
    targetTradingMargin: number;

    /**
     * main product group
     */
    mainGroupRef: ApiObjectReference;

    /**
     * Freifeld
     */
    custom: EavProductgroup;

    /**
     * warengruppe aktiv ja/nein
     */
    active: boolean;

    /**
     * product group description
     */
    description: string;

    /**
     * product group name
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ProductMainGroup {

    /**
     * Soll-Handelsspanne
     */
    targetTradingMargin: number;

    /**
     * Freifeld
     */
    custom: EavProductmaingroup;

    /**
     * Hauptwarengruppe aktiv ja/nein
     */
    active: boolean;

    /**
     * Beschreibung der Hauptwarengruppe
     */
    description: string;

    /**
     * Hauptwarengruppe
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ProductPrice {

    /**
     * Kundengruppe
     */
    customerGroupRef: ApiObjectReference;

    /**
     * Verwendete Umsatzsteuer zur Umrechnung Netto <-> Brutto
     */
    usedTaxRate: TaxRate;

    /**
     * Lieferantengruppe
     */
    supplierGroupRef: ApiObjectReference;

    /**
     * Bestimmt ab welcher Menge dieser Preis gültig ist
     */
    fromQuantity: number;

    /**
     * Hersteller
     */
    manufacturerRef: ApiObjectReference;

    /**
     * Netto-Preis
     */
    netPrice: number;

    /**
     * Produkt, für welches dieser Preis gültig ist
     */
    articleRef: ApiObjectReference;

    /**
     * Brutto-Preis
     */
    grossPrice: number;

    /**
     * Gültig von
     */
    validFrom: ScriptingDate;

    /**
     * Warengruppe
     */
    productGroupRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Verkaufskanal
     */
    salesChannelRef: ApiObjectReference;

    /**
     * Währung
     */
    currencyRef: CurrencyReference;

    /**
     * Preisgruppe
     */
    priceGroupRef: ApiObjectReference;

    /**
     * Bestimmt, ob es sich um einen Verkaufs- oder Einkaufspreis handelt
     */
    qualifier: ProductPriceQualifier;

    /**
     * Aktionpreis
     */
    specialOfferPrice: boolean;

    /**
     * Gültig bis
     */
    validUntil: ScriptingDate;

    /**
     * Preisbasis
     */
    priceBase: ArticlePriceBase;

    /**
     * Account, für den der Preis gültig ist
     */
    accountRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ProductPriceOrigin {
    USER_DEFINED = 'USER_DEFINED',
    PRODUCT = 'PRODUCT',
    PREDECESSOR_DOCUMENT = 'PREDECESSOR_DOCUMENT',
    PICKLIST = 'PICKLIST'
}

export const enum ProductPriceQualifier {
    SALES = 'SALES',
    PURCHASE = 'PURCHASE'
}

export const enum ProductType {
    WITH_STOCK = 'WITH_STOCK',
    WITHOUT_STOCK = 'WITHOUT_STOCK',
    SERVICE_ARTICLE = 'SERVICE_ARTICLE',
    SERVICE_CONTINGENT = 'SERVICE_CONTINGENT',
    ASSEMBLY_GROUP = 'ASSEMBLY_GROUP',
    JUMBO = 'JUMBO',
    SHIPPING_COSTS = 'SHIPPING_COSTS',
    VARIANT_MAIN_ARTICLE = 'VARIANT_MAIN_ARTICLE'
}

export const enum PublishingPolicy {
    AUTOMATIC = 'AUTOMATIC',
    MANUAL = 'MANUAL'
}

export interface Referenceable {
}

export interface RequestDocument {

    /**
     * ID vom Lagerplatz für den Wareneingang (wenn incomingGoodsPickTrolleyId = null)
     */
    incomingGoodsStorageBinId: number;

    /**
     * Belegdatum
     */
    documentDate: ScriptingDate;

    /**
     * ID der Kassenschublade (bei POS)
     */
    cashDrawerId: number;

    /**
     * Leistungsdatum
     */
    performanceDate: ScriptingDate;

    /**
     * Der Anzahlungsbetrag
     */
    depositPaymentAmount: number;

    /**
     * Für interne Zwecke: Liefermethode für das Document
     */
    deliveryMethodId: number;

    /**
     * externe Belegnummer
     */
    externalNumber: string;

    /**
     * Für interne Zwecke: Leistungsland für das Document
     */
    performanceCountryId: number;

    /**
     * Eine oder mehr Kassenzahlungen
     */
    posPayments: Array<DocumentPosPayment>;

    /**
     * Die Quittungsdetails
     */
    posDetail: DocumentPosDetail;

    /**
     * sales-channel-id to create a new Document
     */
    salesChannelId: number;

    /**
     * billing type
     */
    billingType: BillingType;

    /**
     * Für interne Zwecke: Zahlungsmethode für das Document
     */
    paymentMethodId: number;

    /**
     * Für interne Zwecke: Lieferbedingung für das Document
     */
    deliveryTermId: number;

    /**
     * Für interne Zwecke: Währung für das Document
     */
    currencyId: number;

    /**
     * Dokumentzeilen
     */
    lines: Array<RequestDocumentLine>;

    /**
     * ID der Kasse (bei POS)
     */
    posRegisterId: number;

    /**
     * Die Vertragsdetails
     */
    contractDetail: DocumentContractDetail;

    /**
     * Vorgabelieferant bei Übernahme von Auftrag zu Bestellung(en)
     */
    supplierAccountId: number;

    /**
     * Für interne Zwecke: Zahlungsbedingung für das Document
     */
    paymentTermId: number;

    /**
     * Für interne Zwecke: Vorgabe Streckengeschäft
     */
    dropShipping: boolean;

    /**
     * Schema Freifelder
     */
    custom: EavDocument;

    /**
     * target document type for document copy
     */
    targetDocumentType: DocumentType;

    /**
     * reference to the corresponding document in an external system
     */
    externalId: string;

    /**
     * ID vom Pickwagen für den Wareneingang (wenn incomingGoodsStorageBinId = null)
     */
    incomingGoodsPickTrolleyId: number;

    /**
     * calculation mode
     */
    calculationMode: CalculationMode;

    /**
     * Für interne Zwecke: Markiert den Beleg als E-Rechnung
     */
    eInvoice: boolean;

    /**
     * account-id to create a new Document
     */
    accountId: number;

    /**
     * Wird dieser Beleg durch die Picklistenverarbeitung verarbeitet?
     */
    processedByPicklistProcessing: boolean;

    /**
     * Nur für interne Zwecke: neue Positionen, die bei Übernahme aus einer Pickliste angelegt werden sollen
     */
    picklistLinesToAddOnTransfer: Array<PicklistLine>;

    /**
     * Die Rabatte des Beleges
     */
    priceModifiers: Array<RequestDocumentPriceModifier>;
}

export interface RequestDocumentLine {

    /**
     * ID des Lagerplatzes für den Wareneingang (wenn `incomingGoodsPickTrolleyId` = null)
     */
    incomingGoodsStorageBinId: number;

    /**
     * Leistungsdatum
     */
    performanceDate: ScriptingDate;

    /**
     * Soll die Quellposition nach erfolgreicher Verarbeitung als abgeschlossen markiert werden?
     */
    markCompleted: boolean;

    /**
     * Artikelbeschreibung
     */
    description: string;

    /**
     * Herkunft des Preises
     */
    priceOrigin: ProductPriceOrigin;

    /**
     * Quittungsdetails zur Belegposition
     */
    posDetail: DocumentLinePosDetail;

    /**
     * (optional) Gesamtpreis dieser Position
     */
    totalLinePrice: number;

    /**
     * (optional) ID der referenzierten Belegposition
     */
    refLineId: number;

    /**
     * Provisionen zu dieser Belegposition
     */
    commissions: Array<RequestDocumentLineCommission>;

    /**
     * FiBu-Angaben
     */
    financeBooking: DocumentFinanceBooking;

    /**
     * Typ dieser Position
     */
    lineType: DocumentLineType;

    /**
     * Für interne Zwecke: Steuersatz in Prozent
     */
    taxPercent: number;

    /**
     * Streckengeschäft?
     */
    dropShippingPolicy: DropShippingPolicy;

    /**
     * (optional) Lager-ID
     */
    storageId: number;

    /**
     * Vertragsdetails zur Belegposition
     */
    contractDetail: DocumentContractDetail;

    /**
     * Wird für die Umwandlung von Kundenauftrag in Lieferantenauftrag benötigt
     */
    supplierAccountId: number;

    /**
     * Menge, die in dieser Transaktion verarbeitet werden soll
     */
    quantity: number;

    /**
     * Für interne Zwecke: Freifelder
     */
    custom: string;

    /**
     * (optional) ID des Artikels dieser Position
     */
    articleId: number;

    /**
     * ID der Belegposition im aktuellen Beleg
     */
    lineId: number;

    /**
     * Referenz auf die zugehörige Position in einem externen System
     */
    externalId: string;

    /**
     * ID des Pickwagens für den Wareneingang (wenn `incomingGoodsStorageBinId` = null)
     */
    incomingGoodsPickTrolleyId: number;

    /**
     * Provisionsherkunft dieser Belegposition
     */
    commissionOrigin: DocumentCommissionOrigin;

    /**
     * (optional) Liste von Texten für diese Position
     */
    texts: Array<RequestDocumentText>;

    /**
     * (optional) Liste von Preismodifikatoren für diese Position
     */
    priceModifiers: Array<RequestDocumentPriceModifier>;

    /**
     * Artikelname
     */
    name: string;

    /**
     * Für interne Zwecke: Externe Artikelnummer
     */
    externalArticleNumber: string;

    /**
     * ID der Quell-Belegposition
     */
    sourceLineId: number;

    /**
     * Buchungen zu dieser Belegposition
     */
    bookings: Array<RequestDocumentLineBooking>;

    /**
     * (optional) Preis des Artikels dieser Position
     */
    productPrice: number;
}

export interface RequestDocumentLineBooking {

    /**
     * Ggf. ID einer zu buchenden Seriennummer
     */
    serialNumberId: number;

    /**
     * Gebuchte Menge
     */
    quantity: number;

    /**
     * ID vom bebuchten Lagerplatz
     */
    storageBinId: number;

    /**
     * ID der bebuchten Quell-DocumentLineComponent
     */
    sourceComponentId: number;
}

export interface RequestDocumentLineCommission {

    /**
     * Provisionstyp
     */
    valueType: ValueType;

    /**
     * Herkunft
     */
    origin: DocumentCommissionOrigin;

    /**
     * Beschreibung
     */
    description: string;

    /**
     * Kommentar
     */
    comment: string;

    /**
     * Vertreter
     */
    salesAgentAccountRef: Account;

    /**
     * Provision Prozent/Wert
     */
    value: number;
}

export interface RequestDocumentPriceModifier {

    /**
     * Source of price modifier
     */
    sourceType: DocumentPriceModifier$PriceModifierSourceType;

    /**
     * modifierValue of this line
     */
    modifierValue: number;

    /**
     * value-type of modifier of this line
     */
    valueType: ValueType;

    /**
     * modifierName of this line
     */
    modifierName: string;

    /**
     * type of this price modifier (discount/surcharge)
     */
    modifierType: PriceModifierType;
}

export interface RequestDocumentText {

    /**
     * header or footer text
     */
    textPosition: TextPosition;

    /**
     * text content
     */
    content: string;
}

export interface RevenueCalculation {

    /**
     * Netto Umsatz
     */
    salesValue: number;

    /**
     * Deckungsbeitrag (absolut)
     */
    revenue: number;

    /**
     * Einkaufspreis
     */
    productPurchasePrice: number;

    /**
     * Deckungsbeitrag (Prozent)
     */
    revenueInPercent: number;
}

export interface SalesAgent {

    /**
     * Bemerkung
     */
    note: string;

    /**
     * is sales agent taxable
     */
    taxable: boolean;

    /**
     * reference to the delivery method
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * Freifelder
     */
    custom: EavSalesagent;

    /**
     * active true/false
     */
    active: boolean;

    /**
     * reference to the payment term
     */
    paymentTermRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * commission type of sales agent
     */
    commissionType: SalesAgentCommissionType;

    /**
     * reference to the delivery term
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * reference to the tax rate
     */
    taxRateRef: ApiObjectReference;

    /**
     * number of sales agent
     */
    number: string;

    /**
     * country code performance country IsoAlpha3
     */
    performanceCountryCode: string;

    /**
     * billing type
     */
    billingType: AccountBillingType;

    /**
     * reference to the payment method
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * accounting number
     */
    accountingNumber: string;

    /**
     * currency code  IsoAlpha3
     */
    currencyCode: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum SalesAgentCommissionType {
    INVOICE = 'INVOICE',
    ORDER = 'ORDER',
    PAYMENT = 'PAYMENT'
}

export interface Scenario {

    /**
     * Identifier für das Scenario
     */
    identifier: string;

    /**
     * Dimensions Definition
     */
    dimDefinitions: Array<ScenarioDimension>;

    /**
     * Fakten/Daten Definition
     */
    factDefinitions: Array<ScenarioFactDef>;

    /**
     * die beschreibung für dieses Scenario
     */
    description: string;

    /**
     * die beschreibung für dieses Scenario
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Start-Datum für die Berechnung (optional)
     */
    startDate: ScriptingDate;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ScenarioActualValue {

    /**
     * Referenz auf ein ScenarioDimDef
     */
    scenarioDimRef: ApiObjectReference;

    /**
     * gewichtung
     */
    weight: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Referenz auf die LookupReferenz
     */
    referenceId: number;

    /**
     * Referenz auf eine Scenario-Dimension-Ausprägung
     */
    dimValueRef: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ScenarioDimension {

    /**
     * Verteilschlüssel Ausprägungen
     */
    definedValues: Array<ScenarioDimensionValue>;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Verteilschlüssel - Key/Gruppe
     */
    key: string;

    /**
     * können mehrere Schlüssel bei der Verteilung verwendet werden
     */
    multiSelect: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ScenarioDimensionValue {

    /**
     * Sortierreihenfolge
     */
    sortOrder: number;

    /**
     * ist der Wert weiterhin aktiv/selektierbar
     */
    active: boolean;

    /**
     * Ausprägung
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * handelt es sich um den Fallback-Value
     */
    fallback: boolean;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ScenarioFactDef {

    /**
     * Attribut Name
     */
    factAttribute: string;

    /**
     * Attribut Typ
     */
    attributeType: ScenarioFactDef$FactType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ScenarioFactDef$FactType {
    DATE_DIM_FACT = 'DATE_DIM_FACT',
    LOOKUP_FACT = 'LOOKUP_FACT',
    DISTRIBUTE_FACT = 'DISTRIBUTE_FACT',
    DATA_FACT = 'DATA_FACT'
}

/**
 * Ausgabe-Anforderung
 */
export interface ScriptOutputRequest {
}

/**
 * Datentyp für Datumswerte
 */
export interface ScriptingDate {
}

/**
 * Datentyp für Datum-Zeit-Werte
 */
export interface ScriptingDateTime {
}

/**
 * HTTP-Client fürs Scripting
 */
export interface ScriptingHttpClient {
}

export const enum SequenceAssignmentMode {
    MANUAL = 'MANUAL',
    AUTOMATIC = 'AUTOMATIC',
    SEMI_AUTOMATIC = 'SEMI_AUTOMATIC',
    FREE = 'FREE'
}

export const enum SequenceType {
    NON_POOLED_SEQUENCES = 'NON_POOLED_SEQUENCES',
    POOLED_SEQUENCES = 'POOLED_SEQUENCES',
    PREFETCHED_SEQUENCES = 'PREFETCHED_SEQUENCES'
}

export interface SequencerConfiguration {

    /**
     * Group of the sequencer configuration (e.g. Document, Account, ...)
     */
    configurationGroup: string;

    /**
     * Sequencer aktiv?
     */
    active: boolean;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Unique key to identify the sequencer configuration
     */
    key: string;

    /**
     * Contains details about the sequencer configuration
     */
    configurationDetail: SequencerConfigurationDetail;

    /**
     * Alternative configuration used to generate sequences instead of this configuration
     */
    alternativeConfiguration: ApiObjectReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface SequencerConfigurationDetail {

    /**
     * Eindeutigkeitsprüfung
     */
    numberUnique: boolean;

    /**
     * Präfix-Ausdruck
     */
    expression: string;

    /**
     * Vergabeverfahren
     */
    assignmentMode: SequenceAssignmentMode;

    /**
     * Auffüllzeichen
     */
    padChar: string;

    /**
     * Länge
     */
    length: number;

    /**
     * Postfix-Ausdruck
     */
    postExpression: string;

    /**
     * Typ der Sequenz
     */
    type: SequenceType;

    /**
     * Initialer Wert
     */
    initialValue: number;
}

export interface ShelfDocument {

    /**
     * Notiz
     */
    note: string;

    /**
     * Date of this Entry/Document
     */
    entryDate: ScriptingDate;

    /**
     * Custom data
     */
    custom: EavShelfdocument;

    /**
     * Externe Id
     */
    externalId: UUID;

    /**
     * description of this document
     */
    description: string;

    /**
     * Löschungsstatus
     */
    deletionState: ShelfDocumentDeletionState;

    /**
     * Dokumentenart
     */
    type: ShelfDocumentType;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * List of tags
     */
    tags: Array<TagDto>;

    /**
     * Mehrsprachige Bezeichnungen
     */
    translatableTexts: Array<ShelfTranslatableText>;

    /**
     * share informations
     */
    shares: Array<ShelfShare>;

    /**
     * Automatische Löschung ab
     */
    plannedRemovalDate: ScriptingDate;

    /**
     * file data
     */
    file: ShelfFile;

    /**
     * Alias
     */
    alias: string;

    /**
     * Status
     */
    state: ShelfDocumentState;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ShelfDocumentAttribution {

    /**
     * UI-verwaltetes Feld
     */
    uiSort: number;

    /**
     * Art der Beziehung / Verwendungszweck
     */
    purpose: string;

    /**
     * type of the referenced object
     */
    refType: string;

    /**
     * UI-verwaltetes Feld
     */
    uiComment: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * UI-verwaltetes Feld
     */
    uiFavorite: boolean;

    /**
     * Soll das Dokument veröffentlicht werden?
     */
    publish: boolean;

    /**
     * ID der verknüpften DMS-Ressource
     */
    shelfResourceId: number;

    /**
     * Verfügbare Transformationen zum Bild
     */
    transformationKeys: Array<string>;

    /**
     * id of the referenced object
     */
    refId: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Hauptverknüpfung dieser DMS-Ressource
     */
    mainAttribution: boolean;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ShelfDocumentDeletionState {
    NOT_YET = 'NOT_YET',
    PREPARE_DELETE = 'PREPARE_DELETE',
    FILE_DELETED = 'FILE_DELETED',
    MANUALLY_RETAIN = 'MANUALLY_RETAIN'
}

export const enum ShelfDocumentState {
    DRAFT = 'DRAFT',
    FILE_ATTACHED = 'FILE_ATTACHED',
    MISSING = 'MISSING'
}

export interface ShelfDocumentType {

    /**
     * access level for writing
     */
    accessLevelWrite: number;

    /**
     * system presetting
     */
    systemPresetting: boolean;

    /**
     * Ist die Dokumentenart aktiv
     */
    active: boolean;

    /**
     * label of type
     */
    label: string;

    /**
     * access level or reading
     */
    accessLevelRead: number;

    /**
     * storage rule for revisions
     */
    revisionStorageRule: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * duration of storage (years)
     */
    duration: number;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * access level for deleting
     */
    accessLevelDelete: number;

    /**
     * unique key of type
     */
    key: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ShelfFile {

    /**
     * subFiles for this file
     */
    subFiles: Array<SubFileInfo>;

    /**
     * fileSize
     */
    fileSize: number;

    /**
     * revision number of this file
     */
    revisionNumber: number;

    /**
     * file-extension of this entry
     */
    publicFileExtension: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * file-name (without extension) of this entry
     */
    publicFileName: string;

    /**
     * detected content type
     */
    contentType: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * meta data
     */
    metaDataEntries: Array<ShelfFileMetaData>;

    /**
     * current reference of this file in our storage 
     */
    storageHandle: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ShelfFileMetaData {

    /**
     * metadaten wert
     */
    metaValue: string;

    /**
     * metadaten key
     */
    metaKey: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface ShelfShare {

    /**
     * Veröffentlichungsstatus
     */
    publishState: ShelfSharePublishState;

    /**
     * Freifelder
     */
    custom: EavShelfshare;

    /**
     * wie viele Minuten bleibt dieser resource-pfad zugreifbar (null = unlimited)
     */
    publicUrlDurationInMinutes: number;

    /**
     * der url-pfadanteil, der öffentlichen zugriff auf diese resource gibt
     */
    publicUrlPath: string;

    /**
     * Verfügbarkeit
     */
    availability: ShelfShareAvailability;

    /**
     * Externer Verweis auf dieses Share
     */
    sharedByExternalRef: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Revision
     */
    revision: number;

    /**
     * Mehrsprachige Bezeichnungen
     */
    translatableTexts: Array<ShelfTranslatableText>;

    /**
     * App-ID
     */
    appId: UUID;

    /**
     * Anzahl der Nutzungen
     */
    timesUsed: number;

    /**
     * wann die öffentliche resource erstellt wurde
     */
    publicUrlCreatedAt: ScriptingDate;

    /**
     * Hash der Revision
     */
    eTag: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ShelfShareAvailability {
    UNLIMITED = 'UNLIMITED',
    ONE_TIME_USE = 'ONE_TIME_USE'
}

export const enum ShelfSharePublishState {
    SYNCED = 'SYNCED',
    PENDING = 'PENDING',
    DRAFT = 'DRAFT'
}

export interface ShelfTranslatableText {

    /**
     * Meta-Titel
     */
    metaTitle: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Sprache
     */
    languageCode: string;

    /**
     * Alternativer Text
     */
    alternativeText: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface StorageBinRef {

    /**
     * Referenz auf das Lager
     */
    storageRef: ApiObjectReference;

    /**
     * Anzeigefarbe
     */
    color: string;

    /**
     * Anzeigename
     */
    displayName: string;

    /**
     * ID
     */
    id: number;
}

export interface SubFileInfo {

    /**
     * Full-Path
     */
    fullPath: string;

    /**
     * dazugehörige FileEntity
     */
    shelfFile: ApiObjectReference;

    /**
     * file last modified
     */
    modifiedAt: ScriptingDateTime;

    /**
     * Parent-Path
     */
    parentPath: string;

    /**
     * fileName
     */
    name: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Inhaltstyp
     */
    contentType: string;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export interface Supplier {

    /**
     * Erzeugung Ausgangs-Lieferschein bei Streckengeschäft-Bestellung
     */
    createCustomerDeliveryWhenDropShipping: boolean;

    /**
     * Mindestbestellwert
     */
    minimumOrderValue: number;

    /**
     * number of supplier
     */
    number: string;

    /**
     * zulässig für Aufnahme in Bestellvorschläge
     */
    permissibleForOrderProposal: boolean;

    /**
     * Fakturisierungsart Netto oder Brutto
     */
    billingType: AccountBillingType;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * finance account-number of supplier
     */
    accountingNumber: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;

    /**
     * reference to the delivery method
     */
    deliveryMethodRef: ApiObjectReference;

    /**
     * tax able or tax free
     */
    taxable: boolean;

    /**
     * Lieferantengruppe
     */
    supplierGroupRef: ApiObjectReference;

    /**
     * Mahnen?
     */
    dunning: boolean;

    /**
     * Frachtkostenfrei ab
     */
    freeShippingValue: number;

    /**
     * active true/false
     */
    active: boolean;

    /**
     * reference to responsible user
     */
    responsibleUserRef: ApiObjectReference;

    /**
     * suppliers number for us
     */
    ourNumber: string;

    /**
     * reference to the payment term
     */
    paymentTermRef: ApiObjectReference;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * Kennzeichen, ob Streckengeschäft erlaubt
     */
    dropShippingAllowed: boolean;

    /**
     * reference to the delivery term
     */
    deliveryTermRef: ApiObjectReference;

    /**
     * country code performance country IsoAlpha3
     */
    performanceCountryCode: string;

    /**
     * Lieferzeit in (Werk-)Tagen
     */
    defaultDeliveryTime: number;

    /**
     * reference to the payment method
     */
    paymentMethodRef: ApiObjectReference;

    /**
     * currency code  IsoAlpha3
     */
    currencyCode: string;
}

export interface TagDto {

    /**
     * Tag-Gruppe
     */
    tagGroup: ApiCreatableReference;

    /**
     * Farbe in Verwaltungs-GUI
     */
    editColor: string;

    /**
     * Farbe in Such-GUI
     */
    searchColor: string;

    /**
     * Farbe für die Anzeige des Tags
     */
    color: string;

    /**
     * Beschriftung des Tags
     */
    label: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Typ des Tags
     */
    type: TagType;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum TagType {
    COMMON = 'COMMON',
    ACCOUNT = 'ACCOUNT',
    PRODUCT = 'PRODUCT',
    DOCUMENT = 'DOCUMENT',
    OPEN_ITEM = 'OPEN_ITEM',
    CRM_COMMON = 'CRM_COMMON',
    CRM_TASK = 'CRM_TASK',
    CRM_DEAL = 'CRM_DEAL',
    CRM_PROJECT = 'CRM_PROJECT',
    DMS_SHELF_DOCUMENT = 'DMS_SHELF_DOCUMENT'
}

export interface TaxIdForeignCountry {

    /**
     * ISO 2 Code of the country this tax ID is used for
     */
    countryCode: string;

    /**
     * Tax ID of the company in the associated country
     */
    taxId: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum TaxIdVerificationState {
    NOT_YET_VERIFIED = 'NOT_YET_VERIFIED',
    VALID = 'VALID',
    VALID_WITH_INVALID_ADDRESS = 'VALID_WITH_INVALID_ADDRESS',
    INVALID = 'INVALID',
    NOT_NEEDED = 'NOT_NEEDED'
}

export const enum TaxPerformanceLocationType {
    DOMESTIC = 'DOMESTIC',
    EUROPEAN_COMMUNITY = 'EUROPEAN_COMMUNITY',
    INTERNATIONAL = 'INTERNATIONAL'
}

export interface TaxRate {

    /**
     * the rate of this tax-rate
     */
    rate: number;

    /**
     * the country code for this tax-rate
     */
    countryCode: string;

    /**
     * is this tax-rate active (selectable)
     */
    active: boolean;

    /**
     * the date, this entry is valid from
     */
    validFrom: ScriptingDate;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * a type lable, this tax-rate is associated with. this label is used as a selector in the TaxSchema resource
     */
    typeRef: ApiCreatableReference;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum TaxSituationOrigin {
    UNDEFINED = 'UNDEFINED',
    USER_DEFINED = 'USER_DEFINED',
    FROM_CUSTOMER = 'FROM_CUSTOMER',
    FROM_SUPPLIER = 'FROM_SUPPLIER',
    FROM_SALES_AGENT = 'FROM_SALES_AGENT',
    FROM_DELIVERY_ADDRESS = 'FROM_DELIVERY_ADDRESS',
    FROM_DEFAULT_ADDRESS = 'FROM_DEFAULT_ADDRESS',
    FROM_OWN_ADDRESS = 'FROM_OWN_ADDRESS',
    FROM_TAX_ID = 'FROM_TAX_ID'
}

export interface TextEnumCreate {

    /**
     * Custom data
     */
    custom: EavTextenumeration;

    /**
     * active
     */
    active: boolean;

    /**
     * Wert der Aufzählung
     */
    label: string;

    /**
     * Gruppe der Text-Aufzählung
     */
    groupKey: string;
}

export interface TextEnumGet {

    /**
     * Custom data
     */
    custom: EavTextenumeration;

    /**
     * System-Vorgabe
     */
    systemPresetting: boolean;

    /**
     * active
     */
    active: boolean;

    /**
     * PrimaryKey
     */
    id: number;

    /**
     * Wert der Aufzählung
     */
    label: string;

    /**
     * Gruppe der Text-Aufzählung
     */
    groupKey: string;
}

export const enum TextPosition {
    HEADER_TEXT = 'HEADER_TEXT',
    FOOTER_TEXT = 'FOOTER_TEXT'
}

export interface TssSignature {

    /**
     * Externe Referenz
     */
    externalReference: string;

    /**
     * Antwortdaten der TSS
     */
    responseData: string;

    /**
     * Revision
     */
    revision: number;

    /**
     * Status der Signierung
     */
    status: TssSignature$TssSignatureStatus;
}

export const enum TssSignature$TssSignatureStatus {
    FINISHED = 'FINISHED',
    ACTIVE = 'ACTIVE',
    CANCELLED = 'CANCELLED',
    ERROR = 'ERROR'
}

export interface UUID {
}

export interface UnitTypeReference {

    /**
     * descriptive name
     */
    name: string;

    /**
     * unit type id
     */
    id: number;

    /**
     * unique abbreviation
     */
    abbreviation: string;
}

/**
 * Details zur Aktualisierung eines Belegs
 */
export interface UpdateDocumentRequest {

    /**
     * Der Beleg
     */
    document: Document;

    /**
     * Zusätzliche Parameter
     */
    parameters: Array<AdditionalParameter>;
}

export interface User {

    /**
     * Is owner user?
     */
    owner: boolean;

    /**
     * last-name
     */
    lastName: string;

    /**
     * Rollen
     */
    roles: Array<ApiObjectReference>;

    /**
     * Gruppen
     */
    groups: Array<ApiObjectReference>;

    /**
     * Is the user active?
     */
    active: boolean;

    /**
     * App-Identifier
     */
    appIdentifier: UUID;

    /**
     * User type
     */
    type: CommonUserType;

    /**
     * Version Identifier for this Object (for PUT)
     */
    version: number;

    /**
     * is the email verified
     */
    emailVerified: boolean;

    /**
     * first-name
     */
    firstName: string;

    /**
     * email-address
     */
    emailAddress: string;

    /**
     * Unique identifier of the Object
     */
    id: number;

    /**
     * Valid to
     */
    validTo: ScriptingDateTime;

    /**
     * username
     */
    username: string;

    /**
     * MetaInformations for this Object
     */
    info: MetaInfo;
}

export const enum ValueType {
    PERCENT = 'PERCENT',
    FIX = 'FIX'
}

export interface WithDefaults<List<ArticleIdentifier>> {

    /**
     * Wert des Default-Sales-Channel
     */
    defaultValue: object;

    /**
     * Wert dieses Sales-Channel
     */
    value: object;
}

export interface WithDefaults<String> {

    /**
     * Wert des Default-Sales-Channel
     */
    defaultValue: object;

    /**
     * Wert dieses Sales-Channel
     */
    value: object;
}

export interface WorkflowInstanceDetails {

    id: number;

    state: EWorkflowInstanceState;
}

