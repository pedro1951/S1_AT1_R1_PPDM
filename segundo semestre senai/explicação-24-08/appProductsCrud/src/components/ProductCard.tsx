import {View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Product } from "../types/product"

interface ProductCardProps {
  item: Product;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

const formatPrice = (value: number) => {
    // Intl -> Objeto nativo do JS que serve para formatar dados de acordo com
    // o idioma e região.
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value || 0);
  };



export const ProductCard = ({
    item,
    onEdit,
    onDelete
}: ProductCardProps) => {
    return (
            <View style={styles.card}>
              <View style={styles.headerRow}>
                <View>
                  <Text style={styles.productName}>{item.nome}</Text>
                  <Text style={styles.categoryBadgeText}>{item.categoria}</Text>
                </View>
                <Text style={styles.priceText}>
                  {formatPrice(Number(item.preco))}
                </Text>
              </View>

              <Text style={styles.descriptionText}>
                {item.descricao || "Sem descrição cadastrada."}
              </Text>

              <View style={styles.footerRow}>
                <View style={styles.stockContainer}>
                  <View
                    style={[
                      styles.stockDot,
                      Number(item.quantidade_estoque ?? item.quantidade ?? 0) >
                        0
                        ? styles.stockDotActive
                        : styles.stockDotEmpty,
                    ]}
                  />
                  <Text style={styles.stockText}>
                    {" "}
                    Estoque:
                    <Text style={styles.stockValue}>
                      {" "}
                      {item.quantidade} un.
                    </Text>
                  </Text>
                </View>

                <View style={styles.actionsContainer}>
                  <TouchableOpacity
                    style={[styles.actionButton, styles.editButton]}
                    onPress={() => onEdit(item)}
                  >
                    <Text style={styles.editButtonText}>Editar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.actionButton, styles.deleteButton]}
                    onPress={() => onDelete(item)}
                  >
                    <Text style={styles.deleteButtonText}>Excluir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

    );

};

const styles = StyleSheet.create({
 card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#F0F2F5",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 15,
  },
  productName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 4,
  },
  categoryBadgeText: {
    color: "#2563EB",
    fontWeight: "600",
    textTransform: "uppercase",
    borderWidth: 1,
    borderColor: "#DBEAFE",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#059669",
  },
  descriptionText: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 14,
    lineHeight: 20,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },
  stockContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  stockDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  stockDotActive: {
    backgroundColor: "#10B981",
  },
  stockDotEmpty: {
    backgroundColor: "#EF4444",
  },
  stockText: {
    fontSize: 13,
    color: "#64748B",
  },
  stockValue: {
    fontWeight: "700",
    color: "#334155",
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  actionButton: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#F1F5F9",
  },
  editButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#334155",
  },
  deleteButton: {
    backgroundColor: "#FEE2E2",
  },
  deleteButtonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#DC2626",
  },
  listContent: {
    padding: 16,
    paddingBottom: 32,
  },

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
  },
  emptyActionButton: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#BFDBFE",
  },
  emptyActionButtonText: {
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 14,
  },
 
});
