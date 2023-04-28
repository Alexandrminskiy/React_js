// Кнопка и водд input button react useState
function App() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState();

  // function handleChane1(event){
  //   setValue1(event.target.value);
  // }

  // function handleChane2(event){
  //   setValue2(event.target.value);
  // }

  // function handleClick(event){
  //   setResult((+value1)+ (+value2))
  // }

  return <>
    <input value={value1} onChange={event => setValue1(event.target.value)} />
    <input value={value2} onChange={event => setValue2(event.target.value)} />
    <br />
    <button onClick={() => setResult((+value1) + (+value2))}>btn+</button>
    <button onClick={() => setResult((+value1) - (+value2))}>btn-</button>
    <p>result: {result}</p>

  </>

}

// Разница между датами в дня 
{
  function datediff(a, b) {
    return Math.round((a - b) / (1000 * 60 * 60 * 24));
  }
  function parseDate(str) {
    let mdy = str.split('-');
    // 2025-12-31
    return new Date(mdy[1], mdy[0] - 1, mdy[2]);
  }
  <button onClick={() => setResult(datediff(parseDate(value1), parseDate(value2)))}>btn-</button>
}

// Транслит на лету
function App() {
  function translit(word) {
    var answer = '';
    var converter = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
      'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
      'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
      'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
      'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
      'э': 'e', 'ю': 'yu', 'я': 'ya',

      'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D',
      'Е': 'E', 'Ё': 'E', 'Ж': 'Zh', 'З': 'Z', 'И': 'I',
      'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
      'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T',
      'У': 'U', 'Ф': 'F', 'Х': 'H', 'Ц': 'C', 'Ч': 'Ch',
      'Ш': 'Sh', 'Щ': 'Sch', 'Ь': '', 'Ы': 'Y', 'Ъ': '',
      'Э': 'E', 'Ю': 'Yu', 'Я': 'Ya'
    };

    for (var i = 0; i < word.length; ++i) {
      if (converter[word[i]] == undefined) {
        answer += word[i];
      } else {
        answer += converter[word[i]];
      }
    }

    return answer;
  }
  const [val, setVal] = useState('Введи сюда русские слова "колян"')

  return <>
    <textarea value={val} onChange={event => setVal(event.target.value)} />
    <p>{translit(val)}</p>
  </>
}

// чекбоксы обычная функция и стрелочная
{
  function App() {
    const [checked, setChecked] = useState();
    function handleChange() {
      setChecked(!checked);
      console.log(checked);
    }
    return <>
      <input type='checkbox' checked={checked} onChange={handleChange} />
    </>
  }

  function App() {
    const [checked, setChecked] = useState();

    return <>
      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
      <p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
    </>
  }
}

// Чекс бокс и вывод текста
function App() {
  const [checked, setChecked] = useState();
  const [result, setResult] = useState()

  return <>
    <button onClick={() => setResult(checked)}>btn</button>
    <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
    <p>состояние: {result ? 'Здравствуйте' : 'Досвидания'}</p>
  </>
}

// Чекбокс if else
function App() {
  const [checked, setChecked] = useState(true);

  let message;
  if (checked) {
    message = <h2>Ура, вам уже есть 18</h2>
  } else {
    message = <p>здесь расположен контент только для взрослых</p>
  }

  return <>
    <p>Тебе есть 18?</p>
    <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
    <div>{message}</div>

  </>
}

// select выпадающий список
function App() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value)
  }
  return <div>
    <select value={value} onChange={handleChange}>
      <option>Сыктывкар</option>
      <option>Ухта</option>
      <option>Печора</option>
      <option>Усинск</option>
    </select>
    <p>Ваш выбор: {value}</p>
  </div>;
}

// Выпадающий список из массива
function App() {
  const [value, setValue] = useState();
  const texts = ['text1', 'text2', 'text3', 'text4'];

  const option = texts.map((text, i) => {
    return <option key={i}>{text}</option>
  })
  return <>
    <select value={value} onChange={(event) => setValue(event.target.value)}>
      {option}
    </select>
    <p>Ваш выбор: {value}</p>
  </>
}

