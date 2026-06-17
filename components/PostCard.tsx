import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PostType } from '../types/post';

type Props = {
  post: PostType;
  onDelete: () => void;
  onEdit: () => void;
};

export function PostCard({ post, onDelete, onEdit }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>#{post.id}</Text>

      <Text style={styles.title}>{post.title}</Text>

      <Text style={styles.body}>{post.body}</Text>

      <Text style={styles.user}>User ID: {post.userId}</Text>
      <View style={styles.actions}>
        <Pressable
          onPress={onEdit}
          style={({ pressed }) => [
            styles.editButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.actionButtonText}>Zaktualizuj</Text>
        </Pressable>

        <Pressable
          onPress={onDelete}
          style={({ pressed }) => [
            styles.deleteButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.actionButtonText}>Usuń</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },

  id: {
    fontSize: 13,
    color: '#777',
    marginBottom: 6,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },

  user: {
    fontSize: 14,
    color: '#666',
  },

  body: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },

  editButton: {
    flex: 1,
    backgroundColor: '#117bb0',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  deleteButton: {
    flex: 1,
    backgroundColor: '#d32f2f',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  actionButtonText: {
    color: '#fff',
    fontWeight: '700',
  },

  buttonPressed: {
    opacity: 0.7,
  },
});
