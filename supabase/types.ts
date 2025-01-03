export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          category_id: number
          name: string
        }
        Insert: {
          category_id?: number
          name: string
        }
        Update: {
          category_id?: number
          name?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: []
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string | null
          current_period_end: string | null
          current_period_start: string | null
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string | null
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string | null
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["auth_user_id"]
          },
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      ingredient_index: {
        Row: {
          id: number
          ingredient: string
          ingredient_tsv: unknown | null
          recipe_ids: number[]
        }
        Insert: {
          id?: number
          ingredient: string
          ingredient_tsv?: unknown | null
          recipe_ids: number[]
        }
        Update: {
          id?: number
          ingredient?: string
          ingredient_tsv?: unknown | null
          recipe_ids?: number[]
        }
        Relationships: []
      }
      ingredients: {
        Row: {
          calories: number | null
          carbohydrates: number | null
          fat: number | null
          ingredient_id: number
          name: string
          protein: number | null
        }
        Insert: {
          calories?: number | null
          carbohydrates?: number | null
          fat?: number | null
          ingredient_id?: number
          name: string
          protein?: number | null
        }
        Update: {
          calories?: number | null
          carbohydrates?: number | null
          fat?: number | null
          ingredient_id?: number
          name?: string
          protein?: number | null
        }
        Relationships: []
      }
      nutrition_info: {
        Row: {
          calories: number | null
          carbohydrates: number | null
          fat: number | null
          fiber: number | null
          protein: number | null
          recipe_id: number
          sugar: number | null
        }
        Insert: {
          calories?: number | null
          carbohydrates?: number | null
          fat?: number | null
          fiber?: number | null
          protein?: number | null
          recipe_id: number
          sugar?: number | null
        }
        Update: {
          calories?: number | null
          carbohydrates?: number | null
          fat?: number | null
          fiber?: number | null
          protein?: number | null
          recipe_id?: number
          sugar?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "nutrition_info_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: true
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
     
      recipe_categories: {
        Row: {
          categories: string[] | null
          category_id: number | null
          id: number
          recipe_id: number
        }
        Insert: {
          categories?: string[] | null
          category_id?: number | null
          id?: never
          recipe_id: number
        }
        Update: {
          categories?: string[] | null
          category_id?: number | null
          id?: never
          recipe_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "recipe_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["category_id"]
          },
          {
            foreignKeyName: "recipe_categories_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_images: {
        Row: {
          created_at: string | null
          file_name: string
          file_path: string
          file_size: number
          image_id: number
          is_primary: boolean | null
          mime_type: string
          recipe_id: number | null
        }
        Insert: {
          created_at?: string | null
          file_name: string
          file_path: string
          file_size: number
          image_id?: number
          is_primary?: boolean | null
          mime_type: string
          recipe_id?: number | null
        }
        Update: {
          created_at?: string | null
          file_name?: string
          file_path?: string
          file_size?: number
          image_id?: number
          is_primary?: boolean | null
          mime_type?: string
          recipe_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_images_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_ingredients: {
        Row: {
          converted_quantity: number | null
          ingredient_id: number
          quantity: number | null
          recipe_id: number
          unit: string | null
        }
        Insert: {
          converted_quantity?: number | null
          ingredient_id: number
          quantity?: number | null
          recipe_id: number
          unit?: string | null
        }
        Update: {
          converted_quantity?: number | null
          ingredient_id?: number
          quantity?: number | null
          recipe_id?: number
          unit?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_ingredients_ingredient_id_fkey"
            columns: ["ingredient_id"]
            isOneToOne: false
            referencedRelation: "ingredients"
            referencedColumns: ["ingredient_id"]
          },
          {
            foreignKeyName: "recipe_ingredients_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_page_metadata: {
        Row: {
          changefreq: number | null
          created_at: string | null
          description: string | null
          keywords: string[] | null
          priority: number | null
          recipe_id: number
          slug: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          changefreq?: number | null
          created_at?: string | null
          description?: string | null
          keywords?: string[] | null
          priority?: number | null
          recipe_id: number
          slug?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          changefreq?: number | null
          created_at?: string | null
          description?: string | null
          keywords?: string[] | null
          priority?: number | null
          recipe_id?: number
          slug?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recipe_page_metadata_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: true
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipe_tags: {
        Row: {
          recipe_id: number
          tag_id: number
        }
        Insert: {
          recipe_id: number
          tag_id: number
        }
        Update: {
          recipe_id?: number
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "recipe_tags_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recipe_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["tag_id"]
          },
        ]
      }
      recipe_vectors: {
        Row: {
          embedding: string | null
          recipe_id: number
        }
        Insert: {
          embedding?: string | null
          recipe_id: number
        }
        Update: {
          embedding?: string | null
          recipe_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "recipe_vectors_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: true
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      recipes: {
        Row: {
          cook_time: number | null
          created_at: string | null
          description: string | null
          id: number
          instructions: string
          name: string
          prep_time: number | null
          servings: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          cook_time?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          instructions: string
          name: string
          prep_time?: number | null
          servings?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          cook_time?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          instructions?: string
          name?: string
          prep_time?: number | null
          servings?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      saved_recipes: {
        Row: {
          created_at: string | null
          id: number
          recipe_id: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          recipe_id: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          recipe_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_recipes_recipe_id_fkey"
            columns: ["recipe_id"]
            isOneToOne: false
            referencedRelation: "recipes"
            referencedColumns: ["id"]
          },
        ]
      }
      search_page_metadata: {
        Row: {
          changefreq: number | null
          description: string | null
          id: number
          ingredients: string[] | null
          keywords: string[] | null
          priority: number | null
          recipe_ids: number[] | null
          title: string
          url: string
        }
        Insert: {
          changefreq?: number | null
          description?: string | null
          id?: number
          ingredients?: string[] | null
          keywords?: string[] | null
          priority?: number | null
          recipe_ids?: number[] | null
          title: string
          url: string
        }
        Update: {
          changefreq?: number | null
          description?: string | null
          id?: number
          ingredients?: string[] | null
          keywords?: string[] | null
          priority?: number | null
          recipe_ids?: number[] | null
          title?: string
          url?: string
        }
        Relationships: []
      }
      
      tags: {
        Row: {
          name: string
          tag_id: number
        }
        Insert: {
          name: string
          tag_id?: number
        }
        Update: {
          name?: string
          tag_id?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          auth_user_id: string
          avatar_url: string | null
          billing_address: Json | null
          created_at: string | null
          email: string
          full_name: string | null
          id: string
          payment_method: Json | null
          updated_at: string | null
        }
        Insert: {
          auth_user_id: string
          avatar_url?: string | null
          billing_address?: Json | null
          created_at?: string | null
          email: string
          full_name?: string | null
          id: string
          payment_method?: Json | null
          updated_at?: string | null
        }
        Update: {
          auth_user_id?: string
          avatar_url?: string | null
          billing_address?: Json | null
          created_at?: string | null
          email?: string
          full_name?: string | null
          id?: string
          payment_method?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_dashboard_metrics: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_recipes: number
          total_users: number
          recipes_this_month: number
          active_users: number
        }[]
      }
      get_popular_ingredients: {
        Args: {
          limit_count?: number
        }
        Returns: {
          ingredient: string
          count: number
        }[]
      }
      get_user_activity: {
        Args: {
          days?: number
        }
        Returns: {
          activity_date: string
          new_users: number
        }[]
      }
      gtrgm_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_options: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      gtrgm_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      index_ingredient: {
        Args: {
          p_recipe_id: number
          p_ingredient: string
          p_quantity: number
          p_unit: string
          p_converted_quantity: number
          p_calories: number
          p_protein: number
          p_fat: number
          p_carbohydrates: number
        }
        Returns: undefined
      }
      is_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      search_recipes_by_ingredient: {
        Args: {
          p_ingredient: string
          similarity_threshold?: number
        }
        Returns: {
          id: number
          name: string
          description: string
          prep_time: number
          cook_time: number
          servings: number
          instructions: string
          created_at: string
          updated_at: string
          user_id: string
          nutrition_info: Json
          recipe_images: Json
          recipe_ingredients: Json
          avg_similarity: number
        }[]
      }
      set_limit: {
        Args: {
          "": number
        }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: {
          "": string
        }
        Returns: string[]
      }
    }
    Enums: {
      meal_type: "Breakfast" | "Lunch" | "Dinner" | "Snack" | "Dessert"
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
        | "paused"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

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
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