// select option value
function App() {
  const [val, setValue] = useState('')
  return <>
    <select value={val} onChange={(event) => setValue(event.target.value)}>
      <option value="1">text1</option>
      <option value="2">text2</option>
      <option value="3">text3</option>
    </select>
    <p>Ваш выбор: {val}</p>
  </>
}

// Пункты из массива + атрибуты value
function App() {
  const texts = ['text1', 'text2', 'text3', 'text4']
  const [value, setValue] = useState('')

  const option = texts.map((text, index) => {
    return <option key={index} value={index}>{text}</option>
  })

  return <>
    <select value={value} onChange={event => setValue(event.target.value)}>{option}</select>
    <p>ваш выбор {texts[value]}</p>
  </>
}

// Радио кнопки
function App() {
  const [value, setValue] = useState('Выбирите Ваш любимый язык')

  function changeHandler(event) {
    setValue(event.target.value)
  }
  return <>
    <input
      type="radio"
      name='radio'
      value='Python'
      cheked={value === '1' ? true : false}
      onChange={changeHandler}
    /> <span>Python</span><br />
    <input
      type="radio"
      name='radio'
      value='JS'
      cheked={value === '2' ? true : false}
      onChange={changeHandler}
    /> <span>JS</span><br />
    <input
      type="radio"
      name='radio'
      value='Ruby'
      cheked={value === '3' ? true : false}
      onChange={changeHandler}
    /> <span>Ruby</span>

    <p>{value}</p>
  </>
}

// Добавления нового обекта в массив 
function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5])
  const [value, setValue] = useState('')

  const result = notes.map((note, index) => {
    return <p key={index}>{note}</p>
  })

  function addItem() {
    setNotes([...notes, value])
  }

  function changeInput(event) {
    setValue(event.target.value)
  }


  return <>
    <input value={value} onChange={changeInput} />
    <button onClick={addItem}>add</button>
    {result}
  </>

}
function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5])
  const [value, setValue] = useState('')

  const result = notes.map((note, index) => {
    return <p key={index}>{note}</p>
  })

  return <>
    <input value={value} onChange={e => setValue(e.target.value)} />
    <button onClick={() => setNotes([...notes, value])}>add</button>
    {result}
  </>

}

// Удаление из массива по кнопке
function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5])

  const result = notes.map((note, i) => {
    return <li key={i}>{note}
      &#160;&#160;
      <button onClick={() => setNotes([...notes.slice(0, i),
      ...notes.slice(i + 1)])}>del</button>
    </li>
  })

  return <>
    <ul>
      {result}
    </ul>

  </>
}

// Привязка инпутов к массиву function App() {
function App() {
  const [notes, setNotes] = useState([1, 2, 3])

  function getSum(arr) {
    let sum = 0

    for (const e of arr) {
      sum += e
    }

    return sum
  }

  function changeHandler(i, event) {
    setNotes([...notes.slice(0, i), event.target.value, ...notes.slice(i + 1)])
  }

  return <>
    <input val={notes[0]} onChange={event => changeHandler(0, event)} />
    <input val={notes[1]} onChange={event => changeHandler(1, event)} />
    <input val={notes[2]} onChange={event => changeHandler(2, event)} />

    {getSum(notes)}
  </>

}

// Редактирование массива
function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5])
  const [editNum, setEditNum] = useState(null)

  const result = notes.map((note, i) => {
     return <p key={i} onClick={() => setEditNum(i)}>{note}</p>
  })

  function changeItem(event) {
     setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
  }

  return <>
     {result}
     <input value={editNum ? notes[editNum] : ''} onChange={changeItem} />
  </>

}

