import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Input from '../atoms/inputs/Input';
import {Colors} from '../../styles/Colors';

interface IAddPostInputProps {
  content: string;
  title: string;
  handleContentChange: (enteredContent: string) => void;
  handleTitleChange: (enteredContent: string) => void;
}

const AddPostInputContainer = ({
  content,
  title,
  handleContentChange,
  handleTitleChange,
}: IAddPostInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Input
        maxLength={50}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Title"
        value={title}
        onChangeText={handleTitleChange}
      />
      <TextInput
        style={styles.contentInput}
        maxLength={50}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Content"
        multiline={true}
        numberOfLines={5}
        value={content}
        onChangeText={handleContentChange}
      />
    </View>
  );
};

export default AddPostInputContainer;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  contentInput: {
    height: 150,
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    backgroundColor: Colors.secondary,
    color: Colors.primary,
    borderColor: Colors.secondary,
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 15,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
