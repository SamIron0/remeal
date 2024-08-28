
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
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
      ingredient_index: {
        Row: {
          id: number
          ingredient: string
          ingredient_tokens: unknown | null
          ingredient_tsv: unknown | null
          recipe_ids: number[]
        }
        Insert: {
          id?: number
          ingredient: string
          ingredient_tokens?: unknown | null
          ingredient_tsv?: unknown | null
          recipe_ids: number[]
        }
        Update: {
          id?: number
          ingredient?: string
          ingredient_tokens?: unknown | null
          ingredient_tsv?: unknown | null
          recipe_ids?: number[]
        }
        Relationships: []
      }
      ingredients: {
        Row: {
          ingredient_id: number
          name: string
        }
        Insert: {
          ingredient_id?: number
          name: string
        }
        Update: {
          ingredient_id?: number
          name?: string
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
          category_id: number
          recipe_id: number
        }
        Insert: {
          category_id: number
          recipe_id: number
        }
        Update: {
          category_id?: number
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
          ingredient_id: number
          quantity: number | null
          recipe_id: number
          unit: string | null
        }
        Insert: {
          ingredient_id: number
          quantity?: number | null
          recipe_id: number
          unit?: string | null
        }
        Update: {
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
        Relationships: [
          {
            foreignKeyName: "recipes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          role: string | null
          updated_at: string | null
        }
        Insert: {
          auth_user_id: string
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          auth_user_id?: string
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_auth_user_id_fkey"
            columns: ["auth_user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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
          p_ingredient: string
          p_recipe_id: number
        }
        Returns: undefined
      }
      remove_ingredient_from_index: {
        Args: {
          p_ingredient: string
          p_recipe_id: number
        }
        Returns: undefined
      }
      search_ingredients: {
        Args: {
          search_term: string
        }
        Returns: {
          ingredient: string
          recipe_ids: number[]
        }[]
      }
      search_recipes_by_ingredients: {
        Args: {
          p_ingredients: string[]
        }
        Returns: {
          id: number
          name: string
          description: string
          ingredients: string[]
          match_count: number
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