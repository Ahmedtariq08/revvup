export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export type Database = {
    public: {
        Tables: {
            body_types: {
                Row: {
                    body: string;
                    id: number;
                };
                Insert: {
                    body: string;
                    id?: number;
                };
                Update: {
                    body?: string;
                    id?: number;
                };
                Relationships: [];
            };
            brands: {
                Row: {
                    id: number;
                    logo: string;
                    name: string;
                };
                Insert: {
                    id?: number;
                    logo: string;
                    name: string;
                };
                Update: {
                    id?: number;
                    logo?: string;
                    name?: string;
                };
                Relationships: [];
            };
            cars: {
                Row: {
                    bodytype_id: number | null;
                    brand_id: number | null;
                    campaign_discount: number | null;
                    color_id: number | null;
                    fuel_type: string | null;
                    highlights: string[] | null;
                    id: number;
                    image: string | null;
                    is_available: boolean | null;
                    last_updated: string | null;
                    license_plate: string;
                    listing_date: string | null;
                    mileage: number | null;
                    model_id: number | null;
                    month_price: number | null;
                    name: string | null;
                    place_id: number | null;
                    price: number | null;
                    store_id: number | null;
                    variant_id: number | null;
                    vin_code: string | null;
                    year: number | null;
                };
                Insert: {
                    bodytype_id?: number | null;
                    brand_id?: number | null;
                    campaign_discount?: number | null;
                    color_id?: number | null;
                    fuel_type?: string | null;
                    highlights?: string[] | null;
                    id?: number;
                    image?: string | null;
                    is_available?: boolean | null;
                    last_updated?: string | null;
                    license_plate: string;
                    listing_date?: string | null;
                    mileage?: number | null;
                    model_id?: number | null;
                    month_price?: number | null;
                    name?: string | null;
                    place_id?: number | null;
                    price?: number | null;
                    store_id?: number | null;
                    variant_id?: number | null;
                    vin_code?: string | null;
                    year?: number | null;
                };
                Update: {
                    bodytype_id?: number | null;
                    brand_id?: number | null;
                    campaign_discount?: number | null;
                    color_id?: number | null;
                    fuel_type?: string | null;
                    highlights?: string[] | null;
                    id?: number;
                    image?: string | null;
                    is_available?: boolean | null;
                    last_updated?: string | null;
                    license_plate?: string;
                    listing_date?: string | null;
                    mileage?: number | null;
                    model_id?: number | null;
                    month_price?: number | null;
                    name?: string | null;
                    place_id?: number | null;
                    price?: number | null;
                    store_id?: number | null;
                    variant_id?: number | null;
                    vin_code?: string | null;
                    year?: number | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "cars_bodytype_id_fkey";
                        columns: ["bodytype_id"];
                        isOneToOne: false;
                        referencedRelation: "body_types";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "cars_brand_id_fkey";
                        columns: ["brand_id"];
                        isOneToOne: false;
                        referencedRelation: "brands";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "cars_color_id_fkey";
                        columns: ["color_id"];
                        isOneToOne: false;
                        referencedRelation: "colors";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "cars_model_id_fkey";
                        columns: ["model_id"];
                        isOneToOne: false;
                        referencedRelation: "models";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "cars_place_id_fkey";
                        columns: ["place_id"];
                        isOneToOne: false;
                        referencedRelation: "places";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "cars_store_id_fkey";
                        columns: ["store_id"];
                        isOneToOne: false;
                        referencedRelation: "stores";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "cars_variant_id_fkey";
                        columns: ["variant_id"];
                        isOneToOne: false;
                        referencedRelation: "variants";
                        referencedColumns: ["id"];
                    },
                ];
            };
            colors: {
                Row: {
                    color: string;
                    id: number;
                };
                Insert: {
                    color: string;
                    id?: number;
                };
                Update: {
                    color?: string;
                    id?: number;
                };
                Relationships: [];
            };
            engines: {
                Row: {
                    engine: string;
                    id: number;
                };
                Insert: {
                    engine: string;
                    id?: number;
                };
                Update: {
                    engine?: string;
                    id?: number;
                };
                Relationships: [];
            };
            images: {
                Row: {
                    car_id: number | null;
                    id: number;
                    name: string | null;
                    order: number | null;
                    type: string | null;
                    url: string | null;
                };
                Insert: {
                    car_id?: number | null;
                    id?: number;
                    name?: string | null;
                    order?: number | null;
                    type?: string | null;
                    url?: string | null;
                };
                Update: {
                    car_id?: number | null;
                    id?: number;
                    name?: string | null;
                    order?: number | null;
                    type?: string | null;
                    url?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "images_car_id_fkey";
                        columns: ["car_id"];
                        isOneToOne: false;
                        referencedRelation: "cars";
                        referencedColumns: ["id"];
                    },
                ];
            };
            models: {
                Row: {
                    brand_id: number | null;
                    id: number;
                    name: string;
                };
                Insert: {
                    brand_id?: number | null;
                    id?: number;
                    name: string;
                };
                Update: {
                    brand_id?: number | null;
                    id?: number;
                    name?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "models_brand_id_fkey";
                        columns: ["brand_id"];
                        isOneToOne: false;
                        referencedRelation: "brands";
                        referencedColumns: ["id"];
                    },
                ];
            };
            places: {
                Row: {
                    id: number;
                    place: string;
                };
                Insert: {
                    id?: number;
                    place: string;
                };
                Update: {
                    id?: number;
                    place?: string;
                };
                Relationships: [];
            };
            store_places: {
                Row: {
                    place_id: number;
                    store_id: number;
                };
                Insert: {
                    place_id: number;
                    store_id: number;
                };
                Update: {
                    place_id?: number;
                    store_id?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: "store_places_place_id_fkey";
                        columns: ["place_id"];
                        isOneToOne: false;
                        referencedRelation: "places";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "store_places_store_id_fkey";
                        columns: ["store_id"];
                        isOneToOne: false;
                        referencedRelation: "stores";
                        referencedColumns: ["id"];
                    },
                ];
            };
            stores: {
                Row: {
                    id: number;
                    place_id: number | null;
                    store: string;
                };
                Insert: {
                    id?: number;
                    place_id?: number | null;
                    store: string;
                };
                Update: {
                    id?: number;
                    place_id?: number | null;
                    store?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "stores_place_id_fkey";
                        columns: ["place_id"];
                        isOneToOne: false;
                        referencedRelation: "places";
                        referencedColumns: ["id"];
                    },
                ];
            };
            variants: {
                Row: {
                    engine_id: number | null;
                    id: number;
                    model_id: number | null;
                    name: string;
                    transmission: Database["public"]["Enums"]["transmission_type"];
                };
                Insert: {
                    engine_id?: number | null;
                    id?: number;
                    model_id?: number | null;
                    name: string;
                    transmission: Database["public"]["Enums"]["transmission_type"];
                };
                Update: {
                    engine_id?: number | null;
                    id?: number;
                    model_id?: number | null;
                    name?: string;
                    transmission?: Database["public"]["Enums"]["transmission_type"];
                };
                Relationships: [
                    {
                        foreignKeyName: "variants_engine_id_fkey";
                        columns: ["engine_id"];
                        isOneToOne: false;
                        referencedRelation: "engines";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "variants_model_id_fkey";
                        columns: ["model_id"];
                        isOneToOne: false;
                        referencedRelation: "models";
                        referencedColumns: ["id"];
                    },
                ];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            transmission_type: "Automatic" | "Manual";
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
    PublicTableNameOrOptions extends
        | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
              Database[PublicTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
          Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
          Row: infer R;
      }
        ? R
        : never
    : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
          PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
          PublicSchema["Views"])[PublicTableNameOrOptions] extends {
          Row: infer R;
      }
        ? R
        : never
    : never;

export type TablesInsert<
    PublicTableNameOrOptions extends
        | keyof PublicSchema["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Insert: infer I;
      }
        ? I
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
          Insert: infer I;
      }
        ? I
        : never
    : never;

export type TablesUpdate<
    PublicTableNameOrOptions extends
        | keyof PublicSchema["Tables"]
        | { schema: keyof Database },
    TableName extends PublicTableNameOrOptions extends {
        schema: keyof Database;
    }
        ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
    ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Update: infer U;
      }
        ? U
        : never
    : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
          Update: infer U;
      }
        ? U
        : never
    : never;

export type Enums<
    PublicEnumNameOrOptions extends
        | keyof PublicSchema["Enums"]
        | { schema: keyof Database },
    EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
        ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
    ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
