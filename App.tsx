import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { PostCard } from './components/PostCard';
import { CustomInput } from './components/CustomInput';
import { LoadingView } from './components/LoadingView';
import { ErrorView } from './components/ErrorView';
import { ResponseBox } from './components/ResponseBox';

import { PostType } from './types/post';

export default function App() {
  const [allPosts, setAllPosts] = useState<PostType[]>([]);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [serverResponse, setServerResponse] = useState('');
  const [singlePostId, setSinglePostId] = useState('');
  const [filterUserId, setFilterUserId] = useState('');

  const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (!filterUserId) {
      return true;
    }

    return post.userId === Number(filterUserId);
  });

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Błąd pobierania danych');
      }

      const data = await response.json();

      setAllPosts(data);
      setPosts(data);
    } catch (err) {
      setError('Nie udało się połączyć z serwerem.');
    } finally {
      setLoading(false);
    }
  };

  const getPost = async (postId: number | string) => {
    if (!postId) {
      setError('Podaj ID posta.');

      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await fetch(apiUrl + `/${postId}`);

      if (!response.ok) {
        throw new Error('Błąd pobierania posta');
      }

      await response.json();

      const filtered = allPosts.filter((post) => post.id === Number(postId));

      setPosts(filtered);
    } catch (err) {
      setError(`Nie udało się pobrać posta ${postId}.`);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async () => {
    if (!title.trim() || !body.trim() || !userId.trim()) {
      setError('Wszystkie pola są wymagane.');

      return;
    }

    try {
      setError('');
      setServerResponse('');

      const response = await fetch(apiUrl, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          title,
          body,
          userId: Number(userId),
        }),
      });

      if (!response.ok) {
        throw new Error('Błąd wysyłania danych');
      }

      const data = await response.json();

      setServerResponse(JSON.stringify(data, null, 2));

      setTitle('');
      setBody('');
      setUserId('');
    } catch (err) {
      setError('Nie udało się wysłać danych.');
    }
  };

  const deletePost = async (id: number) => {
    try {
      setError('');

      const response = await fetch(apiUrl + `/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Błąd usuwania posta');
      }

      const updatedPosts = allPosts.filter((post) => post.id !== id);

      setAllPosts(updatedPosts);
      setPosts(updatedPosts);

      setServerResponse(`Usunięto post ${id}`);
    } catch (err) {
      setError('Nie udało się usunąć posta.');
    }
  };

  const updatePost = async (id: number) => {
    try {
      setError('');

      const response = await fetch(apiUrl + `/${id}`, {
        method: 'PATCH',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          title: 'Zaktualizowany post',
        }),
      });

      if (!response.ok) {
        throw new Error('Błąd aktualizacji');
      }

      const data = await response.json();

      setServerResponse(JSON.stringify(data, null, 2));
    } catch (err) {
      setError('Nie udało się zaktualizować posta.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.content}>
            <>
              <Text style={styles.header}>55438 Lab3</Text>
              <View style={styles.form}>
                <Text style={styles.formTitle}>Filtruj po userId</Text>

                <CustomInput
                  value={filterUserId}
                  onChangeText={(text) => {
                    const numericValue = text.replace(/[^0-9]/g, '');

                    setFilterUserId(numericValue);
                  }}
                  placeholder="User ID"
                />
              </View>
              <View style={styles.form}>
                <Text style={styles.formTitle}>Pobierz pojedynczy post</Text>

                <CustomInput
                  value={singlePostId}
                  onChangeText={(text) => {
                    const numericValue = text.replace(/[^0-9]/g, '');

                    setSinglePostId(numericValue);
                  }}
                  placeholder="Post ID"
                />

                <View style={styles.actions}>
                  <Pressable
                    onPress={() => getPost(singlePostId)}
                    style={styles.button}
                  >
                    <Text style={styles.buttonText}>Pobierz post</Text>
                  </Pressable>

                  <Pressable
                    onPress={() => {
                      setSinglePostId('');
                      setPosts(allPosts);
                    }}
                    style={styles.resetButton}
                  >
                    <Text style={styles.buttonText}>Resetuj</Text>
                  </Pressable>
                </View>
              </View>

              <View style={styles.form}>
                <Text style={styles.formTitle}>Dodaj nowy post</Text>

                <CustomInput
                  value={title}
                  onChangeText={setTitle}
                  placeholder="Tytuł"
                />

                <CustomInput
                  value={body}
                  onChangeText={setBody}
                  placeholder="Treść"
                  multiline
                />

                <CustomInput
                  value={userId}
                  onChangeText={(text) => {
                    const numericValue = text.replace(/[^0-9]/g, '');

                    setUserId(numericValue);
                  }}
                  placeholder="ID użytkownika"
                />
                <Pressable onPress={createPost} style={styles.button}>
                  <Text style={styles.buttonText}>Wyślij</Text>
                </Pressable>
              </View>

              {error ? <ErrorView message={error} /> : null}

              {serverResponse ? (
                <ResponseBox response={serverResponse} />
              ) : null}

              {loading ? <LoadingView /> : null}
            </>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.content}>
            <PostCard
              post={item}
              onDelete={() => deletePost(item.id)}
              onEdit={() => updatePost(item.id)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  content: {
    width: '100%',
    maxWidth: 900,
    alignSelf: 'center',
  },

  listContent: {
    padding: 16,
    paddingBottom: 40,
  },

  header: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },

  form: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
  },

  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 14,
  },

  actions: {
    flexDirection: 'row',
    gap: 10,
  },

  button: {
    flex: 1,
    backgroundColor: '#117bb0',
    paddingVertical: 14,
    borderRadius: 12,
  },

  resetButton: {
    flex: 1,
    backgroundColor: '#666',
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
  },
});