// Универсальная форма для изменения массива в React
// 1
function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null)
	const [value, setValue] = useState('')

	const result = notes.map((note, i) => {
		return <p key={i} onClick={() => setEditNum(i)}>{note}</p>
	})

	function changeItem(event) {
		setNotes([...notes.slice(0, editNum),
		event.target.value, ...notes.slice(editNum + 1)])
	}
	function stopEdit(event) {
		setEditNum(null)
	}
	function changeValue(event) {
		setValue(event.target.value)
	}
function addItem(event){
	setNotes([...notes,value])
}
let input;
if (editNum){
	input=<input
	value={notes[editNum]}
	onChange={changeItem}
	onBlur={stopEdit}
	/>
}
else {
	input = <input
	value={value}
	onChange={changeValue}
	onBlur={addItem}
	/>
}
return <div>
	{result}
	{input}
</div>
}
// 2
function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null);

	const result = notes.map((note, index) => {
		return <p key={index} onClick={() => startEdit(index)}>{note}</p>;
	});

	function startEdit(index) {
		setEditNum(index);
	}
	function editItem(event) {
		setNotes([...notes.slice(0, editNum),
		event.target.value, ...notes.slice(editNum + 1)]);
	}
	function createItem() {
		if (!editNum) {
			const res = [...notes, ''];
			setNotes(res);
			setEditNum(res.length - 1);
		}
	}
	function stopEdit() {
		setEditNum(null);
	}

	return <div>
		{result}

		<input
			value={editNum ? notes[editNum] : ''}
			onChange={editItem}
			onFocus={createItem}
			onBlur={stopEdit}
		/>
	</div>;
}
// Реактивность объектов в React
function App() {
	const [obj, setObj] = useState({
		prop1: 'value1',
		prop4: 'value4',
	})
	function pro4() {
		const copy = Object.assign({}, obj);
		copy.prop4 = '!!!@';
		setObj(copy);
	}

	return <div>
		<button onClick={() => setObj({ ...obj, ...{ prop1: '!' } })}>btn1</button><span>{obj.prop1}</span><br />
		<button onClick={pro4}>btn4</button><span>{obj.prop4}</span><br />
	</div>
}
// Привязка инпутов к объекту в React
const initDate = {
	year: 2025,
	month: 12,
	day: 31,
}
function App() {
	const [obj, setObj] = useState(initDate)

	function handleChange(prop, event) {
		setObj({ ...obj, ...{ [prop]: event.target.value } })
	}

	return <div>
		<input value={obj.year} onChange={event => handleChange('year', event)} />
		<input value={obj.month} onChange={event => handleChange('month', event)} />
		<input value={obj.day} onChange={event => handleChange('day', event)} />
		<br />
		{obj.year}-{obj.month}-{obj.day}
	</div>
}

// Форма для добавления в массив объектов в React

// Реактивность массива объектов в React
const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];
const newElem = {
	id: 'GMNCZnFT4rbBP6cirA0Ha',
	prop1: 'value41',
	prop2: 'value42',
	prop3: 'value43',
};
const data = {
	id: 'IWSpfBPSV3SXgRF87uO74',
	prop1: 'value21 !',
	prop2: 'value22 !',
	prop3: 'value23 !',
};
const id = 'JAmjRlfQT8rLTm5tG2m1L';
const prop = 'prop2';
function App() {
	const [notes, setNotes] = useState(initNotes);
	const id = 'IWSpfBPSV3SXgRF87uO74';
	const result = notes.map(note => {
		return <p key={note.id}>
			<span>{note.prop1}</span>
			<span>{note.prop2}</span>
			<span>{note.prop3}</span>
		</p>
	})

	// setNotes(notes.filter(note => note.id !== id));

	return <div>

		{result}
		<button onClick={() => setNotes(notes.filter(note => note.id !== id))}>del</button> {/* Удаление */}
		<button onClick={() => setNotes([...notes, newElem])}>add</button> {/* Добавление */}
		<button onClick={() => setNotes(notes.map(note => note.id === data.id ? data : note))}>edit</button> {/* Изменение */}
	</div >
}